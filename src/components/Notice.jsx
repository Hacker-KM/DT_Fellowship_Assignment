import cross from '../assets/cross.svg'

function Notice() {
  return (
    <div className='shadow' style={{ position: "absolute", top: "10px", right: "0px" ,}}>
      <div className="border-0" style={{ width: "95px" }}>
        <div
          className="card border-0 shadow"
          style={{ width: "2rem", borderRadius: "30px 0px 0px 30px" }}
        >
          <ul
            className="list-group list-group-flush"
            style={{ borderRadius: "30px 0px 0px 30px" }}
          >
            <li
              style={{ borderRadius: "30px 0px 0px 30px" }}
              className="list-group-item bg-dark text-light p-4"
            >
              <img
                style={{ position: "absolute", top: "0px", left: "25%" }}
                src={cross}
                alt=""
              />
              <p style={{ paddingTop: "20px" }}>
                <p>Notice</p>Board
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Notice;
