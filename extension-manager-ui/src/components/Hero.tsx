import { useState, type ReactElement, type ReactNode } from 'react'
import logoLight from '../assets/images/logo.svg'
import logoDark from '../assets/images/logo-dark.svg'
import moonIcon from '../assets/images/icon-moon.svg'
import sunIcon from '../assets/images/icon-sun.svg'

const Hero = (): ReactElement<ReactNode> => {
    const [isDark, setIsDark] = useState<boolean>(false)

    const handleTheme = () => {
        const condition = document.documentElement.classList.toggle('dark')

        setIsDark(condition)
    }

    return (
        <section className="bg-secondaryLight dark:bg-secondaryDK w-[90%] xl:w-[1139.39px] mx-auto mt-3.5 p-2 rounded-2xl flex justify-between items-center">
            <figure>
                <img
                    src={isDark ? logoDark : logoLight}
                    alt="logo of the app with 'Extensions' written"
                    className="w-36"
                />
            </figure>

            <button
                onClick={handleTheme}
                className="mr-2.5 dark:bg-[#2e344a] p-3.5 rounded-2xl cursor-pointer"
            >
                <img src={isDark ? moonIcon : sunIcon} alt="" />
            </button>
        </section>
    )
}

export default Hero
