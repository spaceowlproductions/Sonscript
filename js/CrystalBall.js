//This is the Crystal Ball.  It stores information to build interactive worlds.

var gameData;

const questions = 
{
    'World Areas':'#',
    'Area Events':'!',
    'characters':'@',
    'items':'*'
}
speakToCrystalBall(answer)
{
    //store given answer into game text file using question symbols for markup

    //find out how to parse gameData so that we can add data where it needs to go based on questions being answered

    gameData += questions[currentQuestion] + ' ' + answer + '\n';
}