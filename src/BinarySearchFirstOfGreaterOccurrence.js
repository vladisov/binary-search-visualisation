import BinarySearchWrapper from "./BinarySearchWrapper";
import { Col, Row } from "antd";

const BinarySearchFirstOfGreaterOccurrence = () => {
  const explanation = `
  This one is a more specific. In case you want to find out the number which is THE FIRST GREATER NUMBER after the target, 
  going right (lo = mid + 1) would help you to achieve that.
  `;

  const code = `
  def binary_search_first_of_least_greater(arr, key):
    lo, hi, ans = 0, len(arr) - 1, -1
    while lo <= hi:
        mid = lo + (hi - lo + 1) // 2
        if arr[mid] == key:
            lo = mid + 1
        elif key < arr[mid]:
            ans = mid
            hi = mid - 1
        if key > arr[mid]:
            lo = mid + 1
    return ans
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
    if (lo > hi) {
      return;
    }
    mid = Math.floor(lo + (hi - lo + 1) / 2);
    if (arr[mid] === target) {
      lo = mid + 1;
      move(lo, `#${prefix}-arr-lo`);
      markOut(Math.min(lo, ans), Math.max(hi, mid));
    }
    if (target < arr[mid]) {
      ans = mid;
      move(ans, `#${prefix}-arr-mid`);
      hi = mid - 1;
      move(hi, `#${prefix}-arr-hi`);
      markOut(lo, Math.max(hi, mid));
    } else if (target > arr[mid]) {
      lo = mid + 1;
      move(lo, `#${prefix}-arr-lo`);
      markOut(lo, Math.max(hi, mid));
    }
    if (lo > hi) {
      color(`#${prefix}-s-${ans}`, "#53e089", 0.3, 1);
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
        prefix="f_gr"
        code={code}
        lo={0}
        hi={-1}
        next={next}
        right_square={false}
        left_square={false}
        isInput={true}
        duplicate={false}
      />
    </Row>
  );
};

export default BinarySearchFirstOfGreaterOccurrence;
