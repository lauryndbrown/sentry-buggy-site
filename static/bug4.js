function drawStars(numberOfStars){
    var stars = ''; 
    for(var star = 0; star >= 0 && star < numberOfStars; star = star + 1)
        stars+='* ';
    stars+='\n';
    showStars(stars);
    
    checkStars(); //checking the answer
}
