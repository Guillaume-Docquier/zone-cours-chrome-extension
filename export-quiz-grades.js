'use strict';

(function() {
    const results = [];
    const resultsTable = document.getElementById("editTotalResults:totalScoreTable");

    // Parse header
    const resultsHeaderRow = []
    const headerColumns = resultsTable.tHead.children[0].children;
    for (const headerColumn of headerColumns) {
        resultsHeaderRow.push(headerColumn.innerText);
    }

    results.push(resultsHeaderRow);

    // Parse results
    const tableBodyRows = resultsTable.tBodies[0].children;
    for (const tableBodyRow of tableBodyRows) {
        const resultRow = [];
        for (const tableBodyRowColumn of tableBodyRow.children) {
            resultRow.push(tableBodyRowColumn.innerText.split('\n')[0]);
        }

        results.push(resultRow);
    }

    // Format to excel table string
    const cellSeparator = '\t';
    const rowSeparator = '\n';
    const resultString = results.map(cells => cells.join(cellSeparator)).join(rowSeparator);

    // Copy to clipboard
    const copyFrom = document.createElement("textarea");
    copyFrom.textContent = resultString;
    document.body.appendChild(copyFrom);

    copyFrom.select();
    document.execCommand('copy');
    copyFrom.blur();

    document.body.removeChild(copyFrom);
})();
