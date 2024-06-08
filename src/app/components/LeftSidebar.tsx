import React from 'react';

const patients = [
  { userImage: '/assets/images/layer1.png', fullName: 'Emily Wimmams', gender: 'Male', age: 45 },
  { userImage: '/assets/images/layer2.png', fullName: 'Adeleke Abiodun', gender: 'Female', age: 34 },
  { userImage: '/assets/images/layer3.png', fullName: 'Brandon Mitchell', gender: 'Male', age: 29 },
  { userImage: '/assets/images/layer4.png', fullName: 'Jesical Taylor', gender: 'Female', age: 28 },
  { userImage: '/assets/images/layer5.png', fullName: 'Samantha Johnson', gender: 'Male', age: 38 },
  { userImage: '/assets/images/layer6.png', fullName: 'Patricia Taylor', gender: 'Female', age: 27 },
  { userImage: '/assets/images/layer6.png', fullName: 'Michael White', gender: 'Male', age: 41 },
  { userImage: '/assets/images/layer6.png', fullName: 'Linda Black', gender: 'Female', age: 36 },
  { userImage: '/assets/images/layer6.png', fullName: 'James Brown', gender: 'Male', age: 50 },
  { userImage: '/assets/images/layer6.png', fullName: 'Barbara Green', gender: 'Female', age: 47 },
  { userImage: '/assets/images/layer6.png', fullName: 'Steven King', gender: 'Male', age: 32 },
  { userImage: '/assets/images/layer6.png', fullName: 'Elizabeth Scott', gender: 'Female', age: 29 },
];

const LeftSidebar: React.FC = () => {
  return (
    <div className="bg-white p-4 w-[20%] h-screen overflow-y-auto">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Patients</h2>
        <img src="assets/icons/search.png" alt="Search Icon" className="h-4 w-4" />
      </div>
      <ul>
        {patients.map((patient, index) => (
          <li
            key={index}
            className={`flex items-center justify-between mb-4 p-2 rounded ${patient.fullName === 'Jesical Taylor' ? 'bg-green-200' : ''}`}
          >
            <div className="flex items-center">
              <img
                src={patient.userImage}
                alt={`${patient.fullName}'s image`}
                className="h-10 w-10 rounded-full mr-4"
              />
              <div className="flex flex-col">
                <span className="text-sm font-semibold">{patient.fullName}</span>
                <span className="text-xs text-gray-600">{patient.gender}, {patient.age}</span>
              </div>
            </div>
            <div className="flex items-center">
              <span className="h-8 w-8 flex items-center justify-center">...</span>
            </div>
            {/*<img src="assets/icons/more_horiz.png" alt="Menu Icon" className="h-6 w-6" />*/}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftSidebar;

  