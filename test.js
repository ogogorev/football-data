var request = require('request');

main();

function main() {
    console.log('start');

    request(`http://api.football-data.org/v1/teams/66`, (error, response, body) => {

        console.log(error, JSON.parse(body).name);
    })

}
