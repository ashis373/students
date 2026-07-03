import "./App.css";

function App() {
  const students = [
    { id: 1, name: "Rahul Kumar", course: "BCA", marks: 85, status: "Excellent" },
    { id: 2, name: "Priya Sharma", course: "MCA", marks: 92, status: "Outstanding" },
    { id: 3, name: "Amit Das", course: "B.Tech", marks: 78, status: "Good" },
    { id: 4, name: "Sneha Patel", course: "MBA", marks: 88, status: "Excellent" },
  ];

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>🎓 Student Dashboard</h1>
        <p>Manage and monitor student performance</p>
      </header>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">👥</div>
          <div className="stat-info">
            <h3>4</h3>
            <p>Total Students</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">📈</div>
          <div className="stat-info">
            <h3>86%</h3>
            <p>Average Marks</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">📚</div>
          <div className="stat-info">
            <h3>4</h3>
            <p>Active Courses</p>
          </div>
        </div>
      </div>

      <div className="table-container">
        <h2>Recent Enrollments</h2>
        <table className="student-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Student Name</th>
              <th>Course</th>
              <th>Marks</th>
              <th>Performance</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>#{student.id}</td>
                <td className="font-medium">{student.name}</td>
                <td>
                  <span className="course-badge">{student.course}</span>
                </td>
                <td className="marks-cell">{student.marks}%</td>
                <td>
                  <span className={`status-badge ${student.status.toLowerCase()}`}>
                    {student.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;