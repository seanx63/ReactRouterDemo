import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <nav>
        <Link to='/'>Home</Link>
        <Link to='/clojure'>Clojure</Link>
        <Link to='/groovy'>Groovy</Link>
        <Link to='/java'>Java</Link>
        <Link to='/kotlin'>Kotlin</Link>
        <Link to='/scala'>Scala</Link>
    </nav>
  )
}

export default Navbar