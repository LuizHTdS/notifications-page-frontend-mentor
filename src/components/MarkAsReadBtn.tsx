interface buttonProps {
  isRead: boolean[];
  setIsRead: React.Dispatch<React.SetStateAction<boolean[]>>;
}

const MarkAsReadBtn = (props: buttonProps) => {
  const markAllAsRead = () => {
    const newIsRead = [...props.isRead];
    newIsRead.fill(true);
    props.setIsRead(newIsRead);
  };
  return (
    <div className='markAsReadBtn' onClick={markAllAsRead}>
      Mark all as read
    </div>
  );
};

export default MarkAsReadBtn;
