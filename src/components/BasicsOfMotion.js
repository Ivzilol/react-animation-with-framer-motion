import {motion, AnimatePresence} from "framer-motion";
import {useState} from "react";


const BasicsOfMotion = () => {

    const [isVisible, setIsVisible] = useState(true);

    return (
        <div
            style={{
                display: "grid",
                placeContent: "center",
                height: "100vh",
                gap: "0.8rm"
            }}
        >
            <button
                onClick={() => setIsVisible(!isVisible)}
                className="example-button">Show/Hide
            </button>
            {isVisible && (<motion.div
                initial={{
                    rotate: '0deg'
                }}
                animate={{
                    rotate: '180deg '
                }}
                exit={{
                    rotate: '0deg'
                }}
                transition={{
                    duration: 2,
                    ease: 'backInOut'
                }}
                style={{
                    width: 150,
                    height: 150,
                    background: "black"
                }}
            >
            </motion.div>)}
        </div>
    );
};

export default BasicsOfMotion;