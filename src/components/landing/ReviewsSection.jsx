"use client";

import { useEffect, useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  MessageSquareQuote,
  Plus,
  Send,
  Star,
  X,
} from "lucide-react";

const API_URL =
  process.env.NEXT_PUBLIC_RESENAS_API_URL ||
  "https://api-resenas.agendaclinicas.cl";

const INITIAL_FORM = {
  nombre_autor: "",
  nombre_consulta: "",
  titulo: "",
  comentario: "",
  calificacion: "5",
};

function RatingStars({ rating }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} de 5 estrellas`}>
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          key={index}
          className={`h-4 w-4 ${
            index < rating
              ? "fill-amber-400 text-amber-400"
              : "fill-slate-100 text-slate-200"
          }`}
          strokeWidth={1.8}
        />
      ))}
    </div>
  );
}

function ReviewCard({ review }) {
  const rating = Math.min(5, Math.max(0, Number(review.calificacion) || 0));
  const displayName = review.nombre_autor || review.nombre_consulta || "Usuario de AgendaClínica";
  const displayDescription =
    review.nombre_autor && review.nombre_consulta
      ? review.nombre_consulta
      : "Experiencia con la plataforma";
  const initials = displayName
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  return (
    <article
      className="flex h-full min-h-[290px] flex-col rounded-3xl border border-white/10 bg-[#0b1220]/90 p-6 shadow-2xl shadow-cyan-950/20 backdrop-blur transition-all hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-cyan-950/30"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/10 text-sm font-bold text-cyan-200">
            {initials || "AC"}
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">
              {displayName}
            </h3>
            <p className="mt-0.5 text-xs text-slate-400">{displayDescription}</p>
          </div>
        </div>
        <RatingStars rating={rating} />
      </div>

      <MessageSquareQuote className="mt-7 h-7 w-7 text-cyan-300/70" strokeWidth={1.6} />
      <blockquote className="mt-3 flex-1 text-[15px] leading-relaxed text-slate-300">
        “{review.comentario}”
      </blockquote>

      <div className="mt-6 border-t border-white/10 pt-4">
        <p className="text-sm font-semibold text-cyan-100">{review.titulo}</p>
      </div>
    </article>
  );
}

export default function ReviewsSection() {
  const [reviews, setReviews] = useState([]);
  const [summary, setSummary] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [form, setForm] = useState(INITIAL_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [reloadKey, setReloadKey] = useState(0);
  const carouselRef = useRef(null);

  function scrollCarousel(direction) {
    carouselRef.current?.scrollBy({ left: direction * 390, behavior: "smooth" });
  }

  useEffect(() => {
    const controller = new AbortController();

    async function loadReviews() {
      setIsLoading(true);

      try {
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: "{}",
          signal: controller.signal,
        };

        const [reviewsResponse, summaryResponse] = await Promise.all([
          fetch(`${API_URL}/resena/listar`, requestOptions),
          fetch(`${API_URL}/resena/puntuacionGeneral`, requestOptions),
        ]);

        if (!reviewsResponse.ok || !summaryResponse.ok) {
          throw new Error("No fue posible cargar las reseñas.");
        }

        const [reviewsData, summaryData] = await Promise.all([
          reviewsResponse.json(),
          summaryResponse.json(),
        ]);

        setReviews(Array.isArray(reviewsData.resenas) ? reviewsData.resenas.slice(0, 6) : []);
        setSummary(summaryData);
      } catch (error) {
        if (error.name !== "AbortError") {
          setReviews([]);
          setSummary(null);
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    }

    loadReviews();

    return () => controller.abort();
  }, [reloadKey]);

  function updateForm(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function submitReview(event) {
    event.preventDefault();
    if (!form.nombre_autor.trim() && !form.nombre_consulta.trim()) {
      setFeedback({ type: "error", message: "Indica tu nombre o el nombre de tu consulta." });
      return;
    }

    setIsSubmitting(true);
    setFeedback(null);

    try {
      const response = await fetch(`${API_URL}/resena/crear`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre_autor: form.nombre_autor.trim() || null,
          nombre_consulta: form.nombre_consulta.trim() || null,
          titulo: form.titulo.trim(),
          comentario: form.comentario.trim(),
          calificacion: Number(form.calificacion),
        }),
      });
      const data = await response.json();

      if (!response.ok || !data.ok) {
        throw new Error(data.mensaje || "No fue posible enviar tu reseña.");
      }

      setForm(INITIAL_FORM);
      setFeedback({ type: "success", message: "¡Gracias! Tu reseña fue enviada correctamente." });
      setReloadKey((current) => current + 1);
    } catch (error) {
      setFeedback({
        type: "error",
        message: error.message || "No fue posible enviar tu reseña. Inténtalo nuevamente.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  if (!isLoading && reviews.length === 0) {
    return null;
  }

  return (
    <section id="resenas" className="relative overflow-hidden bg-[white] py-24 text-white sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(14,165,233,0.16),transparent_32%),radial-gradient(circle_at_85%_80%,rgba(37,99,235,0.18),transparent_35%)]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-2xl text-center">
          <h2 className="mt-5 text-4xl font-bold tracking-tight text-black sm:text-3xl">
            Profesionales que ya ordenaron su agenda
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-500 sm:text-3lg">
            Conoce la experiencia de quienes usan AgendaClínica para gestionar su operación diaria
          </p>

          {summary?.totalResenas > 0 && (
            <div className="mt-6 inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 shadow-sm backdrop-blur">
              <RatingStars rating={Math.round(Number(summary.promedio) || 0)} />
              <span className="text-sm font-semibold text-slate-400">
                {summary.promedio} de 5 · {summary.totalResenas} reseña{summary.totalResenas === 1 ? "" : "s"}
              </span>
            </div>
          )}

          <div className="mt-7">
            <button
              type="button"
              onClick={() => {
                setFeedback(null);
                setIsFormOpen(true);
              }}
              className="inline-flex items-center gap-2 rounded-xl border border-cyan-300/30 bg-black px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-950/20 transition hover:border-cyan-200/70 hover:bg-black focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-slate-350"
            >
              <Plus className="h-4 w-4" strokeWidth={2.4} />
              Añadir reseña
            </button>
          </div>
        </div>

        <div className="relative mt-12">
          {!isLoading && reviews.length > 1 && (
            <div className="mb-5 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => scrollCarousel(-1)}
                className="rounded-full border border-white/15 bg-white/5 p-2.5 text-slate-300 transition hover:border-cyan-300/60 hover:text-cyan-200"
                aria-label="Reseña anterior"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => scrollCarousel(1)}
                className="rounded-full border border-white/15 bg-white/5 p-2.5 text-slate-300 transition hover:border-cyan-300/60 hover:text-cyan-200"
                aria-label="Siguiente reseña"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          )}

          <div
            ref={carouselRef}
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
          {isLoading
            ? Array.from({ length: 3 }, (_, index) => (
                <div
                  key={index}
                  className="h-72 min-w-full animate-pulse snap-start rounded-3xl border border-white/10 bg-white sm:min-w-[calc(50%-0.625rem)] lg:min-w-[calc(33.333%-0.833rem)]"
                />
              ))
            : reviews.map((review) => (
                <div key={review.id} className="min-w-full snap-start sm:min-w-[calc(50%-0.625rem)] lg:min-w-[calc(33.333%-0.833rem)]">
                  <ReviewCard review={review} />
                </div>
              ))}
          </div>
        </div>
      </div>

      {isFormOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-slate-950/75 p-4 pt-24 backdrop-blur-md sm:items-center sm:pt-8"
          onClick={() => setIsFormOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="review-form-title"
            className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl sm:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-700">
                  Comparte tu experiencia
                </p>
                <h3 id="review-form-title" className="mt-2 text-2xl font-bold tracking-tight text-slate-950">
                  Añade tu reseña
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsFormOpen(false)}
                className="rounded-full p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-700"
                aria-label="Cerrar formulario"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form className="mt-7 space-y-4" onSubmit={submitReview}>
              <label className="block">
                <span className="text-sm font-semibold text-slate-800">Nombre del profesional</span>
                <input
                  name="nombre_autor"
                  type="text"
                  maxLength="120"
                  value={form.nombre_autor}
                  onChange={updateForm}
                  className="mt-1.5 w-full rounded-xl border border-slate-200 px-3.5 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  placeholder="Ej.: Dra. Ana Pérez"
                />
              </label>

              <label className="block">
                <span className="text-sm font-semibold text-slate-800">Nombre de la consulta <span className="font-normal text-slate-500">(opcional)</span></span>
                <input
                  name="nombre_consulta"
                  type="text"
                  maxLength="150"
                  value={form.nombre_consulta}
                  onChange={updateForm}
                  className="mt-1.5 w-full rounded-xl border border-slate-200 px-3.5 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  placeholder="Ej.: Consulta Salud Integral"
                />
              </label>

              <label className="block">
                <span className="text-sm font-semibold text-slate-800">Título</span>
                <input
                  name="titulo"
                  type="text"
                  required
                  maxLength="120"
                  value={form.titulo}
                  onChange={updateForm}
                  className="mt-1.5 w-full rounded-xl border border-slate-200 px-3.5 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  placeholder="Resume tu experiencia"
                />
              </label>

              <label className="block">
                <span className="text-sm font-semibold text-slate-800">Calificación</span>
                <div className="mt-2 flex items-center gap-1" role="radiogroup" aria-label="Selecciona una calificación">
                  {Array.from({ length: 5 }, (_, index) => {
                    const value = index + 1;
                    const selected = value <= Number(form.calificacion);

                    return (
                      <button
                        key={value}
                        type="button"
                        role="radio"
                        aria-checked={value === Number(form.calificacion)}
                        aria-label={`${value} estrella${value === 1 ? "" : "s"}`}
                        onClick={() => setForm((current) => ({ ...current, calificacion: String(value) }))}
                        className="rounded-md p-1 transition hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-600"
                      >
                        <Star
                          className={`h-8 w-8 ${
                            selected
                              ? "fill-amber-400 text-amber-400"
                              : "fill-slate-100 text-slate-300"
                          }`}
                          strokeWidth={1.8}
                        />
                      </button>
                    );
                  })}
                  <span className="ml-2 text-sm font-medium text-slate-500">
                    {form.calificacion} / 5
                  </span>
                </div>
              </label>

              <label className="block">
                <span className="text-sm font-semibold text-slate-800">Comentario</span>
                <textarea
                  name="comentario"
                  required
                  rows="5"
                  maxLength="1000"
                  value={form.comentario}
                  onChange={updateForm}
                  className="mt-1.5 w-full resize-y rounded-xl border border-slate-200 px-3.5 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  placeholder="Cuéntanos cómo AgendaClínica te ha ayudado en tu día a día."
                />
              </label>

              {feedback && (
                <p
                  className={`rounded-xl px-3.5 py-3 text-sm ${
                    feedback.type === "success"
                      ? "bg-emerald-50 text-emerald-800"
                      : "bg-red-50 text-red-700"
                  }`}
                  role="status"
                >
                  {feedback.message}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-700 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-950/15 transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <Send className="h-4 w-4" strokeWidth={2.2} />
                {isSubmitting ? "Enviando reseña..." : "Publicar reseña"}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
