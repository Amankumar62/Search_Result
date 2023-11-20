import { setPageNumber, fetchProductDetail } from "../actions";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@blueprintjs/core";

const Pagination = () => {
  const pageNumber = useSelector((state) => state.pageNumber);
  const per_page = useSelector((state) => state.per_page);
  const total = useSelector((state) => state.total);

  const dispatch = useDispatch();
  if (!total) {
    return null;
  }
  const pageHandler = (pageNumber) => {
    if (pageNumber <= 0 || pageNumber > Math.ceil(total / per_page)) {
      return;
    }

    dispatch(setPageNumber(pageNumber));
    dispatch(fetchProductDetail());
  };
  return (
    <div className="pagination-container">
      <Button intent="success" onClick={() => pageHandler(pageNumber - 1)}>
        &lt;
      </Button>
      <span>
        {pageNumber} of {Math.ceil(total / per_page)}
      </span>
      <Button intent="success" onClick={() => pageHandler(pageNumber + 1)}>
        &gt;
      </Button>
    </div>
  );
};

export default Pagination;
