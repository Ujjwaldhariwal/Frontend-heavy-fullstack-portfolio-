// src/components/SmoothScroll.tsx
import { ReactLenis } from '@studio-freight/react-lenis';

function SmoothScroll({ children }: { children: React.ReactNode }) {
  // options for that "smooth slow" feel
  const lenisOptions = {
    lerp: 0.07,         // Lower = smoother/slower (default 0.1)
    duration: 1.5,      // Higher = longer slide
    smoothWheel: true,
    smoothTouch: false, // Keep false to preserve native feel on mobile (better performance)
  };

  return (
    <ReactLenis root options={lenisOptions}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScroll;