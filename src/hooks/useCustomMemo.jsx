import { useEffect, useRef, useState } from "react";

const useCustomMemo = (callbackFunc, ...dependecy) => {
  const [objectVal, setobjectVal] = useState({});
  const value = useRef(null);
  useEffect(() => {
    const res = callbackFunc();
    if (objectVal[res] === undefined) {
      objectVal[res] = res;
      const newObjectVal = { ...objectVal };
      value.current = objectVal[res];
      setobjectVal(newObjectVal);
    }
    value.current = objectVal[res];
  }, [...dependecy]);
  
  return value.current;
};
export default useCustomMemo;
