import getClothingStoreDiscount from '../get-clothing-store-discount';

describe('getClothingStoreDiscount', () => {
  it('500,000원이면 20%를 할인한 400,000원을 반환한다.', () => {
    expect(getClothingStoreDiscount(500_000)).toEqual(400_000);
  });

  it('300,000원이면 10%를 할인한 270,000원을 반환한다.', () => {
    expect(getClothingStoreDiscount(300_000)).toEqual(270_000);
  });

  it('100,000원이면 5%를 할인한 95,000원을 반환한다.', () => {
    expect(getClothingStoreDiscount(100_000)).toEqual(95_000);
  });

  it('50,000원이면 할인을 하지 않고 50,000원을 반환한다.', () => {
    expect(getClothingStoreDiscount(50_000)).toEqual(50_000);
  });

  it('500,000원 이상이면 20%를 할인한 400,000원을 반환한다.', () => {
    expect(getClothingStoreDiscount(500_001)).toEqual(400_000);
  });
});
