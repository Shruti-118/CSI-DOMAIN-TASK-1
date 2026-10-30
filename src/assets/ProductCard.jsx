import { Link } from "react-router-dom";
import { Heart, ShoppingBag, Star } from "lucide-react";
import { useStore } from "../context/StoreContext";

export default function ProductCard({ product }) {
  const { addToCart, wishlist, toggleWishlist } = useStore();
  const wished = wishlist.some((item) => item.id === product.id);

  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <Link to={`/products/${product.id}`}>
          <img src={product.image} alt={product.title} loading="lazy" />
        </Link>
        <button
          className={`icon-btn wishlist-btn ${wished ? "active" : ""}`}
          onClick={() => toggleWishlist(product)}
          aria-label={wished ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart size={19} fill={wished ? "currentColor" : "none"} />
        </button>
      </div>
      <div className="product-card-body">
        <p className="eyebrow">{product.category}</p>
        <Link className="product-title" to={`/products/${product.id}`}>{product.title}</Link>
        <div className="rating"><Star size={15} fill="currentColor" /> {product.rating?.rate ?? 0}</div>
        <div className="card-bottom">
          <strong>₹{product.price.toFixed(2)}</strong>
          <button className="btn small" onClick={() => addToCart(product)}>
            <ShoppingBag size={16} /> Add
          </button>
        </div>
      </div>
    </article>
  );
}
