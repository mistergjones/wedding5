import React, { useState } from "react";
import emailjs from "emailjs-com";
import ScreenShot from "../images/ScreenShot.png";

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
            <form className="contact-form" onSubmit={sendEmail}>
                <div className="beforewedo">
                    <div className="fullrsvp">
                        <img src={ScreenShot} alt="" />
                        <input
                            className="glen"
                            type="radio"
                            name="drinksYesNo"
                            id="drinksYesNo1"
                            value="Yes - we will attend the drinking session"
                            required
                        />
                        <input
                            className="sen"
                            type="text"
                            name="numDrinkAdullts"
                            id="numDrinkAdullts"
                            size="1"
                            maxLength="1"
                            required
                        />
                        <input
                            className="den"
                            type="text"
                            name="numDrinkChildren"
                            id="numDrinkChildren"
                            size="1"
                            maxLength="1"
                        />
                        <input
                            className="ben"
                            type="radio"
                            name="drinksYesNo"
                            id="drinksYesNo2"
                            value="We will not attend the drinking session"
                        />

                        <input
                            className="ren"
                            type="radio"
                            name="weddingYesNo"
                            id="weddingYesNo1"
                            value="Yes - will attend the wedding"
                            required
                        />

                        <input
                            className="tren"
                            type="text"
                            name="numWeddingAdults"
                            id="numWeddingAdults"
                            size="1"
                            maxLength="1"
                            required
                        />

                        <input
                            className="gen"
                            type="radio"
                            name="weddingYesNo"
                            id="weddingYesNo2"
                            value="No - will not attend the wedding"
                        />

                        <input
                            className="zen"
                            type="text"
                            name="from_names"
                            id="from_names"
                            placeholder="Your names please:"
                            size="19"
                            required
                            minLength="3"
                        />

                        <input
                            className="ten"
                            type="submit"
                            id="button"
                            value="RSVP"
                        ></input>
                    </div>
                </div>
            </form>
        </>
    );
}
