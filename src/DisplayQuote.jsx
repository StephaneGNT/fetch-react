import  React  from  'react';

const  DisplayQuote = ({ quote }) => {
    return (
        <div style={{marginTop:"20px",textAlign:"center"}}>
            <h1>{quote.character}</h1>
            <blockquote>{quote.quote}</blockquote>
            <img  src={quote.image}  alt="ma gueule"  />
        </div>
    );
};

export  default  DisplayQuote;