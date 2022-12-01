/*Lab:exp_exp_9a_Shift_Register
	File name: graphchartjs9a.js
  content: creating canvasjs, ploting graph.
    Author:Prakriti Dhang */


var dataPoints =[];
var dataPointr =[];
var dataPointq =[];
var dataPointqb =[];

/*  Plot CP1 starts*/

function plotgraph () {
  CanvasJS.addColorSet("greenShades",
  [//colorSet Array

 
    "#90EE90"   ,
              
  ]);
  var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    exportEnabled: true,
    animationDuration: 7000,
    colorSet:  "greenShades",
    theme: "dark1", 
   
    title:{
      text: "Shift Register",
      fontSize: 15,
    },
    axisY:{ 
      title: "Clk 1",
      interval: 0.5,
      lineThickness: 1,
      minimum: 0,
      maximum: 1,
      gridThickness: 0.2,
      lineThickness: 0.5,
    
    },
    axisX:{ 
      lineThickness: 1,
      interval: 1,
      minimum: 0,
      maximum: 10,
      lineThickness: 0.5,
    
    },
    data: [{
      type: "stepLine",
      color: "green",
      markerSize: 2,
      dataPoints: [
        { x: 0, y: 1 },
        { x: 1, y: 0 },
        { x: 2, y: 1},
        { x: 3, y: 0 },
        { x: 4, y: 1},
        { x: 5, y: 0 },
        { x: 6, y: 1},
        { x: 7, y: 0 },
        { x: 8, y: 1},
        { x: 9, y: 0},
        { x: 10, y: 0}

      ]
    }]
  });
  chart.render();
}

/*  Plot CP1 ends*/
/*  Plot CP2 starts*/
function plotgraphcp2 () {
  CanvasJS.addColorSet("greenShades",
  [//colorSet Array

 
    "#90EE90"   ,
              
  ]);
  var chart = new CanvasJS.Chart("chartContainercp2", {
    animationEnabled: true,
    exportEnabled: true,
    animationDuration: 7000,
    colorSet:  "greenShades",
    theme: "dark1", 
   
    
    axisY:{ 
      title: "Clk 2",
      interval: 0.5,
      lineThickness: 1,
      minimum: 0,
      maximum: 1,
      gridThickness: 0.2,
      lineThickness: 0.5,
    
    },
    axisX:{ 
      lineThickness: 1,
      interval: 1,
      minimum: 0,
      maximum: 10,
      lineThickness: 0.5,
    
    },
    data: [{
      type: "stepLine",
      color: "green",
      markerSize: 2,
      dataPoints: [
        { x: 0, y: 1 },
        { x: 1, y: 0 },
        { x: 2, y: 1},
        { x: 3, y: 0 },
        { x: 4, y: 1},
        { x: 5, y: 0 },
        { x: 6, y: 1},
        { x: 7, y: 0 },
        { x: 8, y: 1},
        { x: 9, y: 0},
        { x: 10, y: 0}

      ]
    }]
  });
  chart.render();
}

/*  Plot CP2 ends*/

