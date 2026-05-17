import { motion } from "framer-motion";

const BackDrop = () => {
  return (
    <motion.div
      className="modal-backdrop show"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.5 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    />
  );
};

export default BackDrop;