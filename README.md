Karaoke station w/ QTS
=====

### Dependencies
- Redux
- React
- React-redux
- React-router

[HackPad](https://hackpad.com/Karaoke-Station-Web-Client-2k0DVADwvmc)

### NAS上的部署

- 將sourcecode.tar.gz解壓縮至 /share/CACHEDEV1_DATA/.qpkg/KTVStation/web/ 底下
- 執行 deploy-production.sh 後
- 刪除 app/, script/ 目錄及其內容, 刪除 README.md, package.json, server.js, webpack.config.js以及 deploy-production.sh
- 再執行打包 qpkg 後續

### Development

```
npm run start:dev
```

### Production

```
npm run start:pro
```

### Deploy Development

```
npm run deploy:dev
```

### Deploy Production

```
npm run deploy:pro
```
