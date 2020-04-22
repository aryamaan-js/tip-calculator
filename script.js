function calcTip(details) {
    return details['Bill'] * details['Percentage'] / details['Share'];
}

function show() {
    let details = {
        "Bill": parseInt(document.getElementById('bill').value),
        "Percentage": parseInt(document.getElementById('tip-percentage').value) / 100,
        "Share": parseInt(document.getElementById('people').value),
    }
    let output = document.createElement('h2');
    output.id = 'output-head';
    let outputDiv = document.querySelector('#output');
    let tNode = document.createTextNode(calcTip(details));
    output.appendChild(tNode);
    outputDiv.appendChild(output);
}

function reset() {
    document.getElementById('output-head').remove();
}
