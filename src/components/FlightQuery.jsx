export default function FlightQuery(props) {

//function converts default date format to API appropriate one
    function dateConverter(val){
        return val.substr(8,2) + '/' + val.substr(5,2) + '/' + val.substr(0,4)
    }


    function handleSubmit(e) {
        e.preventDefault();
        // console.log(e)

//assigns vaulue to destinations
        props.setFrom(e.target[0].value);
        props.setTo(e.target[1].value);

        let dpt = dateConverter(e.target[2].value)
        let ret = dateConverter(e.target[3].value)

//assigns vaules to desired dates
        props.setDepart(dpt);
        props.setReturns(ret);


        props.setDirect(e.target[4].checked === true ? 1 : 0)
    }

//decides whther to look for direct flight only
    function handleDirect(e) {
        props.setDirect(e.target.checked === true ? 1 : 0)
    }        

//decides whether to fetch one way 
    // function handleChange(e){
    //     props.setDirect(e.target.id === 'oneway' ? 1 : 0)
    // }



    return (

        <>
            <form className="searchForm" onSubmit={(e) => handleSubmit(e)}>

                <div className="inputs">
                    <div className="elemWithLabel">
                        <label className="label" htmlFor="">From:</label>
                        <input type="text" name="" id="" placeholder="enter airport code"/>
                    </div>
                    <div className="elemWithLabel">
                        <label className="label" htmlFor="">To:</label>
                        <input type="text" name="" id="" placeholder="enter airport code"/>
                    </div>
                    <div className="elemWithLabel">
                        <label className="label" htmlFor="">Departure:</label>
                        <input type="date"name="" id=""/>
                    </div>
                    <div className="elemWithLabel">
                        <label className="label" htmlFor="">Return:</label>
                        <input type="date" name="" id=""/>
                    </div>                    
                </div>


                <div>
                    <label className="label" htmlFor="direct">Direct only</label>
                    <input className="checkbox" type="checkbox" name="direct" id="" onClick={ handleDirect }/>
                </div>
                <input className="submitButton"  type="submit"  />
            </form>
        </>
    )
}
