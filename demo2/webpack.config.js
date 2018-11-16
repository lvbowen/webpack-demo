const path = require('path');

module.exports = {
    entry:{
        bundle1:'./index1.js',
        bundle2:'./index2.js',
    },
    output:{
        filename:'[name].js',
        path:path.resolve(__dirname)    
    }
}