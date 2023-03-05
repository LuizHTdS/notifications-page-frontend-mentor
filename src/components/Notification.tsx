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
  children?: JSX.Element | JSX.Element[];
}

function getAction(props: NotificationProps) {
  if (props.action === 'reacted') {
    return `reacted to your recent post ${props.post}`;
  } else if (props.action === 'followed') {
    return `followed you`;
  } else if (props.action === 'joinedGroup') {
    return `has joined your group ${props.groupName}`;
  } else if (props.action === 'pm') {
    return `sent you a private message`;
  } else if (props.action === 'commented') {
    return `commented on your picture`;
  } else if (props.action === 'leftGroup') {
    return `left the group ${props.groupName}`;
  } else
    console.error('Something went wrong with the type of the notification');
}

const Notification = (props: NotificationProps) => {
  return (
    <div className={props.isRead ? `notification` : `notification unread`}>
      <img
        src={props.profilePicLink}
        alt={`${props.username}'s profile picture`}
      />
      <div className='notification__body'>
        <h3>
          <b>{props.username} </b>
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
