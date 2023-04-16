import { Typography } from "@mui/material"
import Morf from '../../Components/Morf/HomeMorf';
import { motion } from 'framer-motion';
import { Link } from "react-scroll";
// import { Blink } from "../../Components/Blink/Blink";
// import { faDownLong } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
    <>
      <div className='home' id='Home'>
          <motion.div 
              className='text-container'
              variants={textVariants}
              initial='initial'
              whileInView='inView'
          >
              <Typography sx={{fontFamily: 'monospace'}} color='primary' variant='h2'>Hello!</Typography>
              <div className='name'>
                  <Typography sx={{fontFamily: 'monospace', marginRight: '20px', textAlign: {xs: 'center'}}} color='primary' variant='h3'>I'm Gustavo </Typography>
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
            <Link className='work-link' to={`Work`} spy={true} smooth={true} offset={-60} duration={1000}>
              <Morf scale='200px' duration='20' color='white'/>
            </Link>
              
          </motion.div>
      </div>
      
      {/* <div className="home-footer">
        <Blink>
          <FontAwesomeIcon icon={faDownLong} style={{padding: '1rem 1.5rem 0 1.5rem', fontSize: '30px', color: "#273C6D"}}/>
        </Blink>
          <Typography className='home-footer-text' sx={{fontFamily: 'monospace'}} variant='h4'>Scroll To See Work</Typography>
        <Blink>
          <FontAwesomeIcon icon={faDownLong} style={{padding: '1rem 1.5rem 0 1.5rem', fontSize: '30px', color: "#273C6D"}}/>
        </Blink>
      </div> */}
    </>
  )
}

