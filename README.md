# intro
웹 애플리케이션 프로젝트를 위한 디렉토리 및 파일 스켈레톤 생성 도구입니다.

## install

## how to use

```js
var Directory = require('directory'),
    directory = new Directory('./base_dir');
```

```js
var project_skeleton_structure = {
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
};

directory.create(project_skeleton_structure);
```

### create
전달한 JSON 포맷을 기준으로 디렉토리와 파일을 생성한다.


### how to write structure

```
<prop> : <value>

{ <prop> : "" } //blank text
{ <prop> : null } //directory

{ <prop> : Object } //subdirectory

```

## license
MIT
