module.exports = {
    convertDate
}

function convertDate(obj) {
    let month = obj.getMonth() + 1;
    return obj.getFullYear()+"-"+month+"-"+obj.getDate()+" "+obj.getHours()+":"+obj.getMinutes()+":"+obj.getSeconds();
}