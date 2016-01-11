module.exports = function(parameter) {
    
    // If parameter is a number, convert from str to num
    
    !isNaN(parameter) ? parameter = Number(parameter) * 1000 : parameter;
    
    // Create date obj
    
    var date = new Date(parameter);
    
    // Check if false, if so, return null obj
    
    var falseDate = {unix:null, natural:null};
    if (isNaN(date.getMonth())) {return falseDate;}
    
    // Create natural language var from date object
    
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    var naturalDate = months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
    
    // Create and return formatted JSON object
    
    var dateObj = {
        unix:date.getTime() / 1000,
        natural:naturalDate
    };
    console.log(dateObj);
    return dateObj;
};