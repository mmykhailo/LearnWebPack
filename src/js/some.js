/**
 * Created by M on 22.05.2018.
 */
function sum(x, y) {
    return x + y;
}

function exported(x, y) {
    console.log(x);
    console.log(x);
    return sum(x , y);
}

export default exported;