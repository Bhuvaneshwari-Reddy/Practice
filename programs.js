//1 write a program to find the sum of elements from 1 to 100 which are divisible by 2
let sum=0;
for(let i=0;i<=100;i++){
    if(i%2==0){
        sum=sum+i;
    }
}
console.log(sum)

//2 write a program to display an elements from 100 to 1 which are divisible by 3

for(let i=100;i>=1;i--){
if(i%3==0){
    console.log(i)
}
}

//3 calculate the factorial of a number

let fact=1;
let num=20;
for(let i=1;i<=num;i++){
    fact=fact*i;
}
console.log(fact)

function factorial(num){
    if(num===0 || num===1){
        return 1
    }else{
        return num* factorial(num-1)
    }
}
console.log(factorial(8))


//febonacci series
//fibonacci series means adding previous two numbers to get the next number
let n1=0;
let n2=1;
let fibseries=[]
for(let i=0;i<=5;i++){
    fibseries.push(n1)
    let t=n1;
    n1=n2;
    n2=t+n2
}
console.log(fibseries)


//write a program to return a reverse of a string
 function reversestring(str){
    return str.split('').reverse().join('');

 }
 console.log(reversestring("hello"))

 function reversestring(str){
    return str.split('').reverse().join('');
 }
 console.log(reversestring("bhuvi"))


 //sum of numbers

let sum1=0;
for(let i=0;i<10;i++){
sum1=sum1+i

}
console.log(sum1)


//sum of square of numbers from 1 to 10
let sqaure=0;
let sumofsqaures=0
for(let i=0;i<=10;i++){
sqaure=i*i;
sumofsqaures=sumofsqaures+sqaure;
console.log(sqaure)
}
console.log(sumofsqaures)


//factorial of a number using function

function factorial(n){
   let result=1;
   for(let i=2;i<=n;i++){
       result=result*i;
   }
   return result;
}

console.log(factorial(10))

//factorial of a number

let res=1;
let n1=4;
for(let i=1;i<=n1;i++){
   res=res*i

}
console.log(res)


//fetch the sum of elements from an array
 let arrayb=[1,2,3,4,5]
 let sumofelements=0;
 for(let i=0;i<=arrayb.length;i++){
    sumofelements=sumofelements+i;

 }
 console.log(sumofelements)
 console.log(arrayb.push[20,10])
 console.log(sumofelements)

//sum of array elements
let numbers=[1,2,3,4,5]
let sum2=0;
for(let i=0;i<numbers.length;i++){
    sum2=sum2+numbers[i]
}
console.log(sum2)


//find the largest element in an array
let numbers1=[1,2,3,4,5]
let largest=numbers1[0]
for(let i=1;i<numbers1.length;i++){
    if(numbers1[i]>largest){
        largest=numbers1[i]
    }
}
console.log(largest)

//reversing an array
let numbers2=[1,2,3,4,5]
let reversednumbers=[]
for(let i=numbers2.length-1;i>=0;i--){
    reversednumbers.push(numbers2[i])
}
console.log(reversednumbers)


//merging two arrays
let array1=[1,2,3]
let array2=[4,5,6]
let mergedarray=array1.concat(array2)
console.log(mergedarray)


//removing duplicates from an array
let numbers3=[1,2,3,3,4,5,5]
let uniquenumbers=[]
for(let i=0;i<numbers3.length;i++){
    if(!uniquenumbers.includes(numbers3[i])){
        uniquenumbers.push(numbers3[i])
    }
}
console.log(uniquenumbers)

//sum of elements of 2D array
/* 
[(0,0),(0,1),(0,2)]
[(1,0),(1,1),(1,2)]
[(2,0),(2,1),(2,2)]
*/
let matrix=[[1,2,3],[4,5,6],[7,8,9]]
let matrixsum=0;
for(let i=0;i<matrix.length;i++){
    for(let j=0;j<matrix[i].length;j++){
        matrixsum=matrixsum+matrix[i][j]
    }
}
console.log(matrixsum)

