
export default function Form(props) {
    return (
        <form 
            className="mt-3 text-center d-flex flex-column flex-lg-row align-items-center justify-content-center"
            onSubmit={props.handleSubmit}
        >
            <input 
                className="w-75 mx-3 p-2 my-2 border-0 shadow rounded"
                type="search"
                onChange={props.handleSearch}
                placeholder="City, Country (e.g. Paris, France)"
            />
            <button className="btn mt-0 w-50 bg-black p-2 border-0 mx-3 fw-bold text-white">Search</button>        
            
        </form>          
    )
}