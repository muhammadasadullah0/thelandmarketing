import React from 'react'
import assets from '../assets/assets'

const Home = () => {
  return (
    <>
        {/* <!-- Progress scroll totop --> */}
  
  	<header className="header slider-fade">
			<div className="text-end item bg-img" data-overlay-dark="3"  style={{ backgroundImage: `url(${assets.main5})` }}>
				<div className="v-middle caption mt-30">
					<div className="container">
						<div className="row">
							<div className="col-md-7 offset-md-5">
									<h1>The Land Marketing Company</h1>
									<div className="butn-light mt-30 mb-30"><a href="about" ><span color>Know More</span></a></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		<div className="hero-corner"></div>
		<div className="hero-corner3"></div>
	</header>
  <div className="progress-wrap cursor-pointer">
      <svg className="progress-circle svg-content " width="100%" height="100%" viewBox="-1 -1 102 102">
        <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
      </svg>
    </div>
    {/* <!-- Navbar --> */}
    <a href="https://wa.link/q44fvb" target='_blank'><svg viewBox="0 0 32 32" className="whatsapp-ico"><path d=" M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.842-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 16.03-9.455c0-5.958-4.842-10.8-10.802-10.8z" fillRule="evenodd"></path></svg></a>
<div className="content-wrapper">
  {/* Lines */}
  {/* About */}
  <center>
        <h1 style={{color: 'white'}}>⁜ Overview <span style={{color: '#f9df46'}}>Of Company</span> ⁜</h1>
  </center>
  <section className="about section-padding">
    <div className="container">
      <div className="row">
        <div className="col-md-8 mb-30 animate-box" data-animate-effect="fadeInUp">
          <p><span style={{color:"white"}}>The Land Marketing</span> has been a leading force in the real estate sector in Pakistan for over two decades. We specialize in offering top-quality apartments and plots in prime locations, catering to both residential and investment needs. With a diverse portfolio of projects spread across the country, our aim is to provide clients with secure, transparent, and valuable real estate options.</p>
          <p>Founded and led by <span style={{color:"white"}}> Muhammad Rafique,</span> our company is built on trust, expertise, and a commitment to excellence. With his visionary leadership, The Land Marketing has become synonymous with quality service and customer satisfaction in the real estate market..</p>
          <p>Our team's deep industry knowledge and extensive experience ensure that clients receive the best guidance and support at every step. Whether you're looking to buy, sell, or invest,<span style={{color:"white"}}>Land Marketing</span> is here to make your real estate journey smooth and successful.</p>
          <p><span style={{color:"white"}}>The Land Marketing is a dedicated agency specializing in the development and implementation of marketing strategies for small and medium-sized businesses.</span></p>
          <p></p>
        </div>
        <div className="col-md-4 animate-box" data-animate-effect="fadeInUp">
          <div className="about-img">
            <div className="img"> <img src={assets.build5} className="img-fluid"  /></div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Projects */}		
  {/* Services */}
  <section className="services section">
  </section>
  {/* Blog */}
  <div className="services4 section-padding2">
    <center>

    <div className="container">
      <div className="row">
        <div className="col-md-12 animate-box" data-animate-effect="fadeInUp">
        <h1 style={{color: 'white'}}>⁜ Our <span style={{color: '#f9df46'}}>Projects</span> ⁜</h1>
        </div>
      </div>
      <br />
      <center>

      <div className="row">
        <div className="col-md-4 flex flex-col">
          <div className="square-flip">
            <div className="square bg-img" style={{ backgroundImage: `url(${assets.build1})` }}>
              <div className="square-container d-flex align-items-end justify-content-end">
                <div className="box-title text-vertical">
                  <h4 style={{color:"yellow"}}>Symbol Dream</h4>
                </div>
              </div>
              <div className="flip-overlay" />
            </div>
            <div className="square2 bg-white">
              <div className="square-container2 bg-black">
                <div className="icon"><img style={{ backgroundImage: `url(/img/icons/icon-6.png)`}} src="/img/icons/icon-6.png"  /></div>
                <h4>5 ROOMS APARTMENTS</h4>
                <p style={{color:"white"}}> CAR PARKING</p>
                <p style={{color:"white"}}> HIGH SPEED LIFTS</p>
                <p style={{color:"white"}}> STAND BY GENERATOR</p>
                <p style={{color:"white"}}> FIRE FIGHTING SYSTEM</p>
                <div className="btn-line"><a href="/contact">CONTACT US</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </center>
    </div>
    </center>
  </div>
  {/* DEV */}

</div>

</>
  )
}

export default Home
