import React from "react"

const prefix = import.meta.env.VITE_PUBLIC_URL === "/" ? "" : import.meta.env.VITE_PUBLIC_URL

export const Img = React.forwardRef<HTMLImageElement, React.ImgHTMLAttributes<HTMLImageElement>>(function (
  { src, ...props },
  ref,
) {
  const _src = src ? new URL(src, prefix).href : undefined

  return <img ref={ref} src={_src} {...props} />
})
