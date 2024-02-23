//import { CheckService } from '../domain/use-cases/checks/check-service';
import { CheckServiceMultiple } from '../domain/use-cases/checks/check-service-multiple';
import { FileSystemDatasource } from '../infrastructure/datasources/file-system.datasource';
import { MongoLogDatasource } from '../infrastructure/datasources/mongo-log.datasource';
import { PostgreSQLDatasource } from '../infrastructure/datasources/postgresql-log.datasource';
import { LogRepositoryImpl } from '../infrastructure/repositories/log.repository';
import { CronService } from './cron/cron-service';
import { EmailService } from './email/email.service';

const fsLogRepository = new LogRepositoryImpl(new FileSystemDatasource());

const mongoLogRepository = new LogRepositoryImpl(new MongoLogDatasource());

const postgreSQLLogRepository = new LogRepositoryImpl(
    new PostgreSQLDatasource()
);

export class Server {
    public static start() {
        console.log('Server started...');

        // const emailService = new EmailService(fileSystemLogRepository);

        // emailService.sendEmail({
        //     to: 'gustavo.perez.231191@gmail.com',
        //     subject: 'logs de sistema',
        //     htmlBody: `
        //     <h3> Logs de Sistema - NOC </h3>
        //     <p> Lorem impsum dolor sit amtert ghlur fig deure fhfdkjghiru gg</p>
        //     <p> Ver logs adjuntos </p>
        //   `,
        // });

        // emailService.sendEmailWithFileSystemLogs(
        //     'gustavo.perez.231191@gmail.com'
        // );

        CronService.createJob('*/8 * * * * *', () => {
            const url = 'http://google.com';
            new CheckServiceMultiple(
                [fsLogRepository, mongoLogRepository, postgreSQLLogRepository],
                () => console.log(`${url} is ok`),
                (error) => console.log(error)
            ).execute(url);
        });
    }
}
