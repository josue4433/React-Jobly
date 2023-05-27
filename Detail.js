import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import JoblyApi from './api';

function CompanyDetail() {
  const { companyId } = useParams();
  const [company, setCompany] = useState(null);

  useEffect(() => {
    async function fetchCompany() {
      const response = await JoblyApi.getCompany(companyId);
      setCompany(response);
    }

    fetchCompany();
  }, [companyId]);

  if (!company) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{company.name}</h2>
      <p>{company.description}</p>
      {/* Add any other company details to display */}
    </div>
  );
}

export default CompanyDetail;
