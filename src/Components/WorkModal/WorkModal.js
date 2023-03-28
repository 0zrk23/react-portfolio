import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Backdrop } from "../Backdrop/Backdrop";
import "./workmodal.scss"

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
    opactiy: 0
  }
}

export const WorkModal = ({handleClose, work}) => {
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
          <motion.div>
            <FontAwesomeIcon className='title-icon' icon={faUtensils} style={{padding: '1.5rem 1.5rem 0 0', fontSize: '30px', color: "white"}}/>
          </motion.div>
          <Typography
            className="work-title"
            variant="h3"
            sx={{
              fontFamily: 'monospace'
            }}
          >
            {work.title}
          </Typography>
          <motion.div>
            <FontAwesomeIcon className='title-icon' icon={faUtensils} style={{padding: '1.5rem 1.5rem 0 1.5rem', fontSize: '30px', color: "white"}}/>
          </motion.div>
        </div>
        <button onClick={handleClose}>Close</button>
      </motion.div>
    </Backdrop>
  )
}

