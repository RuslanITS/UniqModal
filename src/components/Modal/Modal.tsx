import { AnimatePresence, motion } from "framer-motion";
import BackDrop from "../BackDrop/BackDrop.tsx";
import './Modal.css'

type ModalProps = {
  show: boolean
  onClose: () => void
  title: string
  content: string

  buttons: {
    type: string
    label: string
    onClick: () => void
  }[]
}

const Modal = (props: ModalProps) => {
  const {
    show,
    onClose,
    title,
    content,
    buttons,
  } = props

  return (
    <AnimatePresence>
      {show && (
        <>
          <motion.div
            className="modal d-block modal-index"
            tabIndex={-1}
            style={{ zIndex: 1055 }}
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.3, }}
            transition={{
              duration: 0.3,
            }}
          >
            <div
              className="modal-dialog"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-content">

                <div className="modal-header">
                  <h1 className="modal-title fs-5">
                    {title}
                  </h1>

                  <button
                    type="button"
                    className="btn-close"
                    onClick={onClose}
                  ></button>
                </div>

                <div className="modal-body">
                  <p>{content}</p>
                </div>

                <div className="modal-footer">
                  {buttons.map((button) => (
                    <button
                      key={button.label}
                      className={`btn btn-${button.type}`}
                      onClick={button.onClick}
                    >
                      {button.label}
                    </button>
                  ))}
                </div>

              </div>
            </div>
          </motion.div>
          <BackDrop/>
        </>
      )}
    </AnimatePresence>
  )
}

export default Modal