import React, { useState } from 'react';
import './Intro.css'
import { meal } from '../../constants'
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
function Intro() {
    const [Play, setPlay] = useState(false);
    const vidRef = React.useRef();

    const consthandlevideo = () => {
        setPlay((prevPlay) => !prevPlay);
        if (Play) {
            vidRef.current.pause();
        } else {
            vidRef.current.play();
        }
    }
    return (
        <div className="app__video">
            <video ref={vidRef} src={meal} type="video/mp4" controls={false} muted />
            <div className="app__video-overlay flex__center">
                <div className="app__video-overlay_circle flex__center" onClick={consthandlevideo}>
                    {Play ? (
                        <BsPauseFill color='#fff' fontSize={30} />
                    ) : (
                        <BsFillPlayFill color='#fff' fontSize={30} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default Intro;
