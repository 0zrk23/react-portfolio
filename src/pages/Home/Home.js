import { Typography } from "@mui/material"
import Morf from '../../Components/Morf/HomeMorf';
import { motion } from 'framer-motion';
import './home.scss'

const textVariants = {
  initial: {
    opacity: 0
  },
  inView: {
    opacity: 1,
    transition: {
      duration: 1.5
    }
  }
}

// const morfVariants = textVariants

export const Home = () => {
  return (
    <div className='home'>
        <motion.div 
            className='text-container'
            variants={textVariants}
            initial='initial'
            whileInView='inView'
        >
            <Typography sx={{fontFamily: 'monospace'}} color='primary' variant='h2'>Hello!</Typography>
            <div className='name'>
                <Typography sx={{fontFamily: 'monospace', marginRight: '20px'}} color='primary' variant='h3'>I'm Gustavo </Typography>
                <Typography sx={{fontFamily: 'monospace'}} color='primary' variant='h3'>Carrillo</Typography>
            </div>
            <div className="description">
                <Typography sx={{fontFamily: 'monospace', marginRight: '10px'}} color='primary' variant='h5'> Software Engineer | </Typography>
                <Typography sx={{fontFamily: 'monospace'}} color='primary' variant='h5'>Full-Stack Web Developer</Typography>
            </div>
        </motion.div>
        <motion.div 
          className='morf-container'
          variants={textVariants}
          initial='initial'
          whileInView='inView'
        >
            <Morf  scale='200px' duration='20' color='white'/>
        </motion.div>
    </div>
  )
}

