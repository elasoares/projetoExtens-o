export function Button({onClick, children, ativo}){
    return( 
        <button 
            onClick={onClick} 
            style={{
                color: ativo ? "#000" : "#888",
                borderBottom: ativo ? "2px solid #000" : "2px solid transparent",
                border:"none",
                background: "none",
                padding: "8px 12px",
                marginBottom: "16px",
                fontSize: "1.2rem",
                fontFamily: "Poppins, sans-serif",
                fontStyle: "normal",
                fontWeight: "bold",
                cursor: "pointer"
                }}>
                    {children}
        </button> 
    )
}   