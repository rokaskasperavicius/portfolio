import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

type Props = {
  children: JSX.Element;
  position: "left" | "right";
  className?: string;
  threshold?: number;
};

export const AnimatePresence = ({
  children,
  position,
  className = "",
  threshold = 0.2,
}: Props) => {
  const [ref, inView, entry] = useInView({ threshold, triggerOnce: true });

  const control = useAnimation();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [inView, control]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={control}
      variants={{
        visible: {
          x: 0,
          opacity: 1,
        },
        hidden: {
          x: position === "right" ? 100 : -100,
          opacity: 0,
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
