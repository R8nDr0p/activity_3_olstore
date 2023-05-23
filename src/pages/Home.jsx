import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h1>
              "Experience the comfort of typing,
              <br />
              elevate your productivity with our
              <br />
              customized ergonomic keyboard”
            </h1>
            <section class="button-section w-100">
              <div class="container">
                <div class="row text-center justify-content-center">
                  <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <div class="text-center">
                      <Link
                        to={"/products"}
                        class="btn btn-primary card-button mb-3"
                        href="#products-section"
                      >
                        Check our products
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* <!-- product showcase --> */}
            <div class="container-fluid slide-show">
              <div class="row">
                <div class="col">
                  <div
                    id="carouselExampleCaptions"
                    class="carousel slide"
                    data-bs-ride="carousel"
                  >
                    <div class="carousel-indicators">
                      <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="0"
                        class="active"
                        aria-current="true"
                        aria-label="Slide 1"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                      ></button>
                    </div>
                    <div class="carousel-inner">
                      {/* <!-- 1st slide --> */}
                      <div class="carousel-item active">
                        <img
                          src="img/ortholinear-keyboards/Ortho-48-nobg.png"
                          class="d-block w-100"
                          alt="..."
                        />
                        <div class="carousel-caption d-none d-md-block">
                          <h5>Ortho 48</h5>
                          <p>
                            Ortholinear, Hot-swappable, Rotary Encoder, North
                            facing RGB
                          </p>
                        </div>
                      </div>
                      {/* <!-- 2nd Slide --> */}
                      <div class="carousel-item">
                        <img
                          src="img/Stagerred/P-38-1-transformed.png"
                          class="d-block w-100"
                          alt="..."
                        />
                        <div class="carousel-caption d-none d-md-block">
                          <h5>The Stag 37</h5>
                          <p>
                            Split-Non-split Keyboard, QMK/VIAL Firmware, RGB
                            Backlight(North), Hotswap Switch Sockets, USB Type C
                          </p>
                        </div>
                      </div>
                      {/* <!-- 3rd slide --> */}
                      <div class="carousel-item">
                        <img
                          src="img/ortholinear-keyboards/30key_keyboard-transformed.png"
                          class="d-block w-100"
                          alt="picture of 30key ortholinear keyboard"
                        />
                        <div class="carousel-caption d-none d-md-block">
                          <h5>Ortho 30</h5>
                          <p>
                            30-key ortholinear keyboard, Vial Configurator
                            compatible, Hot swap switch sockets, RGB per key
                            backlight, USB type-c port.
                          </p>
                        </div>
                      </div>
                    </div>
                    <button
                      class="carousel-control-prev"
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide="prev"
                    >
                      <span
                        class="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button
                      class="carousel-control-next"
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide="next"
                    >
                      <span
                        class="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
