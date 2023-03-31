import { motion } from 'framer-motion';
import './twisty.scss'

export const Twisty = ({children,rotation=15,duration=2}) => {
  return (
    <motion.div
      className='twisty'
      animate={{
        // scale: [1,scale,1],
        // opacity: [0.8,1,0.8]
        rotate: [rotation,-rotation, rotation]
      }}
      transition={{
        duration: duration,
        repeat: Infinity
      }}
    >
      
      {children}
    </motion.div>
  )
}
