import { Typography } from '@mui/material'
import { faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './about.scss'

export function About(){
    return (
        <div className="about" id='About'>
            <div className='about-info'>
                <Typography
                    sx={{
                        margin: '0 0 2rem'
                    }}
                    color='primary'
                    variant='h4'
                >
                    Gustavo Carrillo
                </Typography>
                <img
                    className='profile-pic' 
                    src="./head-shot.jpg"
                    alt='Gustavo Carrillo'
                />
                <div className='description-container'>
                    <Typography
                        color='primary'
                        variant='h7'
                        sx={{
                            margin: '0 0 0 1.5rem'
                        }}
                    >
                        Hello! I'm a passionate software developer focused on web development with 10 years of coding experience and
                         6 months of experience in both front end and back end web development. 
                        I know Javascript, CSS, MySQL, Mongodb, React and various other technologies associated with web develpment.
                    </Typography>
                </div>
            </div>
            <div 
                className='cube-container'
            >
                <div className='cube-anchor'>
                    <div className='cubespinner'>
                        <img 
                            className='face1'
                            src='./c++.jpg'
                            alt='C++'
                        />
                        <div className='face2'>
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" rotation={270}/>
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
            <div className='languages'>
                <div className='icon2'>
                    <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                </div>
                <div className='icon2'>
                    <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                </div>
                <div className='icon2'>
                    <FontAwesomeIcon icon={faReact} color="#5ED4D4" />
                </div>
                <div className='icon2'>
                    <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                </div>
                <div className='icon2'>
                    <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                </div>
                <div className='icon2'>
                    <img 
                        className='icon1'
                        src='./c++.jpg'
                        alt='C++'
                    />
                </div>
            </div>
        </div>
    )
}
