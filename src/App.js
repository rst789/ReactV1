import './App.css';
import * as PropTypes from "prop-types";

Text.propTypes = {children: PropTypes.node};

const blogStyle = {
    whiteSpace: "break-spaces",
    backgroundImage: "linear-gradient(to top left, #68e168, #3070b6)",
    color: "seashell"
};

const hMargin = {
    marginLeft: "9%",
    marginRight: "9%",
}

function App() {
  return (
    <div style={blogStyle}>
      <h1 style={hMargin}>Leetcode Solutions</h1>
        <h2 style={hMargin}>1. Two Sum</h2>
        <h5 style={hMargin}>Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
            You may assume that each input would have exactly one solution, and you may not use the same element twice.
            You can return the answer in any order.</h5>

        <code>{`
            class Solution { 
            public int[] twoSum(int[] nums, int target) {

            for(int i = 0; i < nums.length; i++){
            for(int j = i + 1; j < nums.length; j++){
            if(nums[i] == target - nums[j]){
            return new int[] {i,j};
            }
            }
            }
            throw new IllegalArgumentException("Wrong");
            }
            }
            `}
        </code>

        <h2 style={hMargin}>74. Search a 2D Matrix</h2>
        <h5 style={hMargin}>Write an efficient algorithm that searches for a value target in an m x n integer matrix "matrix". This matrix has the following properties:
            Integers in each row are sorted from left to right.
            The first integer of each row is greater than the last integer of the previous row.</h5>
        <code>{`
            class Solution {
            public boolean searchMatrix(int[][] matrix, int target) {
            int row = matrix.length-1;
            int col = 0;

            while(col < matrix[0].length && row>=0){
            if(matrix[row][col]> target){
            row--;
            }
            else if(matrix[row][col] < target){
            col++;
            }
            else{
            return true;
            }
            }

            return false;
            }
            }
            `}
        </code>

        <h2 style={hMargin}>1351. Count Negative Numbers in a Sorted Matrix</h2>
        <h5 style={hMargin}>Given a m x n matrix "grid" which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.</h5>

        <code>{`
            class Solution{
            public int countNegatives(int[][] grid) {
            int rows = grid.length, cols = grid[0].length;
            int result = 0;
            for (int i = 0; i < rows; i++) {
            if (grid[i][0] < 0) {
            result+=cols;
            continue;
            }
            if (grid[i][cols - 1] > 0){
            continue;
            }
            int l = 0, r = cols - 1;
            while (l <= r) {
            int m = (l + r)/2;
            if (grid[i][m] < 0) {
            r = m - 1;
            } else{
            l = m + 1;
            }
            }
            result += (cols - l);
            }
            return result;
            }
            }
            `}
        </code>
    </div>
  );
}

export default App;
