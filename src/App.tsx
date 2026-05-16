import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="container py-5">

      <div className="mb-5">
        <h2 className="mb-3">Modal</h2>

        <button
          className="btn btn-primary"
          onClick={() => setShowModal(true)}
        >
          Open Modal
        </button>

        {showModal && (
          <div className="modal d-block" tabIndex={-1}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5">
                    Modal title
                  </h1>

                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setShowModal(false)}
                  ></button>
                </div>

                <div className="modal-body">
                  <p>Modal content</p>
                </div>

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>

                  <button
                    type="button"
                    className="btn btn-primary"
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {showModal && (
          <div className="modal-backdrop fade show"></div>
        )}

      </div>
    </div>
  )
}

export default App