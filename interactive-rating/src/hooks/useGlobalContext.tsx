import React, { createContext, useContext } from 'react'

interface GlobalContextInterface {
    selectedRating: null | number
    setSelectedRating: React.Dispatch<React.SetStateAction<null | number>>
    isSubmitted: boolean
    setIsSubmitted: React.Dispatch<React.SetStateAction<boolean>>
}

export const GlobalContext = createContext<GlobalContextInterface | undefined>(
    undefined
)

export const useGlobalContext = () => {
    const context = useContext(GlobalContext)

    if (!context) {
        throw new Error(
            'useGlobalContext must be used inside GlobalContextProvider'
        )
    }

    return context
}
