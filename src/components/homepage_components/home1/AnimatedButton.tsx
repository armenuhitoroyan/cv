import { motion } from "framer-motion";

const AnimatedButton: React.FC = () => {
  return (
    <motion.div
      className="w-12 h-12 flex items-center ml-10 mb-3 justify-center border-2 border-gray-100 relative   rounded-lg cursor-pointer "
      initial={{ rotate: 0, backgroundColor: "transparent" }}
      whileHover={{
        rotate: 180,
        backgroundColor: "#6928e6",
        transition: { duration: 0.4 },
      }}
      whileTap={{ scale: 0.9 }}
    ></motion.div>
  );
};

export default AnimatedButton;
