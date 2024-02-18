"use client"
import { useRouter } from 'next/router'
import { useState, useEffect, useCallback   } from "react";
import Room from "@/pages/Room";

const room = () => {
    const router = useRouter()
    const roomName = router.query.room
    const [username, setUsername] = useState((Math.random() + 1).toString(36).substring(7));
    const [token, setToken] = useState(null);

    useEffect(() => {
        const getToken= async () => {
            const data = await fetch("/api/video", {
                method: "POST",
                body: JSON.stringify({
                identity: username,
                room: roomName,
                }),
            });
            let body = await data.json();
            body = await JSON.parse(body);
            setToken(body.token);
            console.log(body.token);
        }
        getToken()
    })
    const handleLogout = useCallback((event) => {
        setToken(null);
      }, []);
    let render;
    if (token) {
      render = (
        <Room roomName={roomName} token={token} handleLogout={handleLogout} />
      );
    } else{
        render=(
            <div>loading...</div>
        )
    }
    return render;
}
export default room;
