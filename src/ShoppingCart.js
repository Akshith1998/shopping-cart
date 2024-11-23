import { useState } from "react";

export default ShoppingCart = ({ items }) => {
  const [cartItems, setCartItems] = useState([]);
  const handleAddItems = (id) => {
    setCartItems((prev) => [...prev, id]);
  };

  const handleRemoveItems = (id) => {
    const filteredItems = cartItems.filter((itemId) => itemId !== id);
    setCartItems(filteredItems);
  };

  const cartItemsDetails = items.filter((item) => cartItems.includes(item.id));

  return (
    <div>
      <div className="cardsWrapper">
        {items.map((item) => {
          const isItemAdded = cartItems.includes(item.id);

          return (
            <div key={item.id} className="shoppingCard">
              <h3 className="name">{item.name}</h3>
              <img className="itemImage" src={item.imageUrl} alt={item.name} />
              <div className="cardFooter">
                <span>{item.price}</span>
                <button
                  className="addButton"
                  disabled={isItemAdded}
                  onClick={() => handleAddItems(item.id)}
                >
                  {isItemAdded ? "Added" : "Add"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="cartWrapper">
        <h2>Cart Items</h2>
        {cartItems.length > 0 && (
          <table className="cartItems">
            <thead>
              <tr className="cartRow">
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Category</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {cartItemsDetails.map((item) => {
                return (
                  <tr className="cartRow">
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>{item.price}</td>
                    <td>{item.category}</td>
                    <td>
                      <button
                        onClick={() => handleRemoveItems(item.id)}
                        className="removeButton"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};
