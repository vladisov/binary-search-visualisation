import BinarySearchWrapper from "./BinarySearchWrapper";
import { Col, Row } from "antd";

const BinarySearchFirstOccurrence = () => {
  const explanation = `
  In case your data as fucked up as this one, and you really want to find the first occurrence of a particular number,
  this little trick might help. Looking at the left side whenever you found a target (h = mid - 1) would give you the first occurrence of that number in the array.`;

  const code = `
  def binary_search_first_occ(arr, key):
    lo, hi, ans = 0, len(arr) - 1, -1
    while lo <= hi:
        mid = lo + (hi - lo + 1) // 2
        if arr[mid] == key:
            ans = mid
            hi = mid - 1
        elif key < arr[mid]:
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
      ans = mid;
      move(ans, `#${prefix}-arr-mid`);
      hi = mid - 1;
      move(hi, `#${prefix}-arr-hi`);
      markOut(Math.min(lo, ans), Math.max(hi, mid));
    }

    if (target < arr[mid]) {
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

export default BinarySearchFirstOccurrence;
