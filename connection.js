const mongoose  = require('mongoose');
mongoose.connect("mongodb+srv://ayishathilsharmina:ayishathilsharmina@cluster0.yg3oerq.mongodb.net/ict20?appName=Cluster0")  
.then(() => console.log('connected!'))
.catch((err) => console.log( err));

