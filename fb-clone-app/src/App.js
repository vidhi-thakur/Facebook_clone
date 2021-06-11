import './App.css';
import Header from './components/Header';
import SidebarLeft from './components/SidebarLeft';
import Feed from './components/Feed';
import SidebarRight from "./components/SidebarRight"

function App() {
  return (
    <div className="App">
      <Header />
      <div className="body">
        {/* sidebar-left */}
      <SidebarLeft />

        {/* main feed  */}
        <Feed />

        {/* sidebar right  */}
        <SidebarRight />

      </div>
    </div>
  );
}

export default App;
