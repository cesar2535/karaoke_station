import expect from 'expect';
import updateSidetabToEntities from '../../reducers/sidetab';
import * as types from '../../constants/ActionTypes';

describe('updateSidetabToEntities reducer', () => {
  it('should handle initial state', () => {
    expect(
      updateSidetabToEntities(undefined, {})
    ).toEqual({ artists_list: [], languages: [] });
  });

  it('should handle ARTISTS_LIST_SUCCESS', () => {
    expect(
      updateSidetabToEntities({ artists_list: [], languages: [] },
      {
        type: types.ARTISTS_LIST_SUCCESS,
        response: {
          result: ['這是假資料', '這也是假資料']
        }
      })
    ).toEqual({
     artists_list: ['這是假資料', '這也是假資料'],
     languages: []
    });

    expect(
      updateSidetabToEntities(
      {
        artists_list: [['這是原本的假資料', '這也是原本的假資料']],
        languages: ['這是語言假資料', '這也是語言假資料']
      },
      {
        type: types.ARTISTS_LIST_SUCCESS,
        response: {
          result: ['這是假資料', '這也是假資料']
        }
      })
    ).toEqual({
     artists_list: ['這是假資料', '這也是假資料'],
     languages: ['這是語言假資料', '這也是語言假資料']
    });
  });

  it('should handle LANGUAGE_LIST_SUCCESS', () => {
    expect(
      updateSidetabToEntities({ artists_list: [], languages: [] },
      {
        type: types.LANGUAGE_LIST_SUCCESS,
        response: {
          result: ['這是假資料', '這也是假資料']
        }
      })
    ).toEqual({
     artists_list: [],
     languages: ['這是假資料', '這也是假資料']
    });

    expect(
      updateSidetabToEntities(
      {
        artists_list: ['這是原本的假資料', '這也是原本的假資料'],
        languages: ['這是語言假資料', '這也是語言假資料']
      },
      {
        type: types.LANGUAGE_LIST_SUCCESS,
        response: {
          result: ['這是假資料', '這也是假資料']
        }
      })
    ).toEqual({
     artists_list: ['這是原本的假資料', '這也是原本的假資料'],
     languages: ['這是假資料', '這也是假資料']
    });
  });
});
