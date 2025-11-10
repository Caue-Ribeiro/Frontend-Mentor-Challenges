import Button from '../components/Button'
import arrowRight from '../assets/icons/arrow-right.svg'
import { shoes, statistics } from '../constants'
import { bigShoe1 } from '../assets/images'
import ShoeCard from '../components/ShoeCard'
import { useState } from 'react'

const Hero = () => {
    const [bShoe, setShoe] = useState(bigShoe1)

    const handleShoe = (item: string) => {
        setShoe(item)
    }

    return (
        <section
            id="home"
            className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
        >
            <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full px-8 sm:px-16 xl:px-0 pt-28">
                <p className="text-xl font-family-montserrat text-coral-red">
                    Our Summer collections
                </p>
                <h1 className="mt-10 font-family-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
                    <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
                        The New Arrival
                    </span>
                    <br />
                    <span className=" text-coral-red inline-block mt-6">
                        {' '}
                        Nike
                    </span>{' '}
                    Shoes
                </h1>
                <p className="font-family-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
                    Discover stylish Nike arrivals, quality comfort, and
                    innovation for your active life.
                </p>
                <Button label="Shop now" iconUrl={arrowRight} />
                <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
                    {statistics.map(({ label, value }) => {
                        return (
                            <div key={label}>
                                <p className="text-4xl font-family-palanquin font-bold">
                                    {value}
                                </p>
                                <p className="leading-7 font-family-montserrat text-slate-gray">
                                    {label}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
                <img
                    src={bShoe}
                    alt="show collection"
                    width={610}
                    height={500}
                    className="object-contain relative z-10"
                />

                <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
                    {shoes.map(shoe => (
                        <div key={shoe.thumbnail}>
                            <ShoeCard
                                imgUrl={shoe}
                                bigShoeImg={bShoe}
                                changeBigShoeImg={shoeURL =>
                                    handleShoe(shoeURL)
                                }
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Hero
