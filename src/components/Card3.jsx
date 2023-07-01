import i from "../assets/i.svg";
import l from "../assets/l.svg";
import r from "../assets/r.svg";
import all from "../assets/all.svg";
import p from "../assets/p.svg";
import d from "../assets/d.svg";
import "./Card.css";
const Card3 = (assets) => {
      const { asset_id, asset_title, asset_description} =
        assets.assets[2];
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
          <li className="list-group-item pb-4 m-2">
            <span className="fw-bold ">Title</span> <br />
            <input className="my-3 form-control shadow" type="text" />
            <span className="fw-bold ">Content</span> <br />
            <div className="border mt-3 rounded shadow">
              <div className="contentc d-flex m-2">
                <p style={{ paddingInline: "13px" }}>File</p>
                <p style={{ paddingInline: "13px" }}>Edit</p>
                <p style={{ paddingInline: "13px" }}>View</p>
                <p style={{ paddingInline: "13px" }}>Insert</p>
                <p style={{ paddingInline: "13px" }}>Format</p>
                <p style={{ paddingInline: "13px" }}>Tools</p>
                <p style={{ paddingInline: "13px" }}>Help</p>
              </div>
              <div className="mb-4">
                <img className="px-3" src={l} alt="" />
                <img className="px-2" src={r} alt="" />
                <img className="px-2" src={all} alt="" />
                <img className="px-2" src={p} alt="" />
                <img className="px-2" src={d} alt="" />
              </div>
            </div>
            <textarea className="form-control" style={{height:'140px'}} type="text" />
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Card3