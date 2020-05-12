// const val = 9999
// console.log(val)
function countBs(str) {
    letter_Count = 0;
    for (i = 0; i < str.length; i++) 
    {
        if (str.charAt(i) == 'B') 
        {
        letter_Count += 1;
        }
    }
    return letter_Count;
  }
console.log("B's_Count = ",countBs('BBB'))

function countChar(str,char){
    letter_Count = 0;
    for (i = 0; i < str.length; i++) 
    {
        if (str.charAt(i) == char) 
        {
        letter_Count += 1;
        }
    }
    return letter_Count;
}
console.log("count_char = ",countChar('VAMSI ALLURI','A'))