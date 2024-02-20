import { envs } from '../config/plugins/envs.plugin';
import { CheckService } from '../domain/use-cases/checks/check-service';
import { FileSystemDatasource } from '../infrastructure/datasources/file-system.datasource';
import { LogRepositoryImpl } from '../infrastructure/repositories/log.repository';
import { CronService } from './cron/cron-service';
import { EmailService } from './email/email.service';

const fileSystemLogRepository = new LogRepositoryImpl(
    new FileSystemDatasource()
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

        CronService.createJob('*/5 * * * * *', () => {
            const url = 'http://google.com';
            new CheckService(
                fileSystemLogRepository,
                () => console.log(`${url} is ok`),
                (error) => console.log(error)
            ).execute(url);
        });
    }
}
