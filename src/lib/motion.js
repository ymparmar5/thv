export const easings = {
  smoothOut: [0.16, 1, 0.3, 1],
  softSpring: { type: 'spring', stiffness: 400, damping: 30 },
  snappySpring: { type: 'spring', stiffness: 500, damping: 25 },
}

export const durations = {
  micro: 0.15,
  transition: 0.3,
  reveal: 0.5,
}

export const motionVariants = {
  // Page level fade + subtle shift
  page: {
    initial: { opacity: 0, y: 12 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: durations.transition, ease: easings.smoothOut }
    },
    exit: { 
      opacity: 0, 
      y: -4,
      transition: { duration: durations.micro, ease: easings.smoothOut }
    }
  },
  
  // Standard element reveal from bottom
  fadeInUp: {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: durations.reveal, ease: easings.smoothOut }
    }
  },

  // Slight scale up for cards/images
  scaleIn: {
    hidden: { opacity: 0, scale: 0.96 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: durations.reveal, ease: easings.smoothOut }
    }
  },

  // Container to stagger children
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  },

  // Hover states for interactive elements
  interactive: {
    rest: { scale: 1 },
    hover: { 
      scale: 1.02,
      transition: easings.softSpring
    },
    tap: { 
      scale: 0.98,
      transition: easings.softSpring
    }
  }
}
