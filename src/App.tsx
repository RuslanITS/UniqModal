import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { AnimatePresence, motion } from "framer-motion"
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
      setVisibleAlerts((prev) => [...prev, type])
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

      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{duration: 0.5, type: "spring",}}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="btn btn-primary"
        onClick={() => setShowModal(true)}
      >
        Open Modal
      </motion.button>

      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        title="Modal title"
        buttons={buttonsModal}
        content="Some modal content"
      />

      <h2 className="mb-4 mt-2">Alerts</h2>

      <div className="d-flex flex-wrap gap-2 mb-4">
        {alerts.map((alert) => (
          <motion.button
            whileHover={{scale: 1.2,}}
            whileTap={{scale: 0.8,}}
            transition={{type: "spring", stiffness: 400, damping: 10,}}
            onHoverStart={() => console.log('hover started!')}
            key={alert.type}
            className={`btn btn-${alert.type}`}
            onClick={() => showAlert(alert.type)}
          >
            {alert.type} Alert
          </motion.button>
        ))}
      </div>

      <div className="d-flex flex-column gap-3">
        <AnimatePresence>
          {alerts.map((alert) => (
            visibleAlerts.includes(alert.type) && (
              <motion.div
                key={alert.type}
                initial={{ opacity: 0, x: 100, scale: 0.8,}}
                animate={{ opacity: 1, x: 0, scale: 1,}}
                exit={{opacity: 0, x: 300, scale: 0.5,}}
                transition={{duration: 0.2,}}
              >
                <Alert
                  type={alert.type}
                  text={alert.text}
                  onClose={() => closeAlert(alert.type)}
                />
              </motion.div>
            )
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default App