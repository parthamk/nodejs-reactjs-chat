import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div style={{ height: "100vh" }}>
        <PrettyChatWindow
            projectId="8407ec83-c7ef-4d07-acc8-10429a6175c1"
            username={props.user.username}
            secret={props.user.secret}
            style={{height:'100%'}}
        />
    </div>
  );
};

export default ChatsPage;
