export default function LoadMoreButton(props) {
    
    const handleClick = () => {
        props.setLimit(props.limit + 5)
    }

    return(
        <button onClick={handleClick}>load more flights</button>
    )
}