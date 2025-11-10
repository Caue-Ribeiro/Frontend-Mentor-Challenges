import { useState, type ReactElement, type ReactNode } from 'react'

import type { CardProps } from '../types/CardType'

const Cards = ({
    description,
    isActive,
    logo,
    name,
    removeItem,
}: CardProps): ReactElement<ReactNode> => {
    const [active, setActive] = useState<boolean>(isActive)

    const handleActiveness = () => setActive(!active)

    return (
        <div className="bg-secondaryLight dark:bg-secondaryDK border border-secondaryLight  shadow-2xs rounded-2xl p-4 ">
            <div className="flex items-start gap-3">
                <img src={logo} alt={`${name} image`} />

                <div className="text-content ">
                    <h3 className="break-all">{name}</h3>

                    <p>{description}</p>
                </div>
            </div>

            <div className="flex justify-between items-center mt-4">
                <button
                    onClick={() => removeItem?.(name)}
                    type="button"
                    className="font-noto border border-gray-400 px-3.5 py-1.5 rounded-2xl dark:text-quaternaryDK cursor-pointer hover:bg-orangeBG hover:text-secondaryLight dark:hover:bg-orangeBG transition-all"
                >
                    Remove
                </button>

                <label className="inline-flex items-center cursor-pointer">
                    <input
                        onChange={handleActiveness}
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                        checked={active}
                    />
                    <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-1 peer-focus:ring-orangeBG dark:peer-focus:ring-orangeBG dark:bg-[#c6c6c6] peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-[#c6c6c6] peer-checked:bg-orangeBG dark:peer-checked:bg-orangeBG"></div>
                    <span className="sr-only">Checked toggle</span>
                </label>
            </div>
        </div>
    )
}

export default Cards
