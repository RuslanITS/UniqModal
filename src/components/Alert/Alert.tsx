import './Alert.css'

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
      <button
        className="btn-close"
        onClick={onClose}
      ></button>
    </div>
  )
}

export default Alert