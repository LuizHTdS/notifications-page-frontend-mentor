import Notification from './components/Notification';
import NotificationCounter from './components/NotificationCounter.js';
import MarkAsReadBtn from './components/MarkAsReadBtn.js';
import notifications from './data.js';

const notificationsEl = notifications.map((not) => {
  if (not.action === 'reacted') {
    return (
      <Notification
        username={not.username}
        profilePicLink={not.profilePic}
        action={not.action}
        isRead={not.isRead}
        key={not.username}
        post={not.post}
        time={not.time}
      />
    );
  } else if (not.action === 'followed') {
    return (
      <Notification
        username={not.username}
        profilePicLink={not.profilePic}
        action={not.action}
        isRead={not.isRead}
        key={not.username}
        time={not.time}
      />
    );
  } else if (not.action === 'joinedGroup' || not.action === 'leftGroup') {
    return (
      <Notification
        username={not.username}
        profilePicLink={not.profilePic}
        action={not.action}
        isRead={not.isRead}
        key={not.username}
        time={not.time}
        groupName={not.groupName}
      />
    );
  } else if (not.action === 'pm') {
    return (
      <Notification
        username={not.username}
        profilePicLink={not.profilePic}
        action={not.action}
        isRead={not.isRead}
        key={not.username}
        time={not.time}
        message={not.message}
      />
    );
  } else if (not.action === 'commented') {
    return (
      <Notification
        username={not.username}
        profilePicLink={not.profilePic}
        action={not.action}
        isRead={not.isRead}
        key={not.username}
        time={not.time}
        pictureLink={not.pictureLink}
      />
    );
  }
});

function App() {
  return (
    <main>
      <header>
        <NotificationCounter notifications={3} />
        <MarkAsReadBtn />
      </header>
      <section>{notificationsEl}</section>
    </main>
  );
}

export default App;
