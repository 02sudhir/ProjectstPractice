import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import dashboardImage1 from '../assets/Dashboard.png';
import dashboardImage2 from '../assets/Dashboard-active.png';
import projectlist from '../assets/Project-list.png';
import otherprojectlist from '../assets/Project-list-active.png';
import craeteproj from '../assets/create-project.png'
import  othercraeteproj from '../assets/create-project-active.png'

const Navbar = () => {


  const [currentImage1, setCurrentImage1] = useState(dashboardImage1);
  const [currentImage2, setCurrentImage2] = useState(projectlist);
  const [currentImage3, setCurrentImage3] = useState(craeteproj);

  const handleTab1Click = () => {
    setCurrentImage1(dashboardImage2);
    setCurrentImage2(projectlist);
    setCurrentImage3(craeteproj);
  };

  const handleTab2Click = () => {
    setCurrentImage1(dashboardImage1);
    setCurrentImage2(otherprojectlist);
    setCurrentImage3(craeteproj);
  };

  const handleTab3Click = () => {
    setCurrentImage1(dashboardImage1);
    setCurrentImage2(projectlist);
    setCurrentImage3(othercraeteproj);
  };
  
  return (
    <div className='navabar'>
      <Nav className="flex flex-col bg-light h-screen justify-start items-start" style={{ height: '100vh' }}>
      <Nav.Link as={Link} to="/tab1"  onClick={handleTab1Click}> 
      <img src={currentImage1} alt="Tab 1 Icon" />
      </Nav.Link>
     
      <Nav.Link  href="/tab2" onClick={handleTab2Click}>
      <img src={currentImage2} alt="Tab 1 Icon" />
      </Nav.Link>
      <Nav.Link href="/tab3" onClick={handleTab3Click}>
      <img src={currentImage3} alt="Tab 1 Icon" />
      </Nav.Link>
    </Nav>
    </div>
  );
};

export default Navbar;
