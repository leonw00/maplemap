export function nominalToCurr(value){
    var result = "$" + value;
    value = value.toString().split(".")[0];
    // million -> M
    if(value.length >= 7){
        result = "$" + round(value/(10**6), 1) + "M";
    }
    // thousand -> K
    else if(value.length >= 4){
        result = "$" + round(value/(10**3), 1) + "K";
    }
    return result;
}

export function nominalToWord(value){
    var result = round(value, 1);
    value = value.toString().split(".")[0];
    // million -> M
    if(value.length >= 7){
        result = round(value/(10**6), 1) + "M";
    }
    // thousand -> K
    else if(value.length >= 4){
        result = round(value/(10**3), 1) + "K";
    }
    console.log(value);
    return result;
}

export function farToCel(far){
    return round((far - 32)*5/9,0) + "&#8457;";
}

export function celToFar(cel){
    return round(cel * 1.8 + 32, 0) + "&#8451;";
}



// round function with specific decimal precision
function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}