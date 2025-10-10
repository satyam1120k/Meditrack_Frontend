# Meditrack Frontend

A modern, responsive React application for managing patient information with a clean and intuitive user interface. This frontend application provides comprehensive patient management capabilities including adding, viewing, editing, and deleting patient records.

## 🚀 Live Demo

Visit the live application: [Meditrack Frontend](https://samir1120k.github.io/Meditrack_Frontend)
Visit the live API: [Meditrack API](https://meditrack-backend-murex.vercel.app)
Docs of API for testing: [API Docs](https://meditrack-backend-murex.vercel.app/docs)

## 📋 Features

- **Patient Management**: Complete CRUD operations for patient records
- **Search Functionality**: Real-time search through patient names
- **Responsive Design**: Mobile-first design that works on all devices
- **Modern UI**: Clean, intuitive interface built with Tailwind CSS
- **BMI Calculation**: Automatic BMI calculation and categorization
- **Modal Views**: Detailed patient information in modal overlays
- **Slide Forms**: Smooth sliding forms for adding new patients
- **Real-time Updates**: Instant UI updates after operations

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.1.1 with TypeScript
- **Build Tool**: Vite 7.1.7
- **Styling**: Tailwind CSS 4.1.14
- **Icons**: Lucide React
- **Backend**: Python
- **API**: Fast API
- **Database**: Firebase
- **Frontend Deployment**: GitHub Pages
- **Backend Development**: Vercel
- **Package Manager**: npm

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── EditPatientForm.tsx    # Form for editing patient details
│   ├── PatientActions.tsx     # Action buttons (Edit/Delete)
│   ├── PatientForm.tsx        # Form for adding new patients
│   ├── PatientList.tsx        # Grid display of patient cards
│   ├── PatientModal.tsx       # Modal for viewing patient details
│   ├── PatientSlideForm.tsx   # Sliding form container
│   └── SearchBar.tsx          # Search input component
├── pages/               # Page components
│   └── HomePage.tsx           # Main application page
├── config.ts            # API configuration and URL building
├── App.tsx              # Root application component
├── main.tsx             # Application entry point
├── index.css            # Global styles
└── App.css              # Component-specific styles
```

## 🔧 Installation & Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/samir1120k/Meditrack_Frontend.git
   cd Meditrack_Frontend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

## 🔌 API Configuration

The application connects to a backend API for patient data management. The API configuration is centralized in `src/config.ts`:

- **Default API URL**: `https://meditrack-backend-murex.vercel.app`
- **Environment Variable**: `VITE_API_BASE_URL`
- **Runtime Override**: `window.__API_BASE_URL__`

### API Endpoints Used

Using Fast API in backend to link with database.

- `GET /patients/viewAll` - Fetch all patients
- `POST /patients/` - Create new patient
- `PUT /patients/update/{id}` - Update patient
- `DELETE /patients/delete/{id}` - Delete patient

## 🎨 User Interface

### Main Features

1. **Header Section**

   - Application title "Meditrack"
   - Search bar with real-time filtering

2. **Patient Grid**

   - Responsive card layout (1-3 columns based on screen size)
   - Patient name and ID display
   - Click to view detailed information

3. **Patient Modal**

   - Complete patient information display
   - BMI calculation and category
   - Edit and Delete action buttons

4. **Add Patient Form**

   - Sliding form from the right side
   - Form validation and error handling
   - Auto-calculation of BMI

5. **Edit Patient Form**
   - Modal overlay for editing
   - Pre-filled form with current data
   - ID field disabled (non-editable)

### Patient Data Model

```typescript
interface Patient {
  id: string; // Unique patient identifier
  name: string; // Patient's full name
  age: number; // Age in years
  gender: string; // Male/Female/Other
  city: string; // City of residence
  height: number; // Height in centimeters
  weight: number; // Weight in kilograms
  bmi?: number; // Calculated BMI
  bmi_category?: string; // BMI category (Underweight/Normal/Overweight/Obese)
}
```

## 🔄 Application Workflow

### Adding a Patient

1. Click the "+" button (bottom-right corner)
2. Fill out the sliding form with patient details
3. Submit to create new patient record
4. Form closes and patient list refreshes

### Viewing Patient Details

1. Click on any patient card in the grid
2. Modal opens with complete patient information
3. View BMI calculation and category
4. Access edit/delete actions

### Editing a Patient

1. Open patient modal
2. Click "Edit" button
3. Modify patient information in the edit form
4. Submit changes
5. Modal closes and data refreshes

### Deleting a Patient

1. Open patient modal
2. Click "Delete" button
3. Confirm deletion in browser dialog
4. Patient is removed and list refreshes

### Searching Patients

1. Type in the search bar (top-right)
2. Patient list filters in real-time
3. Search is case-insensitive and matches patient names

## 🎯 Key Components

### HomePage

- Main application container
- Manages patient state and API calls
- Handles search functionality
- Coordinates between components

### PatientList

- Displays patients in responsive grid
- Handles loading and empty states
- Click handlers for patient selection

### PatientModal

- Shows detailed patient information
- Integrates PatientActions component
- Click-outside-to-close functionality

### PatientForm

- Handles new patient creation
- Form validation and submission
- Auto-calculation of BMI

### EditPatientForm

- Modal form for patient updates
- Pre-populated with current data
- ID field protection

### PatientActions

- Edit and Delete buttons
- Confirmation dialogs
- API integration for operations

## 🚀 Deployment

The application is configured for GitHub Pages deployment:

1. **Build the application**

   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```

The `gh-pages` package handles the deployment process automatically.

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_BASE_URL=your_api_url_here
```

### Vite Configuration

The `vite.config.ts` includes:

- React plugin
- Tailwind CSS plugin
- GitHub Pages base path configuration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Samir**

- GitHub: [@samir1120k](https://github.com/samir1120k)

## 🙏 Acknowledgments

- Built with React and TypeScript
- Styled with Tailwind CSS
- Icons provided by Lucide React
- Deployed on GitHub Pages

---

For any questions or support, please open an issue on GitHub.
