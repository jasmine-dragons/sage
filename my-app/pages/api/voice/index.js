import config from "../config";
import { voiceToken } from "../token";

export default function handler(req, res) {
  if (req.method === "GET") {
    const identity = req.body.identity;
    const token = voiceToken(identity, config.config);
    res.status(200).json(JSON.stringify({ token: token.toJwt() }));
  } else if (req.method == "POST") {
    const identity = req.body.identity;
    const token = voiceToken(identity, config.config);
    res.status(200).json(JSON.stringify({ token: token.toJwt() }));
  } else {
    res.status(404).json({ message: "invalid endpoint" });
  }
}
