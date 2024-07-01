import { useSelector } from "react-redux"

const Home = () => {
  const { user } = useSelector((state) => state.auth)


  return(
    <main className="mt-[8rem] w-[85vw] mx-auto">
      {!user?.username ? (
        <h1>Inicio</h1>
      ) : (
        <>
          {user?.seller ? (
            <h1>Bienvenido/a al vendedor/a {user.username}</h1>
          ) : (
            <h1>Bienvenido/a al comprador/a {user.username}</h1>
          )}
        </>
      )}

    </main>
  )
}

export { Home }