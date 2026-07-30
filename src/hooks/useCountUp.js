import { useState, useEffect } from "react";

function useCountUp(target, shouldStart, duration = 1500) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    let startTime = null;

    function animate(timestamp) {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      setValue(progress * target);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }, [shouldStart, target, duration]);

  return value;
}

export default useCountUp;
