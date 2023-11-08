import PushNotification from 'react-native-push-notification';

class CustomNotificationService {
  static init() {
    PushNotification.createChannel(
      {
        channelId: 'important',
        channelName: 'Important Notifications',
        // channelDescription: 'Custom Channel Description',
      },
      created => {
        if (created) {
          console.log('Custom notification channel created.');
        }
      },
    );

    PushNotification.getChannels(channels => {
      console.log('Notification channels:', channels);
    });

    // Register the custom notification service
    PushNotification.registerNotificationService(
      () => CustomNotificationService,
    );
  }

  onNotification(notification) {
    console.log('Custom notification received:22222222', notification);

    // Handle the notification as needed when the app is in the "killed" state
    // You can navigate to a specific screen or perform an action here
  }
}

export default CustomNotificationService;
