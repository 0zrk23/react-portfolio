
import { motion } from "framer-motion";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Morf({scale = '200px', duration = '2', color = 'white', spin = '180', border = 'none'}) {
  return (
    <motion.div
      className="box"
      animate={{
        scale: [1, 1.5, 1],
        rotate: [0,360, 720],
        // borderRadius: ["0%", "0%", "50%", "50%", "0%"]
      }}
      transition={{
        duration: 7.5,
        ease: "linear",
        // times: [0, 0.5, 1],
        repeat: Infinity,
        // repeatDelay: 1
      }}
      style={{
        // background: `${color}`,
        height: `${scale}`,
        width: `${scale}`,
        border: `${border}`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <FontAwesomeIcon icon={faReact} style={{cursor: 'pointer', color: `${color}`, fontSize: '200px'}}/>
    </motion.div>
  );
}

// export default function Morf({scale = '200px', duration = '2', color = 'white', spin = '180', border = 'none'}) {
//   return (
//     <motion.div
//       className="box"
//       animate={{
//         scale: [1, 1.5, 1.5, 1, 1],
//         rotate: [0, 0, 180, 180, 0],
//         borderRadius: ["0%", "0%", "50%", "50%", "0%"]
//       }}
//       transition={{
//         duration: duration,
//         ease: "easeInOut",
//         times: [0, 0.2, 0.5, 0.8, 1],
//         repeat: Infinity,
//         repeatDelay: 1
//       }}
//       style={{
//         background: `${color}`,
//         height: `${scale}`,
//         width: `${scale}`,
//         border: `${border}`
//       }}
//     >
      
//     </motion.div>
//   );
// }