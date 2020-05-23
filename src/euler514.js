let arr = [];
let j = 0;
while (j < 500) { // выводит 0, затем 1, затем 2
    arr[j] = Math.pow(j,5);
    j++;
}

let is_success = false;
for(let a = 1; a < arr.length; a++) {
    for (let b = 1; b <= a; b++) {
        for (let c = 1; c <= b; c++) {
            for (let d = 1; d <= c; d++) {
                let sum = arr[a] + arr[b] + arr[c] + arr[d];

                if(arr.indexOf(sum)>=0){
                    console.log(a + "^5 + " + b + "^5 + " + c + "^5 + " + d + "^5 = " + arr.indexOf(sum) + "^5");
                    is_success = true;
                    a=b=c=d=arr.length;  //остановить сразу после нахождения первого решения
                }

                // Можно было искать по всем элементам массива вручную. Но лучше использовать indexOf
                // for (let k = 0; k < arr.length; k++) {
                //     if (arr[k] === sum) {
                //         console.log(a + "^5 + " + b + "^5 + " + c + "^5 + " + d + "^5 = " + k + "^5");
                //         is_success = true;
                //     }
                // }
            }
        }
    }
}
if(!is_success){
    console.log("failed");
}






