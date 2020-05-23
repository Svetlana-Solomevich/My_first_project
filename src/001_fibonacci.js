let n1 = 1;
let n2 = 1;

for (let i = 1; i < 20; i++) {
    let temp = n1 + n2;
    n1 = n2;
    n2 = temp;
    console.log (i + ": " + n1);
}