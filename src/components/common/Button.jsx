
function Button({text, style, onClick, disabled = false, type = "button"}) {
    return (
        <button 
            className={style} 
            onClick={onClick}
            disabled={disabled}
            type={type}
        >
            {text}
        </button>
    )
}

export default Button
