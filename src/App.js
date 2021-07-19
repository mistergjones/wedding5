import React from "react";
import SaveTheDate from "./Components/SaveTheDate";
import RSVPModal from "./Components/RSVPModal";
import gj from "./Components/LetsStayTogether.mp3";

function App() {
    return (
        <>
            <center>
                <div>
                    <audio src={gj} type="audio/mp3" controls autoPlay />
                </div>
            </center>
            <SaveTheDate />

            {/* <RSVPModal /> */}
        </>
    );
}

export default App;
