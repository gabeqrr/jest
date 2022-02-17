import { Item } from './interfaces/item';

export class Product implements Item {
  constructor(public name: string, public price: number) {}
}
