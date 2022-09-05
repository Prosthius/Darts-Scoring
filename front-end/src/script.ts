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
    document.getElementById('addPlayerBtn')
  );
  addPlayerBtn.addEventListener('click', addPlayer);

let playersHTML: string = '';
let playersHTMLCounter: number = 1;

function addPlayer()
{
    let playerName: string = 
    (document.getElementById('playerNameInp') as HTMLInputElement).value;

    playersHTML += `<div class="input-group">
                        <button type="button" class="btn btn-primary" id="player${playersHTMLCounter}">
                            ${playerName}
                        </button>
                        <span class="input-group-text" id="player${playersHTMLCounter}Target">
                            0
                        </span>
                    </div>`;

    (document.getElementById('players') as HTMLDivElement
    ).innerHTML = playersHTML;

    playersHTMLCounter++;
}

function playerTarget()
{

}
