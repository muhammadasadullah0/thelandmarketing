import React from 'react'
import assets from '../assets/assets'
const About = () => {
  return (
    <>
    <div className="progress-wrap cursor-pointer">
      <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
        <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
      </svg>
    </div>
    {/* <!-- Navbar --> */}
    <a href="https://wa.link/q44fvb" target='_blank'><svg viewBox="0 0 32 32" className="whatsapp-ico"><path d=" M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.842-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 16.03-9.455c0-5.958-4.842-10.8-10.802-10.8z" fillRule="evenodd"></path></svg></a>
      	<header className="header slider-fade">
			<div className="text-end item bg-img" data-overlay-dark="3" style={{ backgroundImage: `url(${assets.main3})`}}>
				<div className="v-middle caption mt-30">
					<div className="container">
						<div className="row">
							<div className="col-md-7 offset-md-5">
									<h1>A real estate built on trust that truly matter.</h1>
							</div>
						</div>
					</div>
				</div>
			</div>
		<div className="hero-corner"></div>
		<div className="hero-corner3"></div>
	</header>
<div className="content-wrapper">
  <br />
  {/* About */} <center>
    <h1 style={{color: 'white'}}>⁜ About <span style={{color: '#f9df46'}}>Us</span> ⁜</h1>
  </center>
  <br />
  <br />
  <section className="about section-padding2">
    <div className="container">
      <div className="row">
        <div className="col-md-6 mb-30 animate-box" data-animate-effect="fadeInUp">
          <h2 className="section-title">Company <span>Intro</span></h2>
          <p><span style={{color:"white"}}>The Land Marketing</span> has been a cornerstone of the real estate industry in Pakistan for over two decades. Specializing in high-quality apartments and plots in prime locations, we cater to both residential and investment needs, offering a diverse portfolio of projects across the country. Our mission is to provide clients with secure, transparent, and valuable real estate options that meet their unique requirements.</p>
          <br />
          <p>Founded by <span style={{color:'white'}}>Muhammad Rafique,</span> The Land Marketing is built on a foundation of trust, expertise, and a commitment to excellence. Under his visionary leadership, the company has earned a reputation for delivering quality service and ensuring customer satisfaction.</p>
          <br />
          <p>With an experienced and knowledgeable team, we offer expert guidance and support at every step of your real estate journey. Whether you're looking to buy, sell, or invest, The Land Marketing is here to make your experience seamless and successful.</p>
          <br />
          <p>The Land Marketing has established itself as a beacon of reliability in Pakistan's real estate sector, and client satisfaction.By prioritizing secure and valuable property options, The Land Marketing continues to raise the bar for real estate excellence across the nation.</p>          
        </div>
        <div className="col-md-6 animate-box" data-animate-effect="fadeInUp">
          <div className="about-img">
            <div className="img"><img src={"https://images.unsplash.com/photo-1696526639535-83c6463a9d51?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZW1waXJlJTIwc3RhdGUlMjBidWlsZGluZ3xlbnwwfHwwfHx8MA%3D%3D"} className="img-fluid" /> </div>
            <div className="about-img-2 about-buro">About us </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Team */}
  {/* <section className="team section-padding2">
    <div className="container">
      <div className="row">
        <center>
          <div className="col-md-12">
            <h2 className="section-title">Board Of <span>Directors</span></h2>
          </div>
        </center>
      </div>
      <br />
      <div className="row">
        <div className="col-md-3">
          <div className="item">
            <img src="https://abs-developers.com/cdn/shop/files/muhammad-ikram.png?v=1715720857&width=500"  />
            <div className="info">
              <h6>Dr Muhammad Ikram</h6>
              <p>Chairman</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="item">
            <div className="img"> <img src="https://abs-developers.com/cdn/shop/files/subayyalikram.png?v=1715720857&width=500"  /></div>
            <div className="info">
              <h6>Dr Subayyal Ikram</h6>
              <p>CEO</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="item">
            <div className="img"><img src="https://abs-developers.com/cdn/shop/files/Humbalikram.png?v=1715720857&width=500"  /> </div>
            <div className="info">
              <h6>Dr Humbal Ikram</h6>
              <p>Managing Director</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="item">
            <div className="img"><img src="https://abs-developers.com/cdn/shop/files/Ar._Shaniyal_Ikram.png?v=1718149179&width=500"  /> </div>
            <div className="info">
              <h6>Ar. Shaniyal Ikram</h6>
              <p>Director Operations</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> */}
  {/* Career */}
  <section className="about section-padding">
    <div className="container">
      <div className="row">
        <div className="col-md-6 mb-30 animate-box" data-animate-effect="fadeInUp">
          <h2 className="section-title">Why choose <span style={{color: 'yellow'}}> us?</span></h2>
          <h5 style={{color: 'white'}}>Partnering with The Land Marketing will make you eligible for many benefits, as stated below:</h5>
          <p style={{color: 'white'}}><b style={{color: 'yellow'}}>• Sharia Compliant</b></p>
          <p style={{color: 'white'}}><b style={{color: 'yellow'}}>• 100% Riba Free dealings</b></p>
          <p style={{color: 'white'}}><b style={{color: 'yellow'}}>• Full and Easy Cash Refund</b></p>
          <p style={{color: 'white'}}><b style={{color: 'yellow'}}>• Assurance of quality material testing before usage</b></p>
          <p style={{color: 'white'}}><b style={{color: 'yellow'}}>• Provision of cutting-edge amenities in the construction</b></p>
        </div>
        <div className="col-md-6 animate-box" data-animate-effect="fadeInUp">
          <div className="about-img">
            <div className="img"><img src={assets.main6} className="img-fluid"  /></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

    </>

  )
}

export default About
