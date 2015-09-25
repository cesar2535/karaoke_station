import expect from 'expect';
import slide from '../../reducers/slide';
import * as types from '../../constants/ActionTypes';


describe('siled reducer', () => {
  it('should handle initial state', () => {
    expect(
      slide(undefined, {})
    ).toEqual(0);
  });

  it('should handle SLIDE_CHANGE', () => {
    expect(
      slide(1,
      {
        type: types.SLIDE_CHANGE,
        page: 2
      })
    ).toEqual(2);
  });
});
