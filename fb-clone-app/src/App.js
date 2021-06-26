import './App.css';
import Header from './components/Header';
import SidebarLeft from './components/SidebarLeft';
import Feed from './components/Feed';
import SidebarRight from "./components/SidebarRight"
import SignUp from './components/SignUp';
import {useStateValue} from "./StateProvider"

function App() {

  const [{user}, dispatch] = useStateValue();

  return (
    <>
        {!user? (<SignUp />): (<div className="App">
      <Header />
      <div className="body">
        {/* sidebar-left */}
      <SidebarLeft className="body__sidebar" />

        {/* main feed  */}
        <Feed className="body__center" />

        {/* sidebar right  */}
        <SidebarRight className="body__sidebar" />

      </div>
    </div>)}
    </>
  );
}

export default App;
