import '../styles/Company.css'
import { useState } from 'react'

export default function Company({ value, setValue }) {
    const [localInput, setLocalInput] = useState({
        company: '',
        title: '',
        responsibilities: '',
        fromdate: '',
        todate: ''
    });

    const handleSubmitClick = () => {
        localInput.id = crypto.randomUUID();
        let newCompanyInfo = [...value, localInput]
        console.log(value)
        setValue(newCompanyInfo);
    };

    return (
        <div className='section'>
            <h2>Company:</h2>
            <input
                value={localInput.company}
                onChange={(e) => setLocalInput(prev => ({
                    ...prev,
                    company: e.target.value
                }))}
            />
            <h2>Title</h2>
            <input
                value={localInput.title}
                onChange={(e) => setLocalInput(prev => ({
                    ...prev,
                    title: e.target.value
                }))}
            />
            <h2>Responsibilties</h2>
            <textarea
                class='textbox'
                value={localInput.phone}
                onChange={(e) => setLocalInput(prev => ({
                    ...prev,
                    responsibilities: e.target.value
                }))}
            />
            <h2>From Date:</h2>
            <input
                type='date'
                value={localInput.phone}
                onChange={(e) => setLocalInput(prev => ({
                    ...prev,
                    fromdate: e.target.value
                }))}
            />
            <h2>To Date:</h2>
            <input
                type='date'
                value={localInput.phone}
                onChange={(e) => setLocalInput(prev => ({
                    ...prev,
                    todate: e.target.value
                }))}
            />
            <button onClick={handleSubmitClick}>Submit</button>
        </div>
    )
}
