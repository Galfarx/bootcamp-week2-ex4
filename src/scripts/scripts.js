'use strict';

function createData(obj) {

    var data = obj;

    function getObj(key) {
        key = '' + key;

        if (!(key in data)){
            throw new Error('Podany klucz nie istnieje');
        }

        return data[key]
    }

    function setObj(key, value) {
        key = '' + key;

        if (!key || !value) {
            throw new Error('Należy opodać klucz oraz wartość do ustawienia!');
        }

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
