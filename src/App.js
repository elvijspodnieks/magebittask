import './App.css';
import image from './assets/img/image_summer.png'
import Header from './components/Header';
import Main from './components/Main';


function App() {
  return (


    <div className="App">
      <div className="left_sect">
        <Header />
        <Main />

      </div>
      <div className="right_sect" style={{ backgroundImage: `url(${image})` }}>
      </div>
    </div>
  );
}

export default App;
