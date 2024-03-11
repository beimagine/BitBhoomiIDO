import React, { useContext } from 'react';
import { MyContext } from '../../App';
import { useNavigate } from 'react-router-dom';
import './Slide.css';

const Slide6 = () => {
    const navigate = useNavigate();
    const { userData, setUserData } = useContext(MyContext);

    const handleSubmitUserDetails = async () => {
        try {
            if (!userData.twitterId || !userData.telegramId || !userData.solanaWalletAddress) {
                alert("Please fill all the fields!");
                return;
            }

            const response = await fetch('https://bitbhoomi-api.onrender.com/user', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify(userData)
            })
            const res = await response.json();
            console.log(res);

            if (res.status === 'ok') {
                navigate(`/airdrop/lastSlide`)
                setUserData({
                    twitterId: "",
                    telegramId: "",
                    solanaWalletAddress: "",
                })
            }
            else if (res?.error?.name === "ValidationError")
                alert("Error: Solana wallet address must be 24 digits long!")
            else
                alert(res.message)
        } catch (error) {
            console.log(error);
        }
    }

    const handlePrevSlide = () => {
        navigate('/airdrop/slide5')
    };

    const handleNextSlide = () => {
        handleSubmitUserDetails();
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
                        <img src="/airdrop_assets/arrow-left.png" alt="" />
                    </div>
                    <img src="/airdrop_assets/slide-6.png" alt="" className="slideImg" />
                    <img src="/airdrop_assets/mobile/slide-6.png" alt="" className="slideMobileImg" />
                </div>

                <div className='questionDiv slide'>
                    <div className='message'>
                        And lastly, to receive your Bhoomi tokens, please enter your Solana wallet address below:
                    </div>
                    <div className="inputContainer walletInputContainer">
                        <label htmlFor="">Solana Wallet Address:</label>
                        <input
                            type="text"
                            placeholder="Wallet address"
                            value={userData.solanaWalletAddress}
                            name="solanaWalletAddress"
                            onChange={handleInputsChange}
                        />
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
            </section >
        </div>
    )
}

export default Slide6;