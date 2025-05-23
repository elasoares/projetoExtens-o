export function Button({onClick, children, ativo}){
    return( 
        <button 
            onClick={onClick} 
            style={{
                color: ativo ? "#222" : "#888",
                borderBottom: ativo ? "2px solid #222" : "2px solid transparent",
                background: "none",
                padding: "8px 12px",
                fontWeight: "bold",
                cursor: "pointer"
                }}>
                    {children}
        </button> 
    )
}   