export class NotificationNotFound extends Error {
  constructor() {
    super('Notification not found.'); // <-- constructor da classe "Error".
  }
}
