import React from "react";
import { X } from "lucide-react";
import PatientActions from "./PatientActions";

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

interface PatientModalProps {
  patient: Patient;
  onClose: () => void;
  onPatientUpdated: () => void;
}

const PatientModal: React.FC<PatientModalProps> = ({ patient, onClose, onPatientUpdated }) => {
  return (
    <div
      className="fixed inset-0 bg-black/40 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl p-6 w-96 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl font-bold mb-4">{patient.name}</h2>

        <ul className="text-gray-700 space-y-2">
          <li><strong>ID:</strong> {patient.id}</li>
          <li><strong>Age:</strong> {patient.age}</li>
          <li><strong>Gender:</strong> {patient.gender}</li>
          <li><strong>City:</strong> {patient.city}</li>
          <li><strong>Height:</strong> {patient.height} m</li>
          <li><strong>Weight:</strong> {patient.weight} kg</li>
          <li><strong>BMI:</strong> {patient.bmi?.toFixed(2)}</li>
          <li><strong>BMI Category:</strong> {patient.bmi_category}</li>
        </ul>

        <PatientActions
          patient={patient}
          onClose={onClose}
          onPatientUpdated={onPatientUpdated}
        />
      </div>
    </div>
  );
};

export default PatientModal;
