const router = require('express').Router();
const Car = require('../models/Car');


// READ: All Cars
router.get('/', async (req, res) => {
    try {
        const allCars = await Car.find();
        res.render('index.ejs', { allCars: allCars });
        console.log('app is working (Read All Cars)');
    }
    catch (error) {
        console.log('ERROR:', error);
    }
});

// CREATE
router.get('/new', (req,res) => {
    res.render('new.ejs');
});

router.post('/', async (req,res) => {
    try {
        if(req.body.isElectric){
            req.body.isElectric = true;
        }
        else{
            req.body.isElectric = false;
        }
        const createdCar = await Car.create(req.body);
        res.redirect('/cars');
        console.log('app is working (CREATE)');
    }
    catch (error) {
        console.log('ERROR:', error);
    }
});

// READ: One Car
router.get('/:id', async(req,res) => {
    try {
        const foundCar = await Car.findById(req.params.id);
        res.render('show.ejs',{foundCar: foundCar});
        console.log('app is working (Read One Car)');
    }
    catch (error) {
        console.log('ERROR:', error);
    }
});

// UPDATE
router.get('/:id/edit', async(req,res) => {
    try {
        const foundCar = await Car.findById(req.params.id);
        res.render('edit.ejs',{foundCar: foundCar});
        console.log('app is working (UPDATE)');
    }
    catch (error) {
        console.log('ERROR:', error);
    }
});

router.post('/:id/edit', async (req,res) => {
    try{
        if(req.body.isElectric){
            req.body.isElectric = true;
        }
        else{
            req.body.isElectric = false;
        }
        const updatedCar = await Car.findByIdAndUpdate(req.params.id, req.body);
        res.redirect('/cars');
        console.log('app is working (UPDATE)');
    }
    catch (error) {
        console.log('ERROR:', error);
    }
});

// DELETE
router.post('/delete/:id', async (req, res) => {
    try {
        await Car.findByIdAndDelete(req.params.id);
        res.redirect('/cars');
        console.log('app is working (DELETE)');
    }
    catch (error) {
        console.log('ERROR:', error);
    }
});

module.exports = router;