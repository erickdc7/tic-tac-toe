export const Square = ({ children, isSelected, updateBoard, index }) => {
    // Aplica una clase adicional si el cuadro está seleccionado (turno actual)
    const className = `square ${isSelected ? 'is-selected' : ''}`

    // Llama a la función para actualizar el tablero cuando se hace clic
    const handleClick = () => {
        updateBoard?.(index)
    }

    return (
        <div onClick={handleClick} className={className}>
            {/* Solo renderiza el símbolo (X u O) si existe */}
            {children && <span>{children}</span>}
        </div>
    )
}