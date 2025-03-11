
let count = 0;

const clockID= setInterval(() => {
    count++;
    // count = count + 1;
    console.log(count)

    if (count >= 5) {
        clearInterval(clockID)
    }

},2000)

// console.log(clockID)


// setTimeout(() => {
//     console.log("hello")
// },4000)