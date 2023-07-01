import f1 from '../assets/f1.svg'
import f2 from '../assets/f2.svg'
import f3 from '../assets/f3.svg'
const Footer = () => {
  return (
    <div className="d-flex align-items-end flex-column mx-5" style={{position:"fixed", bottom:"10px", right:"0px"}}>
      <a href="">
        <img src={f1} alt="" />
      </a>
      <br />
      <a href="">
        <img src={f2} alt="" />
      </a>
      <br />
      <a href="">
        <img src={f3} alt="" />
      </a>
    </div>
  );
}
export default Footer