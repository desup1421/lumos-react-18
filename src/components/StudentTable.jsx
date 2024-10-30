import React from "react";

const StudentTable = ({ toggleModalForm, toggleModalDetail, students }) => {
  return (
    <div className="table-responsive">
      <table className="table caption-top table-bordered tablle-hover">
        <caption>List of Student</caption>
        <thead>
          <tr >
						<th scope="col" colSpan='4'>
            	<button onClick={ toggleModalForm } className="btn btn-primary btn-sm float-end fw-bold">
								<i className="bi bi-plus-circle"></i> Add New
							</button>
						</th>
          </tr>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Name</th>
            <th scope="col">NIM</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {
            students.map((student, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{student.name}</td>
                <td>{student.nim}</td>
                <td>
                  <button className="btn btn-outline-danger btn-sm float-end" >
                    <i className="bi bi-trash"></i>
                  </button>
                  <button className="btn btn-outline-warning btn-sm float-end mx-2">
                    <i className="bi bi-pencil"></i>
                  </button>
                  <button className="btn btn-outline-primary btn-sm float-end" onClick={toggleModalDetail}>
                    <i className="bi bi-info-circle"></i>
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
