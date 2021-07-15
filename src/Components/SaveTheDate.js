import React from "react";
import "./SaveTheDate.css";
import EmailJSForm from "./EmailJSForm";

import BeforeWeDo from "../images/BeforeWeDo.jpg";
import WeDo from "../images/WeDo.jpg";
import QuestCheltenham from "../images/QuestCheltenham.jpg";

const SaveTheDate = () => {
    return (
        <>
            <div className="pageContainer">
                <div className="beforewedo">
                    <img src={BeforeWeDo} alt="" />
                </div>

                <div className="beforewedo">
                    <img src={WeDo} alt="" />
                </div>

                <div className="beforewedo">
                    <img src={QuestCheltenham} alt="" />
                </div>

                <div>
                    <EmailJSForm />
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
