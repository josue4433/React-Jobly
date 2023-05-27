import React, { useState, useEffect } from 'react';
import JoblyApi from './api';
import CompanyCard from './CompanyCard';

function CompanyList() {
  const [search, setSearch] = useState('');
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    async function fetchCompanies() {
      const response = await JoblyApi.getCompanies(search);
      setCompanies(response.companies);
    }

    fetchCompanies();
  }, [search]);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <h2>Companies</h2>
      <input type="text" value={search} onChange={handleSearchChange} placeholder="Search companies" />
      {companies.map((company) => (
        <CompanyCard key={company.id} company={company} />
      ))}
    </div>
  );
}

export default CompanyList;
