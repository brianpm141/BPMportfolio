interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

export default function NavElement({children ,...props}:Props){
    return(
        <a 
        className="transition-all duration-300 ease-in-out inline-block
        hover:text-secondary-green
        hover:scale-110"
        {...props} >{children}</a>
    )
}