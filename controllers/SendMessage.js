import dotenv from "dotenv";
import fetch from "node-fetch";
import SentMessagesSchema from "../models/SentMessages.js";

dotenv.config();

const SERVICE_PLAN_ID = "ec9aef3261c94f298b5b02a74a58b1c9";
const API_TOKEN = "44739f94d91344f2b4b4541a1dbb13d2";
const SINCH_NUMBER = "+447537404817";

export const SendMessage = async (req, res) => {
  const { phoneNumber, message, name } = req.body;
  try {
    const resp = await fetch(
      "https://us.sms.api.sinch.com/xms/v1/" + SERVICE_PLAN_ID + "/batches",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + API_TOKEN,
        },
        body: JSON.stringify({
          from: SINCH_NUMBER,
          to: [phoneNumber],
          body: message,
        }),
      }
    );

    const data = await resp.json();
    await SentMessagesSchema.create({
      to: phoneNumber,
      message: data.body,
      id: data.id,
      name: name,
      sendingTime: data.created_at,
    });

    return res.send(data);
  } catch (error) {
    console.log(error);
  }
};
