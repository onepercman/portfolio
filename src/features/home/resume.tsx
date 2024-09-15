import { FC } from "react"

export const Resume: FC = () => {
  return (
    <section id="resume" className="min-h-screen space-y-6 bg-component p-6 sm:p-8">
      <div className="flex flex-col items-start gap-4">
        <div className="font-medium italic">Nice to meet you!</div>
        <div className="text-3xl font-semibold sm:text-5xl">WELCOME TO...</div>
      </div>
    </section>
  )
}
