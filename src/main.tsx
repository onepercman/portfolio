import { QueryClientProvider } from "@tanstack/react-query"
import { ThemeProvider } from "next-themes"
import ReactDOM from "react-dom/client"
import App from "./app"
import { queryClient } from "./libs/react-query"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeProvider defaultTheme="dark">
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </ThemeProvider>,
)
