import { getRandomColor } from './color'
// import { faker } from '@faker-js/faker'

export interface RandomName {
  name: string
  selected: boolean
  color: string
}

const selectedName: string[] = ['G01','G07','G04','G05','G06','G08','G02','G03']
const selectedOther: string[] = ['เพิ่นบ่แม่นผู้สาวเฮา','อ้ายบ่แมนเขา','ยังฮักไผอีกได้บ่','อ้ายมาส่งทาง','ริมฝั่งหนองหาน','อ้ายฮักเจ้าเด้อ','เป็นเกียรติหลาย','รำคาญกะบอกกันเด้อ','หลมปากเว้า','สิกอดแบบบ่ถาม','สิมาฮักหยังตอนนี้','กอดคนนอกใจ','ทนบ่ไหวทางใครทางมัน','นางฟ้าหรือยาพิษ','ใจบ่มักดี','ดาวมีไว้เบิ่ง','ชิมิ','โทรหาครั้งสุดท้าย','สะดวกคุยหรือเปล่า','คำว่าจบพูดเบาๆ ก็เจ็บ','เชื่อใจเธอแต่ไม่ไว้ใจเขา','ไม่ใช่แฟนทำแทนไม่ได้','แฟนเก็บ','คำพิพากษา','ใจอ้ายเจ็บ','สมพื้น','เรื่องธรรมดา','ไม่ให้ไป','ไปเถอะเธอ','ถ้าเธอรักฉันจริง','เปิดตัวเขา']

// export function createRandomName(): RandomName {
//   return {
//     name: faker.person.firstName(),
//     selected: false,
//     color: getRandomColor(),
//   }
// }

export const nametest: RandomName[] = selectedOther.map(name => ({
  name,
  selected: false,
  color: getRandomColor(),
}))

export const names: RandomName[] = selectedName.map(name => ({
  name,
  selected: true,
  color: getRandomColor(),
}))
names.push(
  ...nametest
)

export const selectedIndexes = names.filter(name => name.selected).map((_name, index) => index)
