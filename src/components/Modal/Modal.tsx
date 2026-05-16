import BackDrop from "../BackDrop/BackDrop.tsx";

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

  if (!show) {
    return null
  }

  return (
    <>
      <div
        className="modal d-block"
        tabIndex={-1}
        style={{ zIndex: 1055 }}
        onClick={onClose}
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
      </div>
      <BackDrop/>
    </>
  )
}

export default Modal