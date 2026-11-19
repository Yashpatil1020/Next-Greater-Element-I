var nextGreaterElement = function(nums1, nums2) {
    const ans=new Map();
    const stack=[];
    for(let num of nums2){
        while(stack.length>0 && stack[stack.length-1]<num){
            ans.set(stack.pop(),num);
        }
        stack.push(num);
    }
    return nums1.map(num=>ans.get(num)??-1);
};