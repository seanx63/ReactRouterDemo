import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Clojure from './components/Clojure'
import Scala from './components/Scala'
import Groovy from './components/Groovy'
import Kotlin from './components/Kotlin'
import Java from './components/Java'

function App() {
return <Routes>
  <Route path="/" element={<Home/>}></Route>
  <Route path="/clojure" element={<Clojure/>}></Route>
  <Route path="/scala" element={<Scala/>}></Route>
  <Route path="/groovy" element={<Groovy/>}></Route>
  <Route path="/kotlin" element={<Kotlin/>}></Route>
  <Route path="/java" element={<Java/>}></Route>
</Routes>
}

export default App;
