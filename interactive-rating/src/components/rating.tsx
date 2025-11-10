import starIcon from '../assets/icon-star.svg'
import { useGlobalContext } from '../hooks/useGlobalContext'

const arrayOfStars: number[] = new Array(5).fill(0)

const RatingComponent = () => {
    const { selectedRating, setSelectedRating, setIsSubmitted } =
        useGlobalContext()

    const handleRating = (ratingValue: number) => {
        setSelectedRating(ratingValue)
    }

    const handleSubmit = () => {
        if (!selectedRating) {
            alert('Select a number for evaluation.')
            return
        }
        setIsSubmitted(true)
    }
    return (
        <article>
            <figure className="relative h-24 rounded-t-3xl">
                <div className="h-12 w-12 bg-[#26323c] absolute top-9 left-9 grid place-items-center rounded-full">
                    <img src={starIcon} className="p-3" alt="icon star" />
                </div>
            </figure>
            <h2 className="text-start ps-7 text-3xl font-semibold text-white">
                How did we do?
            </h2>
            <p className="text-start px-7 mb-3 text-[#5e646e]">
                Please let us know how we did with the support request. All
                feedback is appreciated to help us improve our offering!
            </p>
            <div className="flex justify-around my-10 w-11/12 m-auto">
                {arrayOfStars.map((_, index) => {
                    const ratingValue = index + 1
                    return (
                        <div
                            className={`h-12 w-12 bg-[#26323c] text-[#969eaa] rounded-full grid place-items-center font-semibold hover:bg-white hover:text-[#26323c] cursor-pointer ${
                                selectedRating == ratingValue
                                    ? 'bg-[#fc7613] text-[#26323c]'
                                    : ''
                            }`}
                            key={ratingValue}
                            onClick={() => handleRating(ratingValue)}
                        >
                            {index + 1}
                        </div>
                    )
                })}
            </div>

            <div className="text-center">
                <button
                    onClick={handleSubmit}
                    className="bg-[#fc7613] font-semibold w-10/12 h-10 rounded-full mb-7 hover:bg-white hover:text-[#26323c] transition-all cursor-pointer"
                >
                    SUBMIT
                </button>
            </div>
        </article>
    )
}

export default RatingComponent
