import { useEffect, useLayoutEffect, useRef } from "react";

export default function useInterVal(fn: Function, delay?: number) {
  const ref = useRef(fn);
  useLayoutEffect(() => {
    ref.current = fn;
  });

  useEffect(() => {
    const timer = setInterval(() => {
      ref.current();
    }, delay);
    return () => {
      clearInterval(timer);
    };
  }, []);
}
