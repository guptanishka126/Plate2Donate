const express= require('express');
const mongoose= require('mongoose');
const user=mongoose.model('headschema');
const donor=mongoose.model('donorschema');
const Volunteer=mongoose.model('volunteerschema');
const router = express.Router();
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {jwtsensitive}=require('../key')

router.get('/test',(req,res)=>{
    res.json("hello");

})
router.post('/headsignup',(req,res)=>{
    const {email,password,category}=req.body;
    if(!email || !password || !category)
    {
        return res.status(422).json('incomplete fields');
    }
    // $or is used for two fields 
    user.findOne({$or: [{email:email}]})
    .then((existing_user)=>{
            if(existing_user)
            {
                return res.status(422).json('already exist');
            }
            bcryptjs.hash(password,10)
            .then((hashpassword)=>{
             const  newuser=new  user({
                 email,
                 password:hashpassword,
                 category
             })

             newuser.save()
             .then((issave)=>{
                res.json('data registered');
             })
             .catch((err)=>{
                 console.log(err);
                 res.status(500).json('server error');
             })
            })
    })

})










router.post('/donorsignup',(req,res)=>{
    const {email,password,category}=req.body;
    if(!email || !password || !category)
    {
        return res.status(422).json('incomplete fields');
    }
    // $or is used for two fields 
    donor.findOne({$or: [{email:email}]})
    .then((existing_user)=>{
            if(existing_user)
            {
                return res.status(422).json('already exist');
            }
            bcryptjs.hash(password,10)
            .then((hashpassword)=>{
             const  newuser=new  donor({
                 email,
                 password:hashpassword,
                 category
             })

             newuser.save()
             .then((issave)=>{
                res.json('data registered');
             })
             .catch((err)=>{
                 console.log(err);
                 res.status(500).json('server error');
             })
            })
    })

})







router.post('/volunteersignup',(req,res)=>{
    const {email,password,category}=req.body;
    if(!email || !password || !category)
    {
        return res.status(422).json('incomplete fields');
    }
    // $or is used for two fields 
    Volunteer.findOne({$or: [{email:email}]})
    .then((existing_user)=>{
            if(existing_user)
            {
                return res.status(422).json('already exist');
            }
            bcryptjs.hash(password,10)
            .then((hashpassword)=>{
             const  newuser=new  Volunteer({
                 email,
                 password:hashpassword,
                 category
             })

             newuser.save()
             .then((issave)=>{
                res.json('data registered');
             })
             .catch((err)=>{
                 console.log(err);
                 res.status(500).json('server error');
             })
            })
    })

})
















router.post('/headsignin',(req,res)=>{
    const {email,password} = req.body;
    if(!email ||!password)
    {
        return res.status(422).json('incomplete fields');
    }
    user.findOne({email:email})
    .then((existed_user)=>{
        if(!existed_user)
        {
            return res.status(422).json('user not found');
        }
        bcryptjs.compare(password,existed_user.password)
        .then((match)=>{
            if(match)
            {
                const token = jwt.sign({_id:existed_user.id},jwtsensitive)
                const{_id,email,password}=existed_user
                res.json({token,user:{_id,email,password}});
                console.log({token,user:{_id,email,password}});
            }
            else{
                return res.status(422).json('wrong password');
            }
        })
    })

})






router.post('/donorsignin',(req,res)=>{
    const {email,password} = req.body;
    if(!email ||!password)
    {
        return res.status(422).json('incomplete fields');
    }
    donor.findOne({email:email})
    .then((existed_user)=>{
        if(!existed_user)
        {
            return res.status(422).json('user not found');
        }
        bcryptjs.compare(password,existed_user.password)
        .then((match)=>{
            if(match)
            {
                const token = jwt.sign({_id:existed_user.id},jwtsensitive)
                const{_id,email,password}=existed_user
                res.json({token,user:{_id,email,password}});
                console.log({token,user:{_id,email,password}});
            }
            else{
                return res.status(422).json('wrong password');
            }
        })
    })

})













router.post('/volunteersignin',(req,res)=>{
    const {email,password} = req.body;
    if(!email ||!password)
    {
        return res.status(422).json('incomplete fields');
    }
    Volunteer.findOne({email:email})
    .then((existed_user)=>{
        if(!existed_user)
        {
            return res.status(422).json('user not found');
        }
        bcryptjs.compare(password,existed_user.password)
        .then((match)=>{
            if(match)
            {
                const token = jwt.sign({_id:existed_user.id},jwtsensitive)
                const{_id,email,password}=existed_user
                res.json({token,user:{_id,email,password}});
                console.log({token,user:{_id,email,password}});
            }
            else{
                return res.status(422).json('wrong password');
            }
        })
    })

})












// yee yaad rakhna hay 
module.exports = router;



