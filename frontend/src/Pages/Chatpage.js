import React, { useEffect, useState } from "react";
import axios from "axios";
import { ChatState } from "../Context/ChatProvider";
import { Box, Flex } from "@chakra-ui/react";
import SideDrawer from "../components/Miscellaneous/SideDrawer";
import MyChats from "../components/Miscellaneous/MyChats";
import ChatBox from "../components/Miscellaneous/ChatBox";

const Chatpage = () => {
  const { user } = ChatState();
  const [fetchAgain, setFetchAgain] = useState(false);
  const [notification, setNotification] = useState([]);
  return (
    <div style={{ width: "100%" }}>
      {user && (
        <SideDrawer
          notification={notification}
          setNotification={setNotification}
        />
      )}
      <Box
        display="flex"
        justifyContent={"space-between"}
        w="100%"
        h="550px"
        p="10px"
      >
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <ChatBox
            fetchAgain={fetchAgain}
            setFetchAgain={setFetchAgain}
            notification={notification}
            setNotification={setNotification}
          />
        )}
      </Box>
    </div>
  );
};

export default Chatpage;
