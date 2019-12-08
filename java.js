 var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 ,15 ,16, 17, 18, 19, 20];
 function add(a,b) {
     return a + b;
 }
 var min = (Math.min(...numbers));
 document.write(" The lowest numebr is ", min);
var max = (Math.max(...numbers));
document.write(" <br> The lowest numebr is ", max);
var sum = (numbers.reduce)(add, 0);
document.write(" <br> The total is ", sum);
var avg = sum / numbers.length;
document.write(" <br> The average is ", avg);