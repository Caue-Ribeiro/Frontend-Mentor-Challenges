import { useState, type ReactNode } from 'react'
import { GlobalContext } from '../hooks/useGlobalContext'

interface ProviderInterface {
    children: ReactNode
}

export const GlobalContextProvider = ({ children }: ProviderInterface) => {
    const [selectedRating, setSelectedRating] = useState<null | number>(null)
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false)

    return (
        <GlobalContext.Provider
            value={{
                selectedRating,
                setSelectedRating,
                isSubmitted,
                setIsSubmitted,
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}
