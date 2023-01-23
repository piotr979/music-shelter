import classes from './assets/scss/App.module.scss';
import FeaturedArtist from './components/Layout/FeaturedArtist';
import Header from './components/Layout/Header';

function App() {
  return (
    <div className="container">
      <Header />
      <FeaturedArtist />
    </div>
  );
}

export default App;
