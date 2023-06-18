import ChatBody from "./ChatBody";
import ChatList from "./ChatList";
import Header from "./Header";
import styles from "./styles/Chat.module.scss";
import { useState } from "react";

const ChatPage = () => {
  const [selectedConversation, setSelectedConversation] = useState(null);

  return (
    <div className={styles.app}>
      <Header className={styles.header} />
      <div className={styles.chat}>
        <ChatList
          setSelectedConversation={setSelectedConversation}
          className={styles.item}
        />
        <ChatBody
          selectedConversation={selectedConversation}
          className={styles.item}
        />
      </div>
    </div>
  );
};

export default ChatPage;
