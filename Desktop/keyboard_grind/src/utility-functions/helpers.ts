export const formatPercentage = (percentage: number) => {
    return percentage.toFixed(0) + "%";
}

console.log(formatPercentage(7));