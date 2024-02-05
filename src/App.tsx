import { useContext } from "react"
import { Login, Register } from "./components"
import { AuthContext } from './context/authContext';

const App = () => {

  const { status, userId } = useContext(AuthContext)

  if (status === 'checking') return <p className="loading"><span>Comprobando credenciales, espera un momento...</span></p>

  return (
    <main>
      <h1><b>Autenticacion con</b> <span>Firebase</span> <b>y</b> <span>React</span></h1>
      {
        (status === 'authenticated' && userId)
          ? <HomePage />
          : <AuthPage />
      }
    </main>
  )
}
export default App

export const HomePage = () => {
  const { userId, handleLogOut } = useContext(AuthContext)

  return (
    <section>
      <h5>Su id es: <span>{userId}</span></h5>
      <button className="btn-logout" onClick={handleLogOut}>Salir</button>
    </section>
  )
}

export const AuthPage = () => {
  return (
    <section>
      <Login />
      <Register />
    </section>
  )
}


