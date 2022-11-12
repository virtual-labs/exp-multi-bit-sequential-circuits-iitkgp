/* /*Lab:exp_exp_9a_Shift_Register
	File name: addtbl_exp9a.js
  content: inert  into table, plot graph
    Author:Prakriti Dhang */

    /* Table creation */
var tabrowindex = 0;
var arr = [];
var table;
var clmns, vlt, columns, rest;
var dataPoints = [];

var table, rows, switching, i, x, y, shouldSwitch;
function instbl(){
    /*table = document.getElementById("mytablesr");

    
    arr[0]=clkp[0];

    arr[1]=sr[0];
    arr[2]=sr[1];
    

    arr[3]=qq1[0];
    arr[4]=qq1[1];

    arr[5]=action;    
    

    tabrowindex + 1;
    
       
    var row = table.insertRow(++tabrowindex); // Row increment
    for (var q = 0; q < 6; q++) {

        var cell = row.insertCell(q);
        cell.innerHTML = arr[q];
       
    }
    var rowCount = document.getElementById('mytableshftreg').rows.length;

if(rowCount == 5){
    document.getElementById('plotb').style.visibility="visible";
}
else{
    document.getElementById('plotb').style.visibility="visible";
}*/
}


     function plotshftreg1(){
       
        document.getElementById('graphshowsr').style.display="block";
        //document.getElementById('graphshowsr2').style.display="none";
        plotgraph();
        dsplot();
        q10plot();
        q11plot();
        q12plot();
        q13plot();
       
        
     }

     function plotshftreg2(){
        document.getElementById('graphshowsr2').style.display="block";
        
        plotgraphcp2();
        splot();
        p0plot();
        q0plot();
        p1plot();
        q1plot();
        p2plot();
        q2plot();
        p3plot();
        q3plot();
        
       
        
     }