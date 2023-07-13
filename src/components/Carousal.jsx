import { useState } from "react";
import '../App.css';

function Carousal({images}) {

    const [current, setCurrent] = useState(0);

    function nextSlide() {
        setCurrent(current === images.length - 1 ? 0 : current + 1);
    }

    function prevSlide() {
        setCurrent(current === 0 ? images.length - 1 : current - 1);
    }

    return (
        <div>
            <h2>Carousel</h2>
            <div className="slider">
                <div className="left-arrow" onClick={prevSlide}>
                    ⬅
                </div>
                <div className="right-arrow" onClick={nextSlide}>
                    ⮕
                </div>
                {
                    images.map(
                        (image, index) =>
                            current === index && (
                                <div key={image} className="slide">
                                    <img src={image} alt="images" />
                                </div>
                            )
                    )
                }
            </div>
            <div className="blips">
                {
                    images.map((_, index) =>
                        <span
                            key={index}
                            className={"blip"}
                            onClick={() => setCurrent(index)}
                        >
                            {index === current ? "◍" : "●"}
                        </span>
                    )
                }
            </div>
        </div>
    );
}

export default Carousal;