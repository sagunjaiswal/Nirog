import React, {useState} from 'react';
import Faqs from "./Faqs.jsx";
import './Accordion.css';
import {arr} from "./questions";

const Accordion = () => {
    const [faqs, setfaqs] = useState (arr);
    

    const toggleFAQ = (index) => {
        setfaqs(faqs.map((faq, i) => {
            console.log(faq.open);
            if(i == index){
                faq.open = !faq.open;
            }
            else{
                faq.open = false;
            }
            return faq;
        }))
    }
    return(
        <div className="faq-section">
             <h1>FAQs</h1>
            <div className="faqs">
                {faqs.map((faq, index) => {
                    return <Faqs faq={faq} index={index} toggleFAQ={toggleFAQ}/>
                })}
            </div>
        </div>
    );
}

export default Accordion;