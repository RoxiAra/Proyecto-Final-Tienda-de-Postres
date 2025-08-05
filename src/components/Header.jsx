import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header>
      <img src="" alt="" />
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/sobrenosotros">Sobre Nosotros</Link></li>
          <button>Cerrar Seccion</button>
        </ul>
      </nav>
    </header>
  )
}

export { Header }