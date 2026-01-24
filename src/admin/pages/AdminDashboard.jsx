import Sidebar from '../components/Sidebar';
import './AdminDashboard.css';

function AdminDashboard() {
  const stats = [
    { label: 'Total Trainees', value: 120, icon: '👨‍🎓', color: 'blue' },
    { label: 'Active Programs', value: 5, icon: '📚', color: 'green' },
    { label: 'Sponsors', value: 4, icon: '🤝', color: 'purple' },
    { label: 'Graduates', value: 45, icon: '🎓', color: 'orange' }
  ];
  
  const recentTrainees = [
    { id: 1, name: 'John Doe', email: 'john@example.com', program: 'Frontend', status: 'Ongoing' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', program: 'Backend', status: 'Ongoing' },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', program: 'Fullstack', status: 'Completed' },
    { id: 4, name: 'Sarah Williams', email: 'sarah@example.com', program: 'Frontend', status: 'Ongoing' },
    { id: 5, name: 'Tom Brown', email: 'tom@example.com', program: 'Backend', status: 'Ongoing' }
  ];
  
  return (
    <div className="admin-layout">
      <Sidebar />
      
      <main className="admin-main">
        <header className="admin-header">
          <h1>Dashboard Overview</h1>
          <div className="admin-user">
            <span className="user-name">Admin User</span>
            <div className="user-avatar">A</div>
          </div>
        </header>
        
        <div className="admin-content">
          {/* Stats Section */}
          <section className="stats-section">
            <div className="grid grid-4">
              {stats.map((stat, index) => (
                <div key={index} className={`stat-card stat-${stat.color}`}>
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-info">
                    <span className="stat-value">{stat.value}</span>
                    <span className="stat-label">{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          {/* Recent Trainees Section */}
          <section className="recent-section">
            <div className="section-header">
              <h2>Recent Trainees</h2>
              <a href="/admin/trainees" className="view-all-link">View All →</a>
            </div>
            
            <div className="table-container">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Program</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {recentTrainees.map((trainee) => (
                    <tr key={trainee.id}>
                      <td>{trainee.name}</td>
                      <td>{trainee.email}</td>
                      <td>{trainee.program}</td>
                      <td>
                        <span className={`status-badge status-${trainee.status.toLowerCase()}`}>
                          {trainee.status}
                        </span>
                      </td>
                      <td>
                        <div className="action-buttons">
                          <button className="btn btn-sm btn-outline">Edit</button>
                          <button className="btn btn-sm btn-outline">Delete</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default AdminDashboard;

