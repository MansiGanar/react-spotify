import "./App.css";
import "./artistpage.css";
import HomePage from "./components/HomePage";
import ArtistsPage from "./components/ArtistsPage";
import UpperPartHP from "./components/UpperPartHP";
import MusicPlayer from "./components/MusicPlayer";
import SideBar from "./components/SideBar";

function App() {
  return (
    <>
      <UpperPartHP />

      <MusicPlayer />
      <SideBar />
    </>
  );
}

export default App;
