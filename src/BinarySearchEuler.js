import BinarySearchWrapper from "./BinarySearchWrapper";

const BinarySearchEuler = () => {
  const code = `
  def binary_search_euler(arr, key):
    lo, hi = -1, n
    while hi - lo > 1:
        mid = lo + (hi - lo) // 2
        if k < arr[mid]:
            hi = mid
        else:
            lo = mid
    return lo
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
      callback(lo, hi, mid, target);
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
    callback(lo, hi, mid, target);
  };

  return (
    <BinarySearchWrapper
      prefix="euler"
      code={code}
      lo={-1}
      hi={0}
      next={next}
      right_square={true}
      left_square={true}
      margin={35}
    />
  );
};

export default BinarySearchEuler;