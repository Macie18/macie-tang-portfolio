import React, { useEffect, useRef } from 'react';

export default function PointerGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    const finePointer = window.matchMedia('(pointer: fine)');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!glow || !finePointer.matches || reducedMotion.matches) return;

    const onMove = (event: PointerEvent) => {
      glow.style.transform = `translate3d(${event.clientX - 310}px, ${event.clientY - 310}px, 0)`;
      glow.style.opacity = '0.92';
      glow.dataset.visible = 'true';
    };

    const onLeave = () => {
      glow.style.opacity = '0';
      glow.dataset.visible = 'false';
    };

    const onDown = () => {
      glow.dataset.pressed = 'true';
    };

    const onUp = () => {
      glow.dataset.pressed = 'false';
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('mouseleave', onLeave);
    window.addEventListener('pointerdown', onDown, { passive: true });
    window.addEventListener('pointerup', onUp, { passive: true });

    return () => {
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      window.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointerup', onUp);
    };
  }, []);

  return <div ref={glowRef} className="pointer-glow" aria-hidden="true" />;
}
