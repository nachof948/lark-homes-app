import { useSelector } from "react-redux"
import { Hero } from "../components/Hero"
import { PropertiesHome } from "../components/PropertiesHome"
import { CustomersOpinion } from "../components/CustomersOpinion"
import { ExploreProperties } from "../components/ExploreProperties"

const Home = () => {
  return(
    <main className="mt-[8rem] w-[85vw] mx-auto flex flex-col gap-24">
      <Hero />
      <PropertiesHome />
      <CustomersOpinion />
      <ExploreProperties />
    </main>
  )
}

export { Home }