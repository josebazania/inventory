export interface Item {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

export interface InventoryProps {
  items: Item[];
  onAddItem: (item: Omit<Item, 'id'>) => void;
  onUpdateQuantity: (id: number, quantity: number) => void;
  onDeleteItem: (id: number) => void;
}
