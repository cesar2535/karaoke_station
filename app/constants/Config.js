let HOST = window.location.hostname;

if (process.env.NODE_ENV !== 'production') {
  HOST = `http://172.17.34.15`;
}

export const API_ROOT = `${HOST}:5603/ktvstation/v1`;
export const ROOT = process.env.NODE_ENV !== 'production' ? '' : `/apps/KTVStation`;
