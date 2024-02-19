import { LogEntity, LogSeverityLevel } from '../../entities/log.entity';
import { LogRepository } from '../../repository/log-repository';

interface CheckServiceUseCase {
    execute(url: string): Promise<boolean>;
}

type SuccessCallback = () => void;
type ErrorCallback = (error: string) => void;

export class CheckService implements CheckServiceUseCase {
    constructor(
        private readonly logRepository: LogRepository,
        private readonly successCallback: SuccessCallback,
        private readonly errorCallback: ErrorCallback
    ) {}

    public async execute(url: string): Promise<boolean> {
        try {
            const req = await fetch(url);

            if (!req.ok) {
                throw new Error(`Error on check service ${url}`);
            }

            const newLog = new LogEntity(
                `Service ${url} working`,
                LogSeverityLevel.low
            );

            this.logRepository.saveLog(newLog);
            this.successCallback();

            return true;
        } catch (error) {
            const errorMessage = `${error}`;

            const newLog = new LogEntity(errorMessage, LogSeverityLevel.high);

            this.logRepository.saveLog(newLog);
            this.errorCallback(errorMessage);

            return false;
        }
    }
}
