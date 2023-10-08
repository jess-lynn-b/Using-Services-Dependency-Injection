export class LoggingService {
  logStatusChange(status: string) {
    console.log('A server status chnaged, new status' + status);
  }
}
