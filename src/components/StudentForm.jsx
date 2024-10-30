import React from "react";

const StudentForm = ({ toggleModal, student, onChange }) => {
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
          <form>
            <div className="mb-3">
              <label htmlFor="nema" className="form-lable">
                Student Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
								onChange = {onChange}
                className="form-control"
                value={student.name}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="nim" className="form-lable">
                NIM
              </label>
              <input
                type="text"
                name="nim"
                id="nim"
                min="0"
                inputMode="numeric"
								onChange = {onChange}
                className="form-control"
                value={student.nim}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="birthDate" className="form-lable">
                Birth Date
              </label>
              <input
                type="date"
                name="birthDate"
                id="birthDate"
								onChange = {onChange}
                className="form-control"
                value={student.birthDate}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="address" className="form-lable">
                Address
              </label>
              <textarea
                name="address"
                id="address"
								onChange = {onChange}
                className="form-control"
								value={student.address}
              ></textarea>
            </div>

            <div className="mb-3">
              <label htmlFor="guradian" className="form-lable">
                Guardian Name
              </label>
              <input
                type="text"
                name="guardian"
                id="guardian"
								onChange = {onChange}
                className="form-control"
                value={student.guardian}
              />
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-primary">
            <i className="bi bi-save"></i> Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentForm;
