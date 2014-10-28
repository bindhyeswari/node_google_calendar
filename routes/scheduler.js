// handling the schedule information
var express = require('express');
var router = express.Router();

var tasks = {
    "Tue, 28 Oct 2014T": [
        {
            description: 'Meeting X',
            utc: "Tue, 28 Oct 2014 20:40:15 GMT"
        },
        {
            description: 'Meeting 11',
            utc: "Tue, 28 Oct 2014 13:40:15 GMT"
        },
        {
            description: 'Meeting 102',
            utc: "Tue, 28 Oct 2014 16:00:15 GMT"
        }
    ],
    "Wed, 29 Oct 2014T": [
        {
            description: 'Meeting X',
            utc: "Wed, 29 Oct 2014 20:40:15 GMT"
        },
        {
            description: 'Meeting 2',
            utc: "Wed, 29 Oct 2014 13:40:15 GMT"
        },
        {
            description: 'Meeting 3',
            utc: "Wed, 29 Oct 2014 16:00:15 GMT"
        }


    ]
};

router.get('/', function (req, res) { // /tasks/
    console.log(req.query);
    res.status(200).json(tasks);
});

router.get('/:date', function (req, res) { // /tasks/:id
    console.log(req.params.date);
    console.log('User has requested for the data to be sent in a ' + req.query.format + ' format');
    res.status(200).json(tasks[req.params.date])
});

router.post('/', function (req, res) {
    console.log(req.body);
    res.status(200).json({message: 'IMPL_101'});
});

module.exports = router;
