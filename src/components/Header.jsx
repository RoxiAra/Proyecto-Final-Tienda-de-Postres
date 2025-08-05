import { useState } from "react"
import { Link } from "react-router-dom"

const Header = () => {
  const [user, setUser] = useState(true)

  return (
    <header>
      <img src="https://img.freepik.com/vector-premium/banners-pizarra-pasteleria-postre-pastel_8071-31398.jpg" alt="banner de la tienda" />
      <nav>
        <ul>
          {
            user && <>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/dashboard">Dashboard</Link></li>
              <li><Link to="/sobrenosotros">Sobre Nosotros</Link></li>
              <button>Cerrar Seccion</button>
            </>
          }
          {
            !user && <>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Register</Link></li>
              <li><Link to="/sobrenosotros">Sobre Nosotros</Link></li>
            </>
          }
          
        </ul>
      </nav>
    </header>
  )
}

export { Header }