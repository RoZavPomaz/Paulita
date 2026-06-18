import { useEffect, useRef, useState } from "react";

export const ScrollReveal = ({
  children,
  animation = "fade-up", // fade-up, fade-down, fade-left, fade-right, scale-in, fade-in
  duration = 800, // duration in ms
  delay = 0, // delay in ms
  threshold = 0.05, // trigger when 5% of the element is visible (great for mobile)
  once = true, // animate only once
  className = "",
}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        // Trigger slightly before it enters the viewport on mobile for smoother feel
        rootMargin: "0px 0px -20px 0px",
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [once, threshold]);

  const getAnimationStyles = () => {
    switch (animation) {
      case "fade-up":
        return {
          base: "opacity-0 translate-y-6",
          active: "opacity-100 translate-y-0",
        };
      case "fade-down":
        return {
          base: "opacity-0 -translate-y-6",
          active: "opacity-100 translate-y-0",
        };
      case "fade-left":
        return {
          base: "opacity-0 translate-x-6",
          active: "opacity-100 translate-x-0",
        };
      case "fade-right":
        return {
          base: "opacity-0 -translate-x-6",
          active: "opacity-100 translate-x-0",
        };
      case "scale-in":
        return {
          base: "opacity-0 scale-95",
          active: "opacity-100 scale-100",
        };
      case "fade-in":
      default:
        return {
          base: "opacity-0",
          active: "opacity-100",
        };
    }
  };

  const { base, active } = getAnimationStyles();

  const style = {
    transitionDuration: `${duration}ms`,
    transitionDelay: `${delay}ms`,
  };

  return (
    <div
      ref={ref}
      className={`transition-all ease-out ${isVisible ? active : base} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
