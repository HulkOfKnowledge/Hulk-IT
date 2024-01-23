import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

const LottieAnimation = ({ animationData, loop = true,style={} }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: containerRef.current,
      renderer: 'svg',
      loop,
      autoplay: true,
      animationData,
    });

    return () => anim.destroy(); // Cleanup animation on unmount
  }, [animationData, loop]);

  return <div ref={containerRef} style={{...style}}></div>;
};

export default LottieAnimation;
