import React from "react";
import { motion } from "framer-motion";

interface ProjectPreviewCarouselProps {
  images: string[];
  altBase: string;
}

const ProjectPreviewCarousel: React.FC<ProjectPreviewCarouselProps> = ({
  images,
  altBase,
}) => {
  if (!images || images.length === 0) {
    return null;
  }

  const looped = [...images, ...images];

  return (
    <div className="relative h-full w-full overflow-hidden">
      <motion.div
        className="flex h-full"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 22, ease: "linear", repeat: Infinity }}
      >
        {looped.map((src, index) => (
          <div key={`${src}-${index}`} className="w-full flex-shrink-0">
            <img
              src={src}
              alt={`${altBase} screen ${index + 1}`}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ProjectPreviewCarousel;
