import uniqid from "uniqid"
const SEND_MESSAGE = "my-book/dialogs/SEND_MESSAGE"

let initialState = {
    dialogs: [
        { id: uniqid(), name: "Narek Hakobyan" },
        { id: uniqid(), name: "Tina Boldryan" }
    ],
    messages: [
        { id: uniqid(), message: "hello my name is Narek" },
        { id: uniqid(), message: "hello my name is Kristina" },
    ],
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {

        case SEND_MESSAGE:
            let body = action.newMessageBody
            return {
                ...state,
                messages : [...state.messages, { id: uniqid(), message: body }]
            }
        default:
            return state
    }

}
export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody });

export default dialogsReducer