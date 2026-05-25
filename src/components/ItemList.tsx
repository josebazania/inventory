import type { Item } from './types';
import './ItemList.css';

interface ItemListProps {
  items: Item[];
  onUpdateQuantity: (id: number, quantity: number) => void;
  onDeleteItem: (id: number) => void;
}

export function ItemList({ items, onUpdateQuantity, onDeleteItem }: ItemListProps) {
  if (items.length === 0) {
    return (
      <div className="empty-list">
        <p>No hay productos en el inventario.</p>
      </div>
    );
  }

  const totalValue = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="item-list">
      <div className="list-header">
        <h2>Inventario ({items.length} productos)</h2>
        <div className="summary">
          <span>Total items: <strong>{totalItems}</strong></span>
          <span>Valor total: <strong>${totalValue.toFixed(2)}</strong></span>
        </div>
      </div>
      
      <table className="inventory-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Subtotal</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td className="name">{item.name}</td>
              <td>${item.price.toFixed(2)}</td>
              <td>
                <div className="quantity-controls">
                  <button 
                    onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 0}
                    className="qty-btn"
                  >
                    −
                  </button>
                  <span className="quantity-value">{item.quantity}</span>
                  <button 
                    onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                    className="qty-btn"
                  >
                    +
                  </button>
                </div>
              </td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
              <td>
                <button 
                  onClick={() => onDeleteItem(item.id)}
                  className="delete-btn"
                  title="Eliminar producto"
                >
                  🗑️
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
