/*==================================================
EditCampusView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the new student page.
================================================== */
import React from 'react';

const EditCampusView = (props) => {
  const { handleChange, handleSubmit, campus } = props;

  // Inline styling as an example
  // Inline styling as an example
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
      textAlign: 'left', // Align labels to the left for readability
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
      width: '100%', // Makes the form take the full width of the container
      maxWidth: '400px', // Limits the width for better appearance
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{campus.name}</h1>

      <div style={styles.container}>
        <h2 style={styles.title}>Edit Campus Information</h2>
        <form onSubmit={(e) => handleSubmit(e)} style={{ textAlign: 'center' }}>
          <label style={styles.label}>Name:</label>
          <input
            type="text"
            name="name"
            defaultValue={campus.name}
            onChange={(e) => handleChange(e)}
            style={styles.input}
            required
          />

          <label style={styles.label}>Address:</label>
          <input
            type="text"
            name="address"
            defaultValue={campus.address}
            onChange={(e) => handleChange(e)}
            style={styles.input}
            required
          />

          <label style={styles.label}>Description:</label>
          <input
            type="text"
            name="description"
            defaultValue={campus.description}
            onChange={(e) => handleChange(e)}
            style={styles.input}
          />

          <label style={styles.label}>Campus Pic (URL):</label>
          <input
            type="url"
            name="imageUrl"
            defaultValue={campus.imageUrl}
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

export default EditCampusView;
