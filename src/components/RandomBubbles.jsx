import { useMemo } from 'react';

function RandomBubbles({ count = 15 }) {
  const bubbles = useMemo(() => {
    return Array.from({ length: count }, (_, i) => {
      const size = Math.random() * 100 + 20;
      return {
        id: i,
        size,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        duration: `${Math.random() * 8 + 6}s`,
        delay: `${Math.random() * 5}s`,
        opacity: Math.random() * 0.12 + 0.04,
      };
    });
  }, [count]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {bubbles.map((b) => (
        <div
          key={b.id}
          className="absolute rounded-full bg-white blur-xl"
          style={{
            width: b.size,
            height: b.size,
            left: b.left,
            top: b.top,
            opacity: b.opacity,
            animation: `float ${b.duration} ease-in-out ${b.delay} infinite`,
          }}
        />
      ))}
    </div>
  );
}

export default RandomBubbles;
