"use strict";
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
// Needed for addPlayer()
const addPlayerBtn = (document.getElementById('addPlayerBtn'));
addPlayerBtn.addEventListener('click', addPlayer);
let playersHTML = '';
let playersHTMLCounter = 1;
function addPlayer() {
    let playerName = document.getElementById('playerNameInp').value;
    playersHTML += `<div class="input-group">
                        <button type="button" class="btn btn-primary" id="player${playersHTMLCounter}">
                            ${playerName}
                        </button>
                        <span class="input-group-text" id="player${playersHTMLCounter}Target">
                            0
                        </span>
                    </div>`;
    document.getElementById('players').innerHTML = playersHTML;
    playersHTMLCounter++;
}
function playerTarget() {
}
