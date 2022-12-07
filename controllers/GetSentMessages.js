import SentMessagesSchema from "../models/SentMessages.js";

export const getSentMessages = async (req, res) =>{
    try {
        const sentMessages = await SentMessagesSchema.find();
        sentMessages.reverse()
        return res.send(sentMessages);
    } catch (error) {
        console.log(error)
    }
}