import "./BasicBinarySearch.css";
import { animate } from "motion";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
import "@fontsource/roboto";
import { Button, Select, Row, Col } from "antd";
import React from "react";
import BasicBSCodeBlock from "./components/BasicBSCodeBlock";

class BasicBinarySearch extends React.Component {
  constructor(props) {
    super(props);
    const arr_gen = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    const targetOptions = this.getTargets(arr_gen);
    this.state = {
      arr: arr_gen,
      lo: 0,
      hi: arr_gen.length - 1,
      mid: -1,
      target: 5,
      targetOptions,
    };
  }

  move = (index, className, opacity) => {
    animate(
      className,
      {
        marginLeft: index * 36.5 + "px",
        opacity: opacity ?? 1,
      },
      { delay: 0, duration: 1 }
    );
  };

  color = (selector, color) => {
    animate(
      selector,
      {
        backgroundColor: color,
      },
      { delay: 0.3, duration: 1 }
    );
  };

  markAllIn = (lo, hi) => {
    for (let i = lo; i <= hi; i++) {
      animate(
        `#basic-s-${i}`,
        {
          opacity: 1,
        },
        { duration: 0.5 }
      );
    }
  };

  markOut = (lo, hi) => {
    for (let i = 0; i < lo; i++) {
      animate(
        `#basic-s-${i}`,
        {
          opacity: 0.2,
        },
        { delay: 0.1, duration: 0.5 }
      );
    }
    for (let i = hi + 1; i < this.state.arr.length; i++) {
      animate(
        `#basic-s-${i}`,
        {
          opacity: 0.2,
        },
        { delay: 0.1, duration: 0.5 }
      );
    }
  };

  randomize = () => {
    const size = this.getInRange(5, 20);
    let set = new Set();
    for (let i = 0; i < size; i++) {
      set.add(this.getInRange(-100, 100));
    }
    const arr = Array.from(set);
    arr.sort((a, b) => a - b);
    const target = arr[this.getInRange(0, arr.length - 1)];
    this.reset(arr, target);
  };

  getInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  getTargets = (arr) => {
    return arr.map((x, i) => {
      return {
        label: String(x),
        value: String(x),
      };
    });
  };

  reset = (arr, target) => {
    const arr_gen = arr ?? this.state.arr;
    const targetOptions = this.getTargets(arr_gen);
    this.setState(
      {
        arr: arr_gen,
        lo: 0,
        hi: arr_gen.length - 1,
        mid: -1,
        target: target ?? this.state.target,
        targetOptions,
      },
      () => {
        this.markAllIn(0, this.state.arr.length - 1);
        this.move(this.state.lo, "#basic-arr-lo");
        this.move(this.state.hi, "#basic-arr-hi");
        this.move(0, "#basic-arr-mid", 0);
        this.color(".Basic", "white");
      }
    );
  };

  componentDidMount() {
    this.reset();
  }

  render() {
    let { lo, hi, mid, arr, target } = this.state;
    let { move, reset, color, markOut } = this;

    const next = (arr, target) => {
      if (lo > hi || arr[mid] === target) {
        return;
      }
      const currMid = Math.floor(lo + (hi - lo) / 2);
      if (currMid !== mid) {
        mid = currMid;
        move(currMid, "#basic-arr-mid");
        if (arr[mid] === target) {
          color(`#basic-s-${mid}`, "#53e089");
        }
        return;
      }
      if (arr[mid] < target) {
        lo = mid + 1;
        move(lo, "#basic-arr-lo");
        markOut(lo, hi);
      } else {
        hi = mid - 1;
        move(hi, "#basic-arr-hi");
        markOut(lo, hi);
      }
    };

    const code = `
    def binary_search(arr, key):
      lo, hi = 0, len(arr) - 1
      while lo <= hi:
          mid = lo + (hi - lo) // 2
          if arr[mid] == key:
              return mid
          elif arr[mid] < key:
              hi = mid - 1
          else:
              lo = mid + 1
      return -1
  `;

    return (
      <div>
        <div className="Container">
          <div className="ArrowContainer">
            <div id="basic-arr-mid" className="ArrowMid">
              <ArrowDownOutlined />
              <span>M</span>
            </div>
          </div>
          <div className="SquaresContainer">
            {arr.map((x, i) => (
              <div key={i} className="SingleSquare">
                <div id={"basic-s-" + i} className="Square Basic">
                  <span className="Num">{x}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="ArrowContainer">
            <div id="basic-arr-lo" className="ArrowLo">
              <ArrowUpOutlined />
              <span>L</span>
            </div>
            <div id="basic-arr-hi" className="ArrowHi">
              <ArrowUpOutlined />
              <span>R</span>
            </div>
          </div>
          <div className="ButtonContainer">
            <Button
              type="primary"
              className="Button"
              onClick={() => next(arr, target)}
            >
              Next
            </Button>
            <Button
              type="default"
              className="Button"
              onClick={() => {
                this.randomize();
              }}
            >
              Randomize me
            </Button>
            <Button
              type="dashed"
              className="Button"
              onClick={() => {
                reset();
              }}
            >
              Reset
            </Button>
            <Select
              showSearch
              style={{ width: 100, marginLeft: "20px" }}
              placeholder="Set Target"
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option?.label ?? "").includes(input)
              }
              filterSort={(optionA, optionB) => optionA.value - optionB.value}
              onSelect={(selected) => {
                this.setState({ target: Number(selected) });
              }}
              value={this.state.target}
              options={this.state.targetOptions}
            />
          </div>
        </div>
        <Row gutter={8} style={{ marginTop: "20px", width: "800px" }}>
          <Col span={16}>
            <BasicBSCodeBlock code={code} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default BasicBinarySearch;
