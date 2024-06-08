"use client"

import React, { useEffect, useState } from 'react';

const VitalSigns: React.FC = () => {
  const [data, setData] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fedskillstest.coalitiontechnologies.workers.dev");
        const result = await response.json();
        const jessicaData = result.find((patient: any) => patient.name === "Jessica Taylor");
        setData(jessicaData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>No data found.</div>;
  }

  const { diagnosis_history } = data;

  return (
    <div>
      {diagnosis_history.map((history: any, index: number) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-4 mb-4">
          <h2 className="text-xl font-bold mb-2">{`${history.month} ${history.year}`}</h2>
          <div className="flex">
            <div
              className="w-1/3 p-4"
              style={{ backgroundColor: getColor(history.respiratory_rate.levels) }}
            >
              <h3 className="text-lg font-bold mb-2">Respiratory Rate</h3>
              <p>{`Value: ${history.respiratory_rate.value}`}</p>
            </div>
            <div
              className="w-1/3 p-4"
              style={{ backgroundColor: getColor(history.temperature.levels) }}
            >
              <h3 className="text-lg font-bold mb-2">Temperature</h3>
              <p>{`Value: ${history.temperature.value}`}</p>
            </div>
            <div
              className="w-1/3 p-4"
              style={{ backgroundColor: getColor(history.heart_rate.levels) }}
            >
              <h3 className="text-lg font-bold mb-2">Heart Rate</h3>
              <p>{`Value: ${history.heart_rate.value}`}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const getColor = (level: string): string => {
  switch (level) {
    case "Normal":
      return "#7DBE31"; // Green
    case "Lower than Average":
      return "#FFD700"; // Yellow
    case "Higher than Average":
      return "#FF5733"; // Red
    default:
      return "#FFFFFF"; // White (default)
  }
};

export default VitalSigns;



