import React from "react";
import { motion } from "framer-motion";

export interface CinematicTitleProps {
  text: string;
  className?: string;
  as?: React.ElementType;
  tag?: "h1" | "h2" | "h3";
}

const cn = (
  ...classes: Array<string | false | null | undefined>
): string => classes.filter(Boolean).join(" ");

export const CinematicTitle: React.FC<CinematicTitleProps> = ({
  text,
  className,
  as,
  tag = "h1",
}) => {
  const Tag: React.ElementType = as || tag || "h1";
  const words = text.split(" ");

  return (
    <Tag
      className={cn(
        "text-balance leading-tight font-semibold tracking-tight",
        className
      )}
    >
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          initial={{ y: "100%", opacity: 0 }}
          whileInView={{ y: "0%", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.04, duration: 0.4 }}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  );
};

export default CinematicTitle;
