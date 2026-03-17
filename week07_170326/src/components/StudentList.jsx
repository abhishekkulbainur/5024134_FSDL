import React from 'react';
import StudentCard from './StudentCard';
import { getTotalByYear } from '../utils/helpers';

function StudentList({ filtered, students, search, setSearch, onDelete, onToggle, onEdit, loading }) {
  const byYear = getTotalByYear(students);

  return (
    <div>
      <input
        className="search-box"
        type="text"
        placeholder="🔍 Search by name or course..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="year-stats">
        {Object.entries(byYear).map(([year, count]) => (
          <span key={year} className="year-tag">
            {year}: <strong>{count}</strong>
          </span>
        ))}
      </div>

      {loading ? (
        <p className="loading">⏳ Loading students...</p>
      ) : filtered.length === 0 ? (
        <p className="empty">No students found for "<strong>{search}</strong>"</p>
      ) : (
        <div className="card-grid">
          {filtered.map((student) => (
            <StudentCard
              key={student.id}
              student={student}
              onDelete={onDelete}
              onToggle={onToggle}
              onEdit={onEdit}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default StudentList;
