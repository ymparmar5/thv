import { motion } from 'framer-motion'
import { motionVariants } from '../../lib/motion'
import { useLocation } from 'react-router-dom'

const PageWrapper = ({ children }) => {
  const location = useLocation()

  return (
    <motion.div
      key={location.pathname}
      variants={motionVariants.page}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full h-full"
    >
      {children}
    </motion.div>
  )
}

export default PageWrapper
