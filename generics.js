// create a function, the parameter can be any type, the output should be matching
function returnAnyMatchingType(a) {
    var result = a;
    return result;
}
// create a function, the parameter can be either a string or number, the output should be matching
function returnStringNumber(a) {
    var result = a;
    return result;
}
returnAnyMatchingType("hello");
returnAnyMatchingType(6);
returnAnyMatchingType(true);
returnStringNumber(6);
returnStringNumber("hello");
// this would be an error
// returnStringNumber(true)
