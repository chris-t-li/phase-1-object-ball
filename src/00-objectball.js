function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },

                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },

                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },

                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },

                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },

        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },

                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },

                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },

                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },

                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}
console.log(gameObject());

// 1. returns the number of points scored for a player

function numPointsScored(playerName) {
    for (const key in gameObject()) {
        for (const playerStats in gameObject()[key].players) {
            if(playerName === playerStats) {
                return gameObject()[key].players[playerName].points;
            }
        }
    }
}
console.log(numPointsScored("Ben Gordon"));

//2. returns the shoe size of a particular player

function shoeSize(playerName) {
    for (const key in gameObject()) {
        for (const playerStats in gameObject()[key].players) {
            if(playerName === playerStats) {
                return gameObject()[key].players[playerName].shoe;
            }
        }
    }
}
console.log(shoeSize("Bismak Biyombo"));

// 3. returns array of team colors

function teamColors(teamName) {
    if (gameObject().home.teamName === teamName) {
        return gameObject().home.colors;
    } else if (gameObject().away.teamName === teamName) {
        return gameObject().away.colors;
    }
}
console.log(teamColors("Brooklyn Nets"));

// 4. returns an array of team names

function teamNames() {
    const teamNameArray = [];
    for(const key in gameObject()) {
        teamNameArray.push(gameObject()[key].teamName)
    }
    return teamNameArray;
}

console.log(teamNames());

// 5. takes in argument of team name and returns array of jersey numbers

function playerNumbers(teamName) {
    const teamNumArray = [];
    for (const key in gameObject()) {
        if (gameObject()[key].teamName === teamName) {
            const teamObj = gameObject()[key].players
            for (const player in teamObj) {
                teamNumArray.push(teamObj[player].number)
            }
        }
    }
    return teamNumArray;
}

console.log(playerNumbers("Brooklyn Nets"));
console.log(playerNumbers("Charlotte Hornets"));

// 6. playerStats Function
function playerStats(playerName) {
    for (const key in gameObject()) {
        for (const player in gameObject()[key].players) {
            if (playerName === player) {
                return gameObject()[key].players[player];
            }
        }
    }
}

console.log(playerStats("Alan Anderson"));
console.log(playerStats("Brook Lopez"));

// 7. Returns number of rebounds associated with player that has the largest shoe size

function bigShoeRebounds() {
    // 1. Find the player with the largest shoe size
    const findMaxShoe = function () {
        let maxShoe = 0;
        for (const key in gameObject()) {
            for (const player in gameObject()[key].players) {
                if (gameObject()[key].players[player].shoe >= maxShoe) {
                    maxShoe = gameObject()[key].players[player].shoe;
                }
            }
        }
        return maxShoe;
    }
    // 2. Return the player's number of rebounds
    for (const key in gameObject()) {
        for (const player in gameObject()[key].players) {
            if (gameObject()[key].players[player].shoe === findMaxShoe()) {
                return gameObject()[key].players[player].rebounds;
            }
        }
    }
}

console.log(bigShoeRebounds());

// Bonus Question 1: player that scored the most points

function mostPointsScored(){
    let mostPoints = 0;
    for (const key in gameObject()){
        for (const player in gameObject()[key].players) {
            if (gameObject()[key].players[player].points >= mostPoints) {
                mostPoints = gameObject()[key].players[player].points;
            }
        }
    }
    return mostPoints;
}

console.log(mostPointsScored());

// Bonus Question 2: the team that has the most points

function winningTeam() {
    let homePoints = 0, awayPoints = 0;
    for (const player in gameObject().home.players) {
        homePoints += gameObject().home.players[player].points
    }
    
    for (const player in gameObject().away.players) {
        awayPoints += gameObject().away.players[player].points
    }

    if(homePoints > awayPoints) {
        return `${gameObject().home.teamName} won with ${homePoints} points`
    } else if (homePOints < awayPoints) {
        return `${gameObject().away.teamName} won with ${awayPoints} points`
    } else {
        return "It was a tie"
    }
}

console.log(winningTeam())

// Bonus Question 3: player with the longest name

function playerWithLongestName() {
    let nameLength = 0, longestPlayer = "";
    for (const key in gameObject()) {
        for (const player in Object.keys(gameObject()[key].players)) {
            if (Object.keys(gameObject()[key].players)[player].length >= nameLength);
            nameLength = Object.keys(gameObject()[key].players)[player].length;
            longestPlayer = Object.keys(gameObject()[key].players)[player]
        }
    }
    return `Player with the longest name is ${longestPlayer} with ${nameLength} characters`
}

console.log(playerWithLongestName())
