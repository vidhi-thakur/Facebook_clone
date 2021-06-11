import './App.css';
import Header from './components/Header';
import SidebarLeft from './components/SidebarLeft';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="body">
        {/* sidebar-left */}
      <SidebarLeft />

        {/* main feed  */}

        {/* sidebar right  */}
      </div>
    </div>
  );
}

export default App;
