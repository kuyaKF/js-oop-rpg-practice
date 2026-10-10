import { jobList } from "../data/jobs.js";

export function getJob(jobName){
  for(const job of jobList){
    if(job.name === jobName){
      return job;
    }
  }
}