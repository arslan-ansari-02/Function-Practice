// Write a Typescript Program to check the maximumNumber between Four number.

function maximumNumber(num1:number, num2:number, num3:number, num4:number) {
    if (num1 > num2 && num1 > num3 && num1 > num4) {
        console.log("num1 is maximum", num1)
    }
    else if (num2 > num1 && num2 > num3 && num2 > num4) {
        console.log("num2 is maximum", num2);
    }
    else if (num3 > num1 && num3 > num3 && num3 > num4) {
        console.log("num3 is maximum", num3);
    }
    else if (num4 > num1 && num4 > num2 && num4 > num3) {
        console.log("num4 is maximum", num4);
    }
    else {
        console.log("all numbers are equal");
    }
}
maximumNumber(3, 5, 7, 9)

// Write a Typescript Program to check the minimumNumber between Four number.

function minimumNumber(num1: number, num2: number, num3: number, num4: number) {
    if (num1 < num2 && num1 < num3 && num1 < num4) {
        console.log("num1 is minimum", num1)
    }
    else if (num2 < num1 && num2 < num3 && num2 < num4) {
        console.log("num2 is minimum", num2);
    }
    else if (num3 < num1 && num3 < num3 && num3 < num4) {
        console.log("num3 is minimum", num3);
    }
    else if (num4 < num1 && num4 < num2 && num4 < num3) {
        console.log("num4 is minimum", num4);
    }
    else {
        console.log("all numbers are equal");
    }
}
minimumNumber(3, 5, 7, 9)

// Write a ts program to check the number is Even or Odd.

function number(num:number) {
    if (num%2==0) {
        console.log("this number is even",num)
    }
    else{
        console.log("this number is odd" ,num);
    }
}

number(10)

// Write a ts program to check the number is divisible by 7, 9 or not .

function divisibleNumber(num:number) {
    if (num % 7 == 0) {
        console.log("number is divisible by 7", num)
    }
    else if (num % 9 == 0) {
        console.log("number is divisible by 9", num)
    }
    else {
        console.log("number is not divisible on both", num)
    }
}

divisibleNumber(37)