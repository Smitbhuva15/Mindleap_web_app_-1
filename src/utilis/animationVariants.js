export const fadeIn = (direction, delay) => {
    return {
      hidden: {
        // Corrected the direction logic to handle 'up', 'down', 'left', 'right'
        y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
        x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0, // Fixed 'right' typo
        opacity: 0,
      },
      show: {
        y: 0,
        x: 0,
        opacity: 1,
        transition: {
          type: 'tween',
          duration: 1.2,
          delay: delay,
          ease: [0.25, 0.25, 0.25, 0.75], // Corrected 'else' to 'ease'
        },
      },
    };
  };