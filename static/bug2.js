var count = 11;
var addingButShouldSubtract = 1;

function countDown(){
    count = count - addingButShouldSubtract;
    
    //Just checking your answer!
    checkCount(count, "Count is not Right!", "countDownResult");
}