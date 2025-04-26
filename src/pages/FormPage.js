import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function FormPage() {
  const history = useHistory();
  const selectedProfession = localStorage.getItem('selectedProfession');

  const [formData, setFormData] = useState({
    name: '',
    bio: '',
    skills: '',
    projects: '',
    contact: '',
    certifications: '',
    specialization: '',
    education: '',
    achievements: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('userFormData', JSON.stringify(formData));
    history.push('/preview');
  };

  const renderFields = () => {
    if (selectedProfession === "Software Developer") {
      return (
        <>
          <InputField name="skills" label="Programming Skills" />
          <InputField name="projects" label="Projects" />
          <InputField name="contact" label="Contact Details" />
        </>
      );
    }
    if (selectedProfession === "Cybersecurity Specialist") {
      return (
        <>
          <InputField name="skills" label="Cybersecurity Skills" />
          <InputField name="certifications" label="Certifications" />
          <InputField name="projects" label="Security Projects" />
          <InputField name="contact" label="Contact Details" />
        </>
      );
    }
    if (selectedProfession === "Business Analyst") {
      return (
        <>
          <InputField name="skills" label="Tools (Excel, SQL, Tableau)" />
          <InputField name="certifications" label="Certifications" />
          <InputField name="projects" label="Business Projects" />
          <InputField name="contact" label="Contact Details" />
        </>
      );
    }
    if (selectedProfession === "Core Engineer") {
      return (
        <>
          <InputField name="specialization" label="Engineering Specialization" />
          <InputField name="projects" label="Technical Projects" />
          <InputField name="certifications" label="Certifications" />
          <InputField name="contact" label="Contact Details" />
        </>
      );
    }
    if (selectedProfession === "Medical Professional") {
      return (
        <>
          <InputField name="specialization" label="Medical Specialization" />
          <InputField name="certifications" label="Medical Certifications" />
          <InputField name="projects" label="Research Publications" />
          <InputField name="contact" label="Contact Details" />
        </>
      );
    }
    if (selectedProfession === "Data Scientist") {
      return (
        <>
          <InputField name="skills" label="Tools (Python, R, TensorFlow)" />
          <InputField name="projects" label="Data Science Projects" />
          <InputField name="contact" label="Contact Details" />
        </>
      );
    }
    if (selectedProfession === "Researcher") {
      return (
        <>
          <InputField name="specialization" label="Research Field" />
          <InputField name="projects" label="Publications" />
          <InputField name="contact" label="Contact Details" />
        </>
      );
    }
    if (selectedProfession === "Student") {
      return (
        <>
          <InputField name="education" label="Education Details" />
          <InputField name="achievements" label="Achievements" />
          <InputField name="contact" label="Contact Details" />
        </>
      );
    }
    // Custom Template (Create Your Own)
    return (
      <>
        <InputField name="skills" label="Skills" />
        <InputField name="education" label="Education" />
        <InputField name="projects" label="Projects" />
        <InputField name="achievements" label="Achievements" />
        <InputField name="contact" label="Contact Details" />
      </>
    );
  };

  const InputField = ({ name, label }) => (
    <div className="mb-4">
      <label className="block font-medium mb-1">{label}</label>
      <input
        type="text"
        name={name}
        value={formData[name]}
        onChange={handleChange}
        required
        className="w-full border border-gray-300 rounded px-3 py-2"
      />
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6 p-4">
      <h2 className="text-2xl font-bold mb-4">Selected: {selectedProfession}</h2>
      <InputField name="name" label="Full Name" />
      <InputField name="bio" label="Short Bio" />
      {renderFields()}
      <button type="submit" className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700">
        Preview Website
      </button>
    </form>
  );
}

export default FormPage;
