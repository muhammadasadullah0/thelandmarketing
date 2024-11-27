import React from 'react'
import assets from '../assets/assets';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Footer = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "86078ae3-2486-4baa-a4e3-417d37eec275");
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully")
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message)
      setResult("");
    }
  };

  return (
<>
<section className="testimonials">
  <div className="background bg-img bg-fixed section-padding pb-0" style={{ backgroundImage: `url(${assets.tlm})` }} data-overlay-dark={3}>
    <div className="container">
      <div className="row">
        {/* Promo video */}
        <div className="col-md-6">
          <div className="vid-area">
            <div className="vid-icon">
              <a className="play-button vid" target='_blank' href="https://youtube.com/@thelandmarketinggg?si=e62qStvuVjbbArQa">
                <svg className="circle-fill">
                  <circle cx={43} cy={43} r={39} stroke="#fff" strokeWidth=".5" />
                </svg>
                <svg className="circle-track">
                  <circle cx={43} cy={43} r={39} stroke="none" strokeWidth={1} fill="none" />
                </svg> <span className="polygon">
                  <i className="ti-control-play" />
                </span> </a>
            </div>
            <div className="cont mt-15 mb-30">
              <h5>View promo video</h5>
            </div>
          </div>
        </div>
        {/* Testiominals */}
        <div className="col-md-6 animate-box" data-animate-effect="fadeInUp">
          <h1><b style={{color:"white"}}>SCHEDULE A PRIVATE MEETING</b></h1><h1>
            <form onSubmit={onSubmit} className="contact__form">  
              {/* Form elements */}
              <div style={{color:"white"}} className="row">
                <div style={{color:"white"}} className="col-md-12 form-group">
                  <input name="name" type="text" placeholder="Your Name *" required /> 
                </div>
                <div className="col-md-12 form-group">
                  <input name="email" type="email" placeholder="Your Email *" required /> 
                </div>           
                <div className="col-md-12 form-group">
                  <input name="number" type="text" placeholder="Your Phone *" required /> 
                </div>           
                <div className="col-md-12 form-group">
                  <textarea name="message" id="message" cols={30} rows={4} placeholder="Message *" required defaultValue={""} />
                </div>
                <div className="col-md-6">
                  <input name="submit" type="submit"/>{result ? result: ""}
                </div>
              </div>
            </form>
          </h1></div>
      </div>
    </div>
  </div>
</section>

{/* Footer */}
<footer className="footer-section">
  <div className="container">
    <div className="footer-content pt-5 pb-5">
      <div className="row">
        <div className="col-xl-4 col-lg-4 mb-50">
          <div className="footer-widget">
            <div className="footer-logo">
              <a href="/"><img src={assets.theLandMarketingLogo} className="img-fluid" alt="logo" /></a>
            </div>
            <div className="footer-text">
              <p>
                The Land Marketing is a dedicated agency specializing in the development and implementation of marketing strategies for small and medium-sized businesses.
              </p>
            </div>
            <div className="footer-social-icon">
              <span>Connect With Us :</span>
              <a target='_blank' href="https://www.facebook.com/share/18BYQhiMBw/?mibextid=LQQJ4d"><i style={{backgroundColor: '#1877F2', color: 'white'}} className="fab fa-facebook-f facebook-bg" /></a>
              <a target='_blank' href="https://www.instagram.com/thelandmarketingg?igsh=MWd1dWR2MTBvbWo5cg=="><i style={{background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)', boxShadow: '0px 3px 10px rgba(0,0,0,.25)'}} className="fab fa-instagram instagram-bg" /></a>
              <a target='_blank' href="https://youtube.com/@thelandmarketinggg?si=e62qStvuVjbbArQa"><i style={{backgroundColor: 'red', color: 'white'}} className="fab fa-youtube  youtube-bg" /></a>
              <a target='_blank' href="https://www.tiktok.com/@thelandmarketing7?_t=8rYQRSpixvz&_r=1"><i style={{color:"black" }} className="fa-brands fa-tiktok tiktok-bg bg-white"></i></a>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6 mb-0">
          <div className="footer-widget">
            <div className="footer-widget-heading">
              <br />
              <h3>Our Info</h3>
            </div>
            <ul>
            <li>
              <p style={{color: 'white'}}>
                Our Location:
                <a target='_blank' href="https://www.google.com/maps/place/d,+D+14,+Block+A+North+Nazimabad+Town,+Karachi,+Karachi+City,+Sindh,+Pakistan/@24.9303292,67.0332093,17z/data=!3m1!4b1!4m5!3m4!1s0x3eb33f8541a4c87d:0xb3d13481a95b6b06!8m2!3d24.9303244!4d67.0357842?authuser=0&entry=ttu&g_ep=EgoyMDI0MTExMy4xIKXMDSoASAFQAw%3D%3D">D 14, Block A North Nazimabad Town, Karachi,</a>
              </p>
              </li>
              <br />
              <li>
              <p style={{color: 'white'}}>
                Phone no: 
                <br />
                <a target='_blank' href="tel:+920321 2832805">0321 2832805</a>
              </p>
              </li>        
              <br />
              <li>
              <p style={{color: 'white'}}>
                Email:
                <a style={{textTransform:'none'}} target='_blank' href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWtMmTvlHrTrjbNBcPkzMLCKvJxMFpTQBkBBRdDwhrnwhNRvrhRGMZBdPcWtkSGbXPwCNbKqQ">info@thelandmarketing.com</a>
              </p>
              </li>               
            </ul>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6 mb-50" style={{position: 'relative'}}>
          <div className="footer-widget">
            <div className="footer-widget-heading">
              <br />
              <h3>Subscribe To Our NewsLetter</h3>
            </div>
            <div className="footer-text mb-25">
              <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
            </div>
            <div className="subscribe-form">
              <form onSubmit={onSubmit}>
                <input type="text" placeholder="Email Address" />
                <button><i className="fab fa-telegram-plane" />{result? result :""}</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</footer>

</>

  )
}

export default Footer
