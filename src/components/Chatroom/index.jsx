import React, { useState, useEffect } from 'react';
import socketIOClient from "socket.io-client";

const ENDPOINT = "http://127.0.0.1:3002"


const Chatroom = () => {

    const [response, setResponse] = useState("");

    useEffect(() => {
        const socket = socketIOClient(ENDPOINT);
        socket.on("FromAPI", data => {
            setResponse(data);
        });
    }, []);

    return (
        <> 
        {
            response !== "" ?
                <p>
                    It's <time dateTime={response}>{response}</time>
                </p>
                :
                <p>
                    Oh no , Server is down
                </p>
        }
        </>
    );
}

export default Chatroom;