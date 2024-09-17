import './App.css'
import FormObject from './components/FormObject'
import { useState } from 'react'
import Display from './components/Display'

function App() {
  const [albumList, setAlbumList] = useState([])
  return (
    <div>
      <FormObject
        albumList={albumList}
        setAlbumList={setAlbumList}
      />
      <Display
        albumList={albumList}
      />
    </div>
  )
}

export default App