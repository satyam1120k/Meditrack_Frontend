import React from "react";

interface Patient {
  id: string;
  name: string;
  age: number;
  gender: string;
  city: string;
  height: number;
  weight: number;
  bmi?: number;
  bmi_category?: string;
}

interface PatientListProps {
  patients: Patient[];
  loading: boolean;
  onSelectPatient: (patient: Patient) => void;
}

const PatientList: React.FC<PatientListProps> = ({ patients, loading, onSelectPatient }) => {
  if (loading) return <div className="text-center col-span-full">Loading patients...</div>;
  if (patients.length === 0) return <div className="text-center col-span-full text-gray-500">No patients found.</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-h-[70vh] overflow-y-auto">
      {patients.map((patient) => (
        <div
          key={patient.id}
          onClick={() => onSelectPatient(patient)}
          className="bg-white shadow-md rounded-xl p-4 cursor-pointer hover:shadow-xl transition"
        >
          <h2 className="font-semibold text-lg">{patient.name}</h2>
          <p className="text-gray-500">ID: {patient.id}</p>
        </div>
      ))}
    </div>
  );
};

export default PatientList;
