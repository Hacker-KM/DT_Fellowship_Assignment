import home from '../assets/home.svg'
import tool from '../assets/tool.svg'
import noti from '../assets/noti.svg'
import img from '../assets/img.svg'
import more from '../assets/more.svg'

const Navbar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light px-5 shadow"
        style={{ background: "#F0F0F0" }}
      >
        <div className="container-fluid px-5">
          <img
            src="https://deepthought.education/assets/images/logo/logo.svg"
            alt=""
            width="311"
            height="83"
            className="d-inline-block align-text-top"
          />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="#">
                <img src={home} alt="home" />
              </a>
              <a className="nav-link" href="#">
                <img src={tool} alt="tool" />
              </a>
              <a className="nav-link" href="#">
                <img src={noti} alt="abc" />
              </a>
              <a className="nav-link" href="#">
                <img src={img} alt="abc" />
              </a>
              <a className="nav-link" href="#">
                <img src={more} alt="abc" />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
