module.exports = function average(...nums) {
    return nums.reduce((sum, num) => sum + num) / nums.length
}