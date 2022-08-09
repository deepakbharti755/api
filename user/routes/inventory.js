const express = require("express");
const inventoryModal = require("../modals/inventory-modal");
const router = express.Router();

router.get("/", (req, res)=> {
    inventoryModal.find().then((inventoryData)=> {
        res.status(200).send({inventory: inventoryData});
    });
});
router.post("/add", (req, res)=> {
    inventoryModal.insertMany(req.body.inventory).then((inventoryData)=> {
        res.status(200).send("Data Added Successfully");
    });
});

module.exports = router;