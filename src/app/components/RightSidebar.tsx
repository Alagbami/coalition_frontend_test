"use client"

import React, { useEffect, useState } from 'react';

interface PatientData {
  name: string;
  gender: string;
  age: number;
  profile_picture: string;
  date_of_birth: string;
  phone_number: string;
  emergency_contact: string;
  insurance_type: string;
  diagnosis_history: {
    month: string;
    year: number;
    blood_pressure: {
      systolic: {
        value: number;
        levels: string;
      };
      diastolic: {
        value: number;
        levels: string;
      };
    };
    heart_rate: {
      value: number;
      levels: string;
    };
    respiratory_rate: {
      value: number;
      levels: string;
    };
    temperature: {
      value: number;
      levels: string;
    };
  }[];
  diagnostic_list: {
    name: string;
    description: string;
    status: string;
  }[];
  lab_results: string[];
}

const RightSidebar: React.FC = () => {
  const [data, setData] = useState<PatientData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const myHeaders = new Headers();
      myHeaders.append("Authorization", "Basic Y29hbGl0aW9uOnNraWxscy10ZXN0");

      const requestOptions: RequestInit = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow' as RequestRedirect,
      };

      try {
        const response = await fetch("https://fedskillstest.coalitiontechnologies.workers.dev", requestOptions);
        const result: PatientData[] = await response.json();
        const jessicaData = result.find(patient => patient.name === "Jessica Taylor");
        setData(jessicaData || null);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white p-4 w-[20%] h-screen overflow-y-auto">
      <h2 className="text-xl font-bold mb-4">Patient Info</h2>
      <div className="mb-4">
        <img src={data.profile_picture} alt={`${data.name}'s Profile`} className="h-20 w-20 rounded-full mx-auto mb-4" />
        <h3 className="text-center font-semibold text-lg">{data.name}</h3>
      </div>
      <div className="mb-4">
        <h4 className="font-bold">Date of Birth</h4>
        <p>{data.date_of_birth}</p>
      </div>
      <div className="mb-4">
        <h4 className="font-bold">Gender</h4>
        <p>{data.gender}</p>
      </div>
      <div className="mb-4">
        <h4 className="font-bold">Contact Info</h4>
        <p>{data.phone_number}</p>
      </div>
      <div className="mb-4">
        <h4 className="font-bold">Emergency Contact</h4>
        <p>{data.emergency_contact}</p>
      </div>
      <div className="mb-4">
        <h4 className="font-bold">Insurance Provider</h4>
        <p>{data.insurance_type}</p>
      </div>

      <button className='bg-[#01F0D0] text-[#072635] text-center rounded-[41px] ml-5 p-[12px]'>Show All Infomation</button>
    </div>
  );
};

export default RightSidebar;
