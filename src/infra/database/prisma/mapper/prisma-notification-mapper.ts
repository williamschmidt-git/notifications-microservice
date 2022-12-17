import { Notification } from 'src/app/entities/notification';
import { Notification as RawNotification } from '@prisma/client';
import { Content } from 'src/app/entities/content';

export class PrismaNotificationMapper {
  static toPrisma(notification: Notification) {
    return {
      id: notification.id,
      content: notification.content.value,
      category: notification.category,
      recipientId: notification.recipientId,
      readAt: notification.readAt,
      createdAt: notification.createdAt,
    };
  }

  static toDomain(rawData: RawNotification): Notification {
    return new Notification(
      {
        category: rawData.category,
        content: new Content(rawData.content),
        recipientId: rawData.recipientId,
        readAt: rawData.readAt,
        canceledAt: rawData.canceledAt,
        createdAt: rawData.createdAt,
      },
      rawData.id,
    );
  }
}
