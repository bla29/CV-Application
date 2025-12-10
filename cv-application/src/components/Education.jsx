import '../styles/Education.css'
import { useState } from 'react'

export default function Education({ value, setValue }) {
    const [localInput, setLocalInput] = useState({
        school: '',
        major: '',
        fromdate: '',
        todate: ''
    });

    const [status, setStatus] = useState(false);
    const handleSubmitClick = () => {
        if (localInput.school === '' && localInput.major === '' && localInput.fromdate === '' && localInput.todate === '') {
            return;
        }
        setStatus(true);
        localInput.id = crypto.randomUUID();
        setValue(localInput);
    };

    const handleEditClick = () => {
        setStatus(false);
    }

    return (
        <div className='section'>
            <h2>School:</h2>
            <input
                value={localInput.school}
                onChange={(e) => setLocalInput(prev => ({
                    ...prev,
                    school: e.target.value
                }))}
                disabled={status}
            />
            <h2>Major</h2>
            <input
                value={localInput.major}
                onChange={(e) => setLocalInput(prev => ({
                    ...prev,
                    major: e.target.value
                }))}
                disabled={status}
            />
            <h2>From Date:</h2>
            <input
                type='date'
                value={localInput.fromdate}
                onChange={(e) => setLocalInput(prev => ({
                    ...prev,
                    fromdate: e.target.value
                }))}
                disabled={status}
            />
            <h2>To Date:</h2>
            <input
                type='date'
                value={localInput.todate}
                onChange={(e) => setLocalInput(prev => ({
                    ...prev,
                    todate: e.target.value
                }))}
                disabled={status}
            />
            <button onClick={handleSubmitClick} disabled={status}>Submit</button>
            <button onClick={handleEditClick} disabled={!status}>Edit</button>
        </div>
    )
}
