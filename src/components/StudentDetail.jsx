import React from 'react'

const StudentDetail = ({toggleModal}) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Form New Student</h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
						onClick={toggleModal}
          ></button>
        </div>
        <div className="modal-body">
          <p>
						<strong>Name: </strong> Dede Supriatna
					</p>
					<p>
						<strong>NIM: </strong> 1234567890
					</p>
					<p>
						<strong>Address: </strong> Jalan Raya
					</p>
					<p>
						<strong>Guardian Name: </strong> Ibu Siti
					</p>

        </div>
        
      </div>
    </div>
  )
}

export default StudentDetail