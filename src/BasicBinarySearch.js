import BinarySearchWrapper from "./BinarySearchWrapper";
import { Col, Row } from "antd";

const BasicBinarySearch = () => {
  const explanation = `
  The basic implementation of binary search taught in kindergarten. 
  Gives you -1 if desired element is not present. 
  Easy to write, easy to remember, never messes with indices. Editor's pick! 👾`;

  const code = `
  def binary_search(arr, key):
    lo, hi = 0, len(arr) - 1
    while lo <= hi:
        mid = lo + (hi - lo) // 2
        if arr[mid] == key:
            return mid
        elif key < arr[mid]:
            hi = mid - 1
        else:
            lo = mid + 1
    return -1
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
    if (lo > hi || arr[mid] === target) {
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
    if (arr[mid] < target) {
      lo = mid + 1;
      move(lo, `#${prefix}-arr-lo`);
      markOut(lo, hi);
    } else {
      hi = mid - 1;
      move(hi, `#${prefix}-arr-hi`);
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
        prefix="basic"
        code={code}
        lo={0}
        hi={-1}
        next={next}
        isInput={false}
      />
    </Row>
  );
};

export default BasicBinarySearch;
