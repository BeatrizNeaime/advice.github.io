import { useState, useEffect } from 'react'
import { BsChatRightQuote } from "react-icons/bs"

const Card = () => {
    const [advice, setAdvice] = useState([]);

    const getAdvice = () => {
        fetch('https://api.adviceslip.com/advice')
            .then(res => res.json())
            .then(res => {
                setAdvice(res.slip)
            })
    }

    useEffect(() => {
        getAdvice()
    }, []);

    return (
        <>
            <div className="bg-gray md:h-[30%] md:w-[30%] rounded-lg md:flex-col md:align-middle md:justify-evenly p-5 w-[90%] h-[50%]" >
                <div className="text-center h-[35%] ">
                    <p className="text-neon text-[10px] "> A D V I C E - #{advice.id} </p>
                    <div className="text-cinza flex align-middle justify-center py-5">
                        <BsChatRightQuote />
                    </div>
                </div>
                <div className="text-center text-cinza flex align-middle justify-center h-[60%]">
                    <span className='text-[18px]'>{advice.advice}</span>
                </div>
                <div className='flex align-middle justify-center' >
                    <button className="bg-neon p-3 rounded-full md:hover:bg-green" onClick={getAdvice} >
                        <img src={require("../assets/icon-dice.png")} alt="new advice" className='md:hover:transition-transform md:hover:duration-500 md:hover:animate-spin' />
                    </button>
                </div>
            </div>
        </>
    )
}

export default Card 