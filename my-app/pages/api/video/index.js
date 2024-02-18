import config from "../config.js";
import { videoToken } from "../token.js";
import { sendTokenResponse } from "../server.js";

export default function handler(req, res) {
  if (req.method === "GET") {
    const identity = req.query.identity;
    const room = req.query.room;
    const token = videoToken(identity, room, config);
    sendTokenResponse(token, res);
  } else if (req.method == "POST") {
    const identity = req.body.identity;
    const room = req.body.room;
    const token = videoToken(identity, room, config);
    sendTokenResponse(token, res);
  } else {
    res.status(404).json({ message: "invalid endpoint" });
  }
}
