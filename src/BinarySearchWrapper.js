import "./BasicBinarySearch.css";
import { animate } from "motion";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
import "@fontsource/roboto";
import { Button, Select, Row, Col, InputNumber } from "antd";
import React from "react";
import BasicBSCodeBlock from "./components/BasicBSCodeBlock";

class BinarySearchWrapper extends React.Component {
  constructor(props) {
    super(props);
    const arr_gen = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    const targetOptions = this.getTargets(arr_gen);
    this.state = {
      arr: arr_gen,
      lo: this.props.lo,
      hi: arr_gen.length + this.props.hi,
      mid: -1,
      target: 5,
      targetOptions,
    };
  }

  insert = (el) => {
    const idx = this.findPos(el);
    this.moveAndInsert(idx, el);
  };

  findPos = (el) => {
    const { arr } = this.state;
    let lo = 0;
    let hi = arr.length;
    while (lo < hi) {
      const mid = Math.floor(lo + (hi - lo) / 2);
      if (el <= arr[mid]) {
        hi = mid;
      } else {
        lo = mid + 1;
      }
    }
    return lo;
  };

  moveAndInsert = async (start, el) => {
    const { arr } = this.state;

    await animate(
      `#${this.props.prefix}-s-${start}`,
      {
        marginLeft: 35 + "px",
      },
      { duration: 0.3 }
    ).finished;
    await animate(
      `#${this.props.prefix}-s-${start}`,
      {
        marginLeft: 0 + "px",
      },
      { duration: 0 }
    );
    arr.splice(start, 0, el);

    this.setState(
      {
        arr,
      },
      () => {
        this.markOut(0, start, 0, 0);
        this.color(`#${this.props.prefix}-s-${start}`, "#53e089", 0);
      }
    );

    animate(
      `#${this.props.prefix}-s-${start}`,
      {
        opacity: 0,
      },
      { duration: 0 }
    );
    await animate(
      `#${this.props.prefix}-s-${start}`,
      {
        opacity: 1,
      },
      { duration: 0.5 }
    ).finished;
  };

  move = (index, className, opacity) => {
    const base_margin = this.props.margin ?? 0;
    animate(
      className,
      {
        marginLeft: base_margin + index * 36.7 + "px",
        opacity: opacity ?? 1,
      },
      { delay: 0, duration: 1 }
    );
  };

  color = (selector, color, delay) => {
    animate(
      selector,
      {
        backgroundColor: color,
      },
      { delay: delay ?? 0.3, duration: 1 }
    );
  };

  markAllIn = (lo, hi) => {
    for (let i = lo; i <= hi; i++) {
      animate(
        `#${this.props.prefix}-s-${i}`,
        {
          opacity: 1,
        },
        { duration: 0.5 }
      );
    }
  };

  markOut = (lo, hi, duration, delay) => {
    const arr = this.state.arr;
    for (let i = 0; i < lo; i++) {
      animate(
        `#${this.props.prefix}-s-${i}`,
        {
          opacity: 0.2,
        },
        { delay: delay ?? 0.1, duration: duration ?? 0.5 }
      );
    }
    for (let i = hi + 1; i < arr.length; i++) {
      animate(
        `#${this.props.prefix}-s-${i}`,
        {
          opacity: 0.2,
        },
        { delay: delay ?? 0.1, duration: duration ?? 0.5 }
      );
    }
  };

