// 格式化日期：yyyy-MM-dd
function formatDate(date: Date): string {
    let year: number = date.getFullYear();
    let month: number = date.getMonth() + 1;
    let day: number = date.getDate();

    return year + "-" + month + "-" + day;
}
export { formatDate }