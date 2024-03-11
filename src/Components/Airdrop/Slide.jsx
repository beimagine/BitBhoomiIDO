import React, { useState } from 'react'
import { slidesData } from './slidesData';
import { useNavigate } from 'react-router-dom';
import './slide.css';

const Slide = ({ index }) => {
    const navigate = useNavigate();
    const [isQuestionAttempted, setIsQuestionAttempted] = useState([false, false, false, false]);

    const handlePrevSlide = () => {
        for (let i = 0; i < 3; i++) {
            document.getElementsByClassName('options')[i].style.border = ''
            document.getElementsByClassName('options')[i].style.background = ''
        }
        if (index === "1")
            navigate(`/airdrop`)
        else {
            navigate(`/airdrop/slide${index - 1}`)
        }
    };

    const handleNextSlide = () => {
        for (let i = 0; i < 3; i++) {
            document.getElementsByClassName('options')[i].style.border = ''
            document.getElementsByClassName('options')[i].style.background = ''
        }
        if (index === 4)
            navigate(`/airdrop/slide5`)
        else {
            navigate(`/airdrop/slide${+index + 1} `)
        }
    };

    const handleAnswerClicked = (text, index, optionIndex) => {
        if (isQuestionAttempted[index - 1] === true) {
            alert("You have already attempted the question")
            return;
        }
        else {
            console.log(text, index, optionIndex);
            if (text === slidesData[index - 1].correctAnswer) {
                document.getElementsByClassName('options')[optionIndex].style.background = 'linear-gradient(270deg, #9F7EF6 0%, #6E89D3 16.67%, #5598BD 33.33%, #3BB5A3 50%, #529CBA 66.67%, #7089D4 83.33%, #8D82EA 100%)';
            } else {
                document.getElementsByClassName('options')[optionIndex].style.border = '2px solid #FF4242';
                slidesData[index - 1].options.map((elem, ind) => {
                    if (elem === slidesData[index - 1].correctAnswer)
                        document.getElementsByClassName('options')[ind].style.background = 'linear-gradient(270deg, #9F7EF6 0%, #6E89D3 16.67%, #5598BD 33.33%, #3BB5A3 50%, #529CBA 66.67%, #7089D4 83.33%, #8D82EA 100%)';
                })
            }
            setIsQuestionAttempted(prevState => {
                const newState = [...prevState];
                newState[index - 1] = true;
                return newState;
            });
        }
    }

    return (
        <div className='bgStyle' >
            <section className="slideSection">
                <div className="imgContainer">
                    <div className="returnBtnContainer" onClick={handlePrevSlide}>
                        <img src="/airdrop_assets/arrow-left.png" alt="" />
                    </div>
                    <img src={slidesData[index - 1].img} alt="" className="slideImg" />
                    <img src={slidesData[index - 1].mobileImg} alt="" className="slideMobileImg" />
                </div>

                <div className='questionDiv'>
                    <h1 className='question'>{slidesData[index - 1].question}
                    </h1>
                    <div className='optionContainer'>
                        <div
                            className='options'
                            onClick={() => handleAnswerClicked(slidesData[index - 1].options[0], index, 0)}
                        >
                            <h4>{slidesData[index - 1].options[0]}</h4>
                        </div>
                        <div
                            className='options'
                            onClick={() => handleAnswerClicked(slidesData[index - 1].options[1], index, 1)}
                        >
                            <h4>{slidesData[index - 1].options[1]}</h4>
                        </div>
                    </div>
                    <div className='optionContainer'>
                        <div
                            className='options'
                            onClick={() => handleAnswerClicked(slidesData[index - 1].options[2], index, 2)}
                        >
                            <h4>{slidesData[index - 1].options[2]}</h4>
                        </div>
                        <div
                            className="options nextBtn"
                            style={{ background: "transparent" }}
                            onClick={handleNextSlide}
                        >
                            NEXT
                            <img src="/airdrop_assets/arrow-right.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Slide;