function bubblesort(nums){
   do{
      var proceed = false;
      for (i = 0; i < nums.length-1; i++){
         if (nums[i] > nums[i+1]){
            var swap = nums[i];
            nums[i] = nums[i+1];
            nums[i+1] = swap;
            proceed = true;
         }
      }
   }while (proceed);
}

