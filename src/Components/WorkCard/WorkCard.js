import { motion } from "framer-motion";
// import { useRef, useState } from "react";
import './workcard.scss'
import React, { useState, useRef } from "react";

export default function WorkCard(){
  const focusRef = useRef();

  function focus(){
    focusRef.current.focus();
    console.log(document.activeElement);
  }

  return (
    <motion.div 
      ref={focusRef}
      className='work-card'
      inital={{
        scale: 0
      }}
      whileHover={{
        scale: 1.02,
        transition: {
          
        }
      
      }}
      style={{
        backgroundImage: 'url()'
      }}
      >

      </motion.div>
  )
}