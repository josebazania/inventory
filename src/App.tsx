import { useState } from 'react'
import type { Item } from './components/types'
import { ItemForm } from './components/ItemForm'
import { ItemList } from './components/ItemList'
import './App.css'

function App() {
  const [items, setItems] = useState<Item[]>([
    { id: 1, name: 'Laptop', quantity: 5, price: 999.99 },
    { id: 2, name: 'Mouse', quantity: 20, price: 29.99 },
    { id: 3, name: 'Teclado', quantity: 15, price: 79.99 },
  ])

  const handleAddItem = (newItem: Omit<Item, 'id'>) => {
    const id = Math.max(0, ...items.map(item => item.id)) + 1
    setItems([...items, { ...newItem, id }])
  }

  const handleUpdateQuantity = (id: number, quantity: number) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, quantity: Math.max(0, quantity) } : item
    ))
  }

  const handleDeleteItem = (id: number) => {
    setItems(items.filter(item => item.id !== id))
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>📦 Sistema de Inventario</h1>
      </header>
      
      <main className="app-main">
        <ItemForm onAddItem={handleAddItem} />
        <ItemList 
          items={items} 
          onUpdateQuantity={handleUpdateQuantity}
          onDeleteItem={handleDeleteItem}
        />
      </main>
    </div>
  )
}

export default App
