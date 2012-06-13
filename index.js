var mkdirp = require('mkdirp');

var structure = {
    "README.md": "",
    ".gitignore": "",
    "bin": null, //description by comment
    "lib": null,
    "test": null,
    "node_modules": null,
    "app.js": "node main application",
    "web": {
        css: null,
        js: null,
        img: null 
    }
};

function Directory() {

    function isEmpty(value) {
        return (!!value) ? false : true;
    }

    return {
        /**
         * 디렉토리 생성을 한다.
         * @param {Object} structure 디렉토리, 파일 구조를 담고 있는 JSON
         */
        create: function(structure) {
                    
                }
    }
}

module.exports = new Directory();

