import React, { useState, useEffect } from 'react';
import Chatbox from './Chatbox';
import socketIOClient from "socket.io-client";

const ENDPOINT = "http://localhost:3001"


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
            <p>
                It's <time dateTime={response}>{response}</time>
            </p>
            <Chatbox />
        </>
    );
}

export default Chatroom;