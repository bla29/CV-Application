import '../styles/GeneralInfo.css'
import { useState } from 'react'

export default function GeneralInfo({ value, setValue }) {
    const [localInput, setLocalInput] = useState({
        name: '',
        email: '',
        phone: ''
    });
    const [status, setStatus] = useState(false);

    const handleSubmitClick = () => {
        if (localInput.name === '' && localInput.email === '' && localInput.phone === '') {
            return;
        }
        setStatus(true);
        setValue(localInput);
    };

    const handleEditClick = () => {
        setStatus(false);
    }

    return (
        <div className='section'>
            <h2>Name</h2>
            <input
                value={localInput.name}
                onChange={(e) => setLocalInput(prev => ({
                    ...prev,
                    name: e.target.value
                }))}
                disabled={status}
            />
            <h2>Email</h2>
            <input
                value={localInput.email}
                onChange={(e) => setLocalInput(prev => ({
                    ...prev,
                    email: e.target.value
                }))}
                disabled={status}
            />
            <h2>Phone</h2>
            <input
                value={localInput.phone}
                onChange={(e) => setLocalInput(prev => ({
                    ...prev,
                    phone: e.target.value
                }))}
                disabled={status}
            />
            <button onClick={handleSubmitClick} disabled={status}>Submit</button>
            <button onClick={handleEditClick} disabled={!status}>Edit</button>
        </div>
    )
}