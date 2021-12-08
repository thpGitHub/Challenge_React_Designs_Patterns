import "./DivComponent.css";
import { IconContext } from "react-icons";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

export default function DivComponent({
  children,
  order,
  indexDiv,
  onChangeDivOrderLeft,
  onChangeDivOrderRight,
}) {
  const handleLeft = (indexDiv) => {
    onChangeDivOrderLeft(indexDiv);
  };
  const handleRight = (indexDiv) => {
    onChangeDivOrderRight(indexDiv);
  };

  return (
    <div className="element" style={{ order: order }}>
      <IconContext.Provider value={{ className: "react-icons" }}>
        {children}
        {order > 1 && (
          <button onClick={() => handleLeft(indexDiv)}>
            <BsFillArrowLeftCircleFill />
          </button>
        )}
        {order < 8 && (
          <button onClick={() => handleRight(indexDiv)}>
            <BsFillArrowRightCircleFill />
          </button>
        )}
      </IconContext.Provider>
    </div>
  );
}
