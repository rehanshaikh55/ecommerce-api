const mongoose= require("mongoose")

const mondbUrl ="mongodb+srv://shaikhrehan1016:aqSNjFfoS6MJDw5l@cluster0.ggnmmhh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const connectdb =()=>{
    return mongoose.connect(mondbUrl);
}

module.exports={connectdb};