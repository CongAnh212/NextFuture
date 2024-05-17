import axios from "../core/coreRequest";
import {
    database,
    ref,
    push,
    onValue,
    query,
    orderByChild,
    equalTo,
    limitToLast,
    set,
} from "../firebase";

export default {
    async getMessage({ commit }, conversationId) {
        const queryRef = query(
            ref(database, "messages/"),
            orderByChild("conversation_id"),
            equalTo(conversationId)
        );

        await new Promise((resolve, reject) => {
            onValue(queryRef, (snapshot) => {
                var listMessage = [];
                snapshot.forEach((childSnapshot) => {
                    const messageData = childSnapshot.val();
                    const messageId = childSnapshot.key;
                    listMessage.push({ ...messageData, id: messageId });
                });

                commit("setListMessage", listMessage);
                resolve();
            });
        });
    },
    async getConversation({ commit, dispatch, state }) {
        let listConversation = [];
        const queryRefSender = query(
            ref(database, "conversations/"),
            orderByChild("sender/id"),
            equalTo(state.myInfo.id)
        );
        const queryRefReceiver = query(
            ref(database, "conversations/"),
            orderByChild("receiver/id"),
            equalTo(state.myInfo.id)
        );
        await new Promise((resolve, reject) => {
            onValue(
                queryRefSender,
                (data) => {
                    data.forEach((value) => {
                        listConversation.push({
                            ...value.val(),
                            id: value.key,
                        });
                    });
                    resolve();
                },
                (error) => {
                    reject(error);
                }
            );
        });
        await new Promise((resolve, reject) => {
            onValue(
                queryRefReceiver,
                (data) => {
                    data.forEach((value) => {
                        listConversation.push({
                            ...value.val(),
                            id: value.key,
                        });
                    });
                    resolve();
                },
                (error) => {
                    reject(error);
                }
            );
        });

        dispatch("getMessage", listConversation[0].id);
        commit("setListConversation", listConversation);
        commit("setConversation", listConversation[0]);
        state.listConversation.forEach(async (conv) => {
            conv.nearMess = await dispatch("getNearMessage", conv.id);
        });
    },
    async getNearMessage({}, conversationId) {
        const queryRef = query(
            ref(database, "messages/"),
            orderByChild("conversation_id"),
            equalTo(conversationId),
            limitToLast(1)
        );
        var nearMess = null;
        await new Promise((resolve, reject) => {
            onValue(queryRef, (snapshot) => {
                snapshot.forEach((childSnapshot) => {
                    nearMess = childSnapshot.val();
                });
                resolve();
            });
        });

        return nearMess;
    },
    async fetchMyInfo({ commit }) {
        const res = await axios.get("profile/data");
        commit("setMyInfo", res.data.myInfo);
    },
    async sendMessage({ commit }, message) {
        await push(ref(database, "messages/"), message);
        console.log("send message success");

        commit("updateConversationNearMess", message);
    },
    async createConversation({ commit, state }, conversation) {
        let listConversation = Object.assign([], state.listConversation);
        try {
            const res = await push(
                ref(database, "conversations/"),
                conversation
            );
            const conv = { ...conversation, id: res.key };
            listConversation.unshift(conv);
            commit("setListConversation", listConversation);

            return conv;
        } catch (error) {
            console.error("Error creating conversation: ", error);
        }
    },
    deleteMessage({ commit }, message) {
        set(ref(database, "messages/" + message.id), {
            ...message,
            isDelete: true,
        });
    },
};
