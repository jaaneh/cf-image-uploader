import { Hono } from "hono"
import { Resource } from "sst"
import { ALLOWED_MIME_TYPES } from "../constants"

const imageRouter = new Hono()

imageRouter.get("/:key", async c => {
  const key = c.req.param("key")

  if (!key) {
    return c.json({ error: "Image key is required" }, 400)
  }

  try {
    const result = await Resource.NoroffUploaderBucket.get(key)

    if (!result) {
      return c.json({ error: "Image not found" }, 404)
    }

    const contentType = result.httpMetadata?.contentType

    if (!contentType || !ALLOWED_MIME_TYPES.includes(contentType)) {
      return c.json({ error: "Invalid image format" }, 400)
    }

    return c.body(result.body, {
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=2592000" // 1 month
      }
    })
  } catch (error) {
    console.error("Error fetching image:", error)
    return c.json({ error: "Internal server error" }, 500)
  }
})

export { imageRouter }
