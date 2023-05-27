import React from 'react';

function CompanyCard({ company }) {
  return (
    <div>
      <h3>{company.name}</h3>
      <p>{company.description}</p>
      {/* Add any other company information to display */}
    </div>
  );
}

export default CompanyCard;
