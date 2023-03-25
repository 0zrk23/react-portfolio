import { Typography } from "@mui/material"
import "./home.scss"
import Morf from './../../Components/Morf/Morf';
import { motion } from 'framer-motion';

export function Home(){
    return (<div className='home-container'>
        <div className='intro'>
        <motion.div 
                className='text-container'
                style={{opacity: 0}}
                animate={{
                    opacity: 1,
                }}
                transition={{
                    duration: 1
                }}
            >
                <Typography sx={{fontFamily: 'monospace'}} color='primary' variant='h2'>Hello!</Typography>
                <Typography sx={{fontFamily: 'monospace'}} color='primary' variant='h3'>I'm Gustavo Carrillo</Typography>
                <div className="description">
                    <Typography sx={{fontFamily: 'monospace', marginRight: '10px'}} color='primary' variant='h5'> Software Engineer | </Typography>
                    <Typography sx={{fontFamily: 'monospace'}} color='primary' variant='h5'>Full-Stack Web Developer</Typography>
                </div>
            </motion.div>
            <motion.div className='morf-container'>
                <Morf  scale='200px' duration='20' color='white'/>
            </motion.div>
        </div>
        <div className='work-container'>
            Work
        </div>
    </div>)
}