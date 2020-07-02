const User = require("./models/").user;
const Chat = require("./models/").chat;
const Message = require("./models/").message;

const getUser = async () => {
  const user = await User.findByPk(1);
  console.log(user.get({ plain: true }));
  // console.log(user.map((u) => u.get({ plain: true })));
  return user;
};

// getUser();

const getUsers = async () => {
  const users = await User.findAll({
    include: [{ model: User, as: "user_contacts" }],
  });
  console.log(users.map((u) => u.get({ plain: true })));
};

// getUsers();

const getChats = async () => {
  const chats = await Chat.findAll({
    include: [{ model: User, as: "creator" }],
  });
  console.log(chats.map((u) => u.get({ plain: true })));
};

// getChats();

const getMessages = async () => {
  const data = await Message.findAll({ where: {} });
  console.log(data.map((u) => u.get({ plain: true })));
};

// getMessages();

const getUserWithAllChats = async () => {
  const users = await User.findAll({
    include: [{ model: Chat, as: "participants" }],
  });
  console.log(users.map((u) => u.get({ plain: true })));
};

// getUserWithAllChats();

const getChatParticipants = async () => {
  const chats = await Chat.findOne({
    where: { id: 15 },
    include: [{ model: User, as: "participants" }],
  });
  console.log(chats.get({ plain: true }));
  // console.log(chats.map((u) => u.get({ plain: true })));
};

getChatParticipants();
