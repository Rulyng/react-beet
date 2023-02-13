import './button.scss'

function Button(propse){
    return(
        <button className={`button ${propse.className}`}>{propse.name || 'Send'}</button>
    )
}

export default Button