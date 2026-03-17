import React, { useState, useEffect } from 'react';

const INITIAL_STATE = { name: '', course: '', year: '', agree: false };

function RegisterForm({ onAdd, onClose, editingStudent }) {
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (editingStudent) {
      setFormData({
        name: editingStudent.name,
        course: editingStudent.course,
        year: editingStudent.year,
        agree: true
      });
    } else {
      setFormData(INITIAL_STATE);
    }
  }, [editingStudent]);

  const handleChange = ({ target: { name, value, type, checked } }) => {
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.course.trim()) newErrors.course = 'Course is required';
    if (!formData.year) newErrors.year = 'Select a year';
    if (!formData.agree) newErrors.agree = 'Please confirm details';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    onAdd(formData);
    setFormData(INITIAL_STATE);
    setErrors({});
  };

  const Field = ({ label, name, type = 'text', placeholder }) => (
    <div className="form-group">
      <label>{label}</label>
      <input
        type={type}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        placeholder={placeholder}
        className={errors[name] ? 'input-error' : ''}
      />
      {errors[name] && <span className="error-msg">{errors[name]}</span>}
    </div>
  );

  return (
    <div className="form-container">
      <div className="form-header">
        <h3 className="form-title">{editingStudent ? '✏️ Edit Student' : '📋 Register New Student'}</h3>
        <button className="btn-close" onClick={onClose}>✕</button>
      </div>

      <form onSubmit={handleSubmit}>
        <Field label="Full Name" name="name" placeholder="e.g. Ravi Kumar" />
        <Field label="Course" name="course" placeholder="e.g. Computer Science" />

        <div className="form-group">
          <label>Year</label>
          <select name="year" value={formData.year} onChange={handleChange}
            className={errors.year ? 'input-error' : ''}>
            <option value="">-- Select Year --</option>
            {['1st Year', '2nd Year', '3rd Year', '4th Year'].map((y) => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>
          {errors.year && <span className="error-msg">{errors.year}</span>}
        </div>

        <div className="form-group checkbox-group">
          <label>
            <input type="checkbox" name="agree"
              checked={formData.agree} onChange={handleChange} />
            &nbsp; I confirm details are correct
          </label>
          {errors.agree && <span className="error-msg">{errors.agree}</span>}
        </div>

        <button type="submit" className="btn-primary">{editingStudent ? '✅ Update Student' : '✅ Register Student'}</button>
      </form>
    </div>
  );
}

export default RegisterForm;
