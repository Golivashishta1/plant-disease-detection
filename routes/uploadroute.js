    const express=require("express");
    const app=express();
    const router=express.Router();
    const multer=require("multer");
    const authroutes=require("../controllers/authcontrol");
    const path=require("path");
    const { authreq } = require("../controllers/authcontrol");

    const storage=multer.diskStorage({
        destination:(req,file,cb)=>{
            cb(null,"./images");
        },
        filename:(req,file,cb)=>{
            console.log(file);
            cb(null,Date.now()+path.extname(file.originalname))
        }
    })

    const upload=multer({storage:storage});

    router.get("/",authreq,(req,res)=>{
            res.render("upload")
        
    })

    router.post("/",authreq,upload.single("image"),(req,res)=>{
        console.log(req.file)
        res.send("uploaded")

    })

    module.exports=router;