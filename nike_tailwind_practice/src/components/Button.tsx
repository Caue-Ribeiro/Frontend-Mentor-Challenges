const Button = ({
    label,
    iconUrl,
    backgroundColor,
    borderColor,
    textColor,
    fullWidth,
}: {
    label: string
    iconUrl?: string
    backgroundColor?: string
    borderColor?: string
    textColor?: string
    fullWidth?: boolean
}) => {
    return (
        <button
            className={`flex justify-center items-center gap-2 px-7 py-4 border font-family-montserrat text-lg leading-none ${
                backgroundColor
                    ? `${backgroundColor} ${textColor} ${borderColor}`
                    : 'bg-coral-red rounded-full text-white border-coral-red'
            } bg-coral-red rounded-full ${fullWidth && 'w-full'}`}
        >
            {label}
            {iconUrl && (
                <img
                    src={iconUrl}
                    alt="arrow right"
                    className="ml-2 rounded-full w-5 h-5"
                />
            )}
        </button>
    )
}

export default Button
