import { useState, type FormEvent } from 'react';
import type { Item } from './types';
import './ItemForm.css';

interface ItemFormProps {
  onAddItem: (item: Omit<Item, 'id'>) => void;
}

export function ItemForm({ onAddItem }: ItemFormProps) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !price) return;

    onAddItem({
      name: name.trim(),
      quantity,
      price: parseFloat(price),
    });

    setName('');
    setQuantity(1);
    setPrice('');
  };

  return (
    <form onSubmit={handleSubmit} className="item-form">
      <h2>Agregar Producto</h2>
      <div className="form-group">
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nombre del producto"
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="quantity">Cantidad:</label>
        <input
          type="number"
          id="quantity"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value) || 0)}
          min="0"
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="price">Precio:</label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="0.00"
          step="0.01"
          min="0"
          required
        />
      </div>
      
      <button type="submit" className="add-btn">Agregar</button>
    </form>
  );
}
