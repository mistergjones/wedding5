import React from "react";
import "./RSVPModal.css";

const RSVPModal = (props) => {
    return (
        <>
            <div className="backdrop" onClick={props.onConfirm}>
                <div className="modal">
                    <h2>Thankyou for your RSVP</h2>

                    <input
                        type="submit"
                        value="Close"
                        onClick={props.onConfirm}
                    />
                </div>
            </div>
        </>
    );
};

export default RSVPModal;
