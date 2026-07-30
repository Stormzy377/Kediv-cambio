import { useState, useEffect, useRef } from 'react';

function useOnScreen() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // só precisamos de saber uma vez
        }
      },
      { threshold: 0.3 } // dispara quando 30% do elemento estiver visível
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
}

export default useOnScreen;


