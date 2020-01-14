function closure() {
    let counted = 0;
    return {
        count: function() {
            counted++;
        },
        getTheCount: function() {
            return "Counted till " + counted;
        }
    };
}

const closured = closure();

closured.count();
closured.count();
closured.count();
closured.count();
closured.count();
closured.count();

console.log(closured.getTheCount());