import axios from "axios"
import { ElMessage } from "element-plus"

import type { IWorker, IJob, ILog, IResult } from "@/types"

enum API {
  ListWorkers = "/workers",
  ListJobs = "/jobs",
  Job = "/job",
  Log = "/job/log"
}

const client = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 5000
})

client.interceptors.request.use((config) => {
  if (["post", "delete", "put"].includes(config.method!)) {
    ElMessage({
      message: "为保证服务器安全，服务器会拦截写操作，所以看起来没有生效",
      type: "error"
    })
  }
  return config
})

async function listWorkers() {
  const result = await client.get<IResult<IWorker[]>>(API.ListWorkers)
  return result.data.data
}

async function listJobs() {
  const result = await client.get<IResult<IJob[]>>(API.ListJobs)
  return result.data.data
}

async function saveJob(job: IJob) {
  const result = await client.post<IResult<IJob>>(API.Job, job)
  return result.data.data
}

async function deleteJob(job: IJob) {
  const url = `${API.Job}/${job.name}`
  const result = await client.delete<IResult<string>>(url)
  return result.data.data
}

async function abortJob(job: IJob) {
  const url = `${API.Job}/${job.name}/abort`
  const result = await client.post<IResult<string>>(url)
  return result.data.data
}

async function listLogs(job: IJob) {
  const url = `${API.Log}?name=${job.name}`
  const result = await client.get<IResult<ILog[]>>(url)

  return result.data.data
}

export { listWorkers, listJobs, saveJob, deleteJob, abortJob, listLogs }
