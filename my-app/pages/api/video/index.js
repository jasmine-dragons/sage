import config from "../config.js";
import { videoToken } from "../token.js";
import { sendTokenResponse } from "../server.js";

export default async function handler(req, res) {
  console.log("reached api/video");
  const body = await JSON.parse(req.body);
  if (req.method === "GET") {
    const identity = body.identity;
    const room = body.room;
    const token = videoToken(identity, room, config.config);
    sendTokenResponse(token, res);
  } else if (req.method == "POST") {
    console.log("HERERERERE");
    const identity = body.identity;
    const room = body.room;
    const token = videoToken(identity, room, config.config);
    console.log(token);
    const jwt = await token.toJwt();
    const message = JSON.stringify({ token: token.toJwt });
    console.log(jwt);
    res.status(200).json(JSON.stringify({ token: token.toJwt() }));
  } else {
    res.status(404).json({ message: "invalid endpoint" });
  }
}
