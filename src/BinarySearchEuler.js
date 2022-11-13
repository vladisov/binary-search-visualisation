import BinarySearchWrapper from "./BinarySearchWrapper";
import { Col, Row } from "antd";

const BinarySearchEuler = () => {
  const explanation = `
  You really value amount of lines of code you write daily, and don't want to die from finger arthritis?
  Here is a few lines shorter version of the same binary search algorithm as above. A bit trickier with indices, 
  tho still easy to remember.   
  `;

  const code = `
  def binary_search_euler(arr, key):
    left, right = -1, n
    while right - left > 1:
        mid = left + (right - left) // 2
        if key < arr[mid]:
            right = mid
        else:
            left = mid
    return left
`;

  const next = (
    arr,
    target,
    lo,
    hi,
    mid,
    ans,
    move,
    color,
    markOut,
    prefix,
    isInsertOnFind,
    insert,
    callback
  ) => {
    if (hi - lo <= 1 || arr[mid] === target) {
      return;
    }
    const currMid = Math.floor(lo + (hi - lo) / 2);
    if (currMid !== mid) {
      mid = currMid;
      move(currMid, `#${prefix}-arr-mid`);
      if (arr[mid] === target) {
        color(`#${prefix}-s-${mid}`, "#53e089");
      }
      callback(lo, hi, mid, ans, target);
      return;
    }
    if (target < arr[mid]) {
      hi = mid;
      move(hi, `#${prefix}-arr-hi`);
      markOut(lo, hi);
    } else {
      lo = mid;
      move(lo, `#${prefix}-arr-lo`);
      markOut(lo, hi);
    }
    callback(lo, hi, mid, ans, target);
  };

  return (
    <Row justify="center">
      <Row justify="center">
        <Col span={16}>
          <p>{explanation}</p>
        </Col>
      </Row>

      <BinarySearchWrapper
        prefix="euler"
        code={code}
        lo={-1}
        hi={0}
        next={next}
        right_square={true}
        left_square={true}
        margin={35}
        isInput={false}
      />
    </Row>
  );
};

export default BinarySearchEuler;
