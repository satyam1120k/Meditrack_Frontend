# Meditrack - Patient Management System

**Meditrack** is a modern web application for managing patient information. It allows users to **add, view, edit, delete, and search patients** with an intuitive and responsive interface.  

This project demonstrates full-stack development skills using **TypeScript, React, TailwindCSS, Vite, FastAPI, and Firebase**.

---

## 🛠 Tech Stack

**Frontend**:  
- React + TypeScript  
- TailwindCSS for responsive UI  
- Vite for fast bundling  

**Backend**:  
- Python + FastAPI for RESTful APIs  
- Firebase Realtime Database for storing patient data  

---

## ⚙️ Features

- **Add Patient**: Slide-in form to add patient details like name, age, gender, height, weight, and city.  
- **View Patient**: Click a patient card to view complete details including **BMI and BMI category**.  
- **Edit Patient**: Pre-filled form to update patient details.  
- **Delete Patient**: Remove a patient from the database with confirmation.  
- **Search Patient**: Search patients by name in real-time.  
- **Responsive UI**: Works perfectly on desktop and mobile screens.  
- **Real-time updates**: Changes are reflected immediately after add/edit/delete actions.

---

## 🗂 Project Structure
<pre>
Meditrack/
├── frontend/ # React + TypeScript + TailwindCSS
│ ├── src/
│ │ ├── components/ # Reusable UI components (PatientForm, PatientModal, etc.)
│ │ ├── pages/ # Page components (HomePage)
│ │ ├── App.tsx
│ │ └── main.tsx
│ └── package.json
├── backend/ # FastAPI backend
│ ├── main.py # API routes for CRUD operations
│ ├── models.py # Pydantic models for validation
│ └── requirements.txt
├── README.md # Project documentation
└── .gitignore
</pre>
## 🧩 How to Use

1. Open the **Meditrack app** in your browser.  
2. Click **“+” Add Patient** to add a new patient.  
3. Click a patient card to view details in a modal.  
4. Inside modal, click **Edit** to update patient info or **Delete** to remove a patient.  
5. Use the **Search bar** to filter patients by name.  
6. All changes are automatically synced with Firebase.

---

## 📂 Skills Demonstrated

- **Frontend**: TypeScript, React, TailwindCSS, Vite  
- **Backend**: Python, FastAPI, REST API design, Pydantic validation  
- **Database**: Firebase Realtime Database integration  
- **Full-stack development**: Handling CRUD operations, state management, and UI/UX design  
- **UI/UX skills**: Responsive design, slide-in forms, modals, real-time search  

---

## 🔗 Future Improvements

- Add **authentication** for doctors/admins  
- Include **reports and statistics** for patients  
- Implement **pagination** for large datasets  
- Mobile app version using **React Native or Flutter**  

---

## 📄 License

This project is licensed under the **MIT License**.



