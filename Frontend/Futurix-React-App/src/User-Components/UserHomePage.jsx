import React from 'react';
import './user.css'
import { SideMenu } from './SideMenu';
import { Navbar } from './Navbar';
import { Footer } from './Footer'
import { Outlet } from 'react-router-dom'


// const HomePage = () => (
//     <div className="flex flex-col h-screen">
//       <Navbar />
//       <div className="flex flex-1 w-full">
//         {/* SideMenu */}
//         <div className="w-1/6 flex justify-center md:justify-center">
//           <SideMenu />
//         </div>
  
//         {/* Outlet */}
//         <div className="flex-1 flex justify-center items-center">
//           <Outlet />
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
  
const HomePage = () => (
    <div className="relative h-screen">
      <Navbar isUser />
      <div className="flex flex-1 ">
        {/* SideMenu */}
        <div className="w-1/6 sm:max-xl:sticky top-0 h-screen">
          <SideMenu />
        </div>
  
        {/* Outlet */}
        <div className="flex-1 flex justify-center items-center">
          <Outlet />
        </div>
      </div>
      <div className='w-[98.5vw] bg-[#0b0d19] flex justify-center items-center'>
        <Footer />
      </div>
    </div>
);
  
  

export default HomePage;

