/**
 * Created by zengz on 2016/7/11.
 */
function oneYear(a, b) {
    var adate = new Date(a[0] + 1, a[1], a[2]);
    var bdate = new Date(b[0], b[1], b[2]);
    return adate > bdate;
}
function getday(n){
    if(n==1){return '1st';}
    if(n==2){return '2nd';}
    if(n==3){return '3rd';}
    return n+'th';
}
function makeFriendlyDates(arr) {
    var month = ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var date = new Date();
    var nowyear = date.getFullYear();

    var time1 = arr[0].split('-');
    time1[0] = parseInt(time1[0]);
    time1[1] = parseInt(time1[1]);
    time1[2] = parseInt(time1[2]);
    var time2 = arr[1].split('-');
    time2[0] = parseInt(time2[0]);
    time2[1] = parseInt(time2[1]);
    time2[2] = parseInt(time2[2]);

    if (oneYear(time1, time2)) {

        if (time1[0] == time2[0]) {
            if (time1[1] == time2[1]) {
                if (time1[2] == time2[2]) {
                    delete time2[2];
                }
                delete time2[1];
            }

        }
        if (time1[0] == nowyear) {
            delete time1[0];
        }
        delete time2[0];
    }
    var tempArr = [];
    var temp = '';
    if (time1[1]) {
        temp += month[time1[1]];
    }
    if (time1[2]) {
        temp = temp + ' ' + getday(time1[2]);
    }
    if (time1[0]) {
        temp = temp + ', ' + time1[0];
    }
    tempArr.push(temp);
    temp = '';
    if (time2[1]) {
        temp += month[time2[1]];
    }
    if (time2[2]) {
        temp = temp + ' ' + getday(time2[2]);
    }
    if (time2[0]) {
        temp = temp + ', ' + time2[0];
    }
    temp = temp.trim();
    if (temp) {
        tempArr.push(temp);
    }

    console.log(time1);
    console.log(time2);
    console.log(tempArr);
    return tempArr;
}

makeFriendlyDates(["2018-01-13", "2019-01-10"]);