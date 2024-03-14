const express = require('express')

const app = express()

const port = 3000;

app.listen(port,()=>{
    console.log(`server dang chay o cong ${port}`)
})

const uri = 'mongodb+srv://username:truong123456@cluster0.drtagx5.mongodb.net/md19309'

const spModel = require('./sanphamModel')
 
const mongoose = require('mongoose')

app.get('/',async (req,res)=>{
    await mongoose.connect(uri)
    let sanphams = await spModel.find()
    console.log(sanphams)

    res.send(sanphams)
})
app.get('/add_sp', async (req, res) => {
    await mongoose.connect(uri);

    let sanpham = {
        ten: 'Sanpham 4',
        gia: 500,
        soluong: 10,
        tonkho: false
    }

    let kq = await spModel.create(sanpham);

    console.log(kq);

    let sanphams = await spModel.find();

    res.send(sanphams);
})