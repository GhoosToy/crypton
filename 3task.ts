function sort(unsortArray: Array<number>)  {
   let i, temp, count8 = 0;
   for(i=0; i< unsortArray.length; i++){
       if (unsortArray[i]== 8){
           count8++;
           unsortArray.splice(i,1);
       }
   } 
   unsortArray.sort(( a, b ) =>  a - b);
   for(i=0; i<count8; i++){
       unsortArray.push(8)
   }
}
const numbers = [4,6,4,9,8,9,0];
sort(numbers);
console.log(numbers);