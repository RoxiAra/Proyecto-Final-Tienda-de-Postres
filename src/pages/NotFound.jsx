import { Link } from "react-router-dom";
import { Layout } from "../components/Layout";

const NotFound = () => {
  return (
    <Layout>
      <h1>Pagina no encontrada</h1>
      <p>Lo sentimos, la pagina que estas buscando no existe</p>
      <p>Verifica la URL o volve al inicio</p>
      <Link to="/">Ir a inicio</Link>
    </Layout>
  )
}

export { NotFound }