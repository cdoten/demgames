const fs = require('fs')
const xlsxj = require("xlsx-to-json")

xlsxj({
    input: "./Game 4 Good - Questions Input.xlsx", 
    output: "g4g.json"
    }, (err, result) => {
        if (err) throw err
        console.log(result)
    }
)