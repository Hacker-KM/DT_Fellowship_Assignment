import "./info.css";
const Info = (firstTask) => {
  
  return (
    <div className="con">
      <div className="content">
        <h2 className="fw-bolder fs-5">{firstTask.tasks.task_title}</h2>
        <p>{firstTask.tasks.task_description}</p>
      </div>
    </div>
  );
};
export default Info;
