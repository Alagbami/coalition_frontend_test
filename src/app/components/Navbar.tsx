import React from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white text-[#072635] p-4 flex justify-between items-center">
      <div className="flex items-center">
        <div className="mr-16">
          <img src="assets/images/testlogo.png" alt="Techcare Logo" className="h-8" />
        </div>
        <div className="flex items-center ml-14 space-x-4">
          <Link href="/">
            <div className="flex items-center mr-4 p-2">
              <img src="assets/icons/home.png" alt="home icon" className="h-[16px] mr-1" />
              <span className="text-lg">Overview</span>
            </div>
          </Link>
          <Link href="/">
            <div className="flex items-center bg-[#01F0D0] rounded-[41px] font-bold mr-4 p-2">
              <img src="assets/icons/group_user.png" alt="patient icon" className="h-[16px] mr-1" />
              <span className="text-lg">Patient</span>
            </div>
          </Link>
          <Link href="/">
            <div className="flex items-center mr-4 p-2">
              <img src="assets/icons/schedule.png" alt="schedule icon" className="h-[16px] mr-1" />
              <span className="text-lg">Schedule</span>
            </div>
          </Link>
          <Link href="/">
            <div className="flex items-center mr-4 p-2">
              <img src="assets/icons/chat.png" alt="message icon" className="h-[16px] mr-1" />
              <span className="text-lg">Message</span>
            </div>
          </Link>
          <Link href="/">
            <div className="flex items-center mr-4 p-2">
              <img src="assets/icons/credit.png" alt="transaction icon" className="h-[16px] mr-1" />
              <span className="text-lg">Transaction</span>
            </div>
          </Link>
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex items-center mr-4">
          <img src="/assets/images/senior-woman.png" alt="User" className="h-8 rounded-full mr-2" />
          <div>
            <span className="font-bold text-lg">Dr. Jose Simmons</span>
            <span className="block text-sm">General Practitioner</span>
          </div>
        </div>
        <img src="assets/icons/settings.png" alt="settings icon" className="h-6 mr-4" />
        <img src="assets/icons/more_vert.png" alt="menu icon" className="h-6" />
      </div>
    </nav>
  );
};

export default Navbar;
