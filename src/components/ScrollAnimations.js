import {useScroll, motion, useSpring, useTransform} from "framer-motion";

const ScrollAnimations = () => {

    const randomTextLength = Math.floor(Math.random() * (500 - 400 + 1)) + 400;
    const randomText = Array.from({length: randomTextLength}, () => String.fromCharCode(Math.floor(Math.random() * (122 - 97 + 1)) + 97)).join('');

    const {scrollYProgress} = useScroll();
    const scaleX = useSpring(scrollYProgress);
    const background = useTransform(scrollYProgress,
        [0, 1],
        ["rgb(86, 1, 245)", "rgb(1, 245, 13)"]
        )

    return (
        <div
            style={{padding: "1.2rem"}}
        >
            <motion.div
                style={{
                    scaleX,
                    transformOrigin: 'left',
                    background,
                    position: 'sticky',
                    top: 0,
                    width: '100%',
                    height: '20px'
                }}
            />
            <div
                style={{
                    maxWidth: "400px",
                    margin: "auto",
                    padding: "1.2rem"
                }}
            >
                <p style={{wordWrap: 'break-word'}}>
                    {randomText}
                </p>
                <p style={{wordWrap: 'break-word'}}>
                    {randomText}
                </p>
                <p style={{wordWrap: 'break-word'}}>
                    {randomText}
                </p>
                <p style={{wordWrap: 'break-word'}}>
                    {randomText}
                </p>
                <p style={{wordWrap: 'break-word'}}>
                    {randomText}
                </p>
                <p style={{wordWrap: 'break-word'}}>
                    {randomText}
                </p>
                <p style={{wordWrap: 'break-word'}}>
                    {randomText}
                </p>
                <p style={{wordWrap: 'break-word'}}>
                    {randomText}
                </p>
                <p style={{wordWrap: 'break-word'}}>
                    {randomText}
                </p>
                <p style={{wordWrap: 'break-word'}}>
                    {randomText}
                </p>
                <p style={{wordWrap: 'break-word'}}>
                    {randomText}
                </p>
                <p style={{wordWrap: 'break-word'}}>
                    {randomText}
                </p>
                <p style={{wordWrap: 'break-word'}}>
                    {randomText}
                </p>
                <p style={{wordWrap: 'break-word'}}>
                    {randomText}
                </p>
            </div>
        </div>
    )
}

export default ScrollAnimations;

