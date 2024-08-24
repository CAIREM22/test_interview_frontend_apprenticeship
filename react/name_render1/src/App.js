
import "./App.css";
function App() {
  const names = ["Alice", "Bob", "Charlie", "David"];

  return (
    <div className="App">
      <h1 className="title">Name List</h1>
      <div className="card-container">
        {names.map((name, index) => (
          <div className="card" key={index}>
            <h2>{name}</h2>
          </div>
        ))}
      </div>
      <div className="background-circles">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </div>
  );
}

export default App;