//transpose of an 2D array
let transposearray=[
[1,2,3],
[4,5,6],
[7,8,9]]
let transpose=[]
for(let i=0;i<transposearray[0].length;i++){
    transpose[i]=[]
    for(let j=0;j<transposearray.length;j++){
        transpose[i][j]=transposearray[j][i]
    }
}
console.log(transpose)

//find the maximum element of an 1D array

let maxarray=[1,2,3,4,5,6]
let max=maxarray[0]
for(let i=0;i<maxarray.length;i++
)
{
    if(maxarray[i]>max){
        max=maxarray[i]
    }
}
console.log(max)

//find the maximum element of an 2D array

let maxarr=[[1,2,3],[4,5,6],[7,8,9]]
let maxele=maxarr[0][0]
for(let i=0;i<maxarr.length;i++){
    for(let j=0;j<maxarr[i].length;j++){
        if(maxarr[i][j]>maxele){
            maxele=maxarr[i][j]
        }
    }
}
console.log(maxele)

let maxarr=[[1,2,3],[4,5,6],[7,8,9]]
let maxele=maxarr[0][0] 
for(let i=0;i<maxarr.length;i++){
    for(let j=0;j<maxarr[i].length;j++){
        if(maxarr[i][j]>maxele){
            maxele=maxarr[i][j]

        }
    }
}
console.log(maxele)
//sum of each row in 2D array

let matrix = [
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9]
];

let rowSums = [];
for (let i = 0; i < matrix.length; i++) {
    let sum = 0;
    for (let j = 0; j < matrix[i].length; j++) {
        sum=sum+matrix[i][j]
        sum += matrix[i][j];
    }
    rowSums.push(sum);
}
console.log(`Sum of each row: ${rowSums}`); 
//sum of each colum in 2D array
let matrix = [
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9]
];
let colsum=[]
for(let i=0;i<matrix.length;i++){
    let sum=0;
    for(let j=0;j<matrix[i].length;j++){
      
        sum=sum+matrix[j][i]
    }
    colsum.push(sum)
}
console.log(colsum)

//second highest element in 2D array
let arrmax2=[[7,8,9],[10,11,12],[13,14,15]]
let max2=arrmax2[0][0]
for(let i=0;i<arrmax2.length;i++){
    for(let j=0;j<arrmax2[i].length;j++){
        if(arrmax2[i][j]>max2){
            max2=arrmax2[i][j]-1
        }
    }
}

console.log(max2)
//smallest element of an 2D array
let arrmin=[[7,8,9],[10,11,12],[13,14,15]]
let min=arrmin[0][0]
for(let i=0;i<arrmin.length;i++){
    for(let j=0;j<arrmin[i];j++){
        if(arrmin[i][j]<min){
            min=arrmin[i][j]
        }
    }
}
console.log(min)

//rotating a 2D array 90'
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
let rotated=[]
for(let i=0;i<matrix.length;i++){
    rotated.push([])
    for(let j=0;j<matrix.length;j++){
        rotated[i][j]=matrix[matrix.length-j-1][i]
    }
}
console.log(rotated)
let matrix=[[1,2,3],[4,5,6],[7,8,9]]

let rotated=[]
for(let i=0;i<matrix.length;i++){
    rotated.push([])
    for(let j=0;j<matrix.length;j++){
        rotated[i][j]=matrix[matrix.length-j-1][i]
    }
}
console.log(rotated)
//Adding two 2d arrays

