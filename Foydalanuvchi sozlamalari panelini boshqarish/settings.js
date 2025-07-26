// const: O‘zgaruvchi e’lon qilish uchun ishlatiladi, qiymati o‘zgarmaydi
// settingsBtn: "Sozlamalar" tugmasini saqlash uchun o‘zgaruvchi
// document: Brauzerdagi HTML hujjatiga kirish obyekti
// getElementById: HTML elementini id orqali topish metodi
// 'settingsBtn': id="settingsBtn" bo‘lgan elementni izlaydi
// =: Qiymatni o‘zgaruvchiga biriktirish operatori
const settingsBtn = document.getElementById('settingsBtn');

// settingsPanel: Sozlamalar panelini saqlash uchun o‘zgaruvchi
// 'settingsPanel': id="settingsPanel" bo‘lgan elementni izlaydi
const settingsPanel = document.getElementById('settingsPanel');

// userNameInput: Foydalanuvchi ismi inputini saqlash uchun o‘zgaruvchi
// 'userName': id="userName" bo‘lgan elementni izlaydi
const userNameInput = document.getElementById('userName');

// saveBtn: "Saqlash" tugmasini saqlash uchun o‘zgaruvchi
// 'saveBtn': id="saveBtn" bo‘lgan elementni izlaydi
const seveBtn = document.getElementById('seveBtn');

// successMessage: Muvaffaqiyat xabari elementini saqlash uchun o‘zgaruvchi
// 'successMessage': id="successMessage" bo‘lgan elementni izlaydi
const successMessage = document.getElementById('successMessage');

// themeRadios: Tema tanlash radio tugmalarini saqlash uchun o‘zgaruvchi
// querySelectorAll: CSS selektor orqali barcha mos elementlarni topadi
// input[name="theme"]: name="theme" atributiga ega input elementlarini izlaydi
// []: Atributni belgilash uchun ishlatiladi
const themeRadios = document.querySelectorAll('input[name="theme"]');

// if: Shartli operator, shart bajarilsa ichidagi kod ishlaydi
// !: Inkor operatori, qiymatning yo‘qligini tekshiradi
// ||: Yoki operatori, birorta shart to‘g‘ri bo‘lsa davom etadi
// themeRadios.length: themeRadios ro‘yxatidagi elementlar sonini qaytaradi
// {...}: Kod bloki chegarasini belgilaydi
if (!settingsBtn || !settingsPanel || !userNameInput || !seveBtn || !successMessage || !themeRadios.length) {
  // console: Brauzer konsoliga ma’lumot chiqarish obyekti
  // error: Konsolda xato xabarini chiqarish metodi
  // "": Matnli string, xato xabarini belgilaydi
  console.error('Xatolik bor html da')
} else {
  // addEventListener: Elementga hodisa ishlovchisini qo‘shadi
  // 'click': Bosish hodisasi
  // =>: Arrow funksiya sintaksisi
  // (): Parametrsiz funksiyani belgilaydi
  settingsBtn.addEventListener('click', () => {

  // classList: Elementning CSS sinflari bilan ishlash obyekti
  // toggle: Sinfni qo‘shadi yoki olib tashlaydi
  // 'active': Panelni ko‘rsatish/yashirish uchun sinf
  settingsPanel.classList.toggle('active');

  // textContent: Elementning matnli mazmunini o‘zgartiradi
  // ?: Shartli (ternary) operator, shartga qarab qiymat qaytaradi
  // classList.contains: Sinf mavjudligini tekshiradi
  // 'Yopish'/'Sozlamalar': Tugma matni sifatida ishlatiladi
  // settingsBtn.textContent = settingsPanel.classList.contains('active') ? 'Yopish' : 'Sozlamalar';
  if (settingsPanel.classList.contains('active')) {
    settingsBtn.textContent = 'Yopish'
  } else {
    settingsBtn.textContent = 'Sozlamalar'

  }
  })

  // forEach: Massiv elementlari bo‘yicha tsikl yuritadi
  // radio: Har bir radio tugmani ifodalaydi
  // =>: Tsikl ichidagi funksiyani belgilaydi
  themeRadios.forEach(radio => {
    // 'change': Radio tugma tanlanganda ishlaydigan hodisa
    radio.addEventListener('change', () => {
      // document.body: HTMLning <body> elementi
      // remove: Berilgan sinflarni olib tashlaydi
      // 'dark-theme', 'light-theme': Tema sinflari
      // document.body.classList.remove('dark-theme', 'light-theme');

      // add: Yangi sinf qo‘shadi
      // ${}: String ichida o‘zgaruvchi qiymatni joylashtirish
      // radio.value: Tanlangan radio tugmaning qiymati (light yoki dark)
      // -theme: Sinf nomiga qo‘shimcha qo‘shadi
      // document.body.classList.add(`${radio.value}-theme`)
      if (radio.value == 'dark') {
        document.body.style.background = 'black'
      } else {
        document.body.style.background = '#fff'
      }
    })
  })
}