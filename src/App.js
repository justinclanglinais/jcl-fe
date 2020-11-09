import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Body from './components/Body.js';

function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div>
        <Body />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;