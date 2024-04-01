
import {motion, useAnimationControls} from "framer-motion";

const AnimationControl = () => {

    const flipControls = useAnimationControls();
    const handleClick = () => {
        flipControls.start("flip");
    }


    return(
        <div
            style={{
                display: 'grid',
                placeContent: 'center',
                height: '100vh',
                gap: '0.8rem'
            }}
        >
            <button
                onClick={handleClick}
                className="example-button">Flip it!</button>
            <motion.div
                style={{
                    height: 150,
                    width: 150,
                    backgroundColor: 'black'
                }}
                variants={{
                    initial: {
                        rotate: "0deg"
                    },
                    flip: {
                        rotate: "360deg"
                    }
                }}
                initial="initial"
                animate={flipControls}
            >
            </motion.div>
        </div>
    )
}

export default AnimationControl;