import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

function Accordian({faqs}) {

    const handleExpand = ((event) => {
        const current = event.currentTarget;

        const siblingElements = Array.from(current.parentElement.childNodes);

        siblingElements[2].style.display = "none";
        siblingElements[3].style.display = "block";

        current.parentElement.parentElement.childNodes[1].style.display = "block";

    });

    const handleCollapse = ((event) => {
        const current = event.currentTarget;

        const siblingElements = Array.from(current.parentElement.childNodes);

        siblingElements[2].style.display = "block";
        siblingElements[3].style.display = "none";

        current.parentElement.parentElement.childNodes[1].style.display = "none";

    });

    return (
        <div className="accordian-container">
            <h2 className='accordian-heading'>Frequently Asked Questions</h2>

            <div className="accordian-faq-container">

                {
                    faqs.map((faq,index) => {
                        return (
                            <div className="accordian-item">
                                <div className="accordian-question">{faq[0]} <FontAwesomeIcon className='faq-icon' id="fa-plus" icon={faPlus} onClick={handleExpand} /><FontAwesomeIcon className='faq-icon' id="fa-minus" icon={faMinus} onClick={handleCollapse} /></div>
                                <div className="accordian-answer">{faq[1]}</div>
                          </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Accordian;