// @flow

import insertGap from './insertGap';

describe('insertGap function', () => {
  it('should return proper grid-template with gap', () => {
    expect(
      insertGap(
        'minmax(10px, 100px) minmax(10px, 100px) minmax(10px, 100px) minmax(10px, 100px)',
        '10px',
      ),
    ).toBe(
      'minmax(10px, 100px) 10px minmax(10px, 100px) 10px minmax(10px, 100px) 10px minmax(10px, 100px)',
    );
    expect(insertGap('10px 20px 30px 40px 50px', '50px')).toBe(
      '10px 50px 20px 50px 30px 50px 40px 50px 50px',
    );
  });
});
