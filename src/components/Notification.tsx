interface NotificationProps {
  username: string;
  profilePicLink: string;
  action:
    | 'reacted'
    | 'followed'
    | 'joinedGroup'
    | 'pm'
    | 'commented'
    | 'leftGroup';
  isRead: boolean;
  time: string;
  post?: string;
  message?: string;
  groupName?: string;
  pictureLink?: string;
  children: JSX.Element | JSX.Element[];
}

function getAction(props: NotificationProps) {
  props.action === 'reacted'
    ? `reacted to your recent post ${props.post}`
    : props.action === 'followed'
    ? `followed you`
    : props.action === 'joinedGroup'
    ? `has joined your group ${props.groupName}`
    : props.action === 'pm'
    ? `sent you a private message`
    : props.action === 'commented'
    ? `commented on your picture`
    : props.action === 'leftGroup'
    ? `left the group ${props.groupName}`
    : console.error('Something went wrong with the type of the notification');
}

const Notification = (props: NotificationProps) => {
  return (
    <div className='notification'>
      <img
        src={props.profilePicLink}
        alt={`${props.username}'s profile picture`}
      />
      <div className='notification__body'>
        <h3>
          <b>{props.username}</b>
          <>{getAction(props)}</>
        </h3>
        <h4>{props.time} ago</h4>
        {!props.isRead && <div className='unreadCheckmark'></div>}
      </div>
      {props.message && (
        <div className='notification__body--message'>{props.message}</div>
      )}
      {props.pictureLink && (
        <img
          src={props.pictureLink}
          alt='your posted picture'
          className='notification__picture'
        />
      )}
    </div>
  );
};

export default Notification;
