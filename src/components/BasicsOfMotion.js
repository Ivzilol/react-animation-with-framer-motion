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
            <motion.button
                onClick={() => setIsVisible(!isVisible)}
                className="example-button"
                layout
            >
                Show/Hide
            </motion.button>
            <AnimatePresence mode="popLayout">
                {isVisible && (<motion.div
                    initial={{
                        rotate: '0deg',
                        scale: 0
                    }}
                    animate={{
                        rotate: '180deg ',
                        scale: 1
                    }}
                    exit={{
                        rotate: '0deg',
                        scale: 0
                    }}
                    transition={{
                        duration: 1,
                        ease: 'backInOut'
                    }}
                    style={{
                        width: 150,
                        height: 150,
                        background: "black"
                    }}
                >
                </motion.div>)}
            </AnimatePresence>
        </div>
    );
};

export default BasicsOfMotion;