  randomize = () => {
    const size = this.getInRange(5, 20);
    let set = new Set();
    for (let i = 0; i < size; i++) {
      set.add(this.getInRange(-25, 25));
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
    if (this.props.allOptions) {
      const options = [];
      for (let i = arr[0] - 1; i <= arr[arr.length - 1] + 1; i++) {
        options.push({
          label: String(i),
          value: String(i),
        });
      }
      return options;
    } else {
      return arr.map((x, i) => {
        return {
          label: String(x),
          value: String(x),
        };
      });
    }
  };

  reset = (arr, target) => {
    const arr_gen = arr ?? this.state.arr;
    const targetOptions = this.getTargets(arr_gen);
    this.setState(
      {
        arr: arr_gen,
        lo: this.props.lo,
        hi: arr_gen.length + this.props.hi,
        mid: -1,
        target: target ?? this.state.target,
        targetOptions,
      },
      () => {
        this.markAllIn(0, this.state.arr.length - 1);
        this.move(this.state.lo, `#${this.props.prefix}-arr-lo`);
        this.move(this.state.hi, `#${this.props.prefix}-arr-hi`);
        this.move(0, `#${this.props.prefix}-arr-mid`, 0);
        this.color(`.${this.props.prefix}`, "white");
      }
    );
  };

  componentDidMount() {
    this.reset();
  }

  render() {
    let { lo, hi, mid, arr, target } = this.state;
    let { move, reset, color, markOut, insert } = this;
    let { next, prefix, insertOnFind, isInput } = this.props;

    const callNext = () => {
      next(
        arr,
        target,
        lo,
        hi,
        mid,
        move,
        color,
        markOut,
        prefix,
        insertOnFind,
        insert,
        (nlo, nhi, nmid, ntarget) => {
          this.setState({ lo: nlo, hi: nhi, mid: nmid, target: ntarget });
        }
      );
    };

    return (
      <div>
        <div className="Container">
          <div>
            <span style={{ marginLeft: "20px", marginBottom: "5px" }}>
              Target:{" "}
            </span>
            {isInput ? (
              <InputNumber
                style={{ width: 100, marginLeft: "10px" }}
                min={-100}
                max={100}
                defaultValue={10}
                onChange={(num) => {
                  this.setState({ target: Number(num) }, () => {
                    this.reset(null, num);
                  });
                }}
              />
            ) : (
              <Select
                showSearch
                style={{ width: 100, marginLeft: "10px" }}
                placeholder="Set Target"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  (option?.label ?? "").includes(input)
                }
                filterSort={(optionA, optionB) => optionA.value - optionB.value}
                onSelect={(selected) => {
                  this.setState({ target: Number(selected) }, () => {
                    this.reset(null, selected);
                  });
                }}
                value={this.state.target}
                options={this.state.targetOptions}
              />
            )}
          </div>
          <div className="ArrowContainer">
            <div id={`${prefix}-arr-mid`} className="ArrowMid">
              <div className="Arrow-nested">
                <span className="Caption">mid</span>
                <ArrowDownOutlined />
              </div>
            </div>
          </div>
          <div className="SquaresContainer">
            {this.props.left_square ? (
              <div className="SingleSquare">
                <div className="Square Dotted"></div>
              </div>
            ) : null}
            {arr.map((x, i) => (
              <div key={i} className="SingleSquare">
                <div id={`${prefix}-s-` + i} className={`Square ${prefix}`}>
                  <span className="Num">{x}</span>
                </div>
              </div>
            ))}
            {this.props.right_square ? (
              <div className="SingleSquare">
                <div className="Square Dotted"></div>
              </div>
            ) : null}
          </div>
          <div className="ArrowContainer">
            <div id={`${prefix}-arr-lo`} className="ArrowLo">
              <div className="Arrow-nested">
                <ArrowUpOutlined />
                <span className="Caption">{hi === lo ? "both" : "left"}</span>
              </div>
            </div>
            <div id={`${prefix}-arr-hi`} className="ArrowHi">
              {hi !== lo ? (
                <div className="Arrow-nested">
                  <ArrowUpOutlined />
                  <span className="Caption">{hi === lo ? "" : "right"}</span>
                </div>
              ) : null}
            </div>
          </div>
          <div className="ButtonContainer">
            <Button
              type="primary"
              className="Button"
              onClick={() => callNext()}
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
            <Button type="dashed" className="Button" onClick={() => reset()}>
              Reset
            </Button>
          </div>
        </div>
        <Row gutter={8} style={{ marginTop: "20px", width: "800px" }}>
          <Col span={16}>
            <BasicBSCodeBlock code={this.props.code} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default BinarySearchWrapper;
