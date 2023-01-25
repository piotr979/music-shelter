import FeaturedArtist from './components/Layout/FeaturedArtist';
import Header from './components/Layout/Header';
import Figures from './components/Layout/Figures';
import SlickScroll from './components/Layout/SlickScroll';
import DataProvider from './store/DataProvider';
function App() {
  return (
    <DataProvider>
    <div className="container">
      <Figures />
      <Header />
      <FeaturedArtist />
      <SlickScroll />
    </div>
    </DataProvider>
  );
}

export default App;
