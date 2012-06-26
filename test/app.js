var Directory = require('../'),
    directory = new Directory('./base');

directory.create({ 
    "README.md": "", 
    ".gitignore": "", 
    "bin": null, //description by comment 
    "lib": null, 
    "test": null, 
    "node_modules": null, 
    "app.js": "node main application", 
    "web": { 
        css: null, 
        js: { 
            vendors: null 
        }, 
        img: null  
    } 
});
