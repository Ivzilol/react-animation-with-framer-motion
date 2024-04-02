import {useState} from "react";
import { useMeasure } from "@uidotdev/usehooks";
import {useSpring} from "react-spring";

const LoadBar = () => {
    const [active, toggle] = useState(false);
    const [bind, {width}] = useMeasure();
    const props = useSpring({
        from: {width: 0},
        to: {width},
    })

    return(
        <div {...bind} className="main" onClick={() => toggle(!active)}>
            <div className="fill" style={{width: active ? width : 0, height: '15px'}}></div>
            <div className="content" style={{
            }}>{active ? 100 : 0}</div>
        </div>
    )
}

export default LoadBar;