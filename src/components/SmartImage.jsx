import { FALLBACK_IMG } from "../data/site";

// Lazy-loaded image with a branded fallback if the remote image fails.
export default function SmartImage({ src, alt, className = "", ...rest }) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={`bg-maroon-deep ${className}`}
      onError={(e) => {
        if (e.currentTarget.src !== FALLBACK_IMG) e.currentTarget.src = FALLBACK_IMG;
      }}
      {...rest}
    />
  );
}
