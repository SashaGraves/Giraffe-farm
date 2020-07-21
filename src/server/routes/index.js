const {Router} = require('express');
const router = Router();
const GiraffeSchema = require('../models/giraffe');

router.post('/giraffe', async (req, res) => {
    try {
        const { name, weight, sex, height, color, diet, temper, image } = req.body;
        if (name === '') {
            return res.status(400).json({ message: 'Жираф без имени не может быть в вольере =(' });
        } 
        
        const giraffe = new GiraffeSchema({ name, weight, sex, height, color, diet, temper, image });
        
        await giraffe.save();
        
        res.status(200).json({ message: 'Жираф добавлен', giraffeId: giraffe.id });
        
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова.' });
    }
    
});

router.put('/giraffe/:id', async (req, res) => {
    try {  
        const { name, weight, sex, height, color, diet, temper, image } = req.body;
        if (name === '') {
            return res.status(400).json({ message: 'Жираф без имени не может быть в вольере =(' });
        } 
        
        const newData = { name, weight, sex, height, color, diet, temper };
        const result = await GiraffeSchema.replaceOne({ _id: req.params.id }, newData);
        
        res.status(200).json({ message: 'Жираф changed', result: result.ok });
        
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова.' });
    }
    
});

router.get('/giraffe', async (req, res) => {
    try {
        const giraffes = await GiraffeSchema.find({});
        
        res.status(200).json(giraffes);
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова.' })
    }
    
});

router.delete(`/giraffe/:id`, async (req, res) => {
    try {
        const result = await GiraffeSchema.deleteOne({ _id: req.params.id });
        
        res.status(200).json({ message: 'Жираф deleted', result: result.ok });
        
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова.' })
    }
    
});

module.exports = router
