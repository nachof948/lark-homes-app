import { Hero } from "../components/Hero"
import { PropertiesHome } from "../components/PropertiesHome"
const Home = () => {


  return(
    <main className="mt-[8rem] w-[85vw] mx-auto flex flex-col gap-24">
      <Hero />
      <PropertiesHome />
    </main>
  )
}

export { Home }