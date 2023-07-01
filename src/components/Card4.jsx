import i from "../assets/i.svg";
import "./Card2.css";
import arrowup from "../assets/arrowup.svg";

const Card4 = (assets) => {
  const { asset_id, asset_title, asset_description } = assets.assets[3];
  return (
    <div key={asset_id}>
      <div className="card" style={{ width: "30rem", height: "35rem" }}>
        <ul className="list-group list-group-flush">
          <li className="p-3 position-relative d-flex list-group-item bg-black text-light justify-content-center">
            {asset_title}
            <img className="position-absolute align" src={i} alt="" />
          </li>
          <li className="list-group-item pb-3 py-">
            <span className="fw-bold">Description</span> :{asset_description}
          </li>
          <li className="list-group-item d-flex mx-4 bg-light border-0">
            <img className="arrow" src={arrowup} alt="" />
            <h5>Introduction </h5>
          </li>
          <li className="list-group-item d-flex mx-3 border-0">
            <p>The 4SA Method , How to bring a idea into progress ?</p>
          </li>
          <li
            className="list-group-item d-flex justify-content-end mx-4 border-0"
            style={{ color: "#606161" }}
          >
            <h6>See More</h6>
          </li>
          <li className="list-group-item d-flex mx-4 border">
            <img className="arrow" src={arrowup} alt="" />
            <h5>Thread A</h5>
          </li>
          <li className="list-group-item d-flex mx-4 border-0">
            <p>
              How are you going to develop your stratergy ? Which method are you
              going to use to develop a stratergy ? What if the project is
              lengthy?
            </p>
          </li>
          <li
            className="list-group-item d-flex justify-content-end mx-4 border-0"
            style={{ color: "#606161" }}
          >
            <h6>See More</h6>
          </li>

          <li className="list-group-item d-flex border" style={{marginLeft:'70px',marginRight:'20px'}}>
            <h5>Example 1</h5>
          </li>
          <li className="list-group-item d-flex border-0">
            <p style={{marginLeft:'60px'}}>You have a concept , How will you put into progress?</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Card4;
