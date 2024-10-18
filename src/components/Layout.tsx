import { FC } from "hono/jsx"
import { styles } from "../styles"

export const Layout: FC = ({ children }) => (
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Image Uploader</title>
      <script
        src="https://unpkg.com/htmx.org@2.0.3"
        integrity="sha384-0895/pl2MU10Hqc6jd4RvrthNlDiE9U1tWmX7WRESftEDRosgxNsQG/Ze9YMRzHq"
        crossorigin="anonymous"
      ></script>
      <style dangerouslySetInnerHTML={{ __html: styles }}></style>
    </head>
    <body>
      <div class="container">{children}</div>
    </body>
  </html>
)
