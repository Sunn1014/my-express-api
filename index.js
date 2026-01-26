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
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, ()=>{
        console.log(`server running on ${PORT}`)
    })
const mongoURI = process.env.MONGO_URI;

const connect= mongoose.connect(mongoURI, {
    useNewUrlParser : true,
    useUnifiedTopology: true,
})
.then(()=>{
    console.log('connected')
})
.catch(err=>{
    console.log(err)
});

app.get('/',(req,res)=>{
    res.send('running now')
})
//basic routing//\

app.get('/api/register',(req,res)=>{
    // User.find()
    // .then(res=>{
    //   var data =[]
    //         for(i=0 ; i < res.length ; i+=1){
    //              data.push([res[i].email, res[i].firstName, res[i].lastName, res[i].phoneNo])
    //         }
    //   console.log(data)
      

    // })
    // .catch(err=>{
    //     console.log(err)
    // });
     res.json({
        name:'hhhhh'
      })
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
