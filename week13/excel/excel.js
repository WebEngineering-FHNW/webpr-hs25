import { DataFlowVariable } from "../dataflow/dataflow.js";

export { startExcel, refresh, n }

const Formulae =  {
    A1: '$(B3) - $(B2)', B1: '1',              C1: '$(A1) + $(B1)',
    A2: '2',             B2: '2',              C2: '$(A2) + $(B2)',
    A3: '$(A1) + $(A2)', B3: '$(B1) + $(B2)',  C3: '$(C1) + $(C2)',
};

const DFVs = {}; // lazy cache for the backing data flow variables

const cols = ["A","B","C"];
const rows = ["1","2","3"];

function startExcel() {
    const dataContainer = document.getElementById('dataContainer');
    fillTable(dataContainer);
}

function fillTable(container) {
    rows.forEach( row => {
        const tr = document.createElement("TR");
        cols.forEach( col => {
            const td     = document.createElement("TD");
            const input  = document.createElement("INPUT");
            const cellid = "" + col + row;
            input.setAttribute("VALUE", Formulae[cellid]);
            input.setAttribute("ID", cellid);
            DFVs[cellid] = df(input);

            input.onchange = evt => {
                Formulae[cellid] = input.value;
                DFVs[cellid]     = df(input);
                refresh();
            };
            input.onclick  = evt => input.value = Formulae[cellid] ;

            td.appendChild(input);
            tr.appendChild(td);
        });
        container.appendChild(tr);
    });
}

function refresh() {
    cols.forEach( col => {
        rows.forEach( row => {
            const cellid = "" + col + row;
            const input  = document.getElementById(cellid);
            DFVs[cellid] = df(input);
            input.value  = n(input);
        });
    });
}

function df(input) {
    return DataFlowVariable ( () => {
        // uncomment to inspect which DFVs are evaluated when
        // console.log("evaluating: cell " + input.id + " has value " + input.value +", formula " + Formulae[input.id]);
        return Number( eval(Formulae[input.id]))
    } ) ;
}

// get the numerical value of an input element's value attribute
function n(input) {
    return DFVs[input.id]();
}
