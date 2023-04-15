import { Typography } from '@mui/material'
import './about.scss'

export function About(){
    return (<div className="about" id='About'>
        <div className='container'>
            <div className='about-info'>
                {/** maybe an image of self when I get it */}
                <Typography
                    sx={{

                    }}
                >
                    Gustavo Carrillo
                </Typography>
                <Typography
                    sx={{

                    }}
                >
                    Info about self
                </Typography>
            </div>
            <div 
                className='cube comp'
            >
                {/** Figure out how to switch cubes when screen switches sizes */}
            </div>
            <div 
                className='cube app'
            >

            </div>
        </div>
        <div className='about-footer' id='Contact'>
            
        </div>
    </div>)
}
