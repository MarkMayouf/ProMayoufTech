import bcrypt from "bcryptjs"

const users=[
    {
        name:"Admin User",
        email:"admin@example.com",
        password:bcrypt.hashSync("123456",10),
        IsAdmin:true
    },
    {
        name:"Mark Lol",
        email:"mark@example.com",
        password:bcrypt.hashSync("12345",10),
        IsAdmin:true
    },
    {
        name:"Mine lop",
        email:"maine@example.com",
        password:bcrypt.hashSync("123456",10),
        IsAdmin:true
    },
    {
        name:"cool  lop",
        email:"cool@example.com",
        password:bcrypt.hashSync("123456",10),
        IsAdmin:true
    },
]


export default users 