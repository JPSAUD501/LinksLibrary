import { motion } from "framer-motion"
import Image from "next/image"

function Card(props) {

  const variants = {
      visible: i => ({
          opacity: 1,
          y: 0,
          transition: {
            delay: i * 0.1,
            duration: 0.5,
            ease: "easeIn",
            type: "spring",
            stiffness: 50
          },
        }),
      hidden: { opacity: 0, y: 200}
  }

  return (
      <a href={props.link} target="_blank" rel="noopener noreferrer">
          <motion.div className = "Card"
              initial="hidden"
              animate="visible"
              custom={props.i}
              variants={variants}>
              <Image layout={"responsive"} className = "cover" src = {props.cover} alt=""></Image>
              <div className="data">
                  <h2>{props.title}</h2>
                  <p>{props.subtitle}</p>
              </div>
          </motion.div>
      </a>
  )
}

export default Card