export default function Flight(props) {

    const flight = props.data
    // console.log(flight)
    return(
        <>
            <div>from: {flight.flyFrom} to: {flight.flyTo}</div>
            <div>duration: {flight.fly_duration} seats: {flight.availability.seats}</div>
            <div>price: {flight.price}</div>
            
        </>
    )
}