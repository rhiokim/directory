var path = require('path'),
    fs = require('fs'),
    mkdirp = require('mkdirp');

function Directory(base) {
    base = base || process.cwd();

    function isEmpty(value) {
        return (!!value) ? false : true;
    }

    function mkdir(dir, _base) {
        var prop, val, fpath, _base = _base || base;

        for( prop in dir ) {
            val = dir[prop];
            fpath = path.join(_base, prop);
            //case directory 
            if( val === null ) {
                mkdirp.sync(fpath, 0755);
            } else {
                //case file
                if( typeof val === 'string' ) {
                    fs.writeFileSync(base +'/'+ prop, val, 'utf8');
                } else {
                    mkdirp.sync(path.join(fpath, prop), 0755);
                    mkdir(val);
                }
            }
        }
    }

    return {
        /**
         * 디렉토리 생성을 한다.
         * @param {Object} structure 디렉토리, 파일 구조를 담고 있는 JSON
         */
        create: function(dir) {
            dir = dir || {}; 
            mkdirp.sync(base, 0755);

            mkdir(dir);
        }
    }
}

module.exports = Directory;

