import { Discount } from './discount';
import { ShoppingCart } from './shopping-cart';
import { Item } from './interfaces/item';

const createSut = () => {
  const discountMock = createDiscountMock();
  const sut = new ShoppingCart(discountMock);
  return { sut, discountMock };
};

const createDiscountMock = () => {
  class DiscountMock extends Discount {}
  return new DiscountMock();
};

const createItem = (name: string, price: number) => {
  class ItemMock implements Item {
    constructor(public name: string, public price: number) {}
  }

  return new ItemMock(name, price);
};

const createSutWithProducts = () => {
  const { sut, discountMock } = createSut();
  const Item1 = createItem('Monitor', 1000);
  const Item2 = createItem('Mouse', 50);
  sut.addItem(Item1);
  sut.addItem(Item2);
  return { sut, discountMock };
};

describe('ShoppingCart', () => {
  it('should be an empty cart when no there are products', () => {
    const { sut } = createSut();
    expect(sut.isEmpty()).toBe(true);
  });

  it('should have 2 cart items', () => {
    const { sut } = createSutWithProducts();
    expect(sut.items.length).toBe(2);
  });

  it('should test total and totalWithDiscount', () => {
    const { sut } = createSutWithProducts();
    expect(sut.total()).toBe(1050);
    expect(sut.totalWithDiscount()).toBe(1050);
  });

  it('should add products and clear cart', () => {
    const { sut } = createSutWithProducts();
    expect(sut.items.length).toBe(2);
    sut.clearCart();
    expect(sut.items.length).toBe(0);
    expect(sut.isEmpty()).toBe(true);
  });

  it('should remove products', () => {
    const { sut } = createSutWithProducts();
    expect(sut.items.length).toBe(2);
    sut.remItem(1);
    expect(sut.items.length).toBe(1);
    sut.remItem(0);
    expect(sut.isEmpty()).toBe(true);
  });

  it('should call discount.calculate once when totalWithDiscount is called', () => {
    const { sut, discountMock } = createSutWithProducts();
    const discountMockSpy = jest.spyOn(discountMock, 'calculate');
    sut.totalWithDiscount();
    expect(discountMockSpy).toHaveBeenCalledTimes(1);
  });

  it('should call discount.calculate with total price when totalWithDiscount is called', () => {
    const { sut, discountMock } = createSutWithProducts();
    const discountMockSpy = jest.spyOn(discountMock, 'calculate');
    sut.totalWithDiscount();
    expect(discountMockSpy).toHaveBeenCalledWith(sut.total());
  });

  it('should find name and price of the searched item', () => {
    const { sut } = createSutWithProducts();
    expect(sut.searchItem('Monitor')).toEqual({ name: 'Monitor', price: 1000 });
    expect(sut.searchItem('')).toEqual(undefined);
  });
});
