import { shoe8 } from '../assets/images'
import Button from '../components/Button'

const SuperQuality = () => {
    return (
        <section
            id="about-us"
            className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
        >
            <div className="flex flex-1 flex-col">
                <h2 className="mt-10 font-family-palanquin text-4xl capitalize  font-bold lg:max-w-lg">
                    <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
                        We Provide You
                    </span>
                    <br />
                    <span className=" text-coral-red inline-block mt-6">
                        {' '}
                        Super
                    </span>{' '}
                    <span className=" text-coral-red inline-block mt-6">
                        {' '}
                        Quality
                    </span>{' '}
                    Shoes
                </h2>
                <p className=" mt-4 info-text lg:max-w-lg">
                    Ensuring premium comfort and style, our meticulously crafted
                    footwear is designed to elevate your experience, providing
                    you with unmatched quality, innovation, and a touch of
                    elegance.
                </p>
                <p className=" mt-4 info-text lg:max-w-lg">
                    Our dedication to detail and excellence ensures your
                    satisfaction
                </p>
                <div className="mt-11">
                    <Button label="View details" />
                </div>
            </div>

            <div className="flex-1 flex justify-center items-center">
                <img src={shoe8} alt="shoe 08" />
            </div>
        </section>
    )
}

export default SuperQuality
