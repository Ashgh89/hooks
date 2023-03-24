const Product = (props) => {
    return ( 
        <div>
            <p>Product Name: {props.name}</p>
            <p>Price: {props.price} </p>
        </div>
     );
}
 
export default Product;