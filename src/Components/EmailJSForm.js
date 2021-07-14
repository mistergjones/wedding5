import React, { useState } from "react";
import emailjs from "emailjs-com";

import RSVPModal from "./RSVPModal";

import "./SaveTheDate.css";

export default function EmailJSForm() {
    const delay = (ms) => new Promise((res) => setTimeout(res, ms));

    const [gj, setGJ] = useState(false);

    // the below function is called to reset the values to blank
    function handleFormReset(e) {
        e.preventDefault();

        // obtain all elements and set to blank/false when submitted
        const drinkChild = document.getElementById("numDrinkChildren");
        drinkChild.value = "";
        const drinkAdults = document.getElementById("numDrinkAdullts");
        drinkAdults.value = "";
        const drinksYesNo1 = document.getElementById("drinksYesNo1");
        drinksYesNo1.checked = false;
        const drinksYesNo2 = document.getElementById("drinksYesNo2");
        drinksYesNo2.checked = false;

        const weddingYesNo1 = document.getElementById("weddingYesNo1");
        weddingYesNo1.checked = false;
        const weddingYesNo2 = document.getElementById("weddingYesNo2");
        weddingYesNo2.checked = false;
        const numWeddingAdults = document.getElementById("numWeddingAdults");
        numWeddingAdults.value = "";

        const from_names = document.getElementById("from_names");
        from_names.value = "";
    }

    function sendEmail(e) {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_4c1fgpe",
                "contact_form",
                e.target,
                "user_Z9a5CxxVXizOoXDJ3bjYo"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        // clear the form
        handleFormReset(e);
    }

    return (
        <>
            <br />
            <br />
            <br />
            <form className="contact-form" onSubmit={sendEmail}>
                <h2>Before We Do</h2>
                <h3>Friday February 4th, 2022 Five O'Clock</h3>
                <div className="alignment-options">
                    <div className="left-alignment">
                        <input
                            type="radio"
                            name="drinksYesNo"
                            id="drinksYesNo1"
                            value="Yes - we will attend the drinking session"
                        />
                        <label htmlFor="drinksYesNo">
                            we will see you there
                        </label>

                        <br></br>
                        <input
                            type="text"
                            name="numDrinkAdullts"
                            id="numDrinkAdullts"
                            size="1"
                        />
                        <label htmlFor="numDrinkAdullts">
                            number of adults
                        </label>

                        <br></br>
                        <input
                            type="text"
                            name="numDrinkChildren"
                            id="numDrinkChildren"
                            size="1"
                        />
                        <label htmlFor="numDrinkChildren">
                            number of children
                        </label>

                        <br />
                        <input
                            type="radio"
                            name="drinksYesNo"
                            id="drinksYesNo2"
                            value="We will not attend the drinking session"
                        />
                        <label htmlFor="drinksYesNo">
                            we'll be there in spirit
                        </label>
                    </div>
                </div>
                <hr className="horizontal-line"></hr>
                <h2>We Do</h2>
                <h3>Sunday February 6th, 2022 Three O'Clock</h3>
                <div className="alignment-options">
                    <div className="left-alignment">
                        {/* <div className="shape-container">
            <div className="heart"></div>
            <p>heart</p>
        </div> */}
                        <input
                            type="radio"
                            name="weddingYesNo"
                            id="weddingYesNo1"
                            value="Yes - will attend the wedding"
                        />
                        <label htmlFor="weddingYesNo">
                            we will see you there
                        </label>

                        <br></br>

                        <input
                            type="text"
                            name="numWeddingAdults"
                            id="numWeddingAdults"
                            size="1"
                        />
                        <label htmlFor="numWeddingAdults">
                            number of adults
                        </label>
                        <br></br>

                        <input
                            type="radio"
                            name="weddingYesNo"
                            id="weddingYesNo2"
                            value="No - will not attend the wedding"
                        />
                        <label htmlFor="weddingYesNo">
                            we'll be there is spirit
                        </label>
                    </div>
                </div>
                <div className="alignment-options">
                    <label htmlFor="from_names">Your name(s) please: </label>
                    <input
                        type="text"
                        name="from_names"
                        id="from_names"
                        required
                    ></input>

                    <br></br>
                    <input type="submit" id="button" value="RSVP"></input>

                    {/* <button onClick={handleFormReset}>Form Reset</button> */}
                </div>
            </form>
        </>
    );
}
