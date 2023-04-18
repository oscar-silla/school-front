import { useSlogan } from "../../../../../application/src/hooks";
import "./styles.css";

const Slogan = () => {
  const { slogan } = useSlogan();

  return (
    <div className="section">
      <div className="slogan">
        <div className="legend">
          <span className="title">{slogan?.getTitle()}</span>
          <hr />
          <p className="description">{slogan?.getDescription()}</p>
        </div>
        <img alt="Back to school" className="image" src={slogan?.getImg()} />
      </div>
    </div>
  );
};

export default Slogan;
