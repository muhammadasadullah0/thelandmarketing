import React from 'react'
import assets from '../assets/assets'
const Team = () => {
  return (
    <>
    <div className="progress-wrap cursor-pointer">
      <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
        <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
      </svg>
    </div>
    {/* <!-- Navbar --> */}
    <a href="https://wa.link/q44fvb" target='_blank'><svg viewBox="0 0 32 32" className="whatsapp-ico"><path d=" M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.842-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 16.03-9.455c0-5.958-4.842-10.8-10.802-10.8z" fillRule="evenodd"></path></svg></a>
<div>
  <header className="header slider-fade">
    {/* The opacity on the image is made with "data-overlay-dark="number". You can change it using the numbers 0-9. */}
    <div className="text-end item bg-img" data-overlay-dark={3} style={{ backgroundImage: `url(${assets.main4})`}}>
      <div className="v-middle caption mt-30">
        <div className="container">
          <div className="row">
            <div className="banner__content banner__content--bottom-left page-width scroll-trigger animate--slide-in">
              <div className="banner__box moveUp content-container content-container--full-width-mobile color-scheme-3 gradient animated"><div className="banner__text rte body">
                  <p style={{color: '#f9df46'}}>Ultra-Modern Luxurious Architecture</p>
                </div><h1 className="banner__heading inline-richtext">
                  Meet Our Great Team 
                </h1></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Corner */}
    <div className="hero-corner" />
    <div className="hero-corner3" />
    {/* Left Panel */}
  </header>
  {/* Content */}
  <div className="content-wrapper">
    <br />
    {/* About */} <center>
      <h1 style={{color: 'white'}}>⁜ Our <span style={{color: '#f9df46'}}>Team</span> ⁜</h1>
    </center>
    <br />
    <br />
    <section className="about section-padding2">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-30 animate-box" data-animate-effect="fadeInUp">
            <p>A successful real-estate company owes its achievements to its staff, and The Land Marketing is a great example endorsing this proposition. From Chairman to CEO and managing director to a team of engineers,<span style={{color:"white"}}>The Land Marketing</span> is a warehouse of real estate and construction expertise always geared up to take on new ventures aimed at improving the lifestyle of residents. Below is a brief information about our top staff:
            </p>
            <p>Excellence in real estate stems from a well-rounded team, and The Land Marketing showcases this synergy flawlessly. From strategic leaders to operational experts.<span style={{color:"white"}}>The Land Marketing</span> is built on a foundation of collaboration and expertise, ensuring every project resonates with quality and modernity. Meet the exceptional individuals driving our success below</p>
          </div>
          <div className="col-md-6 animate-box" data-animate-effect="fadeInUp">
          </div>
        </div>
      </div>
    </section>
    {/* Team */}
  
    {/* Career */}

  </div></div>

    </>
  )
}

export default Team