import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@mui/material";
import { motion } from "framer-motion";
import { Backdrop } from "../Backdrop/Backdrop";
import "./workmodal.scss"
// import { Twisty } from "../Twisty/Twisty";

const dropIn = {
  hidden: {
    y: '-100vh',
    opacity: 0
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    }
  },
  exit: {
    y: "100vh",
    opactiy: 0,
    transition:{
      duration: 0.1
    }
  }
}

// const rotation=10;
// const duration=5;

export const WorkModal = ({handleClose, work}) => {
  // let screenWidth = window.innerWidth;
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modal blue-gradient"
        variants={dropIn}
        initial="hidden"
        animate='visible'
        exit='exit'
      >
        <div className="title-container">
          {/* <div className='title-icon'>
            <Twisty rotation={rotation} duration={duration}>
              {work.description && <FontAwesomeIcon icon={faUtensils} style={{ fontSize: '30px', color: "white"}}/>}
            </Twisty>
          </div> */}
          <h3
            className="work-title"
            variant="h3"
            sx={{
              fontFamily: 'monospace'
            }}
          >
            {work.title}
          </h3>
          
          {/* <div className='title-icon'>
            <Twisty rotation={-rotation} duration={duration}>
              {work.description && <FontAwesomeIcon icon={faUtensils} style={{ fontSize: '30px', color: "white"}}/>}
            </Twisty>
          </div> */}
        </div>
        {
          work.description && 
            <>
              <p className='work-description'>
                {work.description}
              </p>
              <p className='work-technology'>
                <span style={{fontWeight: 'bolder', textDecorationLine: 'underline'}}>Technology Used:</span>
                {' ' + work.technologyUsed.join(', ')}
              </p>
              <div className="button-container">
                <Button onClick={handleClose} href={`${work.repo}`} target='_blank' sx={{mx: 1}} variant="outlined">
                  Visit Repo
                </Button>
                <Button onClick={handleClose} href={`${work.app}`} target='_blank' sx={{mx: 1}} variant="outlined">
                  Visit Web App
                </Button>
              </div>
              
            </>
        }
        <motion.div 
          className="delete-icon"
          initial={{
            scale: 1,
            opacity: 0.7,
          }}
          whileHover={{
            scale: 1.05,
            opacity: 1,
          }}
          whileTap={{
            scale: 0.95,
          }}
        >
          <FontAwesomeIcon onClick={handleClose} icon={faCircleXmark} style={{cursor: 'pointer', fontSize: '30px', color: "white"}}/>
        </motion.div>
      </motion.div>
    </Backdrop>
  )
}

