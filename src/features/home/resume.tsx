import { Button } from "@/libs/atoms"
import { Img } from "@/shared/components/img"
import { motion, useScroll, useTransform } from "framer-motion"
import { FC, useRef } from "react"
import { LuDownload, LuGithub, LuLinkedin, LuMail, LuQuote, LuSmartphone } from "react-icons/lu"
import { contact } from "./data"

export const Resume: FC = () => {
  const section = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: section,
    offset: ["start end", "end start"],
  })

  const headingTransform = useTransform(scrollYProgress, [0.4, 1], ["0%", "-200%"])
  const contentTransform = useTransform(scrollYProgress, [0.4, 1], ["0%", "-30rem"])

  return (
    <section ref={section} id="resume" className="min-h-screen space-y-14 bg-component p-6 sm:p-8">
      <motion.div style={{ translateX: headingTransform }} className="flex flex-col items-start gap-4">
        <div className="font-medium italic">Nice to meet you!</div>
        <div className="text-3xl font-semibold sm:text-5xl">WELCOME TO...</div>
      </motion.div>

      <motion.div
        style={{
          translateY: contentTransform,
        }}
        className="flex flex-col gap-6 md:flex-row"
      >
        <div className="flex w-full max-w-lg flex-none flex-col items-center gap-4">
          <Img src="/myself.jpeg" className="h-80 w-80 rounded-full" />
          <div className="bg-gradient-to-r from-primary to-accent bg-clip-text text-4xl font-semibold uppercase text-transparent">
            onepercman
          </div>
          <div className="text-lg sm:text-xl">
            <span className="font-bold">Frontend Engineer</span> based in <span className="font-bold">VN</span>
          </div>
          <a href={String(import.meta.env.VITE_PUBLIC_URL + "/resume.pdf").replaceAll("//", "/")} target="_blank">
            <Button size="lg" color="primary" rightIcon={<LuDownload />}>
              Download Resume
            </Button>
          </a>
        </div>

        <div className="flex grow flex-col gap-8">
          <div className="text-justify">
            Skilled ReactJS Frontend Developer with 4 years of experience in building dynamic and responsive web
            applications. Proficient in JavaScript, TypeScript, and modern frontend technologies, including Redux, React
            Hooks, and Next.js. Strong expertise in creating intuitive user interfaces, optimizing performance, and
            ensuring cross-browser compatibility. Adept at collaborating with cross-functional teams to deliver
            high-quality, scalable solutions.
          </div>
          <div className="grid grid-cols-2 gap-6">
            <a
              target="_blank"
              href={`tel:${contact.phone}`}
              className="inline-flex items-center gap-2 whitespace-nowrap"
            >
              <LuSmartphone />
              <span>{contact.phone}</span>
            </a>
            <a
              target="_blank"
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-2 whitespace-nowrap"
            >
              <LuMail />
              <span>{contact.email}</span>
            </a>
            <a target="_blank" href={contact.github} className="inline-flex items-center gap-2 whitespace-nowrap">
              <LuGithub />
              <span>@onepercman</span>
            </a>
            <a target="_blank" href={contact.linkedin} className="inline-flex items-center gap-2 whitespace-nowrap">
              <LuLinkedin />
              <span>@onepercman</span>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-4">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-3xl font-semibold text-transparent sm:text-6xl">
                  4+
                </span>
                <span className="text-lg font-medium sm:text-2xl">Years experience...</span>
              </div>
              <div>
                Hello there! My name is onepercman. I am a web frontend developer, and Im very passionate and dedicated
                to my work.
              </div>
            </div>
            <div className="space-y-6">
              <div className="inline-flex items-center gap-4">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-3xl font-semibold text-transparent sm:text-6xl">
                  200+
                </span>
                <span className="text-lg font-medium sm:text-2xl">Project...</span>
              </div>
              <div>
                Hello there! My name is onepercman. I am a web frontend developer, and Im very passionate and dedicated
                to my work.
              </div>
            </div>
          </div>

          <div className="inline-flex gap-4 rounded-2xl bg-default p-6">
            <LuQuote size={80} className="flex-none text-secondary" />
            <div className="grow text-2xl font-medium">
              "Crafting seamless user experiences with code that speaks simplicity, performance, and innovation."
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