/*  Plot S start*/
function splot(){

  /*for (var tabrowindex = 1; tabrowindex < table.rows.length; tabrowindex++) {
    var rwe1 = table.rows[tabrowindex].cells;
    

    dataPoints.push( { y: parseFloat(rwe1[1].innerHTML)});
    
}*/
  var charts = new CanvasJS.Chart("chartContainers", {
    animationEnabled: true,
    exportEnabled: true,
    animationDuration: 7000,
    colorSet:  "greenShades",
    theme: "dark1", 
   
  
     
    axisY:{ 
      title: "S",
      interval: 0.5,
      minimum: 0,
      maximum: 1,
      gridThickness: 0.2,
      lineThickness: 0.5,
    },
    axisX:{ 
     
      interval: 1,
      minimum: 0,
      maximum: 10,
      lineThickness: 0.5,
    },
    data: [{
      type: "stepLine",
      color: "purple",
      markerSize: 5,
      dataPoints: [
        { x: 0, y: 1 },
        { x: 1, y: 1 },
        { x: 2, y: 1},
        { x: 3, y: 1 },
        { x: 4, y: 1}
        

      ]
    }]
  });
  charts.render();
}
/*  Plot S ends*/
/*  Plot Ds starts*/
function dsplot(){

  /*for (var tabrowindex = 1; tabrowindex < table.rows.length; tabrowindex++) {
    var rwe1 = table.rows[tabrowindex].cells;
    

    dataPointr.push( { y: parseFloat(rwe1[2].innerHTML)});
    
}*/
  var chartr = new CanvasJS.Chart("chartContainerds", {
    animationEnabled: true,
    exportEnabled: true,
    animationDuration: 7000,
    colorSet:  "greenShades",
    theme: "dark1", 
    
    axisY:{ 
      title: "Ds",
      interval: 0.5,
      minimum: 0,
      maximum: 1,
      gridThickness: 0.2,
      lineThickness: 0.5,
    },
    axisX:{ 
     
      interval: 1,
      minimum: 0,
      maximum: 10,
      lineThickness: 0.5,
    },
    data: [{
      type: "stepLine",
      color: "orange",
      markerSize: 5,
      dataPoints: [
        { x: 0, y: 1 },
        { x: 1, y: 1 },
        { x: 2, y: 1},
        { x: 3, y: 1 },
        { x: 4, y: 1}
        

      ]
    }]
  });
  chartr.render();


}
/*  Plot Ds ends*/
/*  Plot P1 starts*/
function p0plot(){

  /*for (var tabrowindex = 1; tabrowindex < table.rows.length; tabrowindex++) {
    var rwe1 = table.rows[tabrowindex].cells;
    

    dataPointr.push( { y: parseFloat(rwe1[2].innerHTML)});
    
}*/
  var chartr = new CanvasJS.Chart("chartContainerp0", {
    animationEnabled: true,
    exportEnabled: true,
    animationDuration: 7000,
    colorSet:  "greenShades",
    theme: "dark1", 
    
    axisY:{ 
      title: "P0",
      interval: 0.5,
      minimum: 0,
      maximum: 1,
      gridThickness: 0.2,
      lineThickness: 0.5,
    },
    axisX:{ 
     
      interval: 1,
      minimum: 0,
      maximum: 10,
      lineThickness: 0.5,
    },
    data: [{
      type: "stepLine",
      color: "orange",
      markerSize: 5,
      dataPoints: [
        { x: 0, y: 1 },
        { x: 1, y: 1 },
        { x: 2, y: 1},
        { x: 3, y: 1 },
        { x: 4, y: 1}
        

      ]
    }]
  });
  chartr.render();


}
/*  Plot P0 ends*/
/*  Plot P1 starts*/
function p1plot(){

  /*for (var tabrowindex = 1; tabrowindex < table.rows.length; tabrowindex++) {
    var rwe1 = table.rows[tabrowindex].cells;
    

    dataPointr.push( { y: parseFloat(rwe1[2].innerHTML)});
    
}*/
  var chartr = new CanvasJS.Chart("chartContainerp1", {
    animationEnabled: true,
    exportEnabled: true,
    animationDuration: 7000,
    colorSet:  "greenShades",
    theme: "dark1", 
    
    axisY:{ 
      title: "P1",
      interval: 0.5,
      minimum: 0,
      maximum: 1,
      gridThickness: 0.2,
      lineThickness: 0.5,
    },
    axisX:{ 
     
      interval: 1,
      minimum: 0,
      maximum: 10,
      lineThickness: 0.5,
    },
    data: [{
      type: "stepLine",
      color: "orange",
      markerSize: 5,
      dataPoints: [
        { x: 0, y: 1 },
        { x: 1, y: 1 },
        { x: 2, y: 1},
        { x: 3, y: 1 },
        { x: 4, y: 1}
        

      ]
    }]
  });
  chartr.render();


}
/*  Plot P1 ends*/

