import { Typography } from '@mui/material'
import './about.scss'

export function About(){
    return (<div className="about" id='About'>
        <div className='container'>
            <div className='about-info'>
                {/** maybe an image of self when I get it */}
                <Typography>
                    Gustavo Carrillo
                </Typography>
                <Typography>
                    Info about self
                </Typography>
            </div>
            <div className='Cube'>
                {/** Figure out how to switch cubes when screen switches sizes */}
            </div>
        </div>
        <div className='about-footer' id='Contact'>
            
        </div>
    </div>)
}