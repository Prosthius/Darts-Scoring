import { Player } from './modules/player.js';

let players: Player[] = [];
let playersHTMLArr: string[] = [];
let playerID: number = 1;

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


const addPlayerBtn: HTMLButtonElement = <HTMLButtonElement>(
    document.getElementById('addPlayerBtn'));
addPlayerBtn.addEventListener('click', addPlayer);

function addPlayer()
{
    let playerName: string = (document.getElementById('playerAddInp') as HTMLInputElement).value;
    let player: Player = new Player(playerName, playerID);

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

function drawPlayers()
{
    let playersHTML: string = '';

    for (let i in playersHTMLArr) playersHTML += playersHTMLArr[i];

    (document.getElementById('playersWrapper') as HTMLDivElement).innerHTML = playersHTML;
}

function eventTarget(evt: any)
{
    return evt.target;
}


var removePlayerBtnWrapper: HTMLButtonElement = <HTMLButtonElement>(
    document.getElementById('playersWrapper'));

removePlayerBtnWrapper.addEventListener('click', removePlayer);

function removePlayer(evt: any)
{
    let isButtonVar = eventTarget(evt);

    if (isButtonVar.id !== 'removePlayerBtn') return;
    // Add player name to alert e.g. 'Are you sure you want to remove ${player}?'
    else if (!confirm('Are you sure you want to remove this player?')) return;
    else
    {
        for (let i in players)
        {
            if (players[i].id as number === parseInt(isButtonVar.value))
            {
                players.splice(parseInt(i), 1);
                playersHTMLArr.splice(parseInt(i), 1);
                break;
            }
        }
        drawPlayers();
    }
}

function playerTarget()
{

}
