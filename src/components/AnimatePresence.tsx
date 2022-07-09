import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

type Props = {
  children: JSX.Element;
  position: "left" | "right" | "bottom";
  className?: string;
  threshold?: number;
  delay?: number;
};

export const AnimatePresence = ({
  children,
  position,
  className = "",
  threshold = 0.2,
  delay = 0,
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

  let hidden = {};

  switch (position) {
    case "right":
      hidden = {
        x: 100,
      };
      break;
    case "left":
      hidden = {
        x: -100,
      };
      break;
    case "bottom":
      hidden = {
        y: 100,
      };
      break;
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={control}
      variants={{
        visible: {
          x: 0,
          y: 0,
          opacity: 1,
        },
        hidden: {
          ...hidden,
          opacity: 0,
        },
      }}
      className={className}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
};
