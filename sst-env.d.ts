/* This file is auto-generated by SST. Do not edit. */
/* tslint:disable */
/* eslint-disable */
import "sst"
export {}
import "sst"
declare module "sst" {
  export interface Resource {
  }
}
// cloudflare 
import * as cloudflare from "@cloudflare/workers-types";
declare module "sst" {
  export interface Resource {
    "NoroffUploaderBucket": cloudflare.R2Bucket
    "NoroffUploaderWorker": cloudflare.Service
  }
}
