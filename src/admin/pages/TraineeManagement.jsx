import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import './TraineeManagement.css';

function TraineeManagement() {
  const [trainees] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', program: 'Frontend Development', status: 'Ongoing' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', program: 'Backend Development', status: 'Ongoing' },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', program: 'Fullstack Development', status: 'Completed' },
    { id: 4, name: 'Sarah Williams', email: 'sarah@example.com', program: 'Frontend Development', status: 'Ongoing' },
    { id: 5, name: 'Tom Brown', email: 'tom@example.com', program: 'Backend Development', status: 'Pending' },
    { id: 6, name: 'Emily Davis', email: 'emily@example.com', program: 'Fullstack Development', status: 'Ongoing' },
    { id: 7, name: 'Chris Wilson', email: 'chris@example.com', program: 'Frontend Development', status: 'Completed' },
    { id: 8, name: 'Amanda Taylor', email: 'amanda@example.com', program: 'Backend Development', status: 'Ongoing' }
  ]);
  
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  return (
    <div className="admin-layout">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      
      <main className="admin-main">
        <header className="admin-header">
          <div className="header-left">
            <button 
              className="collapse-btn"
              onClick={() => setSidebarOpen(true)}
              aria-label="Toggle sidebar"
            >
              <span className="collapse-icon">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </span>
            </button>
            <h1>Trainees Management</h1>
          </div>
          <div className="admin-user">
            <span className="user-name">Admin User</span>
            <div className="user-avatar">A</div>
          </div>
        </header>
        
        <div className="admin-content">
          {/* Actions Bar */}
          <div className="actions-bar">
            <div className="search-box">
              <input type="text" placeholder="Search trainees..." />
            </div>
            <div className="filter-buttons">
              <select className="filter-select">
                <option value="">All Programs</option>
                <option value="frontend">Frontend Development</option>
                <option value="backend">Backend Development</option>
                <option value="fullstack">Fullstack Development</option>
              </select>
              <select className="filter-select">
                <option value="">All Status</option>
                <option value="ongoing">Ongoing</option>
                <option value="completed">Completed</option>
                <option value="pending">Pending</option>
              </select>
              <button className="btn btn-primary">
                + Add Trainee
              </button>
            </div>
          </div>
          
          {/* Trainees Table */}
          <section className="trainees-section">
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
                  {trainees.map((trainee) => (
                    <tr key={trainee.id}>
                      <td>
                        <div className="trainee-name">
                          <div className="name-avatar">{trainee.name.charAt(0)}</div>
                          <span>{trainee.name}</span>
                        </div>
                      </td>
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
            
            {/* Pagination */}
            <div className="pagination">
              <span className="pagination-info">Showing 1-8 of 120 trainees</span>
              <div className="pagination-buttons">
                <button className="btn btn-sm btn-outline" disabled>Previous</button>
                <button className="btn btn-sm btn-primary">1</button>
                <button className="btn btn-sm btn-outline">2</button>
                <button className="btn btn-sm btn-outline">3</button>
                <button className="btn btn-sm btn-outline">Next</button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default TraineeManagement;

