import { Typography } from '@mui/material'
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './about.scss'

export function About(){
    return (
        <div className="about" id='About'>
            <div className='about-info'>
                <img
                    className='profile-pic' 
                    src="https://placehold.co/400x400"
                />
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
                    Hi! I'm a passionate software developer focused on web development. I have 6 months of experience of both front end and back end web development. I know Javascript, CSS, MySQL, Mongodb, React and various other technologies associated with web develpment.
                </Typography>
            </div>
            <div className='cube comp'>
                
            </div>
            <div 
                className='cube app'
            >
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4D4" />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                    </div>
                </div>
            </div>
        </div>
    )
}
