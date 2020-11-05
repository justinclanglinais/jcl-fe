import './App.css';
import Header from './components/Header.js';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Header />
      </div>
      <div className="App-body">
        <div className="App-content-1">
          <div className="Content-title">
            <h2>Content Title</h2>
          </div>
          <div className="Content-body">
            <h3>Content Body</h3>
          </div>
        </div>
      </div>
      <div className="App-footer">
        <h1>Footer</h1>
      </div>
    </div>
  );
}

export default App;
