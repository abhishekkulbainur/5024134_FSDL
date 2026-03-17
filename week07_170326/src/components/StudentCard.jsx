import React from 'react';
import { getStatusLabel } from '../utils/helpers';

function StudentCard({ student, onDelete, onToggle, onEdit }) {
  const { id, name, course, year, status, joinedAt } = student;

  const getInitials = (n) => n.split(' ').map((w) => w[0]).join('');

  return (
    <div className={`card ${status === 'Inactive' ? 'card-inactive' : ''}`}>
      <div className="card-top">
        <div className="avatar">{getInitials(name)}</div>
        <div className="card-info">
          <h3 title={`Student: ${name}`}>{name}</h3>
          <p>📚 {course}</p>
          <p>📅 {year}</p>
          <p className="joined">🗓 Joined: {joinedAt}</p>
        </div>
      </div>

      <div className="card-footer">
        <span className={`badge ${status === 'Active' ? 'badge-active' : 'badge-inactive'}`}>
          {getStatusLabel(status)}
        </span>
        <div className="card-actions">
          <button className="btn-edit" onClick={() => onEdit(student)}>✏️</button>
          <button className="btn-toggle" onClick={() => onToggle(id)}>⇄</button>
          <button className="btn-delete" onClick={() => { if (window.confirm('Are you sure you want to delete this student?')) onDelete(id); }}>🗑</button>
        </div>
      </div>
    </div>
  );
}

export default StudentCard;
