import BinarySearchWrapper from "./BinarySearchWrapper";

const BasicBinarySearch = () => {
  const code = `
  def binary_search(arr, key):
    lo, hi = 0, len(arr) - 1
    while lo <= hi:
        mid = lo + (hi - lo) // 2
        if arr[mid] == key:
            return mid
        elif arr[mid] < key:
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
    move,
    color,
    markOut,
    prefix,
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
      callback(lo, hi, mid, target);
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
    callback(lo, hi, mid, target);
  };

  return (
    <BinarySearchWrapper
      prefix="basic"
      code={code}
      lo={0}
      hi={-1}
      next={next}
    />
  );
};

export default BasicBinarySearch;