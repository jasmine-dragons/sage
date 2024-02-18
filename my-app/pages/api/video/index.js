import config from "../config.js";
import { videoToken } from "../token.js";
import { sendTokenResponse } from "../server.js";

export default async function handler(req, res) {
  const body = await JSON.parse(req.body);
  if (req.method === "GET") {
    const identity = body.identity;
    const room = body.room;
    const token = videoToken(identity, room, config.config);
    sendTokenResponse(token, res);
  } else if (req.method == "POST") {
    const identity = body.identity;
    const room = body.room;
    const token = videoToken(identity, room, config.config);
    const jwt = await token.toJwt();
    const message = JSON.stringify({ token: token.toJwt });
    res.status(200).json(JSON.stringify({ token: token.toJwt() }));
  } else {
    res.status(404).json({ message: "invalid endpoint" });
  }
}
