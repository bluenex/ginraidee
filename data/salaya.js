const foodshopList = {
  "หน้ามอ": [
    'ข้าวมันไก่',
    'สเต็กบางกอก',
    'ข้าวหมูแดงหมูกรอบ',
    'ข้าวขาหมู',
    'ส้มตำ',
    'อาหารตามสั่ง',
    'ศรีจันทร์',
  ],

  "ข้างมอ": [
    'ก๋วยเตี๋ยวไก่',
    'กระเพราขาหมู',
    'ซอยสิ้นคิด',
  ],

  "Central": [
    'yoshinoya',
    'KFC',
    'Mcdonald',
  ],

  "Buffet": [
    'ชาบู',
    'ปิ้งย่าง',
    'เฝอ',
  ],

  "เลียบคลอง": [
    'อัญญา',
    'ศรีจันทร์ซีฟู้ด',
    'เล้งหลุดโลก',
    'สายลมสายน้ำ',
  ],
}

function getAreaList() {
  ar = Object.keys(foodshopList)
  ar.unshift('ที่ไหนก็ได้')
  return ar
}

function getShopsList(areaKey) {
  if (areaKey === 'ที่ไหนก็ได้') {
    // since this is default, we will concat all list together as ALL
    allAreaKeys = Object.keys(foodshopList);
    tmp = [];
  
    // mix all shops in list
    for (i=0; i< allAreaKeys.length; i++) {
      foodshopList[allAreaKeys[i]].forEach(function(element) {
        tmp.push(element);  
      }, this); 
    }
  
    return tmp;
  } else {
    return foodshopList[areaKey];
  }
}
