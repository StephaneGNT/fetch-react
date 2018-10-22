import  React  from  'react';

const  GenerateQuote = ({ getNewQuote }) => {
    return (
        <div>
            <button  onClick={getNewQuote}> Give me a quote ! </button>
        </div>
    );
};

export  default  GenerateQuote;