var second = 0
var mins= 1
var hours= 1
var days = 1
document.getElementById('days').innerText = 9
document.getElementById('hours').innerText = 23
document.getElementById('minutes').innerText = 59
var myFunc = function(){
    if (second!==59){
        document.getElementById('seconds').innerText = 59-second
        second++
    }else{
        second=0
        if (mins!==59){
            document.getElementById('minutes').innerText = 59-mins
            mins++
        }else{
            mins=0
            if (hours!==23){
                document.getElementById('hours').innerText = 23-hours
                hours++
            }else{
                hours=0
                if (days!==10){
                    document.getElementById('days').innerText = 10-days
                    days++
                }else{
                    window.location.reload()
                }
            }
        }
    }
    
}
setInterval(myFunc, 1000)