import BinarySearchWrapper from "./BinarySearchWrapper";
import { Col, Row } from "antd";

const BinarySearchConditional = () => {
  const explanation = `
   Okay, I like this one the most, because it gives you not only the element if it's there, 
   but also the position where your element is supposed to be, if it's not there yet!
   I suffered a bit from implementing insertion capability, 
   SO PLEASE TRY INSERT SOMETHING, THAT IS NOT IN THE LIST. 😡
   `;

  const code = `
  def binary_search_conditional(arr, key):
    left, right = 0, len(arr)
    while left < right:
        mid = left + (right - left) // 2
        if key <= arr[mid]:
            right = mid
        else:
            left = mid + 1
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
    if (lo >= hi || arr[mid] === target) {
      if (isInsertOnFind && arr.indexOf(target) === -1) {
        insert(target);
      }
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
    if (arr[mid] >= target) {
      hi = mid;
      move(hi, `#${prefix}-arr-hi`);
      markOut(lo, hi);
    } else {
      lo = mid + 1;
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
        prefix="cond"
        code={code}
        lo={0}
        hi={0}
        next={next}
        right_square={true}
        allOptions={true}
        insertOnFind={true}
        isInput={true}
      />
    </Row>
  );
};

export default BinarySearchConditional;
