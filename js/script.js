let count = 0;
const counter = document.getElementById('counter');
const chosenTable = document.getElementById('chosenTable');
let sum = 0;

const myArr =[
    ["1","كيمياء عضوية (1)",500,"n"],
    ["2","عملي كيمياء عضوية (1)",200,"n"],
    ["3","كيمياء تحليلية",500,"n"],
    ["4","عملي كيمياء تحليلية",200,"n"],
    ["5","كيمياء عضوية (2)",500,"n"],
    ["6","مايكروبيولوجي (1)",150,"n"],
    ["7","Subject 7",150,"n"],
    ["8","Subject 8",150,"n"],
    ["9","Subject 9",150,"n"],
    ["10","Subject 10",500,"n"],
    ["11","Subject 11",200,"n"],
    ["12","Subject 12",300,"n"],
    ["13","Subject 13",700,"n"],
    ["14","Subject 14",100,"n"],
    ["15","Subject 15",700,"n"],
    ["16","Subject 16",500,"n"],
    ["17","Subject 17",500,"n"],
    ["18","Subject 18",100,"n"],
    ["19","Subject 19",100,"n"],
    ["20","Subject 20",500,"n"],
    ["21","Subject 21",500,"n"],
    ["22","Subject 22",600,"n"],
    ["23","Subject 23",600,"n"],
    ["24","Subject 24",600,"n"],
    ["25","Subject 25",700,"n"],
    ["26","Subject 26",700,"n"],
    ["27","Subject 27",700,"n"],
    ["28","Subject 28",500,"n"],
    ["29","Subject 29",200,"n"]
];

function subjectRegistration(Button, itemIndex){
    
    Button.disabled = true;
    const cl = counter.classList;
    const c = 'animated-counter';
    cl.remove(c, cl.contains(c));
    setTimeout (() => counter.classList.add('animated-counter'),1);
    myArr[itemIndex-1][3] = "J";
    rearrangeTable()
}

function addRowtoTable(itemIndex){

    count++;

    let tbodyRef = chosenTable.getElementsByTagName('tbody')[0];

    // Insert a row at the end of table
    let newRow = tbodyRef.insertRow();

    // Insert a cell at the end of the row
    let deleteCell = newRow.insertCell();
    // Append a button node to the cell
    deleteCell.innerHTML = '<button class="deleteButton" onclick="deleteRow(this, ' + itemIndex + ')">X</button>';

    // Insert a cell at the end of the row
    let subjectPrice = newRow.insertCell();
    // Append a text node to the cell
    let subjectPriceText = document.createTextNode(myArr[itemIndex-1][2]);
    subjectPrice.appendChild(subjectPriceText);

    // Insert a cell at the end of the row
    let subjectName = newRow.insertCell();
    // Append a text node to the cell
    let subjectNameText = document.createTextNode(myArr[itemIndex-1][1]);
    subjectName.appendChild(subjectNameText);
   
    // Insert a cell at the end of the row
    let subjectNumber = newRow.insertCell();
    // Append a text node to the cell
    let subjectNumberText = document.createTextNode(count);
    subjectNumber.appendChild(subjectNumberText);

    myArr[itemIndex-1][3] = "J";
}

function deleteRow(button, itemIndex){
    myArr[itemIndex-1][3] = "N";
    disableButton(itemIndex);
    rearrangeTable();
}

function disableButton(itemIndex){
    let button = document.getElementById('Button' + itemIndex);
    button.disabled = false;
}

function rearrangeTable(){

    let tableLength = chosenTable.rows.length;
    while (tableLength>1){
        chosenTable.deleteRow(tableLength-1);
        tableLength--;
    }
       
    count = 0;
    for (let i = 0; i <myArr.length; i++){
        if (myArr[i][3] == "J"){
            addRowtoTable(i+1);
        }
    }

    counter.innerText = count;

    addSumRow();
}

function addSumRow(){

    let tbodyRef = chosenTable.getElementsByTagName('tbody')[0];

    // Insert a row at the end of table
    let newRow = tbodyRef.insertRow();
    newRow.id = "total";

    // Insert a cell at the end of the row
    let emptyCell = newRow.insertCell();
    let emptyCellText = document.createTextNode("");
    emptyCell.appendChild(emptyCellText);

    // Insert a cell at the end of the row
    let sumCell = newRow.insertCell();
    // Append a text node to the cell
    sum = 0;
    for (let i = 0; i <myArr.length; i++){
        if (myArr[i][3] == "J"){
            sum = sum + myArr[i][2];
        }
    }
    let sumCellText = document.createTextNode(sum);
    sumCell.appendChild(sumCellText);
    
     // Insert a cell at the end of the row
     let subjectTotal = newRow.insertCell();
     // Append a text node to the cell
     let subjectTotalText = document.createTextNode("المجموع");
     subjectTotal.appendChild(subjectTotalText);

     // Insert a cell at the end of the row
    let emptyCell2 = newRow.insertCell();
    let emptyCellText2 = document.createTextNode("");
    emptyCell2.appendChild(emptyCellText2);
}