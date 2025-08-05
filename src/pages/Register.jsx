import { Layout } from "../components/Layout"

const Register = () => {
  return (
    <Layout>
      <h1>Registrate</h1>
      <section>
        <h2>Bienvenido y Gracias por Registrarte</h2>
        <form> 
          <div>
            <label>Correo electronico</label>
            <input type="email" />
          </div>
          <div>
            <label>Contraseña</label>
            <input type="passward"/>
          </div>
          <button>Ingresar</button>
        </form>
      </section>
    </Layout>
  )
}

export { Register }