const axios = require('axios');

exports.HomeRoute=(req,res)=>{
    // make a get request to /api/users
    // axios.get('http://localhost:3000/api/users')
    // .then(function(response){
        // console.log(response.data);
        res.render("index");
    // })
    // .catch(err=>{
        // res.send(err);
    // })
}

exports.add_person=(req,res)=>{
    res.render("add_person");
}
