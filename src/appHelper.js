function AppHelper() {
    return '' +
        '            class Solution { \n            public int[] twoSum(int[] nums, int target) {\n\n            for(int i = 0; i < nums.length; i++){\n            for(int j = i + 1; j < nums.length; j++){\n            if(nums[i] == target - nums[j]){\n            return new int[] {i,j};\n            }\n            }\n            }\n            throw new IllegalArgumentException("Wrong");\n            }\n            }\n            ';
}

export default AppHelper();