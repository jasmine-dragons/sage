import config from "../config";
import { chatToken } from "../token";
import { sendTokenResponse } from "../server";

export default function handler(req, res) {
  if (req.method === "GET") {
    const identity = req.query.identity;
    const token = chatToken(identity, config.config);
    sendTokenResponse(token, res);
  } else if (req.method == "POST") {
    const identity = req.body.identity;
    const token = chatToken(identity, config.config);
    sendTokenResponse(token, res);
  } else {
    res.status(404).json({ message: "invalid endpoint" });
  }
}
