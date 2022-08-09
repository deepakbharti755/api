const express = require("express");
const customerModal = require("../modals/customer-modal");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.get("/", (req, res)=> {
    try {
        const user = jwt.verify(req.headers.authorization, process.env.SECRET_KEY );
        res.status(200).send(user)
    } catch(err) {
        res.status(403).send("User Not Authorized", err)
    }
    
    
});
router.post("/add", (req, res)=> {
    
    orderModal.create({customer_id: req.body.customerid, customer_name: req.body.customername, email: req.body.email
    }).then(()=> {
        res.status(200).send("Orderr placed Successfully")
    }).catch((err)=> {
        res.status(400).send(err)
    })
});



module.exports = router;