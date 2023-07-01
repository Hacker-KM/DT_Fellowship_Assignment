import i from "../assets/i.svg";
import "./Card.css";
const Card = (assets) => {
  const {asset_id, asset_title, asset_description, asset_content} =
    assets.assets[0];
  return (
    <div key={asset_id}>
      <div className="card" style={{ width: "30rem", height: "35rem" }}>
        <ul className="list-group list-group-flush">
          <li className="p-3 position-relative d-flex list-group-item bg-black text-light justify-content-center">
            {asset_title}
            <img className="position-absolute align" src={i} alt="" />
          </li>
          <li className="list-group-item pb-4">
            <span className="fw-bold">Description</span> :{asset_description}
          </li>
          <li className="list-group-item pb-5 pt-0">
            <iframe
              width="100%"
              height="291px"
              src={asset_content}
            ></iframe>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Card;
