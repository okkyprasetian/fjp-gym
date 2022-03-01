function App() {
  return (
    <div className="App">
      <div id="header">
        <div className="logo">
          <img src="./images/logo.png" alt="gym" className="logo-img" />
        </div>
        <ul className="parts">
          <li className="part"><a href="#home">Home</a></li>
          <li className="part"><a href="#features">Features</a></li>
          <li className="part"><a href="#offer">Offer</a></li>
          <li className="part"><a href="#about">About</a></li>
          <li className="part"><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div id="home">
        <div className="headline">
          <h3 className="hl-top">STEP UP YOUR</h3>
          <h1 className="hl-mid"><span className="text-red">FITNESS</span> WITH US</h1>
          <p className="hl-bottom">Build Your Body and Fitness with Professional Touch</p>
          <button className="btn hl-join">JOIN US</button>
        </div>
      </div>

      <div id="features">
        <h2>FEATURES</h2>
        <div className="cards">
          <div className="card">
            <img src="./images/1.svg" alt="logo" className="fc-logo" />
            <div className="fc-text">
              <h3>WeightLifting</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, hic!</p>
            </div>
          </div>
          <div className="card">
            <img src="./images/2.svg" alt="logo" className="fc-logo" />
            <div className="fc-text">
              <h3>Specific Muscle</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, hic!</p>
            </div>
          </div>
          <div className="card">
            <img src="./images/3.svg" alt="logo" className="fc-logo" />
            <div className="fc-text">
              <h3>Flex Your Muscle</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, hic!</p>
            </div>
          </div>
          <div className="card">
            <img src="./images/4.svg" alt="logo" className="fc-logo" />
            <div className="fc-text">
              <h3>Cardio Exercise</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, hic!</p>
            </div>
          </div>
        </div>
      </div>

      <div id="offer">
        <h2>A BIG <span className="text-red">OFFER </span> FOR THIS SUMMER</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex sint numquam ea, deleniti assumenda neque voluptatem fugit aliquid deserunt itaque.</p>
        <button className="btn offer-join">JOIN NOW</button>
      </div>

      <div id="about">
        <div className="about-left">
          <img src="./images/about.png" alt="about" className="about-img" />
        </div>
        <div className="about-text">
          <h2>LEARN MORE ABOUT US</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores aperiam architecto quia eius deserunt provident dicta voluptatem illo impedit incidunt hic, beatae saepe magnam nesciunt atque dignissimos laudantium sed voluptatibus.</p>
          <button className="btn about-readmore">READ MORE</button>
        </div>
      </div>

      <div id="contact">
        <h2>CONTACT US</h2>
        <form className="form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea name="message" id="message" placeholder="This place is for your massage :D"></textarea>
          <button className="btn-form" type="submit">SUBMIT</button>
        </form>
      </div>

    </div>
  );
}

export default App;
