import React, { useEffect } from 'react';
import M from "materialize-css";
import "materialize-css/dist/css/materialize.css";

const handleAfterDocumentLoaded = () => {
    M.textareaAutoResize(document.getElementById('textarea1'));
}

const Chatbox = () => {

    useEffect(() => {
        handleAfterDocumentLoaded();
    }, []);

    return (
        <>
            <div className="container">
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                                <textarea id="textarea1" className="materialize-textarea"></textarea>
                                <label htmlFor="textarea1">Textarea</label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}


export default Chatbox;