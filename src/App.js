function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="logo"></div>
        <ul className="parts">
          <li className="part">Header</li>
          <li className="part">Features</li>
          <li className="part">Offer</li>
          <li className="part">About</li>
          <li className="part">Contact</li>
        </ul>
      </div>
      <div id="home">
        <div className="background"></div>
        <div className="headline">
          <h3 className="hl-top">STEP UP YOUR</h3>
          <h1 className="hl-mid"><span className="text-red">FITNESS</span> WITH US</h1>
          <p className="hl-bottom">Build Your Body and Fitness with Professional Touch</p>
          <button className="btn hl-join">JOIN US</button>
        </div>
      </div>

      <div id="feature">
        <h2>FEATURES</h2>
        <div className="card">
          <div className="fc-logo"></div>
          <div className="fc-text">
            <h3>WeightLifting</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dolorum explicabo veritatis aut cupiditate consequatur sapiente harum asperiores, unde nobis!</p>
          </div>
        </div>
        <div className="card">
          <div className="fc-logo"></div>
          <div className="fc-text">
            <h3>WeightLifting</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dolorum explicabo veritatis aut cupiditate consequatur sapiente harum asperiores, unde nobis!</p>
          </div>
        </div>
        <div className="card">
          <div className="fc-logo"></div>
          <div className="fc-text">
            <h3>WeightLifting</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dolorum explicabo veritatis aut cupiditate consequatur sapiente harum asperiores, unde nobis!</p>
          </div>
        </div>
        <div className="card">
          <div className="fc-logo"></div>
          <div className="fc-text">
            <h3>WeightLifting</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dolorum explicabo veritatis aut cupiditate consequatur sapiente harum asperiores, unde nobis!</p>
          </div>
        </div>
      </div>

      <div id="offer">
        <div className="background"></div>
        <h2>A BIG OFFER FOR THIS SUMMER</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex sint numquam ea, deleniti assumenda neque voluptatem fugit aliquid deserunt itaque.</p>
        <button className="btn offer-join">JOIN NOW</button>
      </div>

      <div id="about">
        <div className="about-img"></div>
        <div className="about-text">
          <h2>LEARN MORE ABOUT US</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores aperiam architecto quia eius deserunt provident dicta voluptatem illo impedit incidunt hic, beatae saepe magnam nesciunt atque dignissimos laudantium sed voluptatibus.</p>
          <button className="btn about-readmore">READ MORE</button>
        </div>
      </div>

      <div id="contact">
        <h2>CONTACT US</h2>

      </div>

    </div>
  );
}

export default App;
