/*I.do the below program in anonymous function & IIFE
1. Print odd number in array
2. convert all the strings to caps in string array.
3. sum of all numbers in an array.
4. return all the prime numbers in an array.
5. return all the palindromes in an array;
6. return median of two sorted arrays of the same size.
7. remove duplicates from an array.
8. rotate an array from an array.
*/

//1. Print odd number in array
//1.1 Anonymous
var arr1=[1,32,54,78,8,79,3,56,3,654];
var res1=function(arr){
    var out=[];
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2!=0){
            out.push(arr[i]);
        }
    }
    return out;
}
console.log("Anonymous function",res1(arr1));

//1.2 IIFE Function
var arr1=[1,32,54,78,8,79,3,56,3,654];
(function res1(arr,len){
    var out=[];
    for(var i=0;i<len;i++){
        if(arr[i]%2!=0){
            out.push(arr[i]);
        }
    }
    return out;
})()
var len=arr1.length;
console.log("IIFE function",res1(arr1,len));

//2. convert all the strings to caps in string array.
//2.1.Anonymous
var arr2=["hello","world","this","is","batman"];
var res2=function(arr){
    var out=[];
    for(var i=0;i<arr.length;i++){
        var a=arr[i].toUpperCase();
        out.push(a);    
    }
    return out;
}
console.log("Anonymous function",res2(arr2));

//2.2.IIFE Function
var arr2=["hello","world","this","is","batman"];
(function res2(arr,len){
    var out=[];
    for(var i=0;i<len;i++){
        var a=arr[i].toUpperCase();
        out.push(a);    
    }
    return out;
})()
var len=arr2.length;
console.log("IIFE function",res2(arr2,len));


//3.sum of all numbers in an array.
//3.1.Anonymous
var arr3=[1,32,54,78,8,79,3,56,3,654];
var res3=function(arr){
    var out=0;
    for(var i=0;i<arr.length;i++){
        var a=parseInt(arr[i]);
        out+=a;    
    }
    return out;
}
console.log("Anonymous function",res3(arr3));

//3.1.IIFE function
var arr3=[1,32,54,78,8,79,3,56,3,654];
(function res3(arr,len){
    var out=0;
    for(var i=0;i<len;i++){
        var a=parseInt(arr[i]);
        out+=a;    
    }
    return out;
})()
var len=arr3.length;
console.log("IIFE function",res3(arr3,len));

//4. return all the prime numbers in an array.
//4.1 Anonymous
var arr4=[1,32,54,78,8,79,3,56,3,654];
var res4=function(arr){
    var out=[];
    for(var i=0;i<arr.length;i++){
        var count=0;
        for(var j=1;j<=arr[i];j++){
            if(arr[i]%j==0){
                count++;
            }
        }
        if(count==2){
            out.push(arr[i]);
        }
    }
    return out;
}
console.log("Anonymous function",res4(arr4));

//4.2 IIFE function
var arr4=[1,32,54,78,8,79,3,56,3,654];
(function res4(arr,len){
    var out=[];
    for(var i=0;i<len;i++){
        var count=0;
        for(var j=1;j<=arr[i];j++){
            if(arr[i]%j==0){
                count++;
            }
        }
        if(count==2){
            out.push(arr[i]);
        }
    }
    return out;
})()
var len=arr4.length;
console.log("IIFE function",res4(arr4,len));

//5. return all the palindromes in an array;
//5.1 Anonymous
var arr5=[1,32,54,78,121,3,56,3,654];
var res5=function(arr){
    var out=[];
    for(var i=0;i<arr.length;i++){
        var r=0;
        for(var j=arr[i];j>0;j=j/10){
            var dig=j%10;
            r=(r*10)+dig;
        }
        if(r==arr[i]){
            out.push(arr[i]);
        }
    }
    return out;
}
console.log("Anonymous function",res5(arr5));

//6. return median of two sorted arrays of the same size.
//6.1 Anonymous
var a1=[1,32,54,78];
var a2=[5,23,77,89];
var len=a1.length;
var res6=function(L,R,len){
    var out=[];
    for(var i=0;i<len;i++){
        out.push(L[i]);
        out.push(R[i]);
    }
    out.sort((a,b)=>a-b);
    var r=(out[len]+out[len-1])/2;
    return r;
}
console.log("Anonymous function",res6(a1,a2,len));

//6.2 IIFE function
var a1=[1,32,54,78];
var a2=[5,23,77,89];
(function res6(L,R,len){
    var out=[];
    for(var i=0;i<len;i++){
        out.push(L[i]);
        out.push(R[i]);
    }
    out.sort((a,b)=>a-b);
    var r=(out[len]+out[len-1])/2;
    return r;
})()
var len=a1.length;
console.log("IIFE function",res6(a1,a2,len));

//7. remove duplicates from an array.
//7.1. Anonymous
var arr7=[1,32,54,78,8,79,3,56,3,654];
var res7=function(arr){
    var out=[];
    for(var i=0;i<arr.length;i++){
        if(out.indexOf(arr[i])===-1){
            out.push(arr[i]);
        }
    }
    return out;
}
console.log("Anonymous function",res7(arr7));

//7.2. IIFE Function
var arr7=[1,32,54,78,8,79,3,56,3,654];
(function res7(arr,len){
    var out=[];
    for(var i=0;i<len;i++){
        if(out.indexOf(arr[i])===-1){
            out.push(arr[i]);
        }
    }
    return out;
})()
var len=arr7.length;
console.log("IIFE function",res7(arr7,len));

//8. rotate an array from an array.
//8.1 Anonymous
var arr8=[1,32,54,78,8,79,3,56,3,654];
var res8=function(arr){
    var out=[];
    for(var i=0;i<arr.length;i++){
        
    }
    return out;
}
console.log("Anonymous function",res8(arr8));