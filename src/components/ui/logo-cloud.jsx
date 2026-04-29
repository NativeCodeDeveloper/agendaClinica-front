import { InfiniteSlider } from '@/components/ui/infinite-slider';
import { cn } from '@/lib/utils';

export function LogoCloud({ className, logos, ...props }) {
  return (
    <div
      {...props}
      className={cn(
        'overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black,transparent)]',
        className
      )}
    >
      <InfiniteSlider gap={48} speed={60} speedOnHover={20}>
        {logos.map((logo) => (
          <img
            alt={logo.alt}
            className="pointer-events-none h-12 select-none object-contain opacity-90 hover:opacity-100 transition-opacity duration-300 md:h-16"
            height={logo.height || 'auto'}
            key={`logo-${logo.alt}`}
            loading="lazy"
            src={logo.src}
            width={logo.width || 'auto'}
          />
        ))}
      </InfiniteSlider>
    </div>
  );
}
