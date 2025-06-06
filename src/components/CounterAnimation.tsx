
import { useState, useEffect, useRef } from 'react';

interface CounterAnimationProps {
  target: number;
  duration?: number;
  className?: string;
}

const CounterAnimation = ({ target, duration = 2000, className = '' }: CounterAnimationProps) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const increment = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [hasStarted, target, duration]);

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(num >= 100000 ? 0 : 1) + 'K';
    }
    return num.toString();
  };

  return (
    <div ref={elementRef} className={className}>
      {formatNumber(count)}
      {target >= 1000 && count === target && '+'}
    </div>
  );
};

export default CounterAnimation;
