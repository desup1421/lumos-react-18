import React from "react";

const StudentTable = ({ toggleModalForm, toggleModalDetail, students, handleDelete }) => {
  return (
    <div className="table-responsive">
      <table className="table caption-top table-bordered tablle-hover">
        <caption>List of Student</caption>
        <thead>
          <tr >
						<th scope="col" colSpan='4'>
            	<button onClick={ () => toggleModalForm() } className="btn btn-primary btn-sm float-end fw-bold">
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
            students.length === 0 ? (
              <tr>
                <td colSpan='4' className="text-center">
                  <p>No Data</p>
                </td>
              </tr>
            ) :
            students.map((student, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{student.name}</td>
                <td>{student.nim}</td>
                <td>
                  <button onClick={() => handleDelete(index) } className="btn btn-outline-danger btn-sm float-end" >
                    <i className="bi bi-trash"></i>
                  </button>
                  <button onClick={() => toggleModalForm(true, index) } className="btn btn-outline-warning btn-sm float-end mx-2">
                    <i className="bi bi-pencil"></i>
                  </button>
                  <button onClick={() => toggleModalDetail(index)} className="btn btn-outline-primary btn-sm float-end">
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
