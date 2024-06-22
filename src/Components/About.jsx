import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {

    document.title = `Mini News | 2.0`
   
    return (
        <>
        <div id='aboutbox' className='container' style={{marginTop:"50px"}}>
        <h1>About App</h1>
            <p>  Mini News 2.0 is a News App Built By Me. which is modified version for  <a target="_blank" href="https://mininewsv1.netlify.app/">MiniNews1.0</a> , v2 is developed because v1 has some limitations in api.
                This is Made Using React JS. This is Made Just to Learn React using Project Based Learning.
                Still Mini News is a Useful app, You can Read news from different sources fetched from currents Api.
            </p>

            <p style={{textAlign:"right" , marginTop:"15px"}}>Yours Lovingly</p>
            <p style={{textAlign:"right" , color:"yellow"}}>Vaddala Narasimha</p>
        </div>
<hr className='container'/>
        <div className=" my-3 container">
          <h1>Contact Me</h1>
          <p>Feel free to reach out to me for any inquiries or opportunities.</p>
          <ul className="list-unstyled">
            <li><i className="fa-regular fa-envelope my-2"></i> <Link to="mailto:narasimhavaddala@gmail.com"> narasimhavaddala@gmail.com</Link></li>
            <li><i className="fa-solid fa-phone my-2"></i> +91 89781 06223</li>
          </ul>
          <div className="mt-4">
            <Link style={{fontSize:"35px", textDecoration:"none" , color:"white"}} to="https://www.linkedin.com/in/narasimhavaddala" target="_blank" rel="noopener noreferrer" className="me-4"><i className="fa-brands fa-linkedin"></i></Link>
            <Link style={{fontSize:"35px", textDecoration:"none" , color:"white"}} to="https://github.com/NarasimhaVaddala" target="_blank" rel="noopener noreferrer" className="me-4"><i className="fa-brands fa-github"></i></Link>
            <Link style={{fontSize:"35px", textDecoration:"none" , color:"white"}} to="https://x.com/Narasimha_62" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-x-twitter"></i></Link>
          </div>
        </div>

        </>
    )
}