import { Product } from './product';

const createSut = (name: string, price: number) => {
  return new Product(name, price);
};

describe('Product', () => {
  afterEach(() => jest.clearAllMocks());

  it('should have properties name and price', () => {
    const sut = createSut('calça jeans', 150.6);
    expect(sut).toHaveProperty('name', 'calça jeans');
    expect(sut.price).toBeCloseTo(150.6);
  });
});
