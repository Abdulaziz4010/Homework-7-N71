// 1. Foydalanuvchilar (users) obyektini yarating. Unda kamida 5 ta foydalanuvchi bo'lsin. Har bir foydalanuvchini -ismi (name) -yoshi (age) -telefon nomeri (telephone) -elektron pochtasi (email) -yoqtirgan hobby'lari (favouriteHobbies) = > bu massiv bo'ladi kamida 3 ta hobbiesi bo'lsin 2. Yaratilgan foydalanuvchilarni consoleda ushbu ketma ketliklarda chiqarib bering. 1. 1 - Eshmat, 23 yoshda .... 2. 1 - Eshmat, 23 yoshda, kontaktlari 905432312, eshmatboy@gmail.com .... 3. 1 - Eshmat, yoqtirgan hobbiylari => Uxlash, Dasturlash, Yugurish .... 3. Yaratilgan foydalanuvchilardan 3 sini index orqali topib olib hobbiylarini o'zgartiradigan dastur tuzing. 4. Yaratilgan foydalanuvchilarni oxiridagi foydalanunchisini o'chirib tashlaydigan dastur tuzing. 5. Yaratilgan foydalanuvchilar ichida "Eshmat" ismli foydalanuvchi bor, uni qidirib topib o'rniga "Teshmat" ning ma'lumotlariga o'zgartiring. Bu yerda sikl va shart orqali izlab topilib uning ma'lumotlari o'zgartir

// let friends = [];

// function MyFriends(name, age, hobby) {
//   let friend = {};
//   friend.name = name;
//   friend.age = age;
//   friend.hobby = hobby;
//   friends.push(friend);
// }

// MyFriends("Po'lat", 25, "futbol");
// MyFriends("Akromiy", 24, "kitob o'qish");
// MyFriends("Abdurauf", 22, "clash");
// MyFriends("Abdurauf", 22, "Pubg");
// MyFriends("Islom", 26, "Futbol");

// console.log(friends);

//

//

// 1-qadam: Foydalanuvchilar obyektini yaratamiz
let users = [
  {
    name: "Eshmat",
    age: 23,
    telephone: "905432312",
    email: "eshmatboy@gmail.com",
    favouriteHobbies: ["Uxlash", "Dasturlash", "Yugurish"],
  },
  {
    name: "Toshmat",
    age: 30,
    telephone: "9981234567",
    email: "toshmat@example.com",
    favouriteHobbies: ["Baliq ovlash", "Shaxmat", "Fotografiya"],
  },
  {
    name: "Anvar",
    age: 25,
    telephone: "9987654321",
    email: "anvar@example.com",
    favouriteHobbies: ["Suzish", "Sayohat", "Kitob o'qish"],
  },
  {
    name: "Sarvar",
    age: 27,
    telephone: "9986543210",
    email: "sarvar@example.com",
    favouriteHobbies: ["O'yinlar", "Velosport", "Filmlar"],
  },
  {
    name: "Jasur",
    age: 22,
    telephone: "9989876543",
    email: "jasur@example.com",
    favouriteHobbies: ["Pishirish", "Rasm chizish", "Raqsga tushish"],
  },
];

// 2-qadam: Foydalanuvchilarni ketma-ketlikda chiqarish
// 1. Ism va yosh bilan chiqarish
users.forEach((user, index) => {
  console.log(`${index + 1} - ${user.name}, ${user.age} yoshda.`);
});

// 2. Ism, yosh, kontaktlar bilan chiqarish
users.forEach((user, index) => {
  console.log(
    `${index + 1} - ${user.name}, ${user.age} yoshda, kontaktlari ${
      user.telephone
    }, ${user.email}.`
  );
});

// 3. Ism, yosh va yoqtirgan hobbiylari bilan chiqarish
users.forEach((user, index) => {
  console.log(
    `${index + 1} - ${
      user.name
    }, yoqtirgan hobbiylari => ${user.favouriteHobbies.join(", ")}.`
  );
});

// 3-qadam: 3 ta foydalanuvchining hobbiylarini o'zgartirish
users[1].favouriteHobbies = ["Gitara chalish", "Ski", "O'qish"];
users[2].favouriteHobbies = ["Basketbol", "Rasm chizish", "Kinolar"];
users[3].favouriteHobbies = ["Skateboarding", "Fotografiya", "Kayaking"];

// O'zgartirilgan foydalanuvchilarni tekshirish uchun chiqaramiz
console.log("Hobbiylari o'zgartirilgan foydalanuvchilar:");
users.forEach((user, index) => {
  console.log(
    `${index + 1} - ${
      user.name
    }, yoqtirgan hobbiylari => ${user.favouriteHobbies.join(", ")}.`
  );
});

// 4-qadam: Oxirgi foydalanuvchini o'chirib tashlash
users.pop();
console.log("Oxirgi foydalanuvchi o'chirildi.");
console.log(users);

// 5-qadam: "Eshmat" ismli foydalanuvchini topib, "Teshmat" ga o'zgartirish
for (let i = 0; i < users.length; i++) {
  if (users[i].name === "Eshmat") {
    users[i].name = "Teshmat";
    users[i].age = 35;
    users[i].telephone = "9989989988";
    users[i].email = "teshmat@example.com";
    users[i].favouriteHobbies = ["Qo'shiq kuylash", "Yugurish", "Shaxmat"];
  }
}

// O'zgartirilgan foydalanuvchilarni tekshirish
console.log("O'zgartirilgan foydalanuvchi:");
console.log(users);
