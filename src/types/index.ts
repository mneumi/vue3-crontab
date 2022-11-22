export interface IWorker {
  id: string
  name: string
  ip: string
}

export interface IJob {
  name: string
  command: string
  cronexpr: string
  lb: string
  worker_id: string
}

export interface ILog {
  name: string
  command: string
  cronexpr: string
  lb: string
  worker_id: string
  result: string
  error: string
  start_timestamp: string
  end_timestamp: string
}

export interface IResult<T> {
  code: number
  msg: string
  data: T
}
