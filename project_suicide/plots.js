// Use D3 fetch to read the JSON file
function init() {

  currentdata = 'data/suicide_2010.json'
  title_var = 'Suicide Data 2010'
  type_var = 'bar'

  // The data from the JSON file is arbitrarily named Data2010 as the argument
  d3.json(`${currentdata}`).then((Data2010) => {
    // console.log(Data2010);
    var data = Data2010;
    var trace1 = {
      x: data.list.map(row => row.country),
      y: data.list.map(row => row.suicide_no),
      name: "Suicide 2010",
      type: `${type_var}`,
    };
    // data
    var data = [trace1];
    // Apply the group bar mode to the layout
    var layout = {
      title: `${title_var}`,
      margin: {
        l: 100,
        r: 100,
        t: 100,
        b: 100
      }
    };
    // Render the plot to the div tag with id "plot"
    Plotly.newPlot("plot", data, layout);    
  });

}

// // Call updatePlotly() when a change takes place to the DOM
d3.selectAll("body").on("change", updatePlotly);

// This function is called when a dropdown menu item is selected
function updatePlotly() {
  // // Use D3 to select the dropdown menu
  var dropdownMenu = d3.select("#selDataset");
  // // Assign the value of the dropdown menu option to a variable
  var dataset = dropdownMenu.node().value;

  var CHART = d3.selectAll("#plot").node();

  // // Initialize x and y arrays
  // var x = [];
  // var y = [];

  switch(dataset) {
    case "dataset1":
      currentdata = 'data/suicide_2010.json'
      title_var = 'Suicide Data 2010'
      type_var = 'bar'
      key = "suicide_no"
      break;

    case "dataset2":
      currentdata = 'data/data.json'
      title_var = 'Suicide Data 2010-2016'
      type_var = 'box'
      key = "suicide_no"
      break;

    case "dataset3":
      currentdata = 'data/suicide_2015.json'
      title_var = 'Suicide Data 2015'
      type_var = 'bar'
      key = "suicide_no"
      break;

    case "dataset4":
        currentdata = 'data/suicide_gdp.json'
        title_var = 'Suicide VS GDP'
        type_var = 'line'
        key =  "GDP"
        break;

    default:
      currentdata = 'data/data.json'
      title_var = 'Suicide Data 2010-2016'
      type_var = 'box'
      key = "suicide_no"
    
      break;
  }

  console.log(currentdata)

  // The data from the JSON file is arbitrarily named Data2010 as the argument
  d3.json(`${currentdata}`).then((Data2010) => {
    // console.log(Data2010);
    var data = Data2010;
    console.log(data)
    var trace1 = {
      x: data.list.map(row => row.country),
      y: data.list.map(row => row[key]),
      name: "Suicide 2010",
      type: `${type_var}`,
    };
    if(key === 'GDP') {
      trace2 = {
        x : data.list.map(row => row.country),
        y: data.list.map(row => row.suicide_no)
      }
    }

    // data
    
    var data = [trace1];
    if (key === 'GDP') {
      data = [trace1, trace2]
    }
    // Apply the group bar mode to the layout
    var layout = {
      title: `${title_var}`,
      margin: {
        l: 100,
        r: 100,
        t: 100,
        b: 100
      }
    };
    // Render the plot to the div tag with id "plot"
    Plotly.newPlot("plot", data, layout);    
  });
//   // Note the extra brackets around 'x' and 'y'
//   Plotly.restyle(CHART, "x", [x]);
//   Plotly.restyle(CHART, "y", [y]);
}

init();


















// d3.json("data/data.json").then((Data1) => {
//   var data = Data1;
//   var trace2 = {
//     x: data.list.map(row => row.year),
//     y: data.list.map(row => row.suicide_no),
//     name: "Suicide yearwise",
//     type: "box",
//   };
//   // data
//   var data = [trace2];
//   // Apply the group bar mode to the layout
//   var layout = {
//     title: "Suicide yearwise",
//     margin: {
//       l: 100,
//       r: 100,
//       t: 100,
//       b: 100
//     }
//   };
//   // Render the plot to the div tag with id "plot"
//   Plotly.newPlot("plot", data, layout);
// });

// d3.json("data/suicide_2015.json").then((Data2015) => {
//   var data = Data2015;
//   var trace2 = {
//     x: data.list.map(row => row.country),
//     y: data.list.map(row => row.suicide_no),
//     name: "Suicide 2015",
//     type: "bar",
//   };
//   // data
//   var data = [trace2];
//   // Apply the group bar mode to the layout
//   var layout = {
//     title: "Suicide 2015",
//     margin: {
//       l: 100,
//       r: 100,
//       t: 100,
//       b: 100
//     }
//   };
//   // Render the plot to the div tag with id "plot"
//   Plotly.newPlot("plot", data, layout);    
// });