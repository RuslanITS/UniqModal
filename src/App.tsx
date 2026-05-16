import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Modal from './components/Modal/Modal.tsx'
import Alert from "./components/Alert/Alert.tsx";

const App = () => {
  const [showModal, setShowModal] = useState(false)
  const [visibleAlerts, setVisibleAlerts] = useState<string[]>([])

  const buttonsModal = [
    {
      type: 'primary',
      label: 'Continue',
      onClick: () => {
        showAlert('success')
        setShowModal(false)
      },
    },
    {
      type: 'danger',
      label: 'Close',
      onClick: () => {
        showAlert('danger')
        setShowModal(false)
      },
    },
  ]

  const alerts = [
    {type: 'primary', text: 'New updates are available.'},
    {type: 'secondary', text: 'Your session settings were changed.'},
    {type: 'success', text: 'Operation completed successfully.'},
    {type: 'danger', text: 'Something went wrong. Please try again.'},
    {type: 'warning', text: 'Warning: Unsaved changes detected.'},
    {type: 'info', text: 'New information has been added.'},
    {type: 'light', text: 'Light mode is currently active.'},
    {type: 'dark', text: 'Dark theme has been enabled.'},
  ]

  const showAlert = (type: string) => {
    if (!visibleAlerts.includes(type)) {
      setVisibleAlerts([...visibleAlerts, type])
    }
  }

  const closeAlert = (type: string) => {
    setVisibleAlerts(
      visibleAlerts.filter(
        (alert) => alert !== type
      )
    )
  }

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

      <h2 className="mb-4 mt-2">Alerts</h2>

      <div className="d-flex flex-wrap gap-2 mb-4">
        {alerts.map((alert) => (
          <button
            key={alert.type}
            className={`btn btn-${alert.type}`}
            onClick={() => showAlert(alert.type)}
          >
            Show {alert.type}
          </button>
        ))}
      </div>

      <div className="d-flex flex-column gap-3">
        {alerts.map((alert) => (
          visibleAlerts.includes(alert.type) && (
            <Alert
              key={alert.type}
              type={alert.type}
              text={alert.text}
              onClose={() =>
                closeAlert(alert.type)
              }
            />
          )
        ))}
      </div>
    </div>
  )
}

export default App