// src/components/CustomerCard.jsx
import React from 'react';

export default function CustomerCard({ customer, onDelete }) {
  return (
    <div className="card h-100">
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{customer.name}</h5>
        <p className="mb-1">{customer.company}</p>
        <p className="mb-3 small">{customer.email} • {customer.phone}</p>
        <div className="mt-auto d-flex justify-content-end">
          <button className="btn btn-sm btn-outline-danger" onClick={() => onDelete(customer.id)}>Delete</button>
        </div>
      </div>
    </div>
  );
}
