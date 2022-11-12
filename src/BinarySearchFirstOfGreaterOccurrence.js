import BinarySearchWrapper from "./BinarySearchWrapper";
import { Col, Row } from "antd";

const BinarySearchFirstOfGreaterOccurrence = () => {
  const explanation = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Venenatis tellus in metus vulputate. Purus sit amet volutpat
  consequat mauris nunc congue nisi vitae. Mollis nunc sed id
  semper risus in hendrerit gravida.`;

  const code = `
  def binary_search_first_of_least_greater(arr, key):
    lo, hi, ans = 0, len(arr) - 1, -1
    while lo <= hi:
        mid = low + (hi - lo + 1) // 2
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
    move,
    color,
    markOut,
    prefix,
    isInsertOnFind,
    insert,
    callback
  ) => {
    let ans = -1;
    if (lo > hi) {
      return;
    }
    const currMid = Math.floor(lo + (hi - lo + 1) / 2);
    if (currMid !== mid) {
      mid = currMid;
      move(currMid, `#${prefix}-arr-mid`);
      if (arr[mid] === target) {
        lo = mid + 1;
        move(lo, `#${prefix}-arr-lo`);
      }
    } else if (target < arr[mid]) {
      ans = mid;
      move(ans, `#${prefix}-arr-mid`);

      hi = mid - 1;
      move(hi, `#${prefix}-arr-hi`);
      markOut(lo, hi);
    } else if (target > arr[mid]) {
      lo = mid + 1;
      move(lo, `#${prefix}-arr-lo`);
      markOut(lo, hi);
    }
    if (lo > hi) {
      color(`#${prefix}-s-${ans}`, "#53e089");
    }
    callback(lo, hi, mid, target);
  };

  return (
    <Row justify="center">
      <Row justify="center">
        <Col span={16}>
          <p>{explanation}</p>
        </Col>
      </Row>

      <BinarySearchWrapper
        prefix="first"
        code={code}
        lo={0}
        hi={-1}
        next={next}
        right_square={false}
        left_square={false}
        isInput={false}
        duplicate={true}
        arr={[1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5]}
      />
    </Row>
  );
};

export default BinarySearchFirstOfGreaterOccurrence;
