import { useEffect, useState } from "react";

function Example2() {
  const [count, setCount] = useState(0);
  const [minute, setMinute] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => clearTimeout(timer); // clean up timeout
  }, [count]); // run the effect whenever `count` changes

  useEffect(() => {
    if (count === 10) {
      setMinute(minute+1);
    }
  }, [count]); // run this effect only when `count` changes

  return (
    <>
      <h1>CountDown Starts: {count}</h1>
      <h1>Minute: {minute}</h1>
    </>
  );
}

export default Example2;
