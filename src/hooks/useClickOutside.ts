import { useEffect, useRef } from "react";

const useClickOutside = (handler: any) => {
  let domNode = useRef(null);
  let current = domNode.current as any;

  useEffect(() => {
    let mayHandler = (event: any) => {
      if (current !== null && !current.contains(event.target)) {
        handler();
      }
    };
    document.addEventListener("mousedown", mayHandler);

    return () => {
      document.removeEventListener("mousedown", mayHandler);
    };
  });

  return domNode;
};

export default useClickOutside;
