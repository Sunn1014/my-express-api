const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const User = require('./modules/user')
const app = express()


app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.set('view engine', 'ejs');
app.use("/script",express.static('public'));
app.use(express.json());

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

app.get('/api/register', (req,res)=>{
    User.find()
    .then(result=>{
        if(result){
     res.json({
        "name": "hhhhh"
      })
        }else{
            res.send('not found')
        }
    })
    .catch(err=>{
        console.log(err)
    });
   
});

// app.post('/api/auth/register',(req,res)=>{
// const user = new User({
//     email : 'sunn@gmai.com',
//     password : '111222',
//     firstName : 'sunn',
//     lastName : 'shal',
//     phoneNo : '08058054411'
// })

// user.save()
// .then(res=>{
//     console.log(res)
// })
// .catch(err=>{
//     console.log(err)
// });

// });

// app.get('/login',(req,res)=>{
//     res.render('../views/index.ejs')
// })
