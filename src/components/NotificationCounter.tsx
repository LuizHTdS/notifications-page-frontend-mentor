type Notification = {
  notifications: number;
};

const NotificationCounter = ({ notifications }: Notification) => {
  return (
    <div className='notifications'>
      <h1>Notifications</h1>
      <div className='notifications__number'>{notifications}</div>
    </div>
  );
};

export default NotificationCounter;
