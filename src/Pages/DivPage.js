import { useState } from "react";
import "./DivPage.css";
import DivComponent from "../Components/DivComponent";

export default function DivPages() {
  const [divsOrders, setDivsOrders] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

  const handleChangeDivOrderLeft = (indexDiv) => {
    const divsOrders2 = [...divsOrders];
    const findIndexBefore = divsOrders2.indexOf(divsOrders2[indexDiv] - 1);

    divsOrders2[findIndexBefore] += 1;
    divsOrders2[indexDiv] -= 1;
    setDivsOrders(divsOrders2);
  };

  const handleChangeDivOrderRight = (indexDiv) => {
    const divsOrders2 = [...divsOrders];
    const findIndexAfter = divsOrders2.indexOf(divsOrders2[indexDiv] + 1);

    divsOrders2[findIndexAfter] -= 1;
    divsOrders2[indexDiv] += 1;
    setDivsOrders(divsOrders2);
  };

  return (
    <div id="container">
      {divsOrders.map((divOrder, index) => (
        <DivComponent
          order={divOrder}
          indexDiv={index}
          key={index + 1}
          onChangeDivOrderLeft={handleChangeDivOrderLeft}
          onChangeDivOrderRight={handleChangeDivOrderRight}
        >
          élément {index + 1}
        </DivComponent>
      ))}
    </div>
  );
}
