"use client"

import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';

Chart.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

interface BloodPressureData {
  systolic: {
    value: number;
    levels: string;
  };
  diastolic: {
    value: number;
    levels: string;
  };
}

interface DiagnosisHistory {
  month: string;
  year: number;
  blood_pressure: BloodPressureData;
}

interface PatientData {
  name: string;
  diagnosis_history: DiagnosisHistory[];
}

const BloodPressure: React.FC = () => {
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

  const months = data.diagnosis_history.map(record => `${record.month} ${record.year}`);
  const systolicData = data.diagnosis_history.map(record => record.blood_pressure.systolic.value);
  const diastolicData = data.diagnosis_history.map(record => record.blood_pressure.diastolic.value);

  const chartData = {
    labels: months,
    datasets: [
      {
        label: 'Systolic',
        data: systolicData,
        borderColor: '#C26EB4',
        backgroundColor: '#E66FD2',
      },
      {
        label: 'Diastolic',
        data: diastolicData,
        borderColor: '#7E6CAB',
        backgroundColor: '#8C6FE6',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Blood Pressure Over Time',
        font: {
          size: 16,
          weight: 'bold' as 'bold', // Correct type for font weight
        }
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Date',
          font: {
            weight: 'bold' as 'bold', // Correct type for font weight
          }
        },
      },
      y: {
        title: {
          display: true,
          text: 'Blood Pressure (mmHg)',
          font: {
            weight: 'bold' as 'bold', // Correct type for font weight
          }
        }
      }
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xlfont-bold mb-4">Jessica Taylor's Blood Pressure</h2>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default BloodPressure;

