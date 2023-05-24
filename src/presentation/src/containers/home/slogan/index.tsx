import { useSlogan } from "../../../../../application/src/hooks";
import "./styles.css";
import Box from "../../../components/box";
import MantainanceImg from "../../../components/mantainance-img";
import Subtitle from "../../../components/subtitle";
import { NoContent } from "../../../../../application/src/constants";

const Slogan = () => {
  const { slogan } = useSlogan();

  return (
    <Box className="section">
      {slogan ? (
        <Box className="slogan">
          <Box className="legend">
            <span className="title">{slogan?.getTitle()}</span>
            <hr />
            <p className="description">{slogan?.getDescription()}</p>
          </Box>
          <img alt="Back to school" className="image" src={slogan?.getImg()} />
        </Box>
      ) : (
        <Box className="jcc">
          <Box>
            <Box className="jcc">
              <MantainanceImg className={"w60 h60 mt2"} />
            </Box>
            <Box className="jcc">
              <Subtitle text={NoContent} />
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Slogan;
