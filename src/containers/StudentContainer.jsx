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
        birthDate: "12",
        address: "Jakarta",
        guardian: "Siti",
      },
      {
        name: "John",
        nim: "1234",
        birthDate: "12",
        address: "Jakarta",
        guardian: "Siti",
      },
    ],
    currentStudent: {
      name: "",
      nim: "",
      birthDate: "",
      address: "",
      guardian: "",
    },
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      currentStudent: {
        ...prevState.currentStudent,
        [name]: value,
      },
    }));
    console.log(this.state.currentStudent);
  }




  toggleModalForm = () => {
    this.setState({
      modalForm: !this.state.modalForm,
    });
  };
  toggleModalDetail = () => {
    this.setState({
      modalDetail: !this.state.modalDetail,
    });
  };

  render() {
    return (
      <>
        <StudentTable
          students={this.state.students}
          toggleModalForm={this.toggleModalForm}
          toggleModalDetail={this.toggleModalDetail}
        />

        {this.state.modalForm && (
          <StudentForm 
            toggleModal={this.toggleModalForm} 
            student={this.state.currentStudent} 
            onChange={this.handleInputChange}
          />
        )}

        {this.state.modalDetail && (
          <StudentDetail toggleModal={this.toggleModalDetail} />
        )}
      </>
    );
  }
}

export default StudentContainer;
