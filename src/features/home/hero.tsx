import { Button } from "@/libs/atoms"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import { FC } from "react"
import { LuExternalLink, LuGithub, LuLinkedin, LuMail, LuSmartphone } from "react-icons/lu"
import { contact } from "./data"

export const Hero: FC = () => {
  const { scrollYProgress } = useScroll()

  const rotate = useSpring(useTransform(scrollYProgress, [0, 1], ["0", "720deg"]))
  const translateX = useSpring(useTransform(scrollYProgress, [0, 1], ["0", "100%"]))

  return (
    <motion.section className="relative grid min-h-screen grid-cols-1 items-center gap-4 p-6 sm:grid-cols-2 sm:p-8">
      <motion.div
        initial={{ translateX: "-100%" }}
        animate={{ translateX: "0" }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className="relative flex h-full w-full flex-col items-start justify-center gap-8"
      >
        <div className="flex flex-col text-4xl font-semibold uppercase sm:text-6xl">
          <span>My name</span>
          <span className="text-2xl sm:text-4xl">is</span>
          <span className="text-transparent [-webkit-text-stroke:_2px_#ef4444]">onepercman</span>
        </div>
        <div className="text-lg sm:text-3xl">
          <span className="font-bold">Frontend Engineer</span> based in <span className="font-bold">VN</span>
        </div>
        <Button size="lg" color="primary" rightIcon={<LuExternalLink />}>
          Work with me
        </Button>
        <div className="flex flex-col items-start gap-3">
          <a target="_blank" href={`tel:${contact.phone}`} className="inline-flex items-center gap-2 whitespace-nowrap">
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
      </motion.div>
      <motion.div
        initial={{ translateY: "-100%" }}
        animate={{ translateY: "0" }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        style={{ translateX }}
        className="absolute bottom-0 right-0 -z-10 aspect-square w-full overflow-hidden rounded-t-full sm:relative sm:rounded-full"
      >
        <motion.img src="/hero/myself.jpeg" className="h-full w-full rounded-t-full" style={{ rotate }} />
      </motion.div>
    </motion.section>
  )
}
