import { FC } from "hono/jsx"
import { UploadForm } from "./UploadForm"

export const HomePage: FC = () => (
  <>
    <h1>Image Uploader</h1>
    <UploadForm />
    <div id="result"></div>
  </>
)
