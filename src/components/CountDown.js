import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

const CountDown = () => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, 23, { duration: 20 });

    return animation.stop;
  }, []);

  return(
    <div className="absolute bg-gray-700 opacity-25 h-[100vh] w-screen z-[9999]">
      <motion.h1>{rounded}</motion.h1>

    </div>

  )
  
  ;
};

export default CountDown;