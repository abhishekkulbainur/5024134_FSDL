import { useState, useEffect } from 'react';
import { createStudent, filterStudents, fetchMockStudents } from '../utils/helpers';

export function useStudents() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem('students');
    if (saved) {
      setStudents(JSON.parse(saved));
      setLoading(false);
    } else {
      const load = async () => {
        const data = await fetchMockStudents();
        setStudents(data);
        localStorage.setItem('students', JSON.stringify(data));
        setLoading(false);
      };
      load();
    }
  }, []);

  useEffect(() => {
    if (!loading) {
      localStorage.setItem('students', JSON.stringify(students));
    }
  }, [students, loading]);

  const addStudent = (formData) => {
    const newStudent = createStudent(formData);
    setStudents((prev) => [...prev, newStudent]);
  };

  const editStudent = (id, formData) => {
    setStudents((prev) =>
      prev.map((s) =>
        s.id === id
          ? { ...s, ...formData, name: formData.name.trim(), course: formData.course.trim() }
          : s
      )
    );
  };

  const deleteStudent = (id) =>
    setStudents((prev) => prev.filter((s) => s.id !== id));

  const toggleStatus = (id) =>
    setStudents((prev) =>
      prev.map((s) =>
        s.id === id
          ? { ...s, status: s.status === 'Active' ? 'Inactive' : 'Active' }
          : s
      )
    );

  const filtered = filterStudents(students, search);

  return { students, filtered, search, setSearch, loading, addStudent, editStudent, deleteStudent, toggleStatus };
}
