import express from "express";
import bodyParser from "body-parser";
import mongoose, { Schema } from "mongoose";
import ejs from "ejs";

const app = express();
// const port = 1500;
const port = process.env.PORT || 1500;
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");

let name;

//mogo db connection and schema defining
// mongoose.connect("mongodb://localhost:27017/portfolio").then(()=>
// {
//     console.log("connected to mongodb");
// }).catch((e)=>
// {
//     console.log(e);
// })
mongoose.connect(process.env.MONGO_URL).then(()=>
{
    console.log("connected to mongodb");
}).catch((e)=>
{
    console.log(e);
})

const user_schema = new Schema({
    name_user : String,
    email : String,
    rating : String,
    comment : {
        type : String
    }
});

const new_entry = mongoose.model("portfolio",user_schema);
 
// end shere



app.get("/",(request,response)=>
{
    response.sendFile("/Users/chirag/Desktop/MY PORTFOLIO WEBSITE/PROJECT 2/public/index.html");
});
app.post("/",(request,response)=>
{
    name = request.body.name;
    response.render("first",{user:name});
});



app.get("/projects",(request,response)=>
{
    response.render("project");
});
app.get("/about",(request,response)=>
{
    response.render("about");
});



app.get("/feedback",(request,response)=>
{
    response.render("feedback",{user:name});
})
app.post("/feedback",(request,response)=>
{
    let newentry = new new_entry({
        name_user : name,
        email : request.body.mailid,
        rating : request.body.rating,
        comment : request.body.review
    });
    console.log(newentry);
    newentry.save();
    response.redirect("/");
});



app.listen(port,()=>
{
    console.log(`server : ${port}`);
})