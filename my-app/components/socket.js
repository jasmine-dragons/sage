import { io } from "socket.io-client";

console.log(process.env.NEXT_PUBLIC_SOCKET_URL);
const URL = process.env.NEXT_PUBLIC_SOCKET_URL;
const socket = io(URL, {
  cors: {
    origin: "",
  },
  allowEIO3: true,
});
console.log(socket);
export default socket;
