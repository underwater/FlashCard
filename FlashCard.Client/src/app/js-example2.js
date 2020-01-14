// -- example#2

var data = (function() {
    var num = 1;

    return {
        value: function() {
            return num;
        },
        add: function(x) {
            num = num + x;
            return num;
        },
        subrtract: function(x) {
            num = num - x;
            return num;
        }
    };
})();

// is num not being captured by closure?
console.log(data.value());
console.log(data.add(1));
console.log(data.add(1));
console.log(data.add(1));