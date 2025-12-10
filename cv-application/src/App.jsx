import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GeneralInfo from './components/generalInfo'
import DisplayCV from './components/DisplayCV'
import Company from './components/Company'
import DisplayCompany from './components/DisplayCompany'
import Education from './components/Education'
import DisplayEducation from './components/DisplayEducation'

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [companyInfo, setCompanyInfo] = useState([]);
  const [schoolInfo, setSchoolInfo] = useState({
    school: '',
    major: '',
    fromdate: '',
    todate: ''
  });

  return (
    <div className='format'>
      <div>
        <GeneralInfo
          value={generalInfo}
          setValue={setGeneralInfo}
        />
        <Education
          value={schoolInfo}
          setValue={setSchoolInfo}
        />
        <Company
          value={companyInfo}
          setValue={setCompanyInfo}
        />
      </div>
      <div>
        <DisplayCV
          value={generalInfo}
        />
        <DisplayEducation
          value={schoolInfo}
        />
        <DisplayCompany
          value={companyInfo}
          setValue={setCompanyInfo}
        />
      </div>
    </div>
  )
}

export default App
