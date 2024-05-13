import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function ProjectListing() {
  const [formDataList, setFormData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredRecords, setFilteredRecords] = useState([]);
  const recordsPerPage = 2;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = filteredRecords.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(filteredRecords.length / recordsPerPage);
  const pageNumbers = [...Array(totalPages + 1).keys()].slice(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/formdata');
        setFormData(response.data);
        setFilteredRecords(response.data); // Initially set filtered records to all data
      } catch (error) {
        console.error('Error fetching form data:', error);
      }
    };

    fetchData();
  }, []);

  const handleFilter = (event) => {
    const searchQuery = event.target.value.toLowerCase();
    const filteredData = formDataList.filter(item =>
      item.description.toLowerCase().includes(searchQuery)
    );
    setFilteredRecords(filteredData);
    setCurrentPage(1); // Reset current page when filtering
  };

  return (
    <>
      <Navbar />
      <h2>Form Data:</h2>
      <input type='text' className='form-control w-64' placeholder='🔍 SEARCH' onChange={handleFilter} />
      <table className='table'>
        <thead>
          <tr>
            <th>Description</th>
            <th>Reason</th>
            <th>Type</th>
            <th>Filters</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {records.map((formData, index) => (
            <tr key={index}>
              <td>{formData.description}</td>
              <td>{formData.reason}</td>
              <td>{formData.type}</td>
              <td>{formData.filters}</td>
              <td>{formData.startDate}</td>
              <td>{formData.endDate}</td>
              <td>{formData.location}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <nav>
        <ul className='pagination'>
          <li className='page-item'>
            <a href='#' className='page-link' onClick={prevPage}> Previous</a>
          </li>
          {pageNumbers.map((n, i) => (
            <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
              <a href='#' className='page-link' onClick={() => changePage(n)}>{n}</a>
            </li>
          ))}
          <li className='page-item'>
            <a href='#' className='page-link' onClick={nextPage}> Next</a>
          </li>
        </ul>
      </nav>
    </>
  );

  function prevPage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function changePage(page) {
    setCurrentPage(page);
  }

  function nextPage() {
    if (currentPage !== totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }
}

export default ProjectListing;
