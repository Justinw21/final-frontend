/*==================================================
StudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the single student view page.
================================================== */
import { Link } from "react-router-dom";

const StudentView = (props) => {
  const { student } = props;

  // Render a single Student view 
  return (
    <div>
      <h1>{student.firstname + " " + student.lastname}</h1>
      <h3>
        {student.campus ? (
          <Link to={`/campus/${student.campus.id}`}>
            {student.campus.name}
          </Link>
        ) : (
          "No campus assigned"
        )}
        </h3>
      <h3>{student.email}</h3>
      <h3>{"GPA: " + student.gpa}</h3>
      <div>
        <Link to={'/edit-student/${student.id}'}>
          <button>Edit</button>
        </Link>
      </div> 
      <img 
        src={student.imageUrl} 
        alt={`${student.firstname} ${student.lastname}`} 
        style={{ width: '200px', height: '200px', objectFit: 'cover', borderRadius: '50%' }}
      />
    </div>
  );

};

export default StudentView;