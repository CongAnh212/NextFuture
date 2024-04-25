import {
  database,
  ref,
  push,
  onValue,
  query,
  orderByChild,
  equalTo,
} from "../../../firebase";

const messageRef = ref(database, "messages/");
const conversationRef = ref(database, "conversations/");
export default {
  sendMessage(payload) {
    push(messageRef, payload).then((data) => {
      console.log("send message success");
    });
  },
  async getConversation() {
    let listConversation = [];
    await new Promise((resolve, reject) => {
      onValue(
        conversationRef,
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

    return listConversation;
  },

  async getMessage(conversationId) {
    console.log('check');
    let listMessage = [];

    const queryRef = query(
      messageRef,
      orderByChild("conversation_id"),
      equalTo(conversationId)
    );

    await new Promise((resolve, reject) => {
      onValue(
        queryRef,
        (snapshot) => {
          snapshot.forEach((childSnapshot) => {
            const messageData = childSnapshot.val();
            const messageId = childSnapshot.key;
            listMessage.push({ ...messageData, id: messageId });
          });
          resolve();
        },
        (error) => {
          reject(error);
        }
      );
    });
    console.log('listMessaádasdge: ', listMessage);

    return listMessage;
  },
};
// import {
//   database,
//   ref,
//   push,
//   onValue,
//   query,
//   orderByChild,
//   equalTo,
// } from "../../../firebase";

// const messageRef = ref(database, "messages/");
// const conversationRef = ref(database, "conversations/");

// export default {
//   async sendMessage(payload) {
//     try {
//       await push(messageRef, payload);
//       console.log("send message success");
//     } catch (error) {
//       console.error("Error sending message:", error);
//     }
//   },

//   async getConversation() {
//     try {
//       const listConversation = [];
//       const data = await new Promise((resolve, reject) => {
//         onValue(
//           conversationRef,
//           (snapshot) => {
//             const data = snapshot.val();
//             resolve(data);
//           },
//           reject
//         );
//       });

//       if (data) {
//         Object.entries(data).forEach(([key, value]) => {
//           listConversation.push({
//             ...value,
//             id: key,
//           });
//         });
//       }
//       return listConversation;
//     } catch (error) {
//       console.error("Error getting conversation:", error);
//       return [];
//     }
//   },

//   async getMessage(conversationId) {
//     try {
//       console.log("có đâye");

//       const listMessage = [];
//       const queryRef = query(
//         messageRef,
//         orderByChild("conversation_id"),
//         equalTo(conversationId)
//       );

//       const data = await new Promise((resolve, reject) => {
//         onValue(
//           queryRef,
//           (snapshot) => {
//             const data = snapshot.val();
//             resolve(data);
//           },
//           reject
//         );
//       });

//       if (data) {
//         Object.entries(data).forEach(([key, value]) => {
//           listMessage.push({
//             ...value,
//             id: key,
//           });
//         });
//       }
//       return listMessage;
//     } catch (error) {
//       console.error("Error getting message:", error);
//       return [];
//     }
//   },
// };
