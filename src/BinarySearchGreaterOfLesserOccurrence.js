import BinarySearchWrapper from "./BinarySearchWrapper";
import { Col, Row } from "antd";

const BinarySearchGreaterOfLesserOccurrence = () => {
  const explanation = `
  Ok, it's getting boring, but as good as the above one, but tweaked into the opposite direction. 
  Find the greatest of numbers on the left from our target. Honestly, 
  I'm not sure it works, cause I was pretty tired at this stage.😅`;

  const code = `
  def binary_search_greatest_than_less(arr, key):
    left, right, ans = 0, len(arr) - 1, -1
    while left <= right:
        mid = left + (right - left + 1) // 2
        if arr[mid] == key:
            right = mid - 1
        elif key < arr[mid]:
            right = mid - 1
        if key > arr[mid]:
            ans = mid
            left = mid + 1
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
      hi = mid - 1;
      move(hi, `#${prefix}-arr-hi`);
      markOut(Math.min(lo, ans), Math.max(hi, mid));
    }
    if (target < arr[mid]) {
      hi = mid - 1;
      move(hi, `#${prefix}-arr-hi`);
      markOut(lo, Math.max(hi, mid));
    } else if (target > arr[mid]) {
      ans = mid;
      move(ans, `#${prefix}-arr-mid`);
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
        prefix="gr_less"
        code={code}
        lo={0}
        hi={-1}
        next={next}
        right_square={true}
        left_square={true}
        margin={35}
        isInput={true}
        duplicate={false}
      />
    </Row>
  );
};

export default BinarySearchGreaterOfLesserOccurrence;
