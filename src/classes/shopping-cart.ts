import { Discount } from './discount';
import { Item } from './interfaces/item';
import { ShoppingCartProtocol } from './interfaces/shopping-cart-protocol';

export class ShoppingCart implements ShoppingCartProtocol {
  private readonly _items: Item[] = [];

  constructor(private readonly discount: Discount) {}

  addItem(item: Item): void {
    this._items.push(item);
  }

  remItem(index: number): void {
    this._items.splice(index, 1);
  }

  searchItem(nome: string): Item | undefined {
    const searchedItem = this._items.find((item) => item.name === nome);
    if (searchedItem === undefined) return;

    return searchedItem;
  }

  get items(): Readonly<Item>[] {
    return this._items;
  }

  total(): number {
    // 0 + 19.9 + 29.9 + 189.9
    return +this._items
      .reduce((total, next) => total + next.price, 0)
      .toFixed(2);
  }

  totalWithDiscount(): number {
    return this.discount.calculate(this.total());
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  clearCart(): void {
    this._items.length = 0;
  }
}
