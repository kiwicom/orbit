// @flow

import { pureTranslate } from '../index';

describe('Translate', () => {
  const dictionary = {
    button_close: 'Close',
  };

  it('should return correct translations', () => {
    expect(pureTranslate(dictionary, 'button_close')).toBe('Close');
  });

  it('Will fallback to default lang', () => {
    expect(pureTranslate({}, 'button_close')).toBe('Close');
  });
});
