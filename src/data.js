const data = {
  users: [
    {
      username: 'Mark Webber',
      profilePic: '../assets/images/avatar-mark-webber.webp',
    },
    {
      username: 'Angela Gray',
      profilePic: '../assets/images/avatar-angela-gray.webp',
    },
    {
      username: 'Jacob Thompson',
      profilePic: '../assets/images/avatar-jacob-thompson.webp',
    },
    {
      username: 'Rizky Hasanuddin',
      profilePic: '../assets/images/avatar-rizky-hasanuddin.webp',
    },
    {
      username: 'Kimberly Smith',
      profilePic: '../assets/images/avatar-kimberly-smith.webp',
    },
    {
      username: 'Nathan Peterson',
      profilePic: '../assets/images/avatar-nathan-peterson.webp',
    },
    {
      username: 'Anna Kim',
      profilePic: '../assets/images/avatar-anna-kim.webp',
    },
  ],

  notifications: [
    {
      username: users[0].username,
      profilePic: users[0].profilePic,
      action: 'reacted',
      isRead: false,
      time: '1m',
      post: 'My first tournament today!',
    },
    {
      username: users[1].username,
      profilePic: users[1].profilePic,
      action: 'followed',
      isRead: false,
      time: '5m',
    },
    {
      username: users[2].username,
      profilePic: users[2].profilePic,
      action: 'joinedGroup',
      isRead: false,
      time: '1 day',
      groupName: 'Chess Club',
    },
    {
      username: users[3].username,
      profilePic: users[3].profilePic,
      action: 'pm',
      isRead: true,
      time: '5 days',
      message: `Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game`,
    },
    {
      username: users[4].username,
      profilePic: users[4].profilePic,
      action: 'commented',
      isRead: true,
      time: '1 week',
      pictureLink: '../assets/images/image-chess.webp',
    },
    {
      username: users[5].username,
      profilePic: users[5].profilePic,
      action: 'reacted',
      isRead: true,
      time: '2 weeks',
      post: '5 end-game strategies to increase your win rate',
    },
    {
      username: users[6].username,
      profilePic: users[6].profilePic,
      action: 'leftGroup',
      isRead: true,
      time: '2 weeks',
      groupName: 'Chess Club',
    },
  ],
};
