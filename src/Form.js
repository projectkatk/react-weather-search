import "./Form.css"

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
                placeholder="Enter a city name"
            />
            <button className="btn mt-0 w-50 p-2 border-0 mx-3 fw-bold text-white shadow">Search</button>        
            
        </form>          
    )
}