import { Player } from './modules/player.js';
let players = [];
let playersHTMLArr = [];
let playerID = 1;
init();
function init() {
    let scoringTable = '';
    for (let i = 0; i < 20; i++) {
        scoringTable += `<tr>
                            <th scope="row">${i + 1}</th>
                            <td id="throws${i + 1}"></td>
                        </tr>`;
    }
    scoringTable += `<tr>
                        <th scope="row">Bull</th>
                        <td id="throwsBull"></td>
                    </tr>`;
    document.getElementById('aroundWorldTableData').innerHTML = scoringTable;
}
const addPlayerBtn = (document.getElementById('addPlayerBtn'));
addPlayerBtn.addEventListener('click', addPlayer);
function addPlayer() {
    let playerName = document.getElementById('playerAddInp').value;
    let player = new Player(playerName, playerID);
    players.push(player);
    playersHTMLArr.push(`<div class="input-group" id="playerDiv" value="${playerID}">
                            <button type="button" class="btn btn-primary" id="playerSelectBtn" value="${playerID}">
                                ${playerName}
                            </button>
                            <span class="input-group-text" id="player${playerID}Target">
                                <!-- Prints the score of the most recently added player. It should work fine. -->
                                ${players[players.length - 1].score}
                            </span>
                            <button class="btn btn-outline-dark" type="button" id="removePlayerBtn" value="${playerID}">
                                Remove
                            </button>
                        </div>`);
    playerID++;
    drawPlayers();
}
function drawPlayers() {
    let playersHTML = '';
    for (let i in playersHTMLArr)
        playersHTML += playersHTMLArr[i];
    document.getElementById('playersWrapper').innerHTML = playersHTML;
}
function eventTarget(evt) {
    return evt.target;
}
var removePlayerBtnWrapper = (document.getElementById('playersWrapper'));
removePlayerBtnWrapper.addEventListener('click', removePlayer);
function removePlayer(evt) {
    // add alert asking if you want to remove player
    let isButtonVar = eventTarget(evt);
    if (isButtonVar.id !== 'removePlayerBtn')
        return;
    else {
        for (let i in players) {
            if (players[i].id === parseInt(isButtonVar.value)) {
                players.splice(parseInt(i), 1);
                playersHTMLArr.splice(parseInt(i), 1);
                break;
            }
        }
        drawPlayers();
    }
}
function playerTarget() {
}
