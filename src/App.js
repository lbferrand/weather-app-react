import logo from "./logo.svg";
import "./App.css";
import Countries from "./Countries.js";
import Search from "./Search.js";
import Details from "./Details.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Weather Application built with React.js</h3>
      </header>
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <Countries />
            <Search />
            <Details />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
