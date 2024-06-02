import React,{useState} from "react";

export default function TextForm(props) {
    const handleUpClick = () => {
        /* console.log("Uppercase was clicked:" +text); */
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Upper Case", "success")
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleClearClick = () => {
        let newText ="";
        setText(newText)
    }
    const handleOnChange = (event) => {
       /*  console.log("OnChange"); */
        setText(event.target.value);
    }
    const handleCopy = () => {
        var text= document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("to clipboard", "Copied")
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    
    //chaning value pf text wont change the text of state, u have to use setText fn only bec its a state
    const [text, setText] = useState('');
    
    return (
        <>
        <div className="container" style= {{color: props.mode ==='#878E88'? '#343a40' : '#878E88'}}>
        <h1 className= "mb-3" style={{ color: props.mode === '#878E88' ? '#343a40' : '#878E88' }}>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange= {handleOnChange} id="myBox" style= {{backgroundColor: props.mode ==='#878E88'? '#e6ebe0' : '#878E88', color: props.mode ==='#878E88'? '#343a40' : '#343a40'}} rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-dark mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-dark mx-2 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-dark mx-2 my-1" onClick={handleClearClick}>Clear</button>
            <button disabled={text.length===0} className="btn btn-dark mx-2 my-1" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-dark mx-2 my-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
        </div>
        <div className="container my-5" style={{ color: props.mode === '#878E88' ? '#343a40' : '#878E88' }}>
            <h2 style={{ color: props.mode === '#878E88' ? '#343a40' : '#878E88' }}>Entered Text Summary</h2>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes taken to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter your text to preview :)"}</p>
        </div>
        </>
    )
}
