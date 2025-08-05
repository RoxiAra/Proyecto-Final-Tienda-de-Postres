import { Layout } from "../components/Layout"

const Login = () => {
  return (
    <Layout>
      <h1>Inicia secion</h1>
      <section>
        <h2>Bienvenido de nuevo</h2>
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

export { Login }