import React, { useState,useEffect } from 'react';
import LeftPanelNavbar from '../components/LeftPanelNavbar'
import HorizontalPanel from '../components/HorizontalNavbar'
import SubView from "../components/SubView";
import MainPage from "../components/MainPage";
import './OneBox.css'
import { useLocation, useNavigate } from "react-router-dom";
const Onebox = () => {
  
  const Navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");

  useEffect(() => {
    if (!token) {
      Navigate("/login");
    }
    if (token) {
      localStorage.setItem("token", `Bearer ${token}`);
    }
  }, [token]);

  const [selectedComponent, setSelectedComponent] = useState(null); 

  const handleMenuItemClick = (path: any) => {
    setSelectedComponent(path);
  };

  if (selectedComponent === null) {
    return (
      <div className="h-screen w-screen dark:bg-black bg-white pl-14">
        <LeftPanelNavbar onMenuItemClick={handleMenuItemClick} />
        <HorizontalPanel />
        <SubView />
      </div>
    );
  }
  
  return (
    <>
    <div className="h-screen w-screen dark:bg-black bg-white pl-14">
      <LeftPanelNavbar onMenuItemClick={handleMenuItemClick}/>
      <HorizontalPanel/>
      <div>
        {/* Render the selected component */}
        {selectedComponent === "/" && <SubView />}
        {selectedComponent === "/search" && <SubView />}
        {selectedComponent === "/mail" && <SubView />}
        {selectedComponent === "/send" && <SubView />}
        {selectedComponent === "/stack" && <SubView />}
        {selectedComponent === "/inbox" && <MainPage />}
        {selectedComponent === "/stacks" && <SubView />}
      </div>
    </div>
    </>
  )
}

export default Onebox
