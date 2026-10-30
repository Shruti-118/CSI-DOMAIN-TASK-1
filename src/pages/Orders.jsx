import { Link, useSearchParams } from "react-router-dom";
import { useStore } from "../context/StoreContext";
import EmptyState from "../assets/EmptyState";

export default function Orders() {
  const { orders } = useStore();
  const [params] = useSearchParams();
  const success = params.get("success");

  if (!orders.length) return <section className="section"><div className="container"><EmptyState title="No orders yet" message="Your completed demo orders will appear here." /></div></section>;

  return (
    <section className="section">
      <div className="container">
        {success && <div className="alert success">Order {success} placed successfully.</div>}
        <div className="page-heading"><p className="eyebrow">ORDER HISTORY</p><h1>Your orders</h1></div>
        <div className="orders-list">
          {orders.map(order => (
            <article className="order-card" key={order.id}>
              <div className="order-top">
                <div><b>{order.id}</b><small>{new Date(order.createdAt).toLocaleString()}</small></div>
                <span className="status">{order.status}</span>
              </div>
              <div className="order-items">
                {order.items.map(item => <img key={item.id} src={item.image} alt={item.title} title={item.title} />)}
              </div>
              <div className="order-bottom"><span>{order.items.length} product line(s)</span><strong>₹{order.total.toFixed(2)}</strong></div>
            </article>
          ))}
        </div>
        <Link className="btn outline" to="/products">Continue shopping</Link>
      </div>
    </section>
  );
}