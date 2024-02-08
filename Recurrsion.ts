const factorial = (n: number) => { 
    if (n === 0 || n === 1) {
        return 1;
    }

    return n * factorial(n - 1);
}

const result = factorial(2);
console.log(result);
