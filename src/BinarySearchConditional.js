import BinarySearchWrapper from "./BinarySearchWrapper";

const BinarySearchConditional = () => {
  const code = `
  def binary_search_conditional(arr, key):
    lo, hi = 0, len(arr)
    while lo < hi:
        mid = lo + (hi - lo) // 2
        if arr[mid] >= key:
            hi = mid
        else:
            lo = mid + 1
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
    if (lo >= hi || arr[mid] === target) {
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
    if (arr[mid] >= target) {
      hi = mid;
      move(hi, `#${prefix}-arr-hi`);
      markOut(lo, hi);
    } else {
      lo = mid + 1;
      move(lo, `#${prefix}-arr-lo`);
      markOut(lo, hi);
    }
    callback(lo, hi, mid, target);
  };

  return (
    <BinarySearchWrapper
      prefix="cond"
      code={code}
      lo={0}
      hi={0}
      next={next}
      right_square={true}
    />
  );
};

export default BinarySearchConditional;