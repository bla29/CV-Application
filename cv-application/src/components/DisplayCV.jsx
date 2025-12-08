import '../styles/DisplayCV.css'

export default function DisplayCV({ value }) {
    return (
        <div className='section'>
            <h2>Name:</h2>
            <p>{value.name}</p>
            <h2>Email:</h2>
            <p>{value.email}</p>
            <h2>Phone:</h2>
            <p>{value.phone}</p>
        </div>
    )
}