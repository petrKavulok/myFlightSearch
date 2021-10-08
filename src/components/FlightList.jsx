import Flight from './Flight'

export default function FlightList(props){

    console.log(props.data.data)

    return(
        <ul>

        {props.data.data.map((flight, i) => {
            
            return(
                
                <li key={i}>
                    <Flight data={flight}/>
                </li>
                )
            })}
        </ul>
    )
}