/*  Plot P2 starts*/

function p2plot(){

  /*for (var tabrowindex = 1; tabrowindex < table.rows.length; tabrowindex++) {
    var rwe1 = table.rows[tabrowindex].cells;
    

    dataPointr.push( { y: parseFloat(rwe1[2].innerHTML)});
    
}*/
  var chartr = new CanvasJS.Chart("chartContainerp2", {
    animationEnabled: true,
    exportEnabled: true,
    animationDuration: 7000,
    colorSet:  "greenShades",
    theme: "dark1", 
    
    axisY:{ 
      title: "P2",
      interval: 0.5,
      minimum: 0,
      maximum: 1,
      gridThickness: 0.2,
      lineThickness: 0.5,
    },
    axisX:{ 
     
      interval: 1,
      minimum: 0,
      maximum: 10,
      lineThickness: 0.5,
    },
    data: [{
      type: "stepLine",
      color: "orange",
      markerSize: 5,
      dataPoints: [
        { x: 0, y: 0},
        { x: 1, y: 1 },
        { x: 2, y: 1},
        { x: 3, y: 1 },
        { x: 4, y: 1}
        

      ]
    }]
  });
  chartr.render();


}


/*  Plot P2 ends */
/*  Plot P3 starts*/
function p3plot(){

  /*for (var tabrowindex = 1; tabrowindex < table.rows.length; tabrowindex++) {
    var rwe1 = table.rows[tabrowindex].cells;
    

    dataPointr.push( { y: parseFloat(rwe1[2].innerHTML)});
    
}*/
  var chartr = new CanvasJS.Chart("chartContainerp3", {
    animationEnabled: true,
    exportEnabled: true,
    animationDuration: 7000,
    colorSet:  "greenShades",
    theme: "dark1", 
    
    axisY:{ 
      title: "P3",
      interval: 0.5,
      minimum: 0,
      maximum: 1,
      gridThickness: 0.2,
      lineThickness: 0.5,
    },
    axisX:{ 
     
      interval: 1,
      minimum: 0,
      maximum: 10,
      lineThickness: 0.5,
    },
    data: [{
      type: "stepLine",
      color: "orange",
      markerSize: 5,
      dataPoints: [
        { x: 0, y: 0 },
        { x: 1, y: 0 },
        { x: 2, y: 1},
        { x: 3, y: 1 },
        { x: 4, y: 1}
        

      ]
    }]
  });
  chartr.render();


}
/*  Plot P3 ends*/

/*  Plot q0 starts */

function q0plot(){
  /*for (var tabrowindex = 1; tabrowindex < table.rows.length; tabrowindex++) {
    var rwe1 = table.rows[tabrowindex].cells;
    

    dataPointq.push( { y: parseFloat(rwe1[3].innerHTML)});
    
}*/

  var chartq = new CanvasJS.Chart("chartContainerq0", {
    animationEnabled: true,
    exportEnabled: true,
    animationDuration: 7000,
    colorSet:  "greenShades",
    theme: "dark1", 
    
    axisY:{ 
      title: "Q0",
      interval: 0.5,
      minimum: 0,
      maximum: 1,
      gridThickness: 0.2,
      lineThickness: 0.5,
    },
    axisX:{ 
     
      interval: 1,
      minimum: 0,
      maximum: 10,
      lineThickness: 0.5,
    },
    data: [{
      type: "stepLine",
      color: "blue",
      markerSize: 5,
      dataPoints: [
        { x: 0, y: 1 },
        { x: 1, y: 1 },
        { x: 2, y: 1},
        { x: 3, y: 1 },
        { x: 4, y: 1},
        { x:5, y: 1},
        { x: 6, y: 1}
        

      ]
    }]
  });
  chartq.render();

}
/*  Plot q0 ends */
/*  Plot q1 starts */

