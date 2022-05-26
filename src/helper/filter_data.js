export const fileteredData = (data,type,category) => {
    const filterArray =  data.length == 0 ? 0 : data.filter((fil) => fil[type] === category)
    return filterArray
}