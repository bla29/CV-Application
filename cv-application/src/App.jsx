import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GeneralInfo from './components/generalInfo'
import DisplayCV from './components/DisplayCV'

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: '',
    email: '',
    phone: ''
  });

  return (
    <div className='format'>
      <div>
        <GeneralInfo
          value={generalInfo}
          setValue={setGeneralInfo}
        />
      </div>
      <div>
        <DisplayCV
          value={generalInfo}
        />
      </div>
    </div>
  )
}

export default App
