import { Fragment } from "react";
import "./Practice.css";

export const Practice = () => {
  return (
    <Fragment>
      <div className="container1">
        <h1>Display Grid CSS</h1>
        <div className="container-grid-area">
          <div className="header">header</div>
          <div className="m1">main 1</div>
          <div className="sr1">sub-right-1</div>
          <div className="sl1">sub-left-1</div>
          <div className="sr2">sub-right-2</div>
          <div className="mb2">main-bottom</div>
          <div className="footer">footer</div>
        </div>

        <h1>Display Grid CSS</h1>
        <div className="container-grid-columns">
          <div className="item-header">header</div>
          <div className="item-main">main 1</div>
          <div className="item-subright1">sub-right-1</div>
          <div className="item-subleft1">sub-left-1</div>
          <div className="itemsubright2">sub-right-2</div>
          <div className="item-mainbottom">main-bottom</div>
          <div className="item-footer">footer</div>
        </div>
        <h1>Display Flex CSS</h1>
        <div className="container-flex">
          <div className="item1">itemitemitem1</div>
          <div className="item2">itemitemitem2</div>
          <div className="item3">itemitemitem3</div>
          <div className="item4">itemitemitem4</div>
          <div className="item5">itemitemitem5</div>
          <div className="item6">itemitemitem6</div>
          <div className="item7">itemitemitem7</div>
          <div className="item8">itemitemitem8</div>
          <div className="item9">itemitemitem9</div>
        </div>
      </div>
    </Fragment>
  );
};
