import React, { useReduser } from "react";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import Button from "@material-ui/core/Button";
import "./pagination.scss";
import { Icon } from "react-icons-kit"
import {chevronRight} from 'react-icons-kit/fa/chevronRight'
import {chevronLeft} from 'react-icons-kit/fa/chevronLeft'

// import articles from "../articles/Articles.data";

const reduser = (state, action) => {
  switch (action.type) {
    case "viewPrevPage":
      return {
        ...state,
        currentPage: state.currentPage - 1,
        resourceDate: action.data
      };

    case "viewNext":
      return {
        ...state,
        currentPage: state.currentPage + 1,
        resourceDate: action.data
      };

    case "setPerAmount":
      return {
        ...state,
        currentPage: 1,
        per: action.per,
        pageAmount: Math.ceil(state.sum / action.per),
        resourceData: action.data
      };

    // case "switchComponent":
    //   return {
    //     ...state,
    //     component: action.component
    //   };
    // default:
  }
};

const sliceData = (offset, per) => {
  return articles.slice(offset, offset + per);
};

const Pagination = ({ sum, per, initialData, component }) => {
  const [state, dispatch] = useReduser(reduser, {
    currentPage: 1,
    sum: sum,
    per: per,
    pageAmount: Math.ceil(sum / per),
    resourceData: initialData,
    component: component
  });

  const viewPreview = () => {
    const offset = (state.currentPage - 2) * state.per;
    return dispatch({
      type: "viewPreview",
      data: sliceData(offset, state.per)
    });
  };

  const viewNext = () => {
    const offset = state.currentPage * state.per;
    return dispatch({
      type: "viewNext",
      data: sliceData(offset, state.per)
    });
  };

  // const handleAmountChange = e => {
  //   return dispatch({
  //     type: "setPerAmount",
  //     data: sliceData(0, 9),
  //     per: 9
  //   });
  // };

  return (
    <>
      <Grid container direction="row" alignItems="flex-start">
        <List>
          {state.resourceData.length > 0 ? (
            state.resourceData.map(v => state.component({ props: v }))
          ) : (
            <p>表示するデータがありません</p>
          )}
        </List>
        <Button 
          variant="contained" 
          className="pagination-btn " 
          color="default"
          onClick={viewPreview}
          disabled={state.currentPage === 1}
          >
          <Icon icon={chevronLeft}/>
        </Button>
        <Button 
          variant="contained" 
          className="pagination-btn " 
          color="default"
          onClick={viewNext}
          disabled={
            state.currentPage === state.pageAmount || state.pageAmount === 0
          }
          >
          <Icon icon={chevronRight} />
        </Button>
      </Grid>
    </>
  );
};
export default Pagination;
