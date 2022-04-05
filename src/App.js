import Weather from "./Weather"
import Footer from "./Footer"
import "bootstrap/dist/css/bootstrap.css"
import img from "./images/logo.png"

  

function App() { 
  const imgStyle = {
    width: "50px"
  }

  return (
    <div className="container">
      <a href="./index.html"><img src={img} style={imgStyle} alt="myLogo" /></a>
      <h1 className="text-center text-white fw-bold mb-0 pb-4"> Weather App</h1>
      <Weather defaultCity="greenwich"/>
      <Footer />        
    </div>
  );
}

export default App;
