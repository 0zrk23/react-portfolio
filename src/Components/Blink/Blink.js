import { motion } from 'framer-motion';
import './blink.scss'

export const Blink = ({children,scale = 1.1}) => {
  return (
    <motion.div
      className='blink'
      animate={{
        scale: [1,scale,1],
        opacity: [0.8,1,0.8]
      }}
      transition={{
        duration: 2,
        repeat: Infinity
      }}
    >
      
      {children}
    </motion.div>
  )
}
