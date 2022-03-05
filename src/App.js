import Weather from "./Weather"
import Footer from "./Footer"
import "bootstrap/dist/css/bootstrap.css"

  

function App() { 
  return (
    <div className="container">
      <h1 className="text-center">Weather App</h1>
      <Weather defaultCity="Paris"/>
      <Footer />        
    </div>
  );
}

export default App;
