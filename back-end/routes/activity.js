const express= require('express');
const mongoose= require('mongoose');
const router = express.Router();

const EVENT=mongoose.model('EVENT');






router.post('/addevent', async (req, res) => {
    const { role, address, event } = req.body;
  
    if (!role || !address || !event) {
      return res.status(422).json('Incomplete fields');
    }
  
    try {
      const newEvent = new EVENT({ role, address, event });
      await newEvent.save();
      res.status(200).json('Event added successfully');
    } catch (error) {
      console.error(error);
      res.status(500).json('Server error');
    }
  });



  router.get('/getevents', async (req, res) => {
    try {
      const events = await EVENT.find({});
      res.status(200).json(events);
    } catch (error) {
      console.error(error);
      res.status(500).json('Server error');
    }
  });






















module.exports = router;
