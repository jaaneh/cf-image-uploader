/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "uploader",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "cloudflare"
    }
  },
  async run() {
    const bucket = new sst.cloudflare.Bucket("NoroffUploaderBucket", {
      transform: {
        bucket: {
          name: "noroff-uploader"
        }
      }
    })
    const worker = new sst.cloudflare.Worker("NoroffUploaderWorker", {
      handler: "./src/index.tsx",
      link: [bucket],
      url: true,
      environment: {
        PUBLIC_BUCKET_URL: process.env.PUBLIC_BUCKET_URL ?? ""
      },
      transform: {
        worker: {
          name: "noroff-uploader"
        }
      }
    })

    return {
      api: worker.url
    }
  }
})
