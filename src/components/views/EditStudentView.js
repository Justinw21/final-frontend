/*==================================================
EditStudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the new student page.
================================================== */
import React from 'react';

const EditStudentView = (props) => {
  const { handleChange, handleSubmit, student } = props;

  // Inline styling for the component
  const styles = {
    container: {
      maxWidth: '500px',
      margin: 'auto',
      padding: '20px',
      backgroundColor: '#f0f0f5',
      borderRadius: '5px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '400px', // Ensures sufficient height for centering
    },
    title: {
      fontWeight: 'bold',
      fontFamily: 'Courier, sans-serif',
      fontSize: '20px',
      color: '#11153e',
      textAlign: 'center',
      marginBottom: '20px',
    },
    label: {
      color: '#11153e',
      fontWeight: 'bold',
      display: 'block',
      marginBottom: '5px',
      textAlign: 'left',
      width: '100%',
    },
    input: {
      width: '100%',
      padding: '10px',
      marginBottom: '15px',
      borderRadius: '5px',
      border: '1px solid #ccc',
    },
    button: {
      backgroundColor: '#11153e',
      color: 'white',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    buttonHover: {
      backgroundColor: '#333',
    },
    form: {
      width: '100%', // Ensures the form takes the full width of the container
      maxWidth: '400px', // Limits the form width for better appearance
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>
        {student.firstname} {student.lastname}
      </h1>

      <div style={styles.container}>
        <h2 style={styles.title}>Edit Student Information</h2>
        <form onSubmit={(e) => handleSubmit(e)} style={styles.form}>
          <label style={styles.label}>First Name:</label>
          <input
            type="text"
            name="firstname"
            defaultValue={student.firstname}
            onChange={(e) => handleChange(e)}
            style={styles.input}
            required
          />

          <label style={styles.label}>Last Name:</label>
          <input
            type="text"
            name="lastname"
            defaultValue={student.lastname}
            onChange={(e) => handleChange(e)}
            style={styles.input}
            required
          />

          <label style={styles.label}>Email:</label>
          <input
            type="email"
            name="email"
            defaultValue={student.email}
            onChange={(e) => handleChange(e)}
            style={styles.input}
            required
          />

          <label style={styles.label}>Profile Pic (URL):</label>
          <input
            type="url"
            name="imageUrl"
            defaultValue={student.imageUrl}
            onChange={(e) => handleChange(e)}
            style={styles.input}
          />

          <label style={styles.label}>Campus Id:</label>
          <input
            type="number"
            name="campusId"
            defaultValue={student.campusId}
            onChange={(e) => handleChange(e)}
            style={styles.input}
          />

          <label style={styles.label}>GPA:</label>
          <input
            type="text"
            name="gpa"
            defaultValue={student.gpa}
            onChange={(e) => handleChange(e)}
            style={styles.input}
          />

          <button
            type="submit"
            style={styles.button}
            onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
            onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditStudentView;
