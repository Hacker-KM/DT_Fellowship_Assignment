import i from "../assets/i.svg";
import "./Card2.css";
import arrowup from "../assets/arrowup.svg";
import arrowdown from "../assets/arrowdown.svg";
import small from "../assets/small.svg";
import plus from "../assets/plus.svg";
const card2 = (assets) => {
    const { asset_id, asset_title, asset_description} =
      assets.assets[1];
  return (
    <div key={asset_id}>
      <div className="card rounded" style={{ width: "30rem", height: "35rem" }}>
        <ul className="list-group list-group-flush">
          <li className="p-3 position-relative d-flex list-group-item bg-black text-light justify-content-center">
            {asset_title}
            <img className="position-absolute align" src={i} alt="" />
          </li>
          <li className="list-group-item pb-4">
            <span className="fw-bold">Description</span> :{asset_description}
          </li>
          <li
            className="list-group-item d-flex"
            style={{ background: "rgba(254, 255, 192,20%)" }}
          >
            <img className="arrow" src={arrowup} alt="" />
            <h4 className="px-5">Thread A</h4>
          </li>

          <li className="list-group-item d-flex border-0 justify-content-around pt-4">
            <div style={{ width: "210px" }}>
              <label
                className="bg-light rounded-top lable"
                style={{ width: "210px" }}
                htmlFor="thread1"
              >
                Sub thread 1
              </label>
              <textarea
                className="rounded"
                style={{ width: "210px" }}
                placeholder="Enter text here"
                name="thread1"
              ></textarea>
            </div>

            <div style={{ width: "210px" }}>
              <label
                className="bg-light rounded-top lable"
                style={{ width: "210px" }}
                htmlFor="thread2"
              >
                Sub Interpretation 1
              </label>
              <textarea
                className="rounded"
                style={{ width: "210px" }}
                placeholder="Enter text here"
                name="thread2"
                cols=""
              ></textarea>
            </div>
          </li>
          <li
            className="list-group-item d-flex justify-content-end border-0 pb-3"
            style={{ paddingRight: "31px" }}
          >
            <a href="#">
              <img src={small} alt="" />
            </a>
            <button className="border-0 rounded bg-white py-2 shadow-sm font">
              Select Categ <img src={arrowdown} alt="" />
            </button>
            <button className="border-0 rounded bg-white py-2 shadow-sm font">
              Select Proces <img src={arrowdown} alt="" />
            </button>
          </li>
          <li
            className="list-group-item d-flex justify-content-start border-0"
            style={{ paddingRight: "31px" }}
          >
            <button className="border-0 rounded p-2 font-1">
              <img src={plus} alt="" /> Sub-thread
            </button>
          </li>
          <li className="list-group-item d-flex border-0 justify-content-around pt-4">
            <div style={{ width: "100%" }}>
              <label
                className="bg-light rounded-top lable"
                style={{ width: "100%" }}
                htmlFor="Summary for Thread A"
              >
                Summary for Thread A
              </label>
              <textarea
                className="rounded"
                style={{ width: "100%" }}
                placeholder="Enter text here"
                name="thread1"
              ></textarea>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default card2;
