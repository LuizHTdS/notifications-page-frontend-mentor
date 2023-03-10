interface NotificationProps {
  username: string;
  profilePicLink: string;
  action: string;
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
    return (
      <>
        reacted to your recent post <a href='/'>{props.post}</a>
      </>
    );
  } else if (props.action === 'followed') {
    return `followed you`;
  } else if (props.action === 'joinedGroup') {
    return (
      <>
        joined the group <a href='/'>{props.groupName}</a>
      </>
    );
  } else if (props.action === 'pm') {
    return `sent you a private message`;
  } else if (props.action === 'commented') {
    return `commented on your picture`;
  } else if (props.action === 'leftGroup') {
    return (
      <>
        left the group <a href='/'>{props.groupName}</a>
      </>
    );
  } else
    console.error('Something went wrong with the type of the notification');
}

const Notification = (props: NotificationProps) => {
  return (
    <>
      <div className={props.isRead ? `notification` : `notification unread`}>
        <img
          className='notification__pfp'
          src={props.profilePicLink}
          alt={`${props.username}'s profile picture`}
        />
        <div className='notification__body'>
          <h3>
            <b>{props.username} </b>
            <>{getAction(props)}</>
          </h3>
          <h4>{props.time} ago</h4>
        </div>
        {props.pictureLink && (
          <img
            src={props.pictureLink}
            alt='your posted picture'
            className='notification__picture'
          />
        )}
        {!props.isRead && <div className='unreadCheckmark'></div>}
      </div>
      {props.message && (
        <div className='notification__body--message'>
          <p>{props.message}</p>
        </div>
      )}
    </>
  );
};

export default Notification;
