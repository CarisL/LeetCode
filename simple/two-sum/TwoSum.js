var twoSum = function(nums, target) {
    const newArr = [];
    nums.forEach((num,index)=>{
        nums.forEach((n,i)=>{
            if(i!==index && index !== newArr[newArr.length-1]){
                if(num + n === target){
                    newArr.push(index);
                    newArr.push(i);
                }
            }
        })
    })
    return newArr;
};