import ChatBody from "./ChatBody";
import ChatList from "./ChatList";
import Header from "./Header";
import styles from "./styles/Chat.module.scss";
import { useState } from "react";

const ChatPage = () => {
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [menu, setMenu] = useState(false);

  return (
    <div className={styles.app}>
      <Header menu={menu} setMenu={setMenu} className={styles.header} />
      <div className={styles.chat}>
        <ChatList
          setSelectedConversation={setSelectedConversation}
          menu={menu}
          setMenu={setMenu}
          className={styles.list}
        />
        <ChatBody
          selectedConversation={selectedConversation}
          className={styles.body}
        />
      </div>
    </div>
  );
};

export default ChatPage;
