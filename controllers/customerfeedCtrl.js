const Customerfeed = require("../models/customerfeedModel");

const customerfeedCtrl = {
  
  createCustomerfeed: async (req, res) => {
    try {
      const {
        deliveryitem,
        phone,
        message
      } = req.body;
      const newCustomerfeed = new Customerfeed({
        deliveryitem,
        customer:req.user.id,
        deliveryitem,
        phone,
        message
      });
      await newCustomerfeed.save();
      res.json({ msg: "Saved your feedback" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

};

module.exports = customerfeedCtrl;
