// task-1 start



// let a = parseFloat(prompt("a ni daxil ed"))
// let b = parseFloat(prompt("b ni daxil ed"))
// let c = parseFloat(prompt("c ni daxil ed"))
// let discriminant = b**2 - 4* a *c
// if(discriminant > 0){
//     x1 = -b - Math.sqrt(discriminant)/(2*a)
//     x2 = -b + Math.sqrt(discriminant)/(2*a)
//     console.log(`tenliyin iki helli var : x1= ${x1} ,x2=${x2} `)
// }else if(discriminant === 0){
//     let x = -b/(2*a)
//     console.log(`tenliyin bir helli var : x = ${x}`);
// }else{
//     console.log("tenliyiin heqiqi helli yoxdur");
// }



// task-1 end


//task-2 start



// const A = parseInt(prompt("A ededini daxil edin:")); // Kullanıcıdan A değerini alabilirsiniz.

// const tamBolenler = [];
// for (let i = 1; i <= 1000; i++) {
//     if (i % A === 0) {
//         tamBolenler.push(i);
//     }
// }

// tamBolenler.forEach(sayi => {
//     console.log(sayi);
// });


//task-2 end



//task-3  start


// const arr = [2, 4, 5, 9, 1];
// const minimum = Math.min(...arr);

// console.log(minimum);


////////////////////////////////////////////ve yaaaaaaaaa//////////////////////////////////////////////////


// const arr = [2, 4, 5, 9, 1];
// let minNumber = arr[0];

// for(let i = 0; i < arr.length ; i++ ){
//     if(arr[i] < minNumber){
//         minNumber = arr[i]
//         console.log(minNumber)
//     }
// }



// taskk 3 end




// task  4 start



// const arr = [2, 4, 5, 9, 1];
// const minimum = Math.max(...arr)
// console.log(minimum);



//task 4 end




// task 5 start  


// const arr = [2, 4, 5, 9, 1];
// let minIndex = 0;
// let minValue = arr[0];

// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < minValue) {
//         minIndex = i;
//     }
// }

// console.log("Minimum elementin indeksi: " + minIndex );


//task 5 end





// task 6 start 



// const arr = [2, 4, 5, 9, 1];
// let maxIndex = 0;
// let maxValue = arr[0];

// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > maxValue) {
//         maxIndex = i;
//     }
// }

// console.log("Max  elementin indeksi: " + maxIndex );





// task 6 end 



//task 7 start


// const arr = [2, 4, 5, 9, 1];
// let cem = 0;

// for (let i = 1; i < arr.length; i += 2) {
//   cem += arr[i];
// }

// console.log("tek index cem: " + cem);


//task 7 end



//task 8 start


// let cumle = " Mən Code Academy Tələbəsiyəm";
// let kicikCumle = cumle.toLowerCase();

// console.log(kicikCumle);



//task 8 end


//task 9 start

// let metn = "            Mən Code Academydə Programing tədrisi alıram            ";
// let temizMetn = metn.trim();

// console.log(temizMetn);


//task 9 end


//task 10 start


// let cumle = "Mən Code Academy Tələbəsiyəm";
// let sozler = cumle.split(" ");

// console.log(sozler);


//task 10 end


//task 11 start



// let cumle = "            Mən Code Academydə Programing tədrisi alıram            ";
// let təmizCumle = cumle.replace(/\s+/g, '');

// console.log(təmizCumle.length);


//task 11 end


