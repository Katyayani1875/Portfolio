import React from 'react';
import ProfileSidebar from './ProfileSideBar'; // Import the new sidebar component
import Navbar from './Navbar'; // Assuming your Navbar is in Navbar.js

const AppLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      {/* Fixed Profile Sidebar (visible on large screens) */}
      <div className="hidden lg:block lg:w-1/4 xl:w-1/5"> {/* Occupies space, but sidebar is fixed */}
        <ProfileSidebar />
      </div>

      {/* Main Content Area (scrollable) */}
      <div className="flex-1 overflow-y-auto relative lg:ml-[25%] xl:ml-[20%]"> {/* Adjust margin for sidebar width */}
        {/* Navbar is positioned at the top of the scrollable content */}
        <Navbar />
        
        {/* Render all children components (Hero, About, Skills, etc.) here */}
        {children}
      </div>
    </div>
  );
};

export default AppLayout;
