// const regex = new RegExp("[^0-9]", "g");
// const regex = /[^0-9]/g;

const pattern = /(012)/;
const str = "0123456789";

const pattern = /a*/
const str = "abcde"
const result = str.match(pattern);

console.log(result[0]);
