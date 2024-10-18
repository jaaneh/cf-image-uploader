import { Hono } from "hono"
import { env } from "hono/adapter"
import { Resource } from "sst"
import { MAX_FILE_SIZE, ALLOWED_MIME_TYPES } from "../constants"
import crypto from "crypto"

const uploadRouter = new Hono()

uploadRouter.post("/", async c => {
  const body = await c.req.parseBody()
  const file = body["image"] as File | undefined

  if (!file || !(file instanceof File)) {
    return c.render(<div class="error">No file uploaded</div>)
  }

  const contentType = file.type
  if (!contentType || !ALLOWED_MIME_TYPES.includes(contentType)) {
    return c.render(
      <div class="error">Invalid file type. Only images are allowed.</div>
    )
  }

  if (file.size > MAX_FILE_SIZE) {
    return c.render(<div class="error">File size exceeds the 2MB limit.</div>)
  }

  const key = crypto.randomUUID()
  const arrayBuffer = await file.arrayBuffer()
  await Resource.NoroffUploaderBucket.put(key, arrayBuffer, {
    httpMetadata: {
      contentType: contentType
    }
  })

  const { PUBLIC_BUCKET_URL } = env<{ PUBLIC_BUCKET_URL: string }>(c)
  const url = `${PUBLIC_BUCKET_URL}/${key}`
  return c.render(
    <div>
      <p>Image uploaded successfully!</p>
      <p>
        Public URL:{" "}
        <a href={url} target="_blank">
          {url}
        </a>
      </p>
    </div>
  )
})

export { uploadRouter }
