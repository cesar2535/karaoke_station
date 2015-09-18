export const FOOTER_BUTTONS = [{
  icon: 'ic_controlbar_stop',
  text: '切歌'
}, {
  icon: 'ic_controlbar_repeat',
  text: '重播'
}, {
  icon: 'ic_controlbar_guide',
  text: '導唱'
}/*, {
  icon: 'ic_controlbar_effect',
  text: '音效'
}, {
  icon: 'ic_controlbar_femaletune',
  text: '回音'
}*/];

export const FAKE_PLAYLIST = [{
  title: 'Gravity',
  artist: 'Against The Current',
  id: 1
}, {
  title: 'Roar',
  artist: 'Katy Perry',
  id: 2
}, {
  title: 'Paralyzed',
  artist: 'Against The Current',
  id: 3
}, {
  title: 'Nie vergessen',
  artist: 'Glasperlenspiel',
  id: 4
}, {
  title: 'Ich bin ich',
  artist: 'Glasperlenspiel',
  id: 5
}, {
  title: 'Make It Up',
  artist: 'Sam Tsui',
  id: 6
}, {
  title: 'Roar',
  artist: 'Katy Perry',
  id: 7
}, {
  title: 'Paralyzed',
  artist: 'Against The Current',
  id: 8
}, {
  title: 'Nie vergessen',
  artist: 'Glasperlenspiel',
  id: 9
}, {
  title: 'Ich bin ich',
  artist: 'Glasperlenspiel',
  id: 10
}, {
  title: 'Make It Up',
  artist: 'Sam Tsui',
  id: 11
}, {
  title: 'Roar',
  artist: 'Katy Perry',
  id: 12
}, {
  title: 'Roar',
  artist: 'Katy Perry',
  id: 13
}, {
  title: 'Paralyzed',
  artist: 'Against The Current',
  id: 14
}, {
  title: 'Nie vergessen',
  artist: 'Glasperlenspiel',
  id: 15
}, {
  title: 'Ich bin ich',
  artist: 'Glasperlenspiel',
  id: 16
}, {
  title: 'Make It Up',
  artist: 'Sam Tsui',
  id: 17
}, {
  title: 'Roar',
  artist: 'Katy Perry',
  id: 18
}, {
  title: 'Paralyzed',
  artist: 'Against The Current',
  id: 19
}, {
  title: 'Nie vergessen',
  artist: 'Glasperlenspiel',
  id: 20
}, {
  title: 'Ich bin ich',
  artist: 'Glasperlenspiel',
  id: 21
}];

export const FAKE_FAVORITES_LISTS = [{
  background: '../assets/images/img_favorite_cover01.png',
  title: 'Daddy\'s',
  songCount: 10,
}, {
  background: '../assets/images/img_favorite_cover02.png',
  title: 'Pop',
  songCount: 8,
}, {
  background: '../assets/images/img_favorite_cover03.png',
  title: 'Country',
  songCount: 23,
}, {
  background: '../assets/images/img_favorite_cover04.png',
  title: 'Birthday',
  songCount: 20,
}, {
  background: '../assets/images/img_favorite_cover05.png',
  title: 'Party',
  songCount: 5,
}, {
  background: '../assets/images/img_favorite_cover06.png',
  title: 'Relax',
  songCount: 14,
}, {
  background: '../assets/images/img_favorite_cover07.png',
  title: 'Rock',
  songCount: 18,
}, {
  background: '../assets/images/img_favorite_cover08.png',
  title: 'Crazy',
  songCount: 1,
}, {
  background: 'none',
  title: 'More'
}];

export const FAKE_MALE_ARTISTLIST = [{
  name: '劉德華'
}, {
  name: '阿信'
}, {
  name: '伍百'
}, {
  name: '羅百吉'
}, {
  name: '王力宏'
}, {
  name: '林俊傑'
}, {
  name: '林志炫'
}, {
  name: '楊宗緯'
}, {
  name: '林宥嘉'
}];

export const FAKE_FEMALE_ARTISTLIST = [{
  name: '梁靜茹'
}, {
  name: '蔡依林'
}, {
  name: '徐佳瑩'
}, {
  name: '張惠妹'
}, {
  name: '阿密特'
}, {
  name: 'A-Lin'
}, {
  name: '彭佳慧'
}, {
  name: '莫文蔚'
}, {
  name: '蕭亞軒'
}];

export const FAKE_GROUP_ARTISTLIST = [{
  name: '五月天'
}, {
  name: '自由發揮'
}, {
  name: '動力火車'
}, {
  name: 'S.H.E.'
}, {
  name: 'F.I.R'
}, {
  name: '蘇打綠'
}, {
  name: '滅火器'
}, {
  name: '信樂團'
}, {
  name: '董事長樂團'
}];

export function mapArrayToModular(array, mod, myIndex) {
  const return_array = [];
  let i = myIndex;
  for ( i; i < array.length; i += mod ){
    return_array.push(array[i]);
  }
  return return_array;
}

export function mapTitleNameByType(type, name) {
  switch (type) {
    case 'male':
      return '男歌手';
    case 'female':
      return '女歌手';
    case 'group':
      return '團體';
    case undefined:
      return mapTitleNameFromLanguage(name);
    default:
      return '';
  }
}

export function mapTitleNameFromLanguage(name) {
  switch (name.toLowerCase()) {
    case 'tc':
      return '中文';
    case 'e':
      return '英文';
    case 'c':
      return '粵語';
    case 't':
      return '台語';
    case 'j':
      return '日語';
    case 'k':
      return '韓語';
    case 'eo':
      return '西班牙語';
    case 'other':
      return '其他語言';
    default:
      return '你哪位';
  }
}

