import config from "../config";
import { chatToken } from "../token";

export default function handler(req, res) {
  if (req.method === "GET") {
    const identity = req.query.identity;
    const token = chatToken(identity, config.config);
    res.status(200).json(JSON.stringify({ token: token.toJwt() }));
  } else if (req.method == "POST") {
    const identity = req.body.identity;
    const token = chatToken(identity, config.config);
    res.status(200).json(JSON.stringify({ token: token.toJwt() }));
  } else {
    res.status(404).json({ message: "invalid endpoint" });
  }
}
