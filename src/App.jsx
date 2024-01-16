import img01 from "./assets/img01.jpg";
import img02 from "./assets/img02.jpg";
import img03 from "./assets/img03.jpg";
import img04 from "./assets/img04.jpg";
import img05 from "./assets/img05.jpg";
import img06 from "./assets/img06.jpg";
import img07 from "./assets/img07.jpg";
import img08 from "./assets/img08.jpg";

import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";
import { useState } from "react";

const App = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className="container">
            <div className="icon">
                {[img01, img02, img03, img04, img05, img06, img07, img08].map((img, index) => (
                    <div
                        className={`imgBx ${activeIndex === index ? "active" : ""}`}
                        style={{ "--i": index + 1 }}
                        onMouseEnter={() => handleMouseEnter(index)}
                        key={index}
                    >
                        <img src={img} alt={`img0${index + 1}`} />
                    </div>
                ))}
            </div>

            <div className="content">
                {[img01, img02, img03, img04, img05, img06, img07, img08].map((img, index) => (
                    <div
                        className={`contentBx ${activeIndex === index ? "active" : ""}`}
                        id={`content${index + 1}`}
                        key={index}
                    >
                        <div className="card">
                            <div className="imgBx">
                                <img src={img} alt={`img0${index + 1}`} />
                            </div>
                            <div className="textBx">
                                <h2>
                                    Someone Famous <br /> <span> Product Designer</span>
                                </h2>
                                <ul className="sci">
                                    <li>
                                        <a href="#">
                                            <FaFacebook />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <FaTwitter />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <IoLogoLinkedin />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <FaInstagramSquare />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;
