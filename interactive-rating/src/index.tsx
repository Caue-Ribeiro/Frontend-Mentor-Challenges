import RatingComponent from './components/rating'
import Submitted from './components/submitted'
import { useGlobalContext } from './hooks/useGlobalContext'

const AppRating = () => {
    const { isSubmitted } = useGlobalContext()
    return (
        <main className="min-h-screen  flex items-center justify-center">
            <section className="bg-[#1b222c]  h-[30rem] w-[40rem] rounded-3xl space-y-6  max-w-md mx-auto">
                {isSubmitted ? <Submitted /> : <RatingComponent />}
            </section>
        </main>
    )
}

export default AppRating
