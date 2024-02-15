import { CronJob } from 'cron';

type CronTime = string | Date;
type OnTick = () => void;

export class CronService {
    public static createJob(cronTime: CronTime, onTick: OnTick): CronJob {
        const job = new CronJob(cronTime, onTick);

        job.start(); //is optional here because of the fourth parameter set to true.

        return job;
    }
}
