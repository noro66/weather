import './App.scss'
import {SearchBar} from "./Components/SearchBar/SearchBar";
import {Wallpaper} from "./Components/Wallpaper/Wallpaper";
import './Components/Wallpaper/Wallpaper.scss'
import {Weather} from "./Components/Weather/Weather";
import {Provider} from "react-redux";
import {store} from "./app/store/Store";
function App() {
  return (
    <div className="app">
        <Provider store={store}>
            <Wallpaper/>
            <SearchBar/>
            <Weather/>  
        </Provider>

    </div>
  );
}

export default App;
