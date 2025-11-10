export type CardProps = {
    logo: string
    name: string
    description: string
    isActive: boolean
    removeItem?: (name: string) => void
}
