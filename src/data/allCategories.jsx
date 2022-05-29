async function loadIntoTable (url, table) {
    const tableHead = table.querySelector('thead');
    const tableBody = table.querySelector('tbody');
    const response = await fetch(url);
    const data = await response.json();

    tableHead.innerHTML = "<tr></tr>";
    tableBody.innerHTML = "";

    for (const HeaderText of Headers) {
        const headerElement = document.createElement('th');
        headerElement.innerText = HeaderText;
        tableHead.firstElementChild.appendChild(headerElement);
    }

    for (const row of data) {
        const rowElement = document.createElement('tr');
        for (const celText of row) {
            const cellElement = document.createElement('td');
            cellElement.innerText = celText;
            rowElement.appendChild(cellElement);
        }
        tableBody.appendChild(rowElement);
    }


}

loadIntoTable('./categorias.json', document.querySelector('#categoriesTable'));

