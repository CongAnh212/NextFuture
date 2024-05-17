export default {
    setListMessage(state, listMessage) {
        listMessage.forEach((element) => {
            if (element.reply_id) {
                element.reply = listMessage.find(
                    (msg) => msg.id === element.reply_id
                );
            }
        });
        state.listMessage = listMessage;
    },
    setListConversation(state, listConversation) {
        state.listConversation = listConversation;
    },
    setConversation(state, conversation) {
        state.conversation = conversation;
    },
    setNearMessage(state, { conversationId, nearMess }) {
        const conversation = state.listConversation.find(
            (conv) => conv.id === conversationId
        );
        if (conversation) {
            conversation.nearMess = nearMess;
        }
    },
    setMyInfo(state, myInfo) {
        state.myInfo = myInfo;
    },
    updateConversationNearMess(state, message) {
        state.listConversation.forEach((conv) => {
            if (conv.id === message.conversation_id) {
                conv.nearMess = message;
            }
        });
    },
    UNSHIFT_LISTCONVERSATION(state, conversation) {
        console.log("conversation: ", conversation);
        console.log("state.listConversation: ", state.listConversation);
        state.listConversation.unshift(conversation);
        console.log("state.listConversation: ", state.listConversation);
    },
    REMOVE_CURRENT_CHAT(state) {
        console.log("REMOVE_CURRENT_CHAT");
        state.conversation = null;
        state.listConversation = null;
        state.listMessage = null;
        state.myInfo = null;
    },
};
