
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <header class='p-3 bg-dark text-white'>
        <div className="container">
          <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <h2> Fire Smoke Air: An Air Quality Dashboard</h2>
            <Search />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;