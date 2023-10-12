const parse = require('csv-parse');
const fs = require('fs');
const results = [];
fs.createReadStream('./kepler_data.csv')
    .on('data', (data)=>{
        results.push(data)
    })
    .on('error',(err)=>{
        console.log(err);
    })
    .on('end',()=>{
        console.log('done');
        console.log(results);
    })