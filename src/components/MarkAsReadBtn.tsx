const MarkAsReadBtn = () => {
  const placeHolder = () => {
    console.log('button clicked!');
  };

  return (
    <div className='markAsReadBtn' onClick={placeHolder}>
      Mark all as read
    </div>
  );
};

export default MarkAsReadBtn;
