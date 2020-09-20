const path = require('path');

module.exports = {
    mode: "development",
    entry: './src/css/tw-main.css',
    output: {
        filename: 'main.css',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            
        ],
    }
}