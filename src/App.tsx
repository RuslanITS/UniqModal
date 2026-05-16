import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Modal from './components/Modal/Modal.tsx'

const App = () => {
  const [showModal, setShowModal] = useState(false)

  const buttonsModal = [
    {
      type: 'primary',
      label: 'Continue',
      onClick: () => {
        console.log('Continue clicked')
      },
    },

    {
      type: 'danger',
      label: 'Close',
      onClick: () => {
        setShowModal(false)
      },
    },
  ]

  return (
    <div className="container py-5">
      <h2 className="mb-3">Modal</h2>

      <button
        className="btn btn-primary"
        onClick={() => setShowModal(true)}
      >
        Open Modal
      </button>

      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        title="Modal title"
        buttons={buttonsModal}
        content="Some modal content"
      >
      </Modal>
    </div>
  )
}

export default App