import { LogModel } from '../../data/mongodb';
import { LogDatasource } from '../../domain/datasources/log-datasource';
import { LogEntity, LogSeverityLevel } from '../../domain/entities/log.entity';

export class MongoLogDatasource implements LogDatasource {
    async saveLog(log: LogEntity): Promise<void> {
        const newLog = await LogModel.create(log);
        console.log('Log created in database:', newLog.id);
    }

    async getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
        const logs = await LogModel.find({
            level: severityLevel,
        });

        return logs.map((log) => LogEntity.fromObject(log));
    }
}
