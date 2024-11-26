import React from 'react'
import assets from '../assets/assets'
const Contact = () => {
    
  return (
    <>
    <div className="progress-wrap cursor-pointer">
      <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
        <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
      </svg>
    </div>
    {/* <!-- Navbar --> */}
    <a href="https://wa.link/q44fvb" target='_blank'><svg viewBox="0 0 32 32" className="whatsapp-ico"><path d=" M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.842-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 16.03-9.455c0-5.958-4.842-10.8-10.802-10.8z" fillRule="evenodd"></path></svg></a>
        <div className="progress-wrap cursor-pointer">
        <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
    </div>
    <header className="header slider-fade">
			<div className="text-end item bg-img" data-overlay-dark="3" style={{ backgroundImage: `url(${assets.main7})`}}>
				<div className="v-middle caption mt-30">
					<div className="container">
						<div className="row">
							<div className="col-md-7 offset-md-5">
									<h1>Contact Our Land Marketing Company</h1>
									{/* <div className="butn-light mt-30 mb-30"><a href="https://1.envato.market/mDnXD" target="_blank"><span color>Know More</span></a></div> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		<div className="hero-corner"></div>
		<div className="hero-corner3"></div>
	</header>
    <br />
    <section className="about section-padding2">
            
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mb-30 animate-box" data-animate-effect="fadeInUp">
           
<div>
  <center>
    <h1 style={{color: 'white'}}>⁜ GET IN <span style={{color: '#f9df46'}}>TOUCH</span> ⁜</h1>
  </center>
  <br />
  <br />
</div>
    <p>Property is a matter of necessity, and it produces a great deal of profit in the shape of property investment opportunities for everyone, whether buying, selling, or renting.<span style={{color:"white"}}>The Land Marketing</span> is a real estate builders in Pakistan. We work on both national and international projects. We are providing the best level of customer care services. Long-term client relationships and an investor-friendly approach enable the clients to approach <span style={{color:"white"}}>Land Marketing</span> with ease and convenience.
                        </p>
                    </div>
                    <div className="col-md-6 animate-box" data-animate-effect="fadeInUp">
                     
                    </div>
                </div>
            </div>
        </section>
<div className="mapouter"><div className="gmap_canvas"><iframe className="gmap_iframe" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} src="https://maps.google.com/maps?width=2100&height=600&hl=en&q=The Land Markeing, Lahore&t=&z=10&ie=UTF8&iwloc=B&output=embed" /><a href="https://sprunkin.com/">Sprunki</a></div><style dangerouslySetInnerHTML={{__html: ".mapouter{position:relative;text-align:right;width:2100px;height:600px;}.gmap_canvas {overflow:hidden;background:none!important;width:2100px;height:600px;}.gmap_iframe {width:2100px!important;height:600px!important;}" }} /></div>

    </>

  )
}

export default Contact
