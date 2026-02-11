const express = require('express')
const mongoose = require('mongoose')
const multer = require('multer')
const cors = require('cors')
const User = require('./modules/user')
const Image = require('./modules/image')
const app = express()

app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.set('view engine', 'ejs');
app.use("/script",express.static('public'));
app.use(express.json());

const storage = multer.memoryStorage()

 const upload = multer({storage : storage})

//basic app configuration and connecting to database//
  
const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI)
.then(()=>{
    console.log('connected to database')
      const PORT = process.env.PORT || 5000;
    app.listen(PORT, ()=>{
        console.log(`server running on ${PORT}`)
    })

})
.catch(err=>{
    console.log(err)
});

app.get('/',(req,res)=>{
    res.send('running now')
})
//basic routing//\

app.get('/api/users', (req,res)=>{
    User.find()
    .then(result=>{
        if(result){
     res.json(result)
        }else{
            res.send('not found')
        }
    })
    .catch(err=>{
        console.log(err)
    });
   
});

 app.get('/api/images', (req, res)=>{
       Image.find()
       .then(images=>{
         const imagesData= images.map(img =>({
          id: img._id,
          imgId: img.imgId,
          name: img.name,
          contentType: img.contentType,
          data: img.data.toString("base64") //convert buffer
         }));
        res.json(imagesData)
       })

       .catch(err=>{
        console.log(err)
        res.status(500).json({error : "server error"});
       });
 });

 app.post('/api/images', upload.single('file'), async (req,res)=>{
           const image = new Image({
        imgId: req.body.imgId,
        imageName : req.body.title,
        name : req.file.originalname,
        image :{
          data : req.file.buffer,
          contentType : req.file.mimetype
        }
      })

         image.save()
      .then(result=>{
        res.redirect('/')

      })
      .catch(err=>{
        
        console.log(err)
      });
 })
