import { Hono } from "hono"
import { jsxRenderer } from "hono/jsx-renderer"
import { Layout } from "./components/Layout"
import { HomePage } from "./components/HomePage"
import { imageRouter } from "./routes/image"
import { uploadRouter } from "./routes/upload"

const app = new Hono()

app.use(
  "*",
  jsxRenderer(({ children }) => <Layout>{children}</Layout>)
)

app.get("/", c => c.render(<HomePage />))

app.route("/image", imageRouter)
app.route("/upload", uploadRouter)

export default app
