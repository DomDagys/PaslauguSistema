module.exports = {
    convertDate
}

function convertDate(obj) {
    return obj.getFullYear()+"-"+obj.getMonth()+"-"+obj.getDate()+" "+obj.getHours()+":"+obj.getMinutes()+":"+obj.getSeconds();
}