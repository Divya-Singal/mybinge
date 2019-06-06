const app= require('express')();
var mongoose = require('mongoose');
var index= require('./src/routes/index');
var novels= require('./src/routes/novels');

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', req.headers.origin);
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
   res.header('Access-Control-Allow-Credentials', true);
   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  next();
});

app.use('/',novels);

mongoose.connect('mongodb://localhost:27017/mybinge',{ useNewUrlParser: true })
  .then(() => console.log('connection successful'))
  .catch((err) => {
      //console.error(err)
      console.log('connection unsuccessful');
  } 
  );


app.listen(4000,()=>{
	console.log('App listening on port 4000');
});
