import thankYouIMG from '../assets/illustration-thank-you.svg'
import { useGlobalContext } from '../hooks/useGlobalContext'

const Submitted = () => {
    const { selectedRating } = useGlobalContext()
    return (
        <article className="text-center flex flex-col gap-5">
            <figure className="mx-auto mt-15 mb-5">
                <img src={thankYouIMG} alt="thank you icon" />
            </figure>
            <div className="bg-[#272f35] w-3xs mx-auto rounded-full text-[#fc7613] p-1 font-semibold">
                <p>You selected {selectedRating} out of 5</p>
            </div>

            <div>
                <h2 className="font-bold text-3xl text-white">Thank you!</h2>
                <p className="text-[#969eaa] mt-2 w-[22.5rem] mx-auto">
                    We appreciate you taking the time to give a rating. If you
                    ever need more support, don't hesitate to get in touch!
                </p>
            </div>
        </article>
    )
}

export default Submitted
