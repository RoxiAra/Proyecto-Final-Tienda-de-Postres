import { useState } from "react"
import { Layout } from "../components/Layout"

const Register = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [passward, setPassward] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    setError("")
    setSuccess("")

    if (!username || !email || !passward) {
      setError("Debes completar todos los campos")
      return
    }

    const newUser = {
      username,
      email,
      passward,
    }

    console.log(newUser)
    setSuccess("Registrado con existo...")

    setUsername("")
    setEmail("")
    setPassward("")
  }

  return (
    <Layout>
      <h1>Registrate</h1>
      <section>
        <h2>Bienvenido y Gracias por Registrarte</h2>
        <form onSubmit={handleSubmit}> 
          <div>
            <label>Username</label>
            <input
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
          </div>
          <div>
            <label>Correo electronico</label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div>
            <label>Contraseña</label>
            <input
              type="passward"
              onChange={(e) => setPassward(e.target.value)}
              value={passward}
            />
          </div>
          <button>Ingresar</button>
        </form>
        {
          error && <p>{error}</p>
        }
        {
          success && <p>{success}</p>
        }
      </section>
    </Layout>
  )
}

export { Register }