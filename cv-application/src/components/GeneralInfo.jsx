import '../styles/GeneralInfo.css'
import { useState } from 'react'

export default function GeneralInfo({ value, setValue }) {
    const [localInput, setLocalInput] = useState({
        name: '',
        email: '',
        phone: ''
    });

    const handleClick = () => {
        console.log(localInput);
        setValue(localInput);
    };

    return (
        <div className='section'>
            <h2>Name</h2>
            <input
                value={localInput.name}
                onChange={(e) => setLocalInput(prev => ({
                    ...prev,
                    name: e.target.value
                }))}
            />
            <h2>Email</h2>
            <input
                value={localInput.email}
                onChange={(e) => setLocalInput(prev => ({
                    ...prev,
                    email: e.target.value
                }))}
            />
            <h2>Phone</h2>
            <input
                value={localInput.phone}
                onChange={(e) => setLocalInput(prev => ({
                    ...prev,
                    phone: e.target.value
                }))}
            />
            <button onClick={handleClick}>Submit</button>
        </div>
    )
}