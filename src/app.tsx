import { Experience } from "./features/home/experience"
import { Hero } from "./features/home/hero"
import { Resume } from "./features/home/resume"
import "./styles/styles.scss"

export default function App() {
  return (
    <div>
      <Hero />
      <Resume />
      <Experience />
    </div>
  )
}
