import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import { StyledButton, AppWrapper, Overlay } from "../styles/HomePageStyles";

const HomePage: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <AppWrapper>
      {isSidebarOpen && <Overlay />}
      <Outlet />
      <StyledButton onClick={toggleSidebar}>Explore web APIs</StyledButton>
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
    </AppWrapper>
  );
};

export default HomePage;
