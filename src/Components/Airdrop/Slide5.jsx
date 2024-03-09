import React, { useContext } from 'react'
import { slidesData } from './slidesData';
import { MyContext } from '../../App';
import { useNavigate } from 'react-router-dom';
import './Slide.css';

const Slide5 = ({ index }) => {
    const navigate = useNavigate();
    const { userData, setUserData } = useContext(MyContext);

    // console.log(index, currentSlideIndex)

    const handlePrevSlide = () => {
        navigate('/airdrop/slide4')
    };

    const handleNextSlide = () => {
        navigate(`/airdrop/slide6`)
    };

    const handleInputsChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserData((prev) => ({ ...prev, [name]: value }));
    }

    return (
        <div className='bgStyle' >
            <section className="slideSection">
                <div className="imgContainer">
                    <div className="returnBtnContainer" onClick={handlePrevSlide}>
                        <img src="/airdrop/arrow-left.png" alt="" />
                    </div>
                    <img src="/airdrop/slide-5.png" alt="" className="slideImg" />
                    <img src="/airdrop/mobile/slide-5.png" alt="" className="slideMobileImg" />
                </div>

                <div className='questionDiv slide'>
                    <div className='message'>
                        🎉 Great job on completing the quiz! Now, please provide your Twitter and Telegram user IDs:
                    </div>
                    <div className="inputContainer">
                        <label htmlFor="">Twitter ID:</label>
                        <input
                            type="text"
                            placeholder="Type your id"
                            value={userData.twitterId}
                            name="twitterId"
                            onChange={handleInputsChange}
                        />
                    </div>
                    <div className="inputContainer">
                        <label htmlFor="">Telegram ID:</label>
                        <input
                            type="text"
                            placeholder="Type your id"
                            value={userData.telegramId}
                            name="telegramId"
                            onChange={handleInputsChange}
                        />
                    </div>
                    <div
                        className="options nextBtn"
                        style={{ background: "transparent" }}
                        onClick={handleNextSlide}
                    >
                        NEXT
                        <img src="/airdrop/arrow-right.png" alt="" />
                    </div>
                </div>
            </section >
        </div>
    )
}

export default Slide5;