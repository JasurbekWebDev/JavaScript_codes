const mashina = {
    marka: "Toyota",
    model: "Camry",
    yil: 2023,
    rang: "Qora",
    narx: 25000,
    motor: {
        tip: "V6",
        hajm: 3.5,
        quvvat: 301
    },
    xususiyatlar: ["ABS", "Airbag", "Konditsioner"],
    ishlatilgan: false,
    km: 15000,
    egasi: null,
    
    boshlash() {
        return `${this.marka} ${this.model} ishga tushdi!`;
    },
    
    tormozlash() {
        return "Mashina to'xtadi";
    }
};

// Optional Chaining (?.) - Xavfsiz Murojaat 
console.log(mashina.motor?.hajm);
console.log(mashina.motor.hajm);
// Nullish Coalescing (??) - Null yoki Undefined bo'lsa, boshqa qiymat qaytaradi
console.log(mashina.egasi ?? "Egasi ma'lum emas");