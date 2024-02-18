import { io } from "socket.io-client";

console.log(process.env.NEXT_SOCKET_URL);
const URL = "http://127.0.0.1:5000";
const socket = io(URL);
console.log(socket);
export default socket;
