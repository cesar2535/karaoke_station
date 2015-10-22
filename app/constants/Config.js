let HOST = window.location.hostname;

if (process.env.NODE_ENV !== 'production') {
  HOST = `http://172.17.34.15`;
}

export const API_ROOT = `${HOST}:5603/ktvstation/v1`;
export const ROOT = process.env.NODE_ENV !== 'production' ? '' : `/apps/KTVStation`;
export const MODAL_STYLE = {
  content: {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    background            : '#fafafa',
    margin                : 'auto',
    padding               : '24px',
    verticalAlign         : 'middle'
  },
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(0, 0, 0, 0.4)'
  }
};
