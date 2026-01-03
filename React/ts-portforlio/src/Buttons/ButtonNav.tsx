interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

export default function ButonNav({children,...props}:Props){

    return(
        <a
        className="bg-secondary-green
        py-3 px-8
        flex justify-center text-center
        rounded-2xl mt-5
        text-text-dark

        transition-all duration-300 ease-in-out
        hover:scale-105
        hover:bg-primary-green
        "
        {...props}
        >
            {children}
        </a>
    )
}