import React, { useState, useContext } from 'react'
import { slidesData } from './slidesData';
import { MyContext } from '../../App';
import { useNavigate } from 'react-router-dom';
import './Slide.css';

const Slide = ({ index }) => {
    const navigate = useNavigate();
    const [isCorrectAnswer, setIsCorrectAnswer] = useState(null);
    const { currentSlideIndex, setCurrentSlideIndex, userData, setUserData } = useContext(MyContext);
    // const [isQuestionAttempted, setIsQuestionAttempted] = useState([false,false,false,false]);

    const [isQuestionAttempted, setIsQuestionAttempted] = useState([false, false, false, false]);

    // let answers = [
    //     { isRight: false, isAnswered: false },
    //     { isRight: false, isAnswered: false },
    //     { isRight: false, isAnswered: false },
    //     { isRight: false, isAnswered: false },
    // ];

    // console.log(index, currentSlideIndex)

    const handlePrevSlide = () => {
        for (let i = 0; i < 3; i++) {
            document.getElementsByClassName('options')[i].style.border = ''
            document.getElementsByClassName('options')[i].style.background = ''
        }
        if (index === "1")
            navigate(`/airdrop`)
        else {
            navigate(`/airdrop/slide${index - 1}`)
            // setCurrentSlideIndex(currentSlideIndex - 1);
        }
        setIsCorrectAnswer(null);
    };

    const handleNextSlide = () => {
        // console.log(answers);
        // if (!answers[index - 1].isAnswered) {
        //     alert('Please attempt the question to move further!')
        //     return;
        // }
        for (let i = 0; i < 3; i++) {
            document.getElementsByClassName('options')[i].style.border = ''
            document.getElementsByClassName('options')[i].style.background = ''
        }
        if (currentSlideIndex === 4)
            navigate(`/airdrop/slide5`)
        else {
            navigate(`/airdrop/slide${+index + 1} `)
            // setCurrentSlideIndex(in + 1);
        }
        setIsCorrectAnswer(null);
    };

    const handleAnswerClicked = (text, index, optionIndex) => {
        console.log(isQuestionAttempted);

        if (isQuestionAttempted[index - 1] === true) {
            alert("You have already attempted the question")
            return;
        }
        else {
            console.log(text, index, optionIndex);
            if (text === slidesData[index - 1].correctAnswer) {
                setIsCorrectAnswer(optionIndex);
                console.log(`correct`);
                document.getElementsByClassName('options')[optionIndex].style.background = 'linear-gradient(270deg, #9F7EF6 0%, #6E89D3 16.67%, #5598BD 33.33%, #3BB5A3 50%, #529CBA 66.67%, #7089D4 83.33%, #8D82EA 100%)';
            } else {
                setIsCorrectAnswer(-1);
                console.log(`incorrect`);
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
                        <img src="/airdrop/arrow-left.png" alt="" />
                    </div>
                    <img src={slidesData[index - 1].img} alt="" className="slideImg" />
                    <img src={slidesData[index - 1].mobileImg} alt="" className="slideMobileImg" />
                </div>

                <div className='questionDiv'>
                    <h1 className='question'>{slidesData[index - 1].question}
                    </h1>
                    <div className='optionContainer'>
                        <div
                            // className={`options ${isCorrectAnswer === 0 ? 'correct' : isCorrectAnswer === 1 ? 'incorrect' : ''}`}
                            className='options'
                            onClick={() => handleAnswerClicked(slidesData[index - 1].options[0], index, 0)}
                        >
                            <h4>{slidesData[index - 1].options[0]}</h4>
                        </div>
                        <div
                            // className={`options ${isCorrectAnswer === 1 ? 'correct' : isCorrectAnswer === 0 ? 'incorrect' : ''}`}
                            className='options'
                            onClick={() => handleAnswerClicked(slidesData[index - 1].options[1], index, 1)}
                        >
                            <h4>{slidesData[index - 1].options[1]}</h4>
                        </div>
                    </div>
                    <div className='optionContainer'>
                        <div
                            // className={`options ${isCorrectAnswer === 2 ? 'correct' : isCorrectAnswer === -1 ? 'incorrect' : ''}`}
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
                            <img src="/airdrop/arrow-right.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Slide;