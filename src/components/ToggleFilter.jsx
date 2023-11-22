import { setFilterType } from "../actions";
import { Button } from "@blueprintjs/core";
import { useDispatch } from "react-redux";

const ToggleFilter = () => {
  const dispatch = useDispatch();
  return (
    <div className="toggle-filter-container">
      <Button
        intent="success"
        large={true}
        onClick={() => dispatch(setFilterType("filter"))}
      >
        Filters
      </Button>
      <Button
        intent="success"
        large={true}
        onClick={() => dispatch(setFilterType("sort"))}
      >
        Sort Options
      </Button>
    </div>
  );
};

export default ToggleFilter;
