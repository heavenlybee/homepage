import './App.css';
import './script.js';
function App() {
  return (
 <div className="body">
  <div className="bg"></div>
  <h1>Welcome to the Office</h1>
  <p>Who are You?</p>
  <div className="container">
    <div className="tabs">
      <button id="userTab" className="tab">Student</button>
      <button id="adminTab" className="tab">Officer</button>
    </div>
  </div>
</div>
  );
}

export default App;
