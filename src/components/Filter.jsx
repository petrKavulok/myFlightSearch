export default function Filter(props) {

    function handleChange(e) {
        props.setSort(e.target.options[e.target.options.selectedIndex].value)
    }
    return (
        <div>
            <label htmlFor="filter">Sort by:</label>
            <select name="filter" id="filter" onChange={handleChange}>
                <option value="price">price</option>
                <option value="duration">duration</option>
                <option value="quality">quality</option>
                <option value="date">date</option>
            </select>
        </div>
    )
}