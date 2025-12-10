import '../styles/DisplayCompany.css'

export default function DisplayCompany({ value }) {
    return (
        <div className='section'>
            <h2>Companies:</h2>
            {value.map(value => (
                <div key={value.id}>
                    <p>{value.company}</p>
                    <p>{value.title}</p>
                    <p>{value.responsibilities}</p>
                    <p>{value.fromdate}</p>
                    <p>{value.todate}</p>
                </div>
            ))}
        </div>
    )
}