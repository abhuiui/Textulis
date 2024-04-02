import React, { useState } from 'react'

export default function Textform(props) {
    // Convert to Uppercase 
    const handleUpClick = () => {
        let newText = text.toUpperCase();

        setText(newText)
        props.showAlert("Converted to UpperCase", "Sucess")
    }

    //  Convert to Lowercase 
    const handleLoClick = () => {  // use for lower case
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase", "Sucess")

    }

    // For Clear Text button code
    const handleClearClick = () => {
        let newText = ('');
        setText(newText)
        props.showAlert("Text had been Clear", "Sucess")

    }
    const handleCapitalizedClick = () => {
        let newText1 = text.charAt(0).toUpperCase() + text.slice(1);

        setText(newText1)
        props.showAlert("Converted to Capitalized", "Sucess")

    }

    
    const handleCopy = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copy to Clipboard", "Sucess")

    }



    const handleOnChnage = (event) => {  // we are use this function for the input text areas.
        // console.log("On Change")
        setText(event.target.value)
    }
    const [text, setText] = useState('');

    // text = "enter the value" // wrong way to chamge the state
    // setText =("Enter the value") // Correct way to set the state


    return (
        <>
            <div className="mb-3 my-3" style={{ color: props.mode === 'dark' ? 'grey' : 'black' }}>
                <h2>{props.heading} </h2>
                {/* <label for="myBox" class="form-label">{props.heading}</label> also use props here */}
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" value={text} style={{ backgrounColor: props.mode === 'dark' ? 'grey' : 'white',color : props.mode === 'dark' ? 'white' : 'black' }}  onChange={handleOnChnage} rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase    </button>
                <button className="btn btn-primary " onClick={handleLoClick}>Convert to Lowercase    </button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text  </button>

                <button className="btn btn-primary mx-2" onClick={handleCapitalizedClick}>Capitalized Text  </button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text  </button>



            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }} >
                <h1>Your text Summary</h1>
                {/* text.split(" ") - using for word count */}
                {/* 0.008 * text.split(" ") - used for paragraph read minute */}
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length}Minute read</p>
                <h2>Preview</h2>
                <p>
                    {text.length>0?text: "Enter something in the textbox above to preview"}
                </p>

            </div>
        </>
    )
}
