import { useState } from "react";
import Avatar from "@mui/joy/Avatar";
import { SearchIcon } from "@chakra-ui/icons";
import styles from "./styles/ChatList.module.scss";
import { conversations } from "./data/texts";

function limitText(text) {
  if (text.length <= 40) {
    return text;
  } else {
    return text.substring(0, 40) + "...";
  }
}
const getColorForAvatar = (avatarId) => {
  const colors = [
    "#DC103C", // crimson
    "#FFA500", // Orange
    "#FFFF50", // Yellow
    "#00CED1", // Turquoise
    "#cbbbdb", // lavender
    "#ADFF2F", // green
    "#FFC0CB", // Pink
  ];

  // Get the index based on the avatarId
  const index = avatarId % colors.length;

  return colors[index];
};

const ChatList = ({ setSelectedConversation, menu, setMenu }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const handleConversationClick = (conversation) => {
    setSelectedConversation(conversation);
    setMenu(!menu);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredConversations = conversations.filter((conversation) =>
    conversation.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={`${styles.chatList} ${!menu && styles.hideOnMobile}`}>
      <div className={styles.chatsHeading}>Chats <span className={styles.menu} onClick={()=>{setMenu(!menu)}}></span></div>
      <div className={styles.searchbarContainer}>
        <input
          className={styles.searchbar}
          type="text"
          placeholder="Search here"
          value={searchQuery}
          onChange={handleSearchChange}
        />

        <SearchIcon
          className={styles.searchIcon}
          size={8}
          style={{ color: "#1218e2 " }}
        />
      </div>
      <div className={styles.conversations}>
        {filteredConversations.map((conversation) => (
          <div
            key={conversation.id}
            className={styles.conversation}
            onClick={() => handleConversationClick(conversation)}
          >
            <Avatar
              className={styles.avatar}
              src={conversation.avatar || undefined}
              style={{
                width: 60,
                height: 60,
                backgroundColor: conversation.avatar
                  ? undefined
                  : getColorForAvatar(conversation.id),
              }}
              name={conversation.username}
            />
            <div className={styles.chatInfo}>
              <div className={styles.username}>{conversation.username}</div>
              <div className={styles.lastMessage}>
                {limitText(
                  conversation.messages[conversation.messages.length - 1].text
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatList;
