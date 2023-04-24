import React from "react";
import "./Signature.css";

export const Signature = () => {
    return (
        <React.Fragment>
            <section className="attribution">
                Challenge by {" "}
                    <a 
                        href="https://www.frontendmentor.io?ref=challenge" 
                        target="_blank"
                        >Frontend Mentor
                    </a>. 
                Coded by {" "}
                    <a 
                        href="https://www.frontendmentor.io/profile/indigomx9"
                        target="_blank"
                        >Craig Johnson
                    </a>.
            </section>
        </React.Fragment>
    );
};


