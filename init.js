const mongoose=require("mongoose");
const Chat=require("./models/chat.js");

let allChats=[
    {
        from:"neha",
        to:"priya",
        msg:"send me ur code",
        created_at: new Date(),
    },
    {
        from:"cat",
        to:"dog",
        msg:"u can't catch me",
        created_at: new Date(),
    },
    {
        from:"teachr",
        to:"student",
        msg:"be prepared for test tomorrow",
        created_at: new Date(),
    },
    {
        from:"girl",
        to:"boy",
        msg:"i am busy right now.",
        created_at: new Date(),
    },
];

Chat.insertMany(allChats);