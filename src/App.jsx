import './App.css'
import { Nav } from "./components/Nav"
import { Album } from "./components/Album"
import FormObject from './components/FormObject'
function App() {

  return (
    <div>
      <Nav
        userName={'Gabe'}
        favLang={'JavaScript'}
        hometown={'Ponce'} />
      <Album
        albumName={'Macadelic'}
        bandName={'Mac Miller'}
        releaseYear={'March 23, 2012'}
        genre={'Hip Hop'}
        albumSales={20}
      />
      <Album
        albumName={'Sol Maria'}
        bandName={'Eladio Carrion'}
        releaseYear={'February 20, 2024'}
        genre={'Trap Latino'}
        albumSales={10}
      />
      <Album
        albumName={'YHLQMDLG'}
        bandName={'Bad Bunny'}
        releaseYear={'February 29, 2020'}
        genre={'Trap Latino'}
        albumSales={30}
      />
      <Album
        albumName={'Hollywoods Bleeding'}
        bandName={'Post Malone'}
        releaseYear={'September 6, 2019'}
        genre={'Trap'}
        albumSales={50}
      />
      <FormObject />
    </div>
  )
}

export default App
