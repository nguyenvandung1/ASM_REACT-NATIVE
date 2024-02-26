
const img1 = require('../assets/img_home/item1.png'), img2 = require('../assets/img_home/item2.png'), img3 = require('../assets/img_home/item3.png'), img4 = require('../assets/img_home/item4.png');
const lamp = [require('../assets/img_home/lamp/1.png'), require('../assets/img_home/lamp/2.png'), require('../assets/img_home/lamp/3.png'), require('../assets/img_home/lamp/4.png')]
const imgLamb = [
    img1,
    ...lamp
]
const Table = [
    require('../assets/img_home/table/5.png'),
    require('../assets/img_home/table/6.png'),
    require('../assets/img_home/table/7.png'),
    require('../assets/img_home/table/8.png'),
    require('../assets/img_home/table/9.png'),
]

const chair = [
    require('../assets/img_home/chair/10.png'),
    require('../assets/img_home/chair/11.png'),
    require('../assets/img_home/chair/12.png'),
    require('../assets/img_home/chair/13.png'),
    require('../assets/img_home/chair/14.png'),
]

const lImg2 = [
    img2,
    ...Table
]
const lImg3 = [
    img3,
    ...chair
]
const lImg4 = [
    img4,
    ...Table
]


const dataItemHome = [
    {   
        uid: '48O3JZY1ztcFuucKVCfMIQJPu1u1',
        id: 1,
        title: 'Black Simple Lamp',
        price: 12000,
        img: imgLamb,
        quantity: 1,
        type: 'lamb',
        detail: 'Minimal Stand is made of by natural wood. The design that is very simple and minimal. This is truly one of the best furnitures in any family for now. With 3 different colors, you can easily select the best match for your home. '
    },
    {
        uid: '48O3JZY1ztcFuucKVCfMIQJPu1u1',
        id: 2,
        title: 'Minimal Stand',
        price: 25000,
        img: lImg2,
        quantity: 1,
        detail: 'Minimal Stand is made of by natural wood. The design that is very simple and minimal. This is truly one of the best furnitures in any family for now. With 3 different colors, you can easily select the best match for your home. ',
    },
    {
        uid: '48O3JZY1ztcFuucKVCfMIQJPu1u1',
        id: 3,
        title: 'Coffee Chair',
        price: 20000,
        img: lImg3,
        quantity: 1,
        detail: 'Minimal Stand is made of by natural wood. The design that is very simple and minimal. This is truly one of the best furnitures in any family for now. With 3 different colors, you can easily select the best match for your home. ',
        type: 'lamb'
    },
    {
        uid: '48O3JZY1ztcFuucKVCfMIQJPu1u1',
        id: 4,
        title: 'Simple Desk',
        price: 50000,
        img: lImg4,
        quantity: 1,
        detail: 'Minimal Stand is made of by natural wood. The design that is very simple and minimal. This is truly one of the best furnitures in any family for now. With 3 different colors, you can easily select the best match for your home. ',
        type: 'lamb'
    },
    {
        uid: '48O3JZY1ztcFuucKVCfMIQJPu1u1',
        id: 5,
        title: 'Black Simple Lamp',
        price: 12000,
        img: imgLamb,
        quantity: 1,
        detail: 'Minimal Stand is made of by natural wood. The design that is very simple and minimal. This is truly one of the best furnitures in any family for now. With 3 different colors, you can easily select the best match for your home. ',
        type: 'lamb'
    },
    {
        uid: '48O3JZY1ztcFuucKVCfMIQJPu1u1',
        id: 6,
        title: 'Minimal Stand',
        price: 25000,
        img: lImg2,
        quantity: 1,
        detail: 'Minimal Stand is made of by natural wood. The design that is very simple and minimal. This is truly one of the best furnitures in any family for now. With 3 different colors, you can easily select the best match for your home. ',
        type: 'lamb'
    },
    {
        uid: '48O3JZY1ztcFuucKVCfMIQJPu1u1',
        id: 7,
        title: 'Coffee Chair',
        price: 20000,
        img: lImg3,
        quantity: 1,
        detail: 'Minimal Stand is made of by natural wood. The design that is very simple and minimal. This is truly one of the best furnitures in any family for now. With 3 different colors, you can easily select the best match for your home. ',
        type: 'lamb'
    },
    {
        uid: '48O3JZY1ztcFuucKVCfMIQJPu1u1',
        id: 8,
        title: 'Simple Desk',
        price: 50000,
        img: lImg4,
        quantity: 1,
        detail: 'Minimal Stand is made of by natural wood. The design that is very simple and minimal. This is truly one of the best furnitures in any family for now. With 3 different colors, you can easily select the best match for your home. ',
        type: 'lamb'
    },
]

export { dataItemHome }