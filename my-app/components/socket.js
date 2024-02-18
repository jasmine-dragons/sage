import { io } from 'socket.io-client';

const URL = process.env.NEXT_SOCKET_URL;
const socket = io(URL);
console.log(socket)
export default socket;