import "./BasicBinarySearch.css";
import { animate } from "motion";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
import "@fontsource/roboto";
import { Button } from "antd";
import React from "react";

const BasicBinarySearch = () => {
  const squares = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  let lo, hi, mid, target;

  const move = (index, className) => {
    animate(
      className,
      {
        marginLeft: index * 60 + "px",
        opacity: className === ".ArrowMid" && mid === -1 ? 0 : 1,
      },
      { delay: 0.5, duration: 1 }
    );
  };

  const color = (selector, color) => {
    animate(
      selector,
      {
        backgroundColor: color,
      },
      { delay: 0.5, duration: 1 }
    );
  };

  const reset = () => {
    mid = -1;
    lo = 0;
    hi = squares.length - 1;
    target = 5;
    move(lo, ".ArrowLo");
    move(hi, ".ArrowHi");
    move(0, ".ArrowMid");
    color(".Square", "white");
  };
  reset();

  const next = (arr, target) => {
    if (lo > hi || arr[mid] === target) {
      return;
    }
    const currMid = Math.floor(lo + (hi - lo) / 2);
    if (currMid !== mid) {
      mid = currMid;
      move(currMid, ".ArrowMid");
      if (arr[mid] === target) {
        color(`#s-${mid}`, "#53e089");
      }
      return;
    }
    if (arr[mid] < target) {
      lo = mid + 1;
      move(lo, ".ArrowLo");
    } else {
      hi = mid - 1;
      move(hi, ".ArrowHi");
    }
  };

  return (
    <div className="Container">
      <div className="ArrowContainer">
        <div className="ArrowMid">
          <ArrowDownOutlined />
          <span>M</span>
        </div>
      </div>
      <div className="SquaresContainer">
        {squares.map((x, i) => (
          <div key={i} className="SingleSquare">
            <div id={"s-" + i} className="Square">
              <span className="Num">{i}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="ArrowContainer">
        <div className="ArrowLo">
          <ArrowUpOutlined />
          <span>L</span>
        </div>
        <div
          style={{ marginLeft: (squares.length - 1) * 60 + "px" }}
          className="ArrowHi"
        >
          <ArrowUpOutlined />
          <span>R</span>
        </div>
      </div>
      <div className="ButtonContainer">
        <Button
          type="primary"
          className="Button"
          onClick={() => next(squares, target)}
        >
          Next
        </Button>
        <Button
          className="Button"
          onClick={() => {
            reset();
          }}
        >
          Reset
        </Button>
      </div>
    </div>
  );
};

export default BasicBinarySearch;
