import Notification from './components/Notification';
import NotificationCounter from './components/NotificationCounter.js';
import MarkAsReadBtn from './components/MarkAsReadBtn.js';
import notifications from './data.js';
import { useState, useEffect } from 'react';

function App() {
  const [isRead, setIsRead] = useState(Array<boolean>);
  useEffect(() => {
    const updatedIsRead = notifications.map((not) => not.isRead);
    setIsRead(updatedIsRead);
  }, [notifications]);

  const notificationsEl = notifications.map((not, index) => {
    const { username, profilePic, action, time } = not;
    const props = {
      username,
      profilePicLink: profilePic,
      action,
      isRead: isRead[index],
      time,
    };
    switch (action) {
      case 'reacted':
        return <Notification {...props} key={username} post={not.post} />;
      case 'followed':
        return <Notification {...props} key={username} />;
      case 'joinedGroup':
      case 'leftGroup':
        return (
          <Notification {...props} key={username} groupName={not.groupName} />
        );
      case 'pm':
        return <Notification {...props} key={username} message={not.message} />;
      case 'commented':
        return (
          <Notification
            {...props}
            key={username}
            pictureLink={not.pictureLink}
          />
        );
      default:
        return null;
    }
  });
  return (
    <main>
      <header>
        <NotificationCounter
          notifications={isRead.filter((read) => !read).length}
        />
        <MarkAsReadBtn isRead={isRead} setIsRead={setIsRead} />
      </header>
      <section>{notificationsEl}</section>
    </main>
  );
}

export default App;
