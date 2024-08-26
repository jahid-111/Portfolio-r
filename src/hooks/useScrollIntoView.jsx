import { useEffect } from "react";

const useScrollIntoView = (ref, options = { behavior: "smooth" }) => {
    console.log(ref.current)
  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView(options);
    }
  }, [options, ref]);
};

export default useScrollIntoView;
