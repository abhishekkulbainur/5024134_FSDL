import React, { useState } from 'react';
import Navbar from './components/Navbar';
import RegisterForm from './components/RegisterForm';
import StudentList from './components/StudentList';
import { useStudents } from './hooks/useStudents';
import './App.css';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);

  const {
    students, filtered, search, setSearch,
    loading, addStudent, editStudent, deleteStudent, toggleStatus
  } = useStudents();

  const activeCount = students.filter((s) => s.status === 'Active').length;

  const handleAdd = (data) => {
    if (editingStudent) {
      editStudent(editingStudent.id, data);
      setEditingStudent(null);
    } else {
      addStudent(data);
    }
    setShowForm(false);
  };

  const handleEdit = (student) => {
    setEditingStudent(student);
    setShowForm(true);
  };

  return (
    <div className="app">
      <Navbar totalStudents={students.length} activeCount={activeCount} />

      <div className="main">
        <div className="header-row">
          <h2 className="section-title">👨‍🎓 Students</h2>
          <button className="btn-primary" onClick={() => { setShowForm(!showForm); setEditingStudent(null); }}>
            {showForm ? '✕ Cancel' : '+ Register'}
          </button>
        </div>

        {showForm && (
          <RegisterForm onAdd={handleAdd} onClose={() => { setShowForm(false); setEditingStudent(null); }} editingStudent={editingStudent} />
        )}

        <StudentList
          filtered={filtered}
          students={students}
          search={search}
          setSearch={setSearch}
          loading={loading}
          onDelete={deleteStudent}
          onToggle={toggleStatus}
          onEdit={handleEdit}
        />
      </div>
      <footer className="footer">
        <p>© 2026 StudentHub - Manage your students efficiently</p>
      </footer>
    </div>
  );
}

export default App;
