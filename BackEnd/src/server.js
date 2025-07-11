import express from "express";
import dotenv from "dotenv" ; 
import cors from "cors";
import path from "path";

import rateLimiter from "./middleware/rateLimiter.js";
import routeNotes from "./routes/routeNotes.js";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;
const __dirname = path.resolve();

if (process.env.NODE_ENV !== "production"){
app.use(cors({
    origin: "http://localhost:5173",
}));
}
//   we add the middel ware before the routes so we took what we need.
// this middle ware will parse the json from the req.body  
//   .
app.use(express.json());
app.use(rateLimiter);
 //  we can also the specific front end origins that access it .
//  this is also we middle ware we are just adding it write now lets see.
//app.use((req,res,next) => {

   // console.log(`we got request from ${req.method} ,  and the URL is ${req.url}.`);
   // next();  //  this next function is the function that is runned on end points 
    // we are access mean url we enter . and we doing something just before the responding to client.

//});

app.use("/api/notes" , routeNotes);

if (process.env.NODE_ENV === "production") {

    app.use(express.static(path.join(__dirname, "../FrontEnd/dist")));
    app.get("*", (req,res) =>{
        res.sendFile(path.join(__dirname , "FrontEnd" , "dist" , "index.html"))
    })

}

connectDB().then(() => {

    app.listen(PORT, () => {
    console.log("Server Started at 5001.");
});

});


