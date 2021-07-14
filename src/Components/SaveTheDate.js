import React from "react";
import "./SaveTheDate.css";
import EmailJSForm from "./EmailJSForm";

const SaveTheDate = () => {
    return (
        <>
            <div className="pageContainer">
                <div className="beforewedo">
                    <img src="BeforeWeDo.jpg" alt="" />
                </div>

                <div className="beforewedo">
                    <img src="WeDo.jpg" alt="" />
                </div>

                <div className="beforewedo">
                    <img src="QuestCheltenham.jpg" alt="" />
                </div>

                <div className="beforewedo">
                    <div className="fullrsvp">
                        <img src="screenshot.png" alt="" />
                        <input
                            className="glen"
                            type="radio"
                            name="drinksYesNo"
                            id="drinksYesNo1"
                            value="Yes - we will attend the drinking session"
                        />
                        <input
                            className="sen"
                            type="text"
                            name="numDrinkAdullts"
                            id="numDrinkAdullts"
                            size="1"
                            maxlength="1"
                        />
                        <input
                            className="den"
                            type="text"
                            name="numDrinkChildren"
                            id="numDrinkChildren"
                            size="1"
                            maxlength="1"
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
                        />

                        <input
                            className="tren"
                            type="text"
                            name="numWeddingAdults"
                            id="numWeddingAdults"
                            size="1"
                            maxlength="1"
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
                            name=""
                            id=""
                            placeholder="Your names please:"
                            size="19"
                        />

                        <input
                            className="ten"
                            type="submit"
                            id="button"
                            value="RSVP"
                        ></input>
                    </div>
                </div>

                {/* <div className="form-container">
                    <div className="rsvp">
                        <img src="rsvpglitter.png" alt="" />
                    </div>

                    <div class="border"></div>

                    <div className="top-half">
                        <div className="form-alignment">
                            <EmailJSForm />
                        </div>
                    </div>
                </div> */}
            </div>
            {/* <div className="container">
                <div className="rsvp">
                    <img src="rsvp2.png" alt="" />
                    <h3>By November 6th, 2021</h3>
                </div>
                <div class="border"></div>

                <div className="wedding">
                    <div className="form-alignment">
                        <EmailJSForm />
                    </div>
                </div>
            </div> */}
        </>
    );
};

export default SaveTheDate;