function q1plot(){
  /*for (var tabrowindex = 1; tabrowindex < table.rows.length; tabrowindex++) {
    var rwe1 = table.rows[tabrowindex].cells;
    

    dataPointqb.push( { y: parseFloat(rwe1[4].innerHTML)});
    
}*/
  var chartqb = new CanvasJS.Chart("chartContainerq1", {
    animationEnabled: true,
    exportEnabled: true,
    animationDuration: 7000,
    colorSet:  "greenShades",
    theme: "dark1", 
   
    axisY:{ 
      title: "Q1",
      interval: 0.5,
      minimum: 0,
      maximum: 1,
      gridThickness: 0.2,
      lineThickness: 0.5,
    },
    axisX:{ 
     
      interval: 1,
      minimum: 0,
      maximum: 10,
      lineThickness: 0.5,
    
    },
    data: [{
      type: "stepLine",
      color: "pink",
      markerSize: 5,
      dataPoints: [
        { x: 0, y: 0 },
        { x: 1, y: 1 },
        { x: 2, y: 1},
        { x: 3, y: 1 },
        { x: 4, y: 1},
        { x:5, y: 1},
        { x: 6, y: 1}
        

      ]
    }]
  });
  chartqb.render();
  
}

/*  Plot q1 ends */
/*Plot q2 starts */
function q2plot(){
  /*for (var tabrowindex = 1; tabrowindex < table.rows.length; tabrowindex++) {
    var rwe1 = table.rows[tabrowindex].cells;
    

    dataPointqb.push( { y: parseFloat(rwe1[4].innerHTML)});
    
}*/
  var chartqb = new CanvasJS.Chart("chartContainerq2", {
    animationEnabled: true,
    exportEnabled: true,
    animationDuration: 7000,
    colorSet:  "greenShades",
    theme: "dark1", 
   
    axisY:{ 
      title: "Q2",
      interval: 0.5,
      minimum: 0,
      maximum: 1,
      gridThickness: 0.2,
      lineThickness: 0.5,
    },
    axisX:{ 
     
      interval: 1,
      minimum: 0,
      maximum: 10,
      lineThickness: 0.5,
    
    },
    data: [{
      type: "stepLine",
      color: "pink",
      markerSize: 5,
      dataPoints: [
        { x: 0, y: 0 },
        { x: 1, y: 0 },
        { x: 2, y: 1},
        { x: 3, y: 1 },
        { x: 4, y: 1},
        { x:5, y: 1},
        { x: 6, y: 1}
        

      ]
    }]
  });
  chartqb.render();
  
}

/*  Plot q2 ends */
/*Plot q3 starts */

function q3plot(){
  /*for (var tabrowindex = 1; tabrowindex < table.rows.length; tabrowindex++) {
    var rwe1 = table.rows[tabrowindex].cells;
    

    dataPointqb.push( { y: parseFloat(rwe1[4].innerHTML)});
    
}*/
  var chartqb = new CanvasJS.Chart("chartContainerq3", {
    animationEnabled: true,
    exportEnabled: true,
    animationDuration: 7000,
    colorSet:  "greenShades",
    theme: "dark1", 
   
    axisY:{ 
      title: "Q3",
      interval: 0.5,
      minimum: 0,
      maximum: 1,
      gridThickness: 0.2,
      lineThickness: 0.5,
    },
    axisX:{ 
     
      interval: 1,
      minimum: 0,
      maximum: 10,
      lineThickness: 0.5,
    
    },
    data: [{
      type: "stepLine",
      color: "pink",
      markerSize: 5,
      dataPoints: [
        { x: 0, y: 0 },
        { x: 1, y: 0 },
        { x: 2, y: 0},
        { x: 3, y: 1 },
        { x: 4, y: 1},
        { x:5, y: 1},
        { x: 6, y: 1}
        

      ]
    }]
  });
  chartqb.render();
  
}

/*  Plot q3 ends */


/* Plot q10 starts */

