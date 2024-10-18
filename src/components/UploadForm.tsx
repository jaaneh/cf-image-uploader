import { FC } from "hono/jsx"

export const UploadForm: FC = () => (
  <form hx-post="/upload" hx-encoding="multipart/form-data" hx-target="#result">
    <input
      type="file"
      name="image"
      accept="image/jpeg, image/png, image/gif, image/webp"
      required
    />
    <button type="submit">Upload Image</button>
  </form>
)
