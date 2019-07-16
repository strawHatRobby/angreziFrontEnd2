export const getDate = function(){
        let date = new Date();
        date.setSeconds(0);
        date = date.toLocaleTimeString()
        date = date.replace(':00 ',' ')
        return date
}
