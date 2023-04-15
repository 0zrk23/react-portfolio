import { motion } from "framer-motion";
import './workcard.scss'
import { useState } from "react";
import { WorkModal } from "../WorkModal/WorkModal";
import { AnimatePresence } from "framer-motion";

const cardVariants = {
  initial:{
    scale: 0.97,
    opacity: 0.75
  },
  hover:{
    scale: 1.0,
    opacity: 1,
    transition:{
      duration: 0.15
    }
  },
  tap:{
    scale: 0.95,
    opacity: 1,
  }
}

export default function WorkCard({work}){
  const [modalOpen, setModalOpen] = useState(false);

  const closeModal = () => setModalOpen(false);
  const openModal = () => setModalOpen(true);
  

  return (
    <>
      <motion.img 
        variants={cardVariants}
        initial='initial'
        whileHover='hover'
        whileTap='tap'
        className="web-capture" 
        onClick={() => (modalOpen ? closeModal() : openModal()) }
      
        src={`${work.webCapture}`} 
        alt=""
      />
      {/* {modalOpen && <WorkModal modalOpen={modalOpen} handleClose={closeModal} work={work}/>} */}
      <AnimatePresence
        initial={false}
        mode='sync'
      >
        {modalOpen && <WorkModal modalOpen={modalOpen} handleClose={closeModal} work={work}/>}
      </AnimatePresence>
    </>
    
  )
}