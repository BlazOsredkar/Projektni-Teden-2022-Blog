import React from "react";
import "./footer.css"

const footer = () => {
    return(
        <footer className="text-muted py-5">
            <div className="container">
                <p className="float-end mb-1">
                    <a href="#">Nazaj na vrh</a>
                </p>
                <p className="mb-1"></p>
                <p className="mb-0">Blažev blog.<a href="https://app.scv.si">Obišči ŠCVApp</a> za več projektov, v katerih je sodeloval developer.</p>
            </div>
        </footer>
    )
}
export default footer;