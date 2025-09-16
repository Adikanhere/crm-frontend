// src/components/AddCustomerModal.jsx
import React, { useState } from 'react';

export default function AddCustomerModal({ onClose, onSave }) {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); onSave(form); };

  return (
    <div className="modal show d-block" tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add Customer</h5>
            <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input name="name" className="form-control" value={form.name} onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Company</label>
                <input name="company" className="form-control" value={form.company} onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input name="email" type="email" className="form-control" value={form.email} onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label className="form-label">Phone</label>
                <input name="phone" className="form-control" value={form.phone} onChange={handleChange} />
              </div>
              <div className="text-end">
                <button type="button" className="btn btn-secondary me-2" onClick={onClose}>Cancel</button>
                <button className="btn btn-primary">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
