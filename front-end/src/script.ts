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

    (document.getElementById('aroundWorldTableData') as HTMLInputElement
    ).innerHTML = scoringTable;
}

function playerTarget()
{
    
}
