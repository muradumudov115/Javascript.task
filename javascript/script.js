

// 1.1: Funksiyaya ötürülən parametrin arrayin içində olub olmamasını tapın

function find(parametr){
    let bolloen=false
    for (let index = 0; index < arr.length; index++) {
        if(parametr = arr[index]){
            bolloen=true;
            break;
        }
    }
    console.log(bolloen)
}
let arr=[18,25,29,48,17]
find(32)


// 1.2: Arrayda olan cüt ədədləri qaytaran funksiya yazın
function evencount(){
    let count=0;
    for (let index = 0; index < arr.length; index++) {
       
        if(arr[index]%2 == 0){
            console.log(arr[index]) 
            count++;
       
        }

    }
    if(count==0) console.log("Arry-in cut reqemi yoxdur!" )
}



evencount()
// 2) Bir calculator funksiyası olsun. Əgər funksiyaya "+" ötürülərsə toplama, "-" ötürülərsə çıxma,
//  "*" ötürülərsə vurma,  "/" ötürülərsə bölmə əməliyyatını edən funksiyanı yazın.

function calculator(num1,num2,o){
    switch (o) {
        case '+': 
        sum=num1+num2   
            console.log(sum);
            break;
        case '-': 
        sum=num1-num2   
            console.log(sum);
            break;
        case '*': 
        sum=num1*num2   
            console.log(sum);
            break;
        case '/': 
        sum=num1/num2   
            console.log(sum);
            break;

        default:"Zehmet olmasa ededleri duzgun yazin!"
            break;
    }
}
