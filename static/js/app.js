// Load data from samples.json; review dataset
d3.json("./../../data/samples.json").then(function (data) {
    console.log(data);
});


// Loda data from samples.json; create ID array and load to dropdown menu

d3.json("./../../data/samples.json").then((data) => {
    let id = data.names;
    console.log(id)
    d3.select("select")
        .selectAll("option")
        .data(id)
        .enter()
        .append("option")
        .text(function (d) {
            return d;
        });
});


// Grab data for horizontal bar chart

// Unpack function
function unpack(rows, index) {
    return rows.map(function (row) {
        return row[index];
    });
}


// d3.json("./../../data/samples.json").then((data) => {
//     let id = data.names;
//     // let samValues = unpack(data.samples, 0);
//     let samValues = data.samples.sample_values;
//     console.log(id);
//     console.log(samValues)
// });



// Select id reference; correctly grabs reference but function error in 
// html "optionChanged"
// let subjectID = d3.select("#selDataset").node().value;
// OR
// let subjectID = d3.select(#"selDataset").property("value");

// console.log(subjectID)
// Grab data for horizontal chart

subjectID = "940"

// d3.json("./../../data/samples.json").then((data) => {
//     data.names.forEach(d => {
//         console.log(d);
//         console.log("---------")

//         if (d = subjectID)
//             otuIds = data.samples.otu_ids;
//             console.log(otuIds);
//             console.log("------------");
//             otuValues = data.samples
//     });

// Horizontal chart -- if id = subjectID, grabs top ten OTUs and values  
d3.json("./../../data/samples.json").then((data) => {
    data.samples.forEach(d => {
        // console.log(d);
        // console.log("---------")

        if (d.id == subjectID) {
            otuIDs = d.otu_ids.slice(0, 10);
            barLabels = otuIDs.forEach(function (v, i, a) {
                a[i] =
                    `OTU ${v}`
            });
            otuValues = d.sample_values.slice(0, 10);
            console.log(d.id);
            console.log("------------");
            console.log(barLabels);
            console.log("------------");
            console.log(otuIDs);
            console.log("------------");
            console.log(otuValues);

            // graph output
            var data = [{
                type: "bar",
                x: otuValues,
                y: otuIDs,
                orientation: "h"
            }]
            Plotly.newPlot("bar", data);
        };
    });
});

// Bubble chart -- if id = subjectID, grabs otu_ids, values, and lables

d3.json("./../../data/samples.json").then((data) => {
    data.samples.forEach(d => {
        // console.log(d);
        // console.log("---------")

        if (d.id == subjectID) {
            otuIDs = d.otu_ids;
            otuValues = d.sample_values;
            otuLabels = d.otu_labels;
            // console.log(d.id);
            // console.log("------------");
            // console.log(otuIDs);
            // console.log("------------");
            // console.log(otuValues);
            console.log("------------");
            console.log(otuLabels);

            var data = [{
                x: otuIDs,
                y: otuValues,
                text: otuLabels,
                mode: "markers",
                marker: {
                    size: otuValues,
                    color: otuIDs,
                }
            }];

            var layout = {
                title: "Test Layout",
                showlegend: false,
            };

            Plotly.newPlot("bubble", data, layout)

        };
    });
});

// Create chart functions



