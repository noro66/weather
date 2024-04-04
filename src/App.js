import './App.scss'
import {SearchBar} from "./Components/SearchBar/SearchBar";
import {Wallpaper} from "./Components/Wallpaper/Wallpaper";
import './Components/Wallpaper/Wallpaper.scss'
import {Weather} from "./Components/Weather/Weather";
function App() {
  return (
    <div className="app">
        <Wallpaper/>
        <SearchBar/>
        <Weather/>
    </div>
  );
}

export default App;
