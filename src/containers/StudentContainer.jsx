import React, { Component } from "react";
import StudentTable from "../components/StudentTable";
import StudentForm from "../components/StudentForm";
import StudentDetail from "../components/StudentDetail";

class StudentContainer extends Component {
  state = {
    modalForm: false,
    modalDetail: false,
    isEdit: false,
    students: [
      {
        name: "Dede",
        nim: "1234",
        birthDate: "2020-01-02",
        address: "Jakarta",
        guardian: "Ibu Siti",
      },
      {
        name: "John",
        nim: "2345",
        birthDate: "2015-10-10",
        address: "Bandung",
        guardian: "Bapak Udin",
      },
    ],
    currentStudent: {
      name: "",
      nim: "",
      birthDate: "",
      address: "",
      guardian: "",
    },
    studentIndex : null,
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      currentStudent: {
        ...prevState.currentStudent,
        [name]: value,
      },
    }));
  }

  handleUpdate = (index) => {
    let updatedStudents = [...this.state.students];
    updatedStudents.splice(index, 1, this.state.currentStudent);
    console.log(updatedStudents);

    this.setState({
      students : updatedStudents,
    })
    this.toggleModalForm()
  }

  handleAdd = () => {
    this.setState((prevState) => ({
      students: [
        ...prevState.students,
        this.state.currentStudent
      ]
    }))
    this.toggleModalForm()
  }

  handleDelete = (index) => {
    let updatedStudents = [...this.state.students];
    updatedStudents.splice(index, 1);
    this.setState({
      students : updatedStudents,
    })
  }


  toggleModalForm = (isEdit = false, index = null) => {
    const selectedStudent = this.state.students[index] || [];
    this.setState({
      isEdit: isEdit,
      modalForm: !this.state.modalForm,
      currentStudent: selectedStudent,
      studentIndex: index,
    });
  };

  toggleModalDetail = (index) => {
    const selectedStudent = this.state.students[index];
    this.setState({
      modalDetail: !this.state.modalDetail,
      currentStudent: selectedStudent,
    });
  };

  render() {
    return (
      <>
        <StudentTable
          students={this.state.students}
          toggleModalForm={this.toggleModalForm}
          toggleModalDetail={this.toggleModalDetail}
          handleDelete = {this.handleDelete}
        />

        {this.state.modalForm && (
          <StudentForm 
            toggleModal={this.toggleModalForm} 
            student={this.state.currentStudent} 
            onChange={this.handleInputChange}
            isEdit={this.state.isEdit}
            studentIndex = {this.studentIndex}
            handleUpdate = {this.handleUpdate}
            handleAdd = {this.handleAdd}
          />
        )}

        {this.state.modalDetail && (
          <StudentDetail 
            toggleModal={this.toggleModalDetail}
            student = {this.state.currentStudent} 
          />
        )}
      </>
    );
  }
}

export default StudentContainer;
