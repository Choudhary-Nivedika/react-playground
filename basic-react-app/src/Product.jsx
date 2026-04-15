import "./Product.css";

function Product({title, price, features}) {
    let isDiscount = price > 30000;
    let styles = {backgroundColor : isDiscount ? "pink" : ""};

        return(
            <div className="Product" style={styles}>
                <h3>{title}</h3>
                <h5>Price : {price}</h5>
                {/* {price > 30000 ? <p>"Discount of 5%"</p> : null}    */}
                {isDiscount && <p>Discount of 5%</p>}  

                {/* {price > 30000 ? <p>"Discount of 5%"</p> : <a href="/">Get Discount</a>}    */}
            </div>
        );
    } 



export default Product;