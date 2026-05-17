import './Alert.css'
import { motion } from "framer-motion"

type AlertProps = {
  type: string
  text: string
  onClose: () => void
}

const Alert = (props:AlertProps) => {

  const {
    type,
    text,
    onClose,
  } = props

  return (
    <div
      className={`alert alert-${type} d-flex justify-content-between align-items-center`}
      role="alert"
    >
      <>
        {text}
      </>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="btn-close"
        onClick={onClose}
      ></motion.button>
    </div>
  )
}

export default Alert