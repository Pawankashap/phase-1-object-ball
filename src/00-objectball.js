function gameObject(){
    return {
        home: {
            teamName: 'Brooklyn Nets',
            colors: ['black','white'],
            players: {
                'Alan Anderson': {
                    Number: 0,
                    Shoe:16,
                    Points:22,
                    Rebounds:12,
                    Assists:12,
                    Steals:3,
                    Blocks:1,
                    Slam_Dunks:1,
                },
                'Reggie Evans':{
                     Number: 30,
                    Shoe:14,
                    Points:12,
                    Rebounds:12,
                    Assists:12,
                    Steals:12,
                    Blocks:12,
                    Slam_Dunks:7,
                },
                'Brook Lopez':{
                     Number: 11,
                    Shoe:17,
                    Points:17,
                    Rebounds:19,
                    Assists:10,
                    Steals:3,
                    Blocks:1,
                    Slam_Dunks:15,
                },
                'Mason Plumlee':{
                     Number: 1,
                    Shoe:19,
                    Points:26,
                    Rebounds:12,
                    Assists:6,
                    Steals:3,
                    Blocks:8,
                    Slam_Dunks:5,
                },
                'Jason Terry':{ 
                    Number: 31,
                    Shoe:15,
                    Points:19,
                    Rebounds:2,
                    Assists:2,
                    Steals:4,
                    Blocks:11,
                    Slam_Dunks:1,
                },
            },
        },
        away: {
            teamName: 'Charlotte Hornets',
            colors: ['Turquoise','Purple'],
            players: {
                'Jeff Adrien': {
                     Number: 4,
                    Shoe:18,
                    Points:10,
                    Rebounds:1,
                    Assists:1,
                    Steals:2,
                    Blocks:7,
                    Slam_Dunks:2,
                },
                'Bismak Biyombo':{
                     Number: 0,
                    Shoe:16,
                    Points:12,
                    Rebounds:4,
                    Assists:7,
                    Steals:7,
                    Blocks:15,
                    Slam_Dunks:10,
                },
                'DeSagna Diop':{
                     Number: 2,
                    Shoe:14,
                    Points:24,
                    Rebounds:12,
                    Assists:12,
                    Steals:4,
                    Blocks:5,
                    Slam_Dunks:5,
                },
                'Ben Gordon':{
                     Number: 8,
                    Shoe:15,
                    Points:33,
                    Rebounds:3,
                    Assists:2,
                    Steals:1,
                    Blocks:1,
                    Slam_Dunks:0,
                },
                'Brendan Haywood':{
                     Number: 33,
                    Shoe:15,
                    Points:6,
                    Rebounds:12,
                    Assists:12,
                    Steals:22,
                    Blocks:5,
                    Slam_Dunks:12,
                },
            },
        },
    }
}



function numPointsScored (playerName){
             return allPlayer()[playerName].Points
}
function shoeSize(playerName){
             return allPlayer()[playerName].Shoe
}
function teamColors(teamName){
            return  teamName==='Brooklyn Nets' ? gameObject().home.colors: gameObject().away.colors
}
function playerNumbers(teamName){
            const game = gameObject();
            const homePlayer= game.home.players
            const awayPlayer= game.home.players
            const num = []
           // debugger
            if (teamName===game.home.teamName){
                        for(let key in homePlayer){
                                    num.push(homePlayer[key].Number)
                        }
            }
            else if (teamName===game.away.teamName){
                        for (let key in homePlayer){
                                    num.push(homePlayer[key].Number)
                        }
            }
            return num 
}

function playerStats (playerName){
            const totalplayer =allPlayer()
            for (let key in totalplayer){
                        if(key===playerName){
                                     return totalplayer[key]                                  
                        }
            }
}

function bigShoeRebounds (){
            const totalplayer =allPlayer()
            let shoeValue=0;
            let reboundValue=0;
            for(let key in totalplayer){
                        if(shoeValue===0){
                                    shoeValue=totalplayer[key].Shoe
                                    reboundValue=totalplayer[key].Rebounds
                        }
                        else if (shoeValue < totalplayer[key].Shoe){
                                    shoeValue=totalplayer[key].Shoe
                                    reboundValue=totalplayer[key].Rebounds
                        }
            }
            return reboundValue
}

function mostPointsScored() {
             const game = gameObject();
             const homePlayer= gameObject().home.players
            const awayPlayer=gameObject().away.players
            let scoreValue=0
            let personName;
            //debugger
             if ('Brooklyn Nets'===game.home.teamName)
             {
                          for(let key in homePlayer){
                                    if(scoreValue===0){
                                                scoreValue=homePlayer[key].Points
                                                personName=key
                                    
                                    }
                                    else if (scoreValue < homePlayer[key].Points){
                                                scoreValue=homePlayer[key].Points
                                                personName=key;
                                    }
                        }
             }
            if ('Charlotte Hornets'===game.away.teamName){
                        for(let key in awayPlayer){
                                    if(scoreValue===0){
                                                scoreValue=awayPlayer[key].Points
                                                personName=key;
                                    
                                    }
                                    else if (scoreValue < awayPlayer[key].Points){
                                                scoreValue=awayPlayer[key].Points
                                                personName=key;
                                    }
                        }
            }
            return  personName + ' player has the most points' 
         
}

function winningTeam () {

            const game = gameObject();
             const homePlayer= gameObject().home.players
            const awayPlayer=gameObject().away.players
            let hscoreValue=0
            let ascoreValue=0;
            let homeValue,awayValue;
            //debugger
             if ('Brooklyn Nets'===game.home.teamName)
             {
                          for(let key in homePlayer){
                                    hscoreValue = hscoreValue+homePlayer[key].Points
                                    homeValue=game.home.teamName;
                        }
             }
            if ('Charlotte Hornets'===game.away.teamName){
                        for(let key in awayPlayer){
                                   ascoreValue=ascoreValue+awayPlayer[key].Points
                                   awayValue=game.home.teamName;
                                    
                        }
            }
            if(hscoreValue>ascoreValue){
                        return  homeValue + ' team has the most points'             
            }
            else if(hscoreValue<ascoreValue) {
                        return  awayValue + ' team has the most points'             
            }
            else {
                        return 'Both teams has same points'
            }
}




function allPlayer(){
            
            const homePlayer= gameObject().home.players
            const awayPlayer=gameObject().away.players
            const allPlayers={...homePlayer, ...awayPlayer}
            return allPlayers
}

