import ProductButton from "./ProductButton";
import ProductDetails from "./ProductDetails";
import ProductImage from "./ProductImage";
import ProductQuantity from "./ProductQuantity";

const ProductItem = ({ product, getProductQuantity, handlerAddItemToCart, handlerQuantityChange }) => {
    const { imageSrc, imageAlt, href, name, color, price } = product.attributes;
    const quantity = getProductQuantity(product.attributes);

    const handleQuantityChange = (e) => {
        handlerQuantityChange(product.attributes, e.target.value);
    };

    const handleAddToCart = () => {
        handlerAddItemToCart(product.attributes);
    };

    return (
        <div key={product.id} className="group">
            <ProductImage src={imageSrc} alt={imageAlt} />
            <ProductDetails name={name} href={href} color={color} price={price} />
            <div className="group mt-4">
                <div className="relative flex items-center">
                    <ProductQuantity onChange={handleQuantityChange} value={quantity} />
                    <ProductButton onClick={handleAddToCart} />
                </div>
            </div>
        </div>
    );
};

export default ProductItem;