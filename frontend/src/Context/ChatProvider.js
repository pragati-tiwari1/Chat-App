//CONTEXT API IS USED TO FETCH STATES.
//IN THIS FOLDER, WE CONTAINS CONTEXT API SO THAT WE CAN DIRECTLY FETCH OUR STATES

import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

//children is our app
//we are wrapping our whole app inside this
//so that whatever state we create inside our context ,it will be accessible inside whole app

const { createContext, useContext, useState, useEffect } = require("react");

const ChatContext = createContext();

const ChatProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [selectedChat, setSelectedChat] = useState();
  const [chats, setChats] = useState([]);

  const history = useHistory();
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo")); //by this we are taking the values entered by user during login/signup
    setUser(userInfo);

    if (!userInfo) {
      history.push("/");
    }
  }, [history]);

  return (
    <ChatContext.Provider
      value={{
        user,
        setUser,
        selectedChat,
        setSelectedChat,
        chats,
        setChats,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const ChatState = () => {
  return useContext(ChatContext); //this hook is used to make all states accessible inside other pages
};

export default ChatProvider;
