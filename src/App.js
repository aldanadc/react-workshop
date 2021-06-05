//import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav"
import Tarjeta from "./components/Tarjeta"
import productsInfo from "./productsInfo";

function App() {

  console.log(productsInfo);

  const pais = "Argentina";

  return (
    <div className="App">
      <Nav />
      <main className="container">
        {productsInfo.map(product => (
          <Tarjeta 
          key={Math.random() * 1000}
          product={product}
          pais={pais}
          
          />
        ))}
      </main>
    </div>
  );
}

export default App;
