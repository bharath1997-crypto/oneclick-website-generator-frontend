import React from 'react';

function PreviewPage() {
  const formData = JSON.parse(localStorage.getItem('userFormData')) || {};
  const selectedProfession = localStorage.getItem('selectedProfession') || "User";

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow space-y-4">
      <h1 className="text-3xl font-bold">{formData.name}</h1>
      <p className="italic">{selectedProfession}</p>
      <p>{formData.bio}</p>

      {formData.skills && (
        <div>
          <h2 className="text-xl font-semibold">Skills</h2>
          <p>{formData.skills}</p>
        </div>
      )}

      {formData.specialization && (
        <div>
          <h2 className="text-xl font-semibold">Specialization</h2>
          <p>{formData.specialization}</p>
        </div>
      )}

      {formData.education && (
        <div>
          <h2 className="text-xl font-semibold">Education</h2>
          <p>{formData.education}</p>
        </div>
      )}

      {formData.projects && (
        <div>
          <h2 className="text-xl font-semibold">Projects/Publications</h2>
          <p>{formData.projects}</p>
        </div>
      )}

      {formData.certifications && (
        <div>
          <h2 className="text-xl font-semibold">Certifications</h2>
          <p>{formData.certifications}</p>
        </div>
      )}

      {formData.achievements && (
        <div>
          <h2 className="text-xl font-semibold">Achievements</h2>
          <p>{formData.achievements}</p>
        </div>
      )}

      <div>
        <h2 className="text-xl font-semibold">Contact</h2>
        <p>{formData.contact}</p>
      </div>
    </div>
  );
}

export default PreviewPage;
