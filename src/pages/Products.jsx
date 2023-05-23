function Products() {
  return (
    <>
      <section className="Product-section">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mt-5 mb-5 product-label">
              <h1>Products</h1>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-1 me-0">
              <button
                className="btn card-button"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasExample"
                aria-controls="offcanvasExample"
              >
                Filter
              </button>

              <div
                className="offcanvas offcanvas-start"
                tabindex="-1"
                id="offcanvasExample"
                aria-labelledby="offcanvasExampleLabel"
              >
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasExampleLabel">
                    Filters
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="offcanvas-body">
                  <div className="row">
                    <h5>Keyboard Type:</h5>
                    <div>
                      <ul className="list-group">
                        <li className="list-group-item">
                          <input
                            className="form-check-input me-1"
                            type="checkbox"
                            value=""
                            id="firstCheckbox"
                          />
                          <label
                            className="form-check-label"
                            for="firstCheckbox"
                          >
                            Numpads & Macropads
                          </label>
                        </li>
                        <li className="list-group-item">
                          <input
                            className="form-check-input me-1"
                            type="checkbox"
                            value=""
                            id="secondCheckbox"
                          />
                          <label
                            className="form-check-label"
                            for="secondCheckbox"
                          >
                            Ortholinear
                          </label>
                        </li>
                        <li className="list-group-item">
                          <input
                            className="form-check-input me-1"
                            type="checkbox"
                            value=""
                            id="thirdCheckbox"
                          />
                          <label
                            className="form-check-label"
                            for="thirdCheckbox"
                          >
                            Staggered
                          </label>
                        </li>
                        <li className="list-group-item">
                          <input
                            className="form-check-input me-1"
                            type="checkbox"
                            value=""
                            id="fourthCheckbox"
                          />
                          <label
                            className="form-check-label"
                            for="fourthCheckbox"
                          >
                            30% Keyboard
                          </label>
                        </li>
                        <li className="list-group-item">
                          <input
                            className="form-check-input me-1"
                            type="checkbox"
                            value=""
                            id="fifthCheckbox"
                          />
                          <label
                            className="form-check-label"
                            for="fifthCheckbox"
                          >
                            40% Keyboard
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="row">
                    <h5>Price Range:</h5>
                    <div>
                      <ul className="list-group">
                        <li className="list-group-item">
                          <input
                            className="form-check-input me-1"
                            type="checkbox"
                            value=""
                            id="firstCheckbox"
                          />
                          <label
                            className="form-check-label"
                            for="firstCheckbox"
                          >
                            $60 and below
                          </label>
                        </li>
                        <li className="list-group-item">
                          <input
                            className="form-check-input me-1"
                            type="checkbox"
                            value=""
                            id="secondCheckbox"
                          />
                          <label
                            className="form-check-label"
                            for="secondCheckbox"
                          >
                            $60 - $100
                          </label>
                        </li>
                        <li className="list-group-item">
                          <input
                            className="form-check-input me-1"
                            type="checkbox"
                            value=""
                            id="thirdCheckbox"
                          />
                          <label
                            className="form-check-label"
                            for="thirdCheckbox"
                          >
                            Above $100
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-1">
              <div className="dropdown">
                <button
                  className="btn card-button dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Sort by:
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Recommended
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Newest
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Best reviewed
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-lg-3 g-4">
            {/* <!-- prod 1 --> */}
            <div className="col">
              <div className="card h-100">
                <img
                  className="card-image"
                  src="img/ortholinear-keyboards/macro-keys.png"
                  alt=""
                />
                <div className="card-body">
                  <h5 className="card-title">The Numeric 17</h5>
                  <p className="card-text">
                    17-key macro or regular numeric keypad?
                  </p>
                  <div className="card-footer">
                    <div className="row">
                      <div className="col-6">
                        <button
                          type="button"
                          className="btn card-button"
                          data-bs-toggle="modal"
                          data-bs-target="#prod1modal"
                        >
                          View details
                        </button>
                      </div>
                      <div className="col-6 text-end">
                        <h5>$60</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- modal for prod 1 --> */}
            <div
              className="modal fade"
              id="prod1modal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title" id="exampleModalLabel">
                      The Numeric 17
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <img
                      className="img-fluid"
                      src="img/ortholinear-keyboards/macro-keys.png"
                      alt=""
                    />
                    <p className="lead">
                      The macro pad for every person who want to be efficient!
                    </p>
                    <p>Features:</p>
                    <ul>
                      <li>Hot-Swappable</li>
                      <li>RP2040 Chip</li>
                      <li>USB Type-C</li>
                      <li>4 knobs or 1 knob configuration</li>
                      <li>QMK firmware for customizability</li>
                    </ul>
                    <p>Instructions:</p>
                    <p>
                      Increase productivity dramatically with the Numeric 17!
                      This keypad houses the powerful QMK Firmware thru Vial GUI
                      configurator for easy programmability and use. You just
                      need to follow the 3-step guide to start:
                      <br />
                      1. Download and install Vial configurator at
                      get.vial.today 2. Plug keypad to computer then open Vial
                      configurator 3. Change key mapping to your liking
                      <br />
                      P17 keyboards are cased in stacked acrylic or 3D printed
                      casing that includes hot swap switch sockets holding
                      Gateron Milky switches. These switches are partnered with
                      DSA PBT keycaps with RGB backlight.
                      <br />
                      Package includes: P17 Macro Pad; USB Type-C cable, quick
                      start guide (sticker)
                      <br />
                      Compatible with: Windows, Mac, Linux
                    </p>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn card-button"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <a className="btn card-button" href="contact.html">
                      Contact us
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- prod 2 --> */}
            <div className="col">
              <div className="card h-100">
                <img
                  className="card-image"
                  src="img/ortholinear-keyboards/30key_keyboard-transformed.png"
                  alt=""
                />
                <div className="card-body">
                  <h5 className="card-title">Ortho-30</h5>
                  <p className="card-text">
                    For the die hard mininal hand movement typists!
                  </p>
                  <div className="card-footer">
                    <div className="row">
                      <div className="col-6">
                        <button
                          type="button"
                          className="btn card-button"
                          data-bs-toggle="modal"
                          data-bs-target="#prod1modal"
                        >
                          View details
                        </button>
                      </div>
                      <div className="col-6 text-end">
                        <h5>$80</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- modal for prod 2 --> */}
            <div
              className="modal fade"
              id="prod2modal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title" id="exampleModalLabel">
                      Ortho 30
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <div
                      id="carouselExampleControls"
                      className="carousel slide"
                      data-bs-ride="carousel"
                    >
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <img
                            src="img/ortholinear-keyboards/30key_keyboard-transformed.png"
                            className="d-block img-fluid"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="img/ortholinear-keyboards/barebones-black-ortho-30-transformed.png"
                            className="d-block img-fluid"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="img/ortholinear-keyboards/barebones-clear-ortho-30-transformed.png"
                            className="d-block img-fluid"
                            alt="..."
                          />
                        </div>
                      </div>
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleControls"
                        data-bs-slide="prev"
                      >
                        <span
                          className="carousel-control-prev-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleControls"
                        data-bs-slide="next"
                      >
                        <span
                          className="carousel-control-next-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>
                    <div className="row">
                      <div className="col">
                        <p className="lead">
                          This keyboard is suited for maximum efficiency!
                        </p>
                        <p>Features:</p>
                        <ul>
                          <li>Hot-Swappable</li>
                          <li>RP2040 Chip</li>
                          <li>USB Type-C</li>
                          <li>Barebones or Fully Customized!</li>
                          <li>QMK firmware for customizability</li>
                        </ul>
                        <p>Instructions & Inclusions</p>
                        <p>
                          Ortho 30 is powered with a RP2040 Zero
                          microcontroller.
                          <br />
                          This new microcontroller gives the Ortho 30 more power
                          and memory.
                          <br />
                          Users will have 8 layers, 32 macros, 32 tap dance, 32
                          combos, and RGB matrix animations to name a few.
                          Released in barebone and complete kits.
                          <br />
                          <br />
                          <span className="text-danger">
                            Barebone kits have no switches and keycaps.
                            <br />
                            If you do not know what these are, or what switches
                            are compatible with this keyboard, please choose
                            Complete kit.
                          </span>
                          <br />
                          <br />
                          Complete kits includes Gateron Milky switches and
                          blank DSA keycaps (ABS/PBT)
                          <br />
                          Layout: 3x10 Full Grid OLKB
                          <br />
                          Casing: Acrylic (stacked) RGB per-key backlight USB
                          <br />
                          Port: Type C Hot swap switch socket (MX): Yes
                          <br />
                          Controller: Pro Micro Atmega32U4 Software: Vial
                          configurator This keyboard is powered by QMK and
                          compatible with VIAL software. Please see product
                          image for configuration guide. Package includes: Ortho
                          30 keyboard; USB Cable (A to C); bump-ons; quick start
                          guide.
                          <br />
                          <br />
                        </p>
                        Vial configurator 3-step guide to start:
                        <br />
                        <br />
                        <ol>
                          <li>
                            Download and install Vial configurator at
                            get.vial.today
                          </li>
                          <li>
                            Plug keypad to computer then open Vial configurator
                          </li>
                          <li>
                            Change key mapping to your liking Complete kits will
                            include everything needed for a fully functional and
                            ready to use Ortho 30
                          </li>
                        </ol>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn card-button"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <a className="btn card-button" href="#">
                      Contact us
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- prod 3 --> */}
            <div className="col">
              <div className="card h-100">
                <img
                  className="card-image"
                  src="img/ortholinear-keyboards/Ortho-48-nobg.png"
                  alt=""
                />
                <div className="card-body">
                  <h5 className="card-title">Ortho 48</h5>
                  <p className="card-text">Functionality with less layers!</p>
                  <div className="card-footer">
                    <div className="row">
                      <div className="col-6">
                        <button
                          type="button"
                          className="btn card-button"
                          data-bs-toggle="modal"
                          data-bs-target="#prod1modal"
                        >
                          View details
                        </button>
                      </div>
                      <div className="col-6 text-end">
                        <h5>$130</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- modal for prod 3 --> */}
            <div
              className="modal fade"
              id="prod3modal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title" id="exampleModalLabel">
                      Ortho 48
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <div
                      id="carouselprod3"
                      className="carousel slide"
                      data-bs-ride="carousel"
                    >
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <img
                            src="img/ortholinear-keyboards/Ortho-48-nobg.png"
                            className="d-block img-fluid"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="img/ortholinear-keyboards/p-48-transformed.png"
                            className="d-block img-fluid"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="img/ortholinear-keyboards/p-48-clear_keycaps-transformed.png"
                            className="d-block img-fluid"
                            alt="..."
                          />
                        </div>
                      </div>
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselprod3"
                        data-bs-slide="prev"
                      >
                        <span
                          className="carousel-control-prev-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselprod3"
                        data-bs-slide="next"
                      >
                        <span
                          className="carousel-control-next-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>
                    <div className="row">
                      <div className="col">
                        <p className="lead">
                          The keyboard to begin your search for the most
                          ergonomic keyboard.
                        </p>
                        <p>Features:</p>
                        <ul>
                          <li>Hot-Swappable</li>
                          <li>RP2040 Chip</li>
                          <li>USB Type-C</li>
                          <li>Barebones or Fully Customized!</li>
                          <li>QMK firmware for customizability</li>
                        </ul>
                        <p>Instructions & Inclusions</p>
                        <p>
                          Ortho 48 is a 4x12 grid ortholinear keyboard inspired
                          by OLKB's Planck.
                          <br />
                          Ortho 48 houses RP2040 Pico microcontroller with USB
                          Type C port and one rotary encoder at top left grid.
                          Ortho 48 also features north facing hot swap MX switch
                          sockets and per key RGB backlight.
                          <br />
                          Ortho 48 is composed of: Ortho 48 PCB assembly and FR4
                          top plate in stacked acrylic casing.
                          <br />
                          <br />
                          Vial configurator 3-step guide to start:
                          <br />
                          <br />
                          <span className="text-danger">
                            Barebone kits will have no switches and keycaps.
                            <br />
                            User will need 47 MX compatible switches and
                            keycaps.
                            <br />
                            Installation and assembly is required. Package
                            includes: Ortho 48 OLKB; USB A to Type C cable;
                            quick start guide.
                          </span>
                        </p>
                        <ol>
                          <li>
                            Download and install Vial configurator at
                            get.vial.today
                          </li>
                          <li>
                            Plug keypad to computer then open Vial configurator
                          </li>
                          <li>
                            Change key mapping to your liking Complete kits will
                            include everything needed for a fully functional and
                            ready to use Ortho 48
                          </li>
                        </ol>
                        <br />
                        <br />
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn card-button"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <a className="btn card-button" href="contact.html">
                      Contact us
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- prod 4 --> */}
            <div className="col">
              <div className="card h-100">
                <img
                  className="card-image"
                  src="img/Stagerred/P-37-bgremoved.png"
                  alt=""
                />
                <div className="card-body">
                  <h5 className="card-title">Stag 37</h5>
                  <p className="card-text">
                    37 key masterpiece for the traditionalists.
                  </p>
                  <div className="card-footer">
                    <div className="row">
                      <div className="col-6">
                        <button
                          type="button"
                          className="btn card-button"
                          data-bs-toggle="modal"
                          data-bs-target="#prod1modal"
                        >
                          View details
                        </button>
                      </div>
                      <div className="col-6 text-end">
                        <h5>$85</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- modal for prod 4 --> */}
            <div
              className="modal fade"
              id="prod4modal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title" id="exampleModalLabel">
                      Stag 37
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <div
                      id="carouselprod4"
                      className="carousel slide"
                      data-bs-ride="carousel"
                    >
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <img
                            src="img/Stagerred/stag-37-transformed.png"
                            className="d-block img-fluid"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="img/Stagerred/stag-37-barebones-clear-transformed.png"
                            className="d-block img-fluid"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="img/Stagerred/stag-37-barebones-transformed.png"
                            className="d-block img-fluid"
                            alt="..."
                          />
                        </div>
                      </div>
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselprod4"
                        data-bs-slide="prev"
                      >
                        <span
                          className="carousel-control-prev-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselprod4"
                        data-bs-slide="next"
                      >
                        <span
                          className="carousel-control-next-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>
                    <div className="row">
                      <div className="col">
                        <p className="lead">
                          This keyboard is for the tradional typists which want
                          to move to a more efficient typing experience.
                        </p>
                        <p>Features:</p>
                        <ul>
                          <li>Hot-Swappable</li>
                          <li>RP2040 Chip</li>
                          <li>USB Type-C</li>
                          <li>Barebones or Fully Customized!</li>
                          <li>QMK firmware for customizability</li>
                        </ul>
                        <p>Instructions & Inclusions</p>
                        <p>
                          This 35% keyboard is one of the cutest you can find in
                          the market. A very useful and full-featured compact
                          keyboard for those that want to stick to staggered
                          layout.
                          <br />
                          <br />
                          Vial configurator 3-step guide to start:
                          <br />
                          <br />
                          <span className="text-danger">
                            Barebone kits will have no switches and keycaps.
                            <br />
                            User will need 37 MX compatible switches and
                            keycaps.
                            <br />
                            Installation and assembly is required. Package
                            includes: Stag 37 OLKB; USB A to Type C cable; quick
                            start guide.
                          </span>
                        </p>
                        <br />
                        <br />
                        <ol>
                          <li>
                            Download and install Vial configurator at
                            get.vial.today
                          </li>
                          <li>
                            Plug keypad to computer then open Vial configurator
                          </li>
                          <li>
                            Change key mapping to your liking Complete kits will
                            include everything needed for a fully functional and
                            ready to use Stag 37
                          </li>
                        </ol>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn card-button"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <a className="btn card-button" href="#">
                      Contact us
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- prod 5 --> */}
            <div className="col">
              <div className="card h-100">
                <img
                  className="card-image"
                  src="img/Stagerred/P-38-1_Ergo_(1)-transformed.png"
                  alt=""
                />
                <div className="card-body">
                  <h5 className="card-title">Stag 38 Ergo</h5>
                  <p className="card-text">
                    Traditional with a sense of comfort.
                  </p>
                  {/* <!-- button for modal --> */}
                  <div className="card-footer">
                    <div className="row">
                      <div className="col-6">
                        <button
                          type="button"
                          className="btn card-button"
                          data-bs-toggle="modal"
                          data-bs-target="#prod1modal"
                        >
                          View details
                        </button>
                      </div>
                      <div className="col-6 text-end">
                        <h5>$110</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- modal for prod 5 --> */}
            <div
              className="modal fade"
              id="prod5modal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title" id="exampleModalLabel">
                      Stag 38 Ergo
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <div
                      id="carouselprod5"
                      className="carousel slide"
                      data-bs-ride="carousel"
                    >
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <img
                            src="img/Stagerred/stag-38-ergo-custom-transformed.png"
                            className="d-block img-fluid"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="img/Stagerred/stag-38-barebones-transformed.png"
                            className="d-block img-fluid"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="img/Stagerred/stag-38-barebones-2-transformed.png"
                            className="d-block img-fluid"
                            alt="..."
                          />
                        </div>
                      </div>
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselprod5"
                        data-bs-slide="prev"
                      >
                        <span
                          className="carousel-control-prev-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselprod5"
                        data-bs-slide="next"
                      >
                        <span
                          className="carousel-control-next-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>
                    <div className="row">
                      <div className="col">
                        <p className="lead">
                          This is our first iteration for our split keyboards.
                        </p>
                        <p>Features:</p>
                        <ul>
                          <li>Hot-Swappable</li>
                          <li>RP2040 Chip</li>
                          <li>USB Type-C</li>
                          <li>Barebones or Fully Customized!</li>
                          <li>QMK firmware for customizability</li>
                        </ul>
                        <p>Instructions & Inclusions</p>
                        <p>
                          Stag 38 Ergo, is an RP2040 Zero powered
                          split-non-split 36+2 keys keyboard. Features a
                          staggered ergonomic layout with a thumb and a vertical
                          rotary encoder. Compared to Pro Micro (ATMEGA32U4)
                          that we typically use, the RP2040 micro chip gives
                          this keyboard more power and space. The noticeable
                          benefit are: 8 layers; 32 macros; 32 tap dances; 32
                          combos; RGB Matrix (instead of common animations);
                          midi; QMK settings; and more!
                          <br />
                          <br />
                          Vial configurator 3-step guide to start:
                          <br />
                          <br />
                          <span className="text-danger">
                            Barebone kits will have no switches and keycaps.
                            <br />
                            User will need 38 MX compatible switches and
                            keycaps.
                            <br />
                            Installation and assembly is required. Package
                            includes: Stag 38 Ergo; USB A to Type C cable; quick
                            start guide.
                          </span>
                        </p>
                        <br />
                        <br />
                        <ol>
                          <li>
                            Download and install Vial configurator at
                            get.vial.today
                          </li>
                          <li>
                            Plug keypad to computer then open Vial configurator
                          </li>
                          <li>
                            Change key mapping to your liking Complete kits will
                            include everything needed for a fully functional and
                            ready to use Stag 38 Ergo
                          </li>
                        </ol>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn card-button"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <a className="btn card-button" href="contact.html">
                      Contact us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Products;
