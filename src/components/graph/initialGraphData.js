export default {
    nodes: [
      {
        id: 'Thing_紫藤',
        symbolType : "diamond",
        color : "lightgray",
        size: 2500,
      },
      {
        id: '名稱',
        symbolType : "circle",
        color : "#DB4437",
        size: 2500
      },
      {
        id: '紫藤',
        symbolType : "circle",
        color : "#DB4437",
        size: 250
      },
      {
        id: '黃纖藤',
        symbolType : "circle",
        color : "#DB4437",
        size: 250
      },
      {
        id: '小黃籐',
        symbolType : "circle",
        color : "#DB4437",
        size: 250
      },
      {
        id: '紫金籐',
        symbolType : "circle",
        color : "#DB4437",
        size: 250
      },
      {
        id: '藤花子',
        symbolType : "circle",
        color : "#DB4437",
        size: 250
      },
      {
        id: '小黃草',
        symbolType : "circle",
        color : "#DB4437",
        size: 250
      },
      {
        id: '豆藤',
        symbolType : "circle",
        color : "#DB4437",
        size: 250
      },
      {
        id: '朱藤',
        symbolType : "circle",
        color : "#DB4437",
        size: 250
      },
      {
        id: '紫藤豆',
        symbolType : "circle",
        color : "#DB4437",
        size: 250
      },
      {
        id: '黃環',
        symbolType : "circle",
        color : "#DB4437",
        size: 250
      },
      {
        id: '藤花菜',
        symbolType : "circle",
        color : "#DB4437",
        size: 250
      },
      {
        id: '外觀和功用',
        symbolType : "circle",
        color : "#7192BE", 
        size: 2500
      },
      {
        id: '止痛',
        symbolType : "circle",
        color : "#7192BE", 
        size: 250
      },
      {
        id: '殺蟲',
        symbolType : "circle",
        color : "#7192BE",
        size: 250
      },
      {
        id: '甘',
        symbolType : "circle",
        color : "#7192BE",
        size: 250
      },
      {
        id: '苦',
        symbolType : "circle",
        color : "#7192BE",
        size: 250
      },
      {
        id: '溫',
        symbolType : "circle",
        color : "#7192BE",
        size: 250
      },
      {
        id: '地區',
        symbolType : "circle",
        color : "#0F9D58",
        size: 2500
      },
      {
        id: '河北',
        symbolType : "circle",
        color : "#0F9D58",
        size: 250
      },
      {
        id: '甘肅',
        symbolType : "circle",
        color : "#0F9D58",
        size: 250
      },
      {
        id: '西藏',
        symbolType : "circle",
        color : "#0F9D58",
        size: 250
      },
      {
        id: '華東地區',
        symbolType : "circle",
        color : "#0F9D58",
        size: 250
      },
      {
        id: '西南地區',
        symbolType : "circle",
        color : "#0F9D58",
        size: 250
      },
      {
        id: '遼寧',
        symbolType : "circle",
        color : "#0F9D58",
        size: 250
      },
      {
        id: '四川',
        symbolType : "circle",
        color : "#0F9D58",
        size: 250
      },
      {
        id: '出處',
        symbolType : "circle",
        color : "#A1A588",
        size: 2500
      },
      {
        id: '本草綱目拾遺',
        symbolType : "circle",
        color : "#81acf0",
        size: 250
      },
      {
        id: '本草拾遺',
        symbolType : "circle",
        color : "#81acf0", 
        size: 250
      },
      {
        id: '植物部分',
        symbolType : "circle",
        color : "red",
        size: 2500
      },
      {
        id: '種子',
        symbolType : "circle",
        color : "red",
        size: 250
      },
      {
        id: '花',
        symbolType : "circle",
        color : "red",
        size: 250
      },
      {
        id: '莖葉',
        symbolType : "circle",
        color : "red",
        size: 250
      },
      {
        id: '莖皮',
        symbolType : "circle",
        color : "red",
        size: 250
      },
      {
        id: '莖',
        symbolType : "circle",
        color : "red",
        size: 250
      },
      {
        id: '外觀',
        symbolType : "circle",
        color : "red",
        size: 600,
        svg: 'http://img8.tnn.tw/news/news/S_201103281646364o87.JPG'
      },
      {
        id: 'for_test',
        symbolType : "circle",
        color : "red",
        size: 10
      }
    ],
    links: [
      {source: 'Thing_紫藤', target: '名稱'},
      {source: 'Thing_紫藤', target: '外觀和功用'},
      {source: 'Thing_紫藤', target: '地區'},
      {source: 'Thing_紫藤', target: '出處'},
      {source: 'Thing_紫藤', target: '植物部分'},
      {source: '名稱', target: '紫藤'},
      {source: '名稱', target: '黃纖藤'},
      {source: '名稱', target: '小黃籐'},
      {source: '名稱', target: '紫金籐'},
      {source: '名稱', target: '藤花子'},
      {source: '名稱', target: '小黃草'},
      {source: '名稱', target: '豆藤'},
      {source: '名稱', target: '朱藤'},
      {source: '名稱', target: '紫藤豆'},
      {source: '名稱', target: '黃環'},
      {source: '名稱', target: '藤花菜'},
      {source: '外觀和功用', target: '止痛'},
      {source: '外觀和功用', target: '殺蟲'},
      {source: '外觀和功用', target: '甘'},
      {source: '外觀和功用', target: '苦'},
      {source: '外觀和功用', target: '溫'},
      {source: '外觀和功用', target: '外觀'},
      {source: '地區', target: '河北'},
      {source: '地區', target: '甘肅'},
      {source: '地區', target: '西藏'},
      {source: '地區', target: '華東地區'},
      {source: '地區', target: '四川'},
      {source: '地區', target: '遼寧'},
      {source: '地區', target: '西南地區'},
      {source: '出處', target: '本草綱目拾遺'},
      {source: '出處', target: '本草拾遺'},
      {source: '植物部分', target: '種子'},
      {source: '植物部分', target: '花'},
      {source: '植物部分', target: '莖葉'},
      {source: '植物部分', target: '莖皮'},
      {source: '植物部分', target: '莖'},
    ],
    focusedNodeId: "Thing_紫藤"
};