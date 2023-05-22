import picture from "../pages/img/ortholinear-keyboards/macro-keys.png";

function Products() {
  return (
    <>
      <h2>Products</h2>
      {/* PRODUCT 1 */}
      <div className="col">
        <div className="card h-100">
          <img className="card-image" src={picture} alt="" />
          <div className="card-body">
            <h5 className="card-title">The Numeric 17</h5>
            <p className="card-text">17-key macro or regular numeric keypad?</p>
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
      {/* MODAL */}
      <div
        className="modal fade"
        id="prod1modal"
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
              <img className="img-fluid" src={picture} alt="" />
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
                Increase productivity dramatically with the Numeric 17! This
                keypad houses the powerful QMK Firmware thru Vial GUI
                configurator for easy programmability and use. You just need to
                follow the 3-step guide to start:
                <br />
                1. Download and install Vial configurator at get.vial.today 2.
                Plug keypad to computer then open Vial configurator 3. Change
                key mapping to your liking
                <br />
                P17 keyboards are cased in stacked acrylic or 3D printed casing
                that includes hot swap switch sockets holding Gateron Milky
                switches. These switches are partnered with DSA PBT keycaps with
                RGB backlight.
                <br />
                Package includes: P17 Macro Pad; USB Type-C cable, quick start
                guide sticker
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
    </>
  );
}

export default Products;
