import { Item } from './item';

export interface ShoppingCartProtocol {
  items: Readonly<Item[]>;
  addItem(item: Item): void;
  remItem(index: number): void;
  searchItem(nome: string): Item | undefined;
  total(): number;
  totalWithDiscount(): number;
  isEmpty(): boolean;
  clearCart(): void;
}