function q10plot(){
  
  var chartq10 = new CanvasJS.Chart("chartContainerq10", {
    animationEnabled: true,
    exportEnabled: true,
    animationDuration: 7000,
    colorSet:  "greenShades",
    theme: "dark1", 
   
    axisY:{ 
      title: "Q0",
      interval: 0.5,
      minimum: 0,
      maximum: 1,
      gridThickness: 0.2,
      lineThickness: 0.5,
    },
    axisX:{ 
     
      interval: 1,
      minimum: 0,
      maximum: 10,
      lineThickness: 0.5,
    
    },
    data: [{
      type: "stepLine",
      color: "pink",
      markerSize: 5,
      dataPoints: [
        { x: 0, y: 1 },
        { x: 1, y: 1 },
        { x: 2, y: 1},
        { x: 3, y: 1 },
        { x: 4, y: 1},
        { x:5, y: 1},
        { x: 6, y: 1}
        

      ]
    }]
  });
  chartq10.render();
  
}

/*  Plot q10 ends */

/* Plot q11 starts */

function q11plot(){
  
  var chartq11 = new CanvasJS.Chart("chartContainerq11", {
    animationEnabled: true,
    exportEnabled: true,
    animationDuration: 7000,
    colorSet:  "greenShades",
    theme: "dark1", 
   
    axisY:{ 
      title: "Q1",
      interval: 0.5,
      minimum: 0,
      maximum: 1,
      gridThickness: 0.2,
      lineThickness: 0.5,
    },
    axisX:{ 
     
      interval: 1,
      minimum: 0,
      maximum: 10,
      lineThickness: 0.5,
    
    },
    data: [{
      type: "stepLine",
      color: "pink",
      markerSize: 5,
      dataPoints: [
        { x: 0, y: 0 },
        { x: 1, y: 1 },
        { x: 2, y: 1},
        { x: 3, y: 1 },
        { x: 4, y: 1},
        { x:5, y: 1},
        { x: 6, y: 1}
        

      ]
    }]
  });
  chartq11.render();
  
}

/*  Plot q11 ends */
/* Plot q12 starts */

function q12plot(){
  
  var chartq12 = new CanvasJS.Chart("chartContainerq12", {
    animationEnabled: true,
    exportEnabled: true,
    animationDuration: 7000,
    colorSet:  "greenShades",
    theme: "dark1", 
   
    axisY:{ 
      title: "Q2",
      interval: 0.5,
      minimum: 0,
      maximum: 1,
      gridThickness: 0.2,
      lineThickness: 0.5,
    },
    axisX:{ 
     
      interval: 1,
      minimum: 0,
      maximum: 10,
      lineThickness: 0.5,
    
    },
    data: [{
      type: "stepLine",
      color: "pink",
      markerSize: 5,
      dataPoints: [
        { x: 0, y: 0 },
        { x: 1, y: 0 },
        { x: 2, y: 1},
        { x: 3, y: 1 },
        { x: 4, y: 1},
        { x:5, y: 1},
        { x: 6, y: 1}
        

      ]
    }]
  });
  chartq12.render();
  
}

/*  Plot q12 ends */
/* Plot q13 starts */

function q13plot(){
  
  var chartq13 = new CanvasJS.Chart("chartContainerq13", {
    animationEnabled: true,
    exportEnabled: true,
    animationDuration: 7000,
    colorSet:  "greenShades",
    theme: "dark1", 
   
    axisY:{ 
      title: "Q3",
      interval: 0.5,
      minimum: 0,
      maximum: 1,
      gridThickness: 0.2,
      lineThickness: 0.5,
    },
    axisX:{ 
     
      interval: 1,
      minimum: 0,
      maximum: 10,
      lineThickness: 0.5,
    
    },
    data: [{
      type: "stepLine",
      color: "pink",
      markerSize: 5,
      dataPoints: [
        { x: 0, y: 0 },
        { x: 1, y: 0 },
        { x: 2, y: 0},
        { x: 3, y: 1 },
        { x: 4, y: 1},
        { x:5, y: 1},
        { x: 6, y: 1}
        

      ]
    }]
  });
  chartq13.render();
  
}

/*  Plot q13 ends */