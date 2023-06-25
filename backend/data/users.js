import bcrypt from "bcryptjs";
const users = [
  {
    name: "Anirban Mishra",
    email: "anirban.msh629@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "admin@example.com",
    email: "123456",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "B",
    email: "a@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
];
export default users;
