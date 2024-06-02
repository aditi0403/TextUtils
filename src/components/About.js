import React from 'react'

    
export default function About(props) {

    // const [myStyle, setMyStyle] = useState(
    //     {
    //         color: 'white',
    //         backgroundColor: '#343a40',
    //         border: '1px solid #343a40 '
    //     }
    // )

    let myStyle = {
        color: props.mode ==='#878E88'? '#343a40' : '#878E88',
        backgroundColor: props.mode ==='#878E88'? '#878E88' : '#343a40',
        // border: '3px solid',
        // borderColor: props.mode ==='#878E88'? '#343a40' : '#878E88'
    }

    
    return (
    <div className="conatiner">
        <h1 className="my-4 mx-4" style={{color: props.mode ==='#878E88'? '#343a40' : '#878E88'}}>About us</h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item mx-4">
            <h2 className="accordion-header">
            <button className="accordion-button" style={myStyle} otype="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>Analyze and Manipulate.</strong>
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                This is a utility designed to facilitate text analyzation and manipulation with ease.
            </div>
        </div>
        </div>
        <div className="accordion-item mx-4">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            <strong>Customize as you want.</strong>
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                You can customize the utility to your liking along with changing the text the way you want the text to look like for a particular application.
            </div>
        </div>
        </div>
        <div className="accordion-item mx-4">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            <strong>Felxible with browsers.</strong>
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
               This utility is designed to work with all browsers and is not limited to a particular browser.
            </div>
        </div>
        </div>
        </div>
    </div>
  )
}
