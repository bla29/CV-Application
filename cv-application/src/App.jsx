import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GeneralInfo from './components/generalInfo'
import DisplayCV from './components/DisplayCV'
import Company from './components/Company'
import DisplayCompany from './components/DisplayCompany'

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [companyInfo, setCompanyInfo] = useState([]);

  return (
    <div className='format'>
      <div>
        <GeneralInfo
          value={generalInfo}
          setValue={setGeneralInfo}
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
        <DisplayCompany
          value={companyInfo}
        />
      </div>
    </div>
  )
}

export default App
