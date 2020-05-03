 const router = require('express').Router();

 const bcrypt = require('bcrypt');
 const saltRounds = 10;
//  bcrypt.hash('password' , saltRounds, (error, hashedPassword) => {
//      if (error) { console.log(error) }
//      console.log("Newly password:", hashedPassword )
//  })
//  bcrypt.compare("password", "$2b$10$dFlCAkpScY2nh3V0sYyJS.FQ.0fhmQBx73FpB53W58DKMP/Lxj1Gu", (error, isSame)=> {
//     if (error) { console.log(error) }
//     console.log("is it the same?", isSame)
//  })

//  const app = express()

// router.get("/test", (req, res) => {
//     return res.send( { message : "Everything went well"})
// })

const User = require("../models/User.js")

 
router.post("/users/login", async (req, res) => {
    const { username, password} = req.body;
    console.log(req.body)
    if ( username && password){
        const users = await User.query().select().where({"username":username}).limit(1);
        const user = users[0]
        if (!user) {
            return res.status(404).send( { message : "User not found"});
        }

        bcrypt.compare(password , user.password, (error, isSame)=> {
            if (error) { return res.status(500).send( {}) }
            if (!isSame) { return res.status(404).send( { message : "Not found"}) 
            }else {
                return res.status(200).send( { message : "user logged in"});
            }
        })
      
        // if (user.password !== password) {
        //     return res.status(404).send( { message : "Wrong password"});
        // }else {
        //     return res.send( { response : user.username});
        // }

        // return res.send( { message : "Username and password has been defined"})
        // return res.send( { response : user})
    }else{

        return res.status(404).send( { message : "Missing username and password"});
    }


});

router.post("/users/register",  ( req, res) => {
const { username, password, repeatPassword } = req.body;
    if ( username && password && repeatPassword && password === repeatPassword ){
        if (password.length < 6){
            return res.status(400).send( { message : "Password doesn't fulfill the requirements"});
        } else {
            bcrypt.hash(password , saltRounds, async (error, hashedPassword) => {
                if (error) { return res.status(500).send({}); }
                try{
                    const existingUser = await User.query().select().where({username: username}).limit(1);
                    if ( existingUser[0] ){
                        return res.status(404).send({response: "user already exists"})
                    } else {
                    const newUser = await User.query().insert({
                        username,
                        password: hashedPassword
                    })
                    return res.status(200).send({response: newUser.username})
                }
                    // return res.status(200).send({response: newUser});
                } catch(error) {
                    return res.status(404).send({message: "something went wrong with the database"})
                }
            });
            // return res.status(200).send({message: "us"});
        }
    } else {
        return res.status(404).send({message: "Missing fields"})
    }
});

module.exports = router;