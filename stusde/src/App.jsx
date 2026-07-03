import "./App.css";

function App() {
  const students = [
    { id: 1, name: "Rahul Kumar", course: "BCA", marks: 85 },
    { id: 2, name: "Priya Sharma", course: "MCA", marks: 92 },
    { id: 3, name: "Amit Das", course: "B.Tech", marks: 78 },
    { id: 4, name: "Sneha Patel", course: "MBA", marks: 88 },
  ];

  return (
    <div className="container">
      <h1>🎓 Student Dashboard</h1>

      <div className="cards">
        <div className="card">
          <h2>4</h2>
          <p>Total Students</p>
        </div>

        <div className="card">
          <h2>86%</h2>
          <p>Average Marks</p>
        </div>

        <div className="card">
          <h2>4</h2>
          <p>Courses</p>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Course</th>
            <th>Marks</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.course}</td>
              <td>{student.marks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;