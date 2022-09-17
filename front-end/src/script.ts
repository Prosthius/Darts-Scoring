import { Player } from './modules/player.js';

let players: Player[] = [];

init();

function init()
{
    let scoringTable: string = '';
    for (let i = 0; i < 20; i++)
    {
        scoringTable += `<tr>
                            <th scope="row">${i + 1}</th>
                            <td id="throws${i + 1}"></td>
                        </tr>`
    }
    scoringTable += `<tr>
                        <th scope="row">Bull</th>
                        <td id="throwsBull"></td>
                    </tr>`;

    (document.getElementById('aroundWorldTableData') as HTMLTableElement
    ).innerHTML = scoringTable;
}

// Needed for addPlayer()
const addPlayerBtn: HTMLButtonElement = <HTMLButtonElement>(
    document.getElementById('addPlayerBtn'));
addPlayerBtn.addEventListener('click', addPlayer);

let playersHTML: string = '';
let playerCounter: number = 1;

function addPlayer()
{
    let playerName: string = 
        (document.getElementById('playerAddInp') as HTMLInputElement).value;

    var player: Player = new Player(playerName, playerCounter);
    players.push(player);

    let playerID: number = players[players.length - 1].id;

    playersHTML += `<div class="input-group" id="player${playerID}">
                        <button type="button" class="btn btn-primary" id="player${playerID}Btn">
                            ${playerName}
                        </button>
                        <span class="input-group-text" id="player${playerID}Target">
                            0
                        </span>
                        <button class="btn btn-outline-dark" type="button" id="removePlayerBtn" value="${playerID}">
                            Remove
                        </button>
                    </div>`;

    (document.getElementById('playersWrapper') as HTMLDivElement
    ).innerHTML = playersHTML;

    playerCounter++;

    var removePlayerBtnWrapper: HTMLButtonElement = <HTMLButtonElement>(
        document.getElementById('playersWrapper'));

    console.log(removePlayerBtnWrapper);

    removePlayerBtnWrapper.addEventListener('click', removePlayer) => {
        // removePlayerBtnWrapper.addEventListener('target', isButton, false);

        if (event.target.nodeName !== 'BUTTON') return;

        console.log(event?.target.id)
    };
}

function isButton()
{
    if(removePlayerBtnWrapper.target.nodeName !== 'BUTTON') return;
}

function removePlayer()
{
    console.log('test');
    let playerToRemove = 
        (document.getElementById('removePlayerBtn') as HTMLInputElement).value;
    console.log(playerToRemove);

    players.splice(playerToRemove as unknown as number, 1);
}

function playerTarget()
{

}
