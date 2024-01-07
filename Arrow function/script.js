//Arrow function:-
//a.print odd numbers in an array:-

var output1 = [];
var array1 = (arr1) => {
    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] % 2 !== 0) {
            output1.push(arr1[i]);
        }
    }
    return output1;
}
console.log(array1([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]));

//b.convert all the strings to title caps in a string array:-

var output2 = [];
var array2 = (arr2) => {
    for (var i = 0; i < arr2.length; i++) {
        var j = arr2[i].charAt(0).toUpperCase() + arr2[i].slice(1);
        output2.push(j)
    }
    return output2;
}
console.log(array2(["welcome", "hello", "everyone"]))

//c.sum of all numbers in an array:-

var output3 = [];
var sum = 0;
var array3 = (arr3) => {
    for (var i = 0; i < arr3.length; i++) {
        sum = sum + arr3[i];
    }
    output3.push(sum)
    return output3;
}
console.log(array3([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]));

//d.Return all the prime numbers in an array:-

var output4 = [];
var array4 = (arr4) => {
    for (var i = 0; i < arr4.length; i++) {
        var f = 0;
        if (arr4[i] < 3) {
            output4.push(arr4[i]);
        }
        else {
            for (var j = 2; j < arr4[i]; j++) {
                if (arr4[i] % j == 0) {
                    f = 1;
                    break;
                }
            }
            if (f == 0) {
                output4.push(arr4[i]);
            }
        }
    }
    return output4;
}
console.log(array4([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17, 19, 23]));

//e.Return all the palindromes in an array:-

var output5 = []
var array5 = (arr5) => {
    for (var i = 0; i < arr5.length; i++) {
        var letter = arr5[i].split("");
        var converString = letter.join("");
        var revers = []
        for (var j = converString.length - 1; j >= 0; j--) {
            revers.push(converString[j]);
        }
        var reversString = revers.join("");
        if (converString === reversString) {
            output5.push(arr5[i]);
        }
    }
    return output5;
}
console.log(array5(["level", "12321", "abcd", "father", "mother"]));