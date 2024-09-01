import { Toaster } from "@/libs/atoms"
import { toaster } from "@/libs/toaster"
import { FC, Fragment } from "react"
import { Outlet } from "react-router-dom"
import { Sider } from "./sider"

export const Layout: FC = () => {
  return (
    <Fragment>
      <div className="sm:pl-60">
        <div className="fixed bottom-4 left-4 top-4 w-56 -translate-x-[calc(100%+2rem)] rounded-2xl bg-component transition-transform sm:translate-x-0">
          <Sider />
        </div>

        <Outlet />
      </div>

      <Toaster toaster={toaster} />
    </Fragment>
  )
}
