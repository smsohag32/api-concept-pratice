const user = {id: 1, name: 'abul', job: 'actor'}

// what is an api


console.log(user);
// javascript Object Notacion (JSON)
// object er property name and value string akare "" diay string dibay only boolean and number chara
// jhokon stringify kora hoy tokhon string a convert hoy.
const stringify = JSON.stringify(user);
// console.log(stringify);

const shop = {
    owner: 'alia',
    address: {
        street: 'kochuket voot er goli',
        city: 'ranbir',
        country: 'BD'
    },
    products: ['laptop', 'mic', 'monitor', 'keybord'],
    revenue: 45000,
    isOpen: true,
    isNew: false

}
console.log(shop);
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);

// json file ke object e convert korer jonno parse korle object a convert hobay
// json.parse obj e convert kora hoy in json file string k 


const shopObj = JSON.parse(shopJSON);
console.log(shopObj);
