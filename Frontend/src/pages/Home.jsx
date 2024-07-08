import { useSelector } from "react-redux"
import { Hero } from "../components/Hero"
import { PropertiesHome } from "../components/PropertiesHome"

const Home = () => {
  const { user } = useSelector((state) => state.auth)
  console.log(user)
  return(
    <main className="mt-[8rem] w-[85vw] mx-auto flex flex-col gap-24">
      <Hero />
      <PropertiesHome />
    </main>
  )
}

export { Home }