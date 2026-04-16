export default function Price({oldPrice, newPrice}) {
    let oldStyles = {
        textDecorationLine: "line-through",

    };
    let newStyles = {
        fontWeight: "bold",
    };
    let styles = {
        backgroundColor: "#e0c367",
        height: "33px",
        width: "243px",
        borderBottomLeftRadius: "23px",
        borderBottomRightRadius: "23px",
        
    }

    return(
        <div style={styles}>
            <span style={oldStyles}>{oldPrice}</span>
            &nbsp;&nbsp;&nbsp;
            <span style={newStyles}>{newPrice}</span>
        </div>
    );
}