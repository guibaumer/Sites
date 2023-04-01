    const array = [7];
    function geraNumero() {
        function aleatorio(min = 1, max = 3) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let n = aleatorio()

    if(array[array.length - 1] === n) {
        n = aleatorio(); 
    };
        array.push(n);
        return n;
    }
    
    for(let i = 0; i < 10; i++) {
        const b = geraNumero();
        console.log(b)
    }