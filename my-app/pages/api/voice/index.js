import config from "../config";
import { voiceToken } from "../token";
import { sendTokenResponse } from "../server";

export default function handler(req, res) {
  if (req.method === "GET") {
    const identity = req.body.identity;
    const token = voiceToken(identity, config);
    sendTokenResponse(token, res);
  } else if (req.method == "POST") {
    const identity = req.body.identity;
    const token = voiceToken(identity, config);
    sendTokenResponse(token, res);
  } else {
    res.status(404).json({ message: "invalid endpoint" });
  }
}
