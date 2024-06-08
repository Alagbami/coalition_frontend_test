import React from 'react';
import LeftSidebar from './LeftSidebar';
import BloodPressure from './BloodPressure';
import RightSidebar from './RightSidebar';
import VitalSigns from './VitalSigns';

const MainContent: React.FC = () => {
  return (
    <div className="flex h-screen">
      <LeftSidebar />
      <div className="flex-grow w-[50%] bg-gray-100 p-4">
        <h1 className="text-2xl font-bold mb-4">Diagnosis History</h1>
        <BloodPressure />
        <VitalSigns />
        <h1 className='mt-6 text-lg bg-red-400'>Dear Hiring Manager, kindly know that this is a problem I can solve with my tech skills, if only you can extend the time for me.</h1>
      </div>
      <RightSidebar />
    </div>
  );
};

export default MainContent;
