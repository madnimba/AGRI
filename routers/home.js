const express=require('express');
// const DB_user=require('../Database/login') ;
const router=express.Router();
const path = require('path');
// const bcrypt=require('bcrypt');
// const jwt=require('jsonwebtoken');
// const cookieParser=require('cookie-parser');

global.cart = [];
global.products = [];
global.products.push(
    {id: '0',
      name: "Organic Tomatoes",
    category: "Fruits & Vegetables",
    price: "100",
    description: "Fresh, locally grown organic tomatoes. Packed with flavor and essential nutrients. Perfect for salads, sandwiches, or sauces.",
    weight: "1 lb",
    quantity: 6,
    incart: '0',
    origin: "Green Acres Farm",
    certification: "USDA Organic",
    shipping: "Ships within 2 business days",
    SKU: "TOM001"}
    ,
    {
      id: '1',
      name: "Organic Apples",
      category: "Fruits & Vegetables",
      price: "80",
      description: "Crisp and juicy organic apples from our orchard. Ideal for snacking or making delicious apple pies.",
      weight: "2 lbs",
      quantity: 10,
      incart: '0',
      origin: "Harvest Grove Orchard",
      certification: "USDA Organic",
      shipping: "Ships within 3 business days",
      SKU: "APL002"
    },
    {
      id: '2',
      name: "Free-Range Eggs",
      category: "Dairy & Eggs",
      price: "5",
      description: "Farm-fresh free-range eggs from happy, healthy hens. Great for baking and breakfast.",
      weight: "1 dozen",
      quantity: 24,
      incart: '0',
      origin: "Sunrise Farms",
      certification: "Cage-Free",
      shipping: "Ships within 1 business day",
      SKU: "EGG003"
    },
    {
      id: '3',
      name: "Organic Spinach",
      category: "Fruits & Vegetables",
      price: "4",
      description: "Nutrient-rich organic spinach leaves, perfect for salads, smoothies, and cooking.",
      weight: "8 oz",
      quantity: 15,
      incart: '0',
      origin: "Green Acres Farm",
      certification: "USDA Organic",
      shipping: "Ships within 2 business days",
      SKU: "SPN004"
    },
    {
      id: '4',
      name: "Grass-Fed Beef",
      category: "Meat & Poultry",
      price: "15",
      description: "Tender and lean grass-fed beef cuts for grilling and roasting. Ethically raised and sustainably sourced.",
      weight: "1 lb",
      quantity: 5,
      incart: '0',
      origin: "Pasture Prime Ranch",
      certification: "Grass-Fed",
      shipping: "Ships within 4 business days",
      SKU: "BEEF005"
    }
  )
// const maxAge = 3*24*60*60;
// const createToken = (id) =>{
//     return jwt.sign({ id }, 'torkibhai',
//     {
//         expiresIn: maxAge
//     });
// }

router.get('/',async(req,res)=>{
    console.log()
    res.sendFile(path.join(__dirname,'../views/index.html'));
})




// router.post('/',async(req,res)=>{
//     let results=[] ;
//     let errors = [];

//     // const salt = await bcrypt.genSalt(10);
//     // const pw = await bcrypt.hash(req.body.password, salt);

//     results=await DB_user.readEmail(req.body.email,req.body.option);
//     //console.log(results[0].PASSWORD)
//     let token = '';
//     if(results.length>0){
//     if(req.body.option==='user')
//         { token = createToken(results[0].USER_ID);
//         }
//     else
//     { token=createToken(results[0].SHOP_ID);}
//     res.cookie('jwt',token,{maxAge: maxAge*1000});
//     }
    
   
    
//     if(results.length==0){
//         errors.push('No such user found');
//         res.render('login.ejs',{error:"",message:"User not found! Please enter correct credentials!"});
//     }

//     else if(!(await bcrypt.compare(req.body.password, results[0].PASSWORD)))
//     {
//         errors.push('Wrong Password');
//         res.render('login.ejs',{error:"",message:"Wrong Password! Please enter correct credentials!"}); 
//     }
    
//     else if(req.body.option==='user')

//         {
           
//            res.redirect('/app/user');
//         }
//         else if(req.body.option=='shop'){
           
//             res.redirect('/app/shop');
//         }
    
    
// })


module.exports = router;

