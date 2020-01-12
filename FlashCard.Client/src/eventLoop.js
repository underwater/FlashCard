function BlockFor5Secs() {
    console.log("entering blocking function", Date.now());
    const end = Date.now() + 5000;
    while (Date.now() < end) {
        const doSomethingHeavyInJavaScript = 1 + 2 + 3;
    }
    console.log("existing blocking function", Date.now());
}

function callback(){
// lock 10 seconds
}

function Work1 (data, callback){
// work of work 1

  callback()
}

Work1()

BlockFor5Secs();