import { io } from 'socket.io-client';

const URL = process.env.NODE_ENV === 'production' ? undefined : 'http://127.0.0.1:5000';

export const socket = io(URL);

