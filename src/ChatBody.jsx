import Avatar from '@mui/joy/Avatar';
import styles from "./styles/ChatBody.module.scss";
import { AddIcon } from "@chakra-ui/icons";
import SendIcon from "@mui/icons-material/Send";

const ChatBody = ({ selectedConversation }) => {

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

  return (
    <div className={styles.chatBody}>
      {selectedConversation && (
        <div>
          <div className={styles.recepiantInfo}>
            <div className={styles.recepiantImage}>
              <Avatar
                className={styles.avatar}
                src={selectedConversation.avatar || undefined}
                style={{width: 80, height: 80,  backgroundColor: selectedConversation.avatar ? undefined : getColorForAvatar(selectedConversation.id)}}
                bg="blue.200"
                name={selectedConversation.username}
              />
            </div>
            <div className={styles.recepiantname}>
              {selectedConversation.username}
            </div>
          </div>
          <div className={styles.messages}>
            {selectedConversation.messages
              .slice()
              .reverse()
              .map((message, index) => (
                <div
                  key={index}
                  className={`${styles.message} ${
                    message.sent
                      ? styles.currentUserMessage
                      : styles.otherUserMessage
                  }`}
                >
                  <div
                    className={`${styles.messageContent} ${
                      message.sent ? styles.sentMessage : ""
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
          </div>
          <div className={styles.textInput}>
            <button className={styles.textButton}>
              <AddIcon className={styles.icon} />
            </button>
            <input
              className={styles.inputField}
              type="text"
              placeholder="Type Message"
            />
            <button className={styles.textButton}>
              <SendIcon className={styles.icon}  />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBody;