let matrixA=[
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
let matrixB = [
    [9, 8, 7],
    [6, 5, 4],
    [3, 2, 1]
]

let result=[]
for(let i=0;i<matrixA.length;i++){
    result[i]=[]
    for(let j=0;j<matrixB[i].length;j++){
        result[i][j]=matrixA[i][j]+matrixB[i][j] 
       }
}
console.log(result)


//print the diagonal elements of an array
let diaArr=[
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
for(let i=0;i<diaArr.length;i++){
    console.log(diaArr[i][i])
}

let columindex=1
let column=[]
for(let i=0;i<diaArr.length;i++){
    column.push(diaArr[i][columindex])
}
console.log(column)
for(let i=0;i<diaArr.length;i++){
    console.log(diaArr[i][diaArr.length-1-i])
}

for(let i=0;i<diaArr.length;i++){
    console.log(diaArr.length)
}

//print antidiagonal elements
let diaArr=[
    [1, 2, 3], 
    [4, 5, 6],
    [7, 8, 9]
]

for(let i=0;i<diaArr.length;i++){
    console.log(diaArr[i][diaArr.length-1-i])
}
//print row elements
let diaArr=[
    [1, 2, 3], 
    [4, 5, 6],
    [7, 8, 9]
]

console.log(diaArr[2])
//print columns in a array
let columnindex=1;
let column=[]
for(let i=0;i<diaArr.length;i++){
    column.push(diaArr[i][columnindex])
}
console.log(column)

//sum of square of  elements in an array which are divisible by their length
let nums=[1,2,3,4]
let sum=0
for(let i=0;i<nums.length;i++){
    if(nums.length%nums[i]==0){
        sum=sum+nums[i]*nums[i]
    }
}
console.log(sum)

//find even and odd numbers from an array
let arr=[1,2,3,4,5,6,7,8,9]
let even=[]
let odd=[]
for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        even.push(arr[i])
    }else{
        odd.push(arr[i])
    }
}
console.log(even)
console.log(odd)

//find the max and min elements in an array
let arr=[1,2,3,4,5,6,7,8,9]
let max=arr[0]
let min=arr[0]
for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i]
    }
    if(arr[i]<min){
        min=arr[i]
    }
}
console.log(max)
console.log(min)

//count and sum of positive,negative and zero in and array
let numbers = [1, -2, 0, 5, -3, 0, -1, 2];
let positivecount=0;
let negativecount=0;
let zerocount=0
let positivesum=0;
let negativesum=0;
let zerosum=0
for(let i=0;i<numbers.length;i++){
   if(numbers[i]>0){
    positivecount=positivecount+1;
    positivesum=positivesum+numbers[i]
   }
   else if(numbers[i]<0){
   negativecount=negativecount+1;
   negativesum=negativesum+numbers[i]
   }
   else{
    zerocount=zerocount+1;
    zerosum=zerosum+numbers[i]
   }
}
console.log(`${positivecount}\n${positivesum}\n${negativecount}\n${negativesum}\n${zerocount}\n${zerosum}\n`)
// console.log(positivecount)
// console.log(positivesum)
// console.log(negativecount)
// console.log(negativesum)
// console.log(zerocount)
// console.log(zerosum)

//prime numbers in an array-->the numbers greater than 1 and divisible by that number itself
let numbers=[1,2,3,4,5,6,7,8,9]
let primes=[]
function isprime(nums){
    if(nums<=1) return false
    for(let i=2;i<=Math.sqrt(nums);i++){
        if(nums%i===0) return false 
        }
        return true
}

for(let i=0;i<numbers.length;i++){
    if(isprime(numbers[i])){
        primes.push(numbers[i])
    }
}
console.log(primes)







//sorting an array
let numberss=[5,6,4,3,1,2]
numberss.sort(function(a,b){
    return a-b
})
console.log(numberss)

/* constructor examples
constructor is a special member or method of the class ,it is called when an object of the class is created or new instance of a class is created.
types of constructors
1.default constructor:a constructor without arguments
2.parametrized constructor:a constructor that takes arguments to initialize.

*/
class Rectangle{
    constructor(width,height
    )
    {
        this.width=width;
        this.height=height;
    }
    area(){
        return this.width*this.height
    }
}
const rect=new Rectangle(5,5)
console.log(rect.area())

//constructor with default values
class employee{
    constructor(name="John",salary=5000){
        this.name=name
        this.salary=salary
    }
    display(){
console.log(this.name,this.salary)
    }


}
const emp1=new employee()
emp1.display()
const emp2=new employee("doe",6000)
emp2.display()
const emp3=new employee("max",4000)
emp3.display()


