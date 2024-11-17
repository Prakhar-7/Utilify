import React, {useState} from 'react'

export default function Textform(props) {

    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to Uppercase!', 'success')
      }
      
      const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to Lowercase!', 'success')
      }
      
      const handleClearClick = ()=>{
        let newText = '';
        setText(newText);
        props.showAlert('Text Cleared!', 'success')
      }
      
      const handleCopy = ()=>{
        let text = document.getElementById("myBox");
        text.select()
        // navigator.clipboard.writeText(text);
        document.execCommand('copy');
        props.showAlert('Text copied to Clipboard!', 'success')
      }
      
      const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ] + /);
        setText(newText.join(" "));
        props.showAlert('Extra spaces removed!', 'success')
    }
    
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    
    
    const[text, setText] = useState("");

  return (
    <>
      <div className='container' style={{color: props.mode === 'dark'?'white':'#042743'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" placeholder='Enter your text' style={{backgroundColor: props.mode === 'dark'?'#13466e':'white', color: props.mode === 'dark'?'white':'#042743'}}> </textarea>
      </div>
      <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
      <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
      <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
      <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
      <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode === 'dark'?'white':'#042743'}}>
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length !== 0 }).length} Words and {text.length} Characters</p>
        <p>{0.008 * text.split(' ').filter((element)=>{return element.length !== 0 }).length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
  )
}
