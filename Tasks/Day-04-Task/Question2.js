//1. print odd numbers in an array.
var arr1=[1,32,54,78,8,79,3,56,3,654];
var res1=(arr)=>{
    var out=[];
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2!=0){
            out.push(arr[i]);
        }
    }
    return out;
}
console.log(res1(arr1));


//2. convert all the strings to caps in string array.
//2.1.Anonymous
var arr2=["hello","world","this","is","batman"];
var res2=(arr)=>{
    var out=[];
    for(var i=0;i<arr.length;i++){
        var a=arr[i].toUpperCase();
        out.push(a);    
    }
    return out;
}
console.log(res2(arr2));


//3.sum of all numbers in an array.
//3.1.Anonymous

var arr3=[1,32,54,78,8,79,3,56,3,654];
var res3=(arr)=>{
    var out=0;
    for(var i=0;i<arr.length;i++){
        var a=parseInt(arr[i]);
        out+=a;    
    }
    return out;
}
console.log(res3(arr3));

//4. return all the prime numbers in an array.
//4.1 Anonymous
var arr4=[1,32,54,78,8,79,3,56,3,654];
var res4=(arr)=>{
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
console.log(res4(arr4));

//5. return all the palindromes in an array;
//5.1 Anonymous
var arr5=[1,32,54,78,121,3,56,3,654];
var res5=(arr)=>{
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
console.log(res5(arr5))