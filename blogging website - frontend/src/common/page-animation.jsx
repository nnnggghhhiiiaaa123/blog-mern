import { AnimatePresence, motion } from "framer-motion";

const AnimationWrapper = ({ children, initial }) => {
    // 1: 42:12
    return (
        <motion.div
            initial={initial}
        >
            {children}
        </motion.div>
    )
}

export default AnimationWrapper;