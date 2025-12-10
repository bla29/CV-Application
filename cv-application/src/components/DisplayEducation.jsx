import '../styles/DisplayEducation.css'

export default function DisplayEducation({ value }) {
    return (
        <div className='section'>
            <h2>School:</h2>
            <p>{value.school}</p>
            <h2>Major:</h2>
            <p>{value.major}</p>
            <h2>From:</h2>
            <p>{value.fromdate}</p>
            <h2>To:</h2>
            <p>{value.todate}</p>
        </div>
    )
}