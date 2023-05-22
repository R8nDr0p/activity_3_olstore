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
            <Link to={"/products"} className="btn btn-primary">
              See more...
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
