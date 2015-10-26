var total = 0;
var i;
process.argv;
for (i = 2; i < 7; i++){
    total = total + Number(process.argv[i]);
}
console.log(total);