import React from "react";
import ChatBody from "./ChatBody/ChatBody";
import ChatInput from "./ChatInput/ChatInput";

import s from "./Messenger.module.css";

const Messenger = (props) => {
    return (
        <div className={s.messenger}>
            <div>Header</div>
            <ChatBody messages={props.dialog[0].messages} />
            <ChatInput
                newMessageText={props.dialog.input}
                dispatch={props.dispatch}
            />
        </div>
    );
};

export default Messenger;
