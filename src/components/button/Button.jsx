function Button({ type, children, onClick, disabled = false, variant }) {
    return (
        <button type={type} disabled={disabled} onClick={onClick} className={variant === 'primary' ? 'button button-primary' : 'button button-invisible'}>
            {children}
        </button>
    );
}

export default Button;