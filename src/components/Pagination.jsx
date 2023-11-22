import { useSelector, useDispatch } from "react-redux";
import { Button } from "@blueprintjs/core";

import { setPageNumber } from "../actions";

const Pagination = () => {
  const pageNumber = useSelector((state) => state.pageNumber);
  const perPage = useSelector((state) => state.perPage);
  const total = useSelector((state) => state.total);

  const dispatch = useDispatch();
  if (!total) {
    return null;
  }
  const pageHandler = (pageNumber) => {
    if (pageNumber <= 0 || pageNumber > Math.ceil(total / perPage)) {
      return;
    }

    dispatch(setPageNumber(pageNumber));
  };
  return (
    <div className="pagination-container">
      <Button intent="success" onClick={() => pageHandler(pageNumber - 1)}>
        &lt;
      </Button>
      <span>
        {pageNumber} of {Math.ceil(total / perPage)}
      </span>
      <Button intent="success" onClick={() => pageHandler(pageNumber + 1)}>
        &gt;
      </Button>
    </div>
  );
};

export default Pagination;
