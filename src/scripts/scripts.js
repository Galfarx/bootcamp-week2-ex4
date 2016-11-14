'use strict';

function createData(obj) {

    var data = obj;

    function getObj(key) {

        if (!(key in data)){
            throw new Error('Podany klucz nie istnieje');
        }

        key = '' + key;

        return data[key]
    }

    function setObj(key, value) {

        if (!key || !value) {
            throw new Error('Należy opodać klucz oraz wartość do ustawienia!');
        }

        key = '' + key;

        data[key] = value;
    }

    return {
        get: getObj,
        set: setObj
    }

}

var data = createData({});

data.set("name", "Janek");

console.log( data.get("name") );
