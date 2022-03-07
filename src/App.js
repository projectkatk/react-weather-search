import Weather from "./Weather"
import Footer from "./Footer"
import "bootstrap/dist/css/bootstrap.css"

  

function App() { 
  return (
    <div className="container">
      <h1 className="text-center text-white fw-bold shadow my-5">Weather App</h1>
      <Weather defaultCity="paris"/>
      <Footer />        
    </div>
  );
}

export default App;
