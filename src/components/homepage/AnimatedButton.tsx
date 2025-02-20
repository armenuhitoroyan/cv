import { motion } from "framer-motion";

const AnimatedButton: React.FC = () => {
  return (
    <motion.div
      className="w-12 h-12 flex items-center ml-10 mb-3 justify-center border-2 border-gray-100 relative   rounded-lg cursor-pointer "
      // Սկզբնական վիճակը (animation-ի համար)
      initial={{ rotate: 0, backgroundColor: "transparent" }} // Սկզբում պտույտ չկա (0 աստիճան)
      whileHover={{
        rotate: 180, // Պտտվում է 180 աստիճան
        backgroundColor: "#6928e6",
        transition: { duration: 0.4 }, // Տևողությունը  0.4 վայրկյան
      }}
      // Երբ սեղմում ենք (click/tap state)
      whileTap={{ scale: 0.9 }} // Կոմպոնենտը փոքրանում է 90%-ով (հպման էֆեկտ)
    ></motion.div>
  );
};

export default AnimatedButton;
