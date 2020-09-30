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


// Select filter; create event handler to activate function

var filter = d3.select("#selDataset");
filter.on("change", optionChanged);


// Function to laod selected data into charts

function optionChanged() {
    d3.event.preventDefault();

    // Select subject ID
    let subjectID1 = d3.select("#selDataset").property("value");
    console.log(subjectID1)

    // Load and select data for meta data table 
    d3.json("./../../data/samples.json").then((data) => {
        data.metadata.forEach(d => {

            // For selected Subject ID
            if (d.id == subjectID1) {

                // Select and load metadata
                //-------------------------
                let meta = Object.entries(d);

                d3.select("#sample-metadata")
                    .selectAll("option")
                    .data(meta)
                    .enter()
                    .append("option")
                    .text(function (d1) {
                        return d1;
                    });
            };
        });
    });


    // Load and select data for charts 
    d3.json("./../../data/samples.json").then((data) => {
        data.samples.forEach(d => {

            // For selected Subject ID
            if (d.id == subjectID1) {

                // Select and load data for bar chart
                //------------------------------------                    
                let otuIDs = d.otu_ids.slice(0, 10).reverse();
                let barLabels = otuIDs.forEach(function (v, i, a) {
                    a[i] = `OTU ${v}`
                });
                let otuValues = d.sample_values.slice(0, 10).reverse();

                // graph output
                var data = [{
                    type: "bar",
                    x: otuValues,
                    y: otuIDs,
                    orientation: "h"
                }]

                var layout = {
                    title: `Subject ID ${subjectID1} Top 10 OTU's`,
                    showlegend: false,
                };

                Plotly.newPlot("bar", data, layout);

                // Select and load data for bubble chart
                //------------------------------------    
                let bubbleIDs = d.otu_ids;
                let bubbleValues = d.sample_values;
                let bubbleLabels = d.otu_labels;

                var data = [{
                    x: bubbleIDs,
                    y: bubbleValues,
                    text: bubbleLabels,
                    mode: "markers",
                    marker: {
                        size: bubbleValues,
                        color: bubbleIDs,
                    }
                }];

                var layout = {
                    title: `Subject ID ${subjectID1} OTU's vs. OTU Sample Value`,
                    showlegend: false,
                };

                Plotly.newPlot("bubble", data, layout)

            };

        });

    });

}



// // Metadata chart
// d3.json("./../../data/samples.json").then((data) => {
//     data.metadata.forEach(d => {
//         // console.log(d);
//         // console.log("---------")

//         if (d.id == subjectID) {
//             let meta = Object.entries(d);

//             console.log(d.id);
//             console.log("------------");
//             console.log(d);
//             console.log("------------");

//             d3.select("#sample-metadata")
//                 .selectAll("option")
//                 .data(meta)
//                 .enter()
//                 .append("option")
//                 .text(function (d1) {
//                     return d1;
//                 });
//         };
//     });
// });



// // Horizontal chart -- if id = subjectID, grabs top ten OTUs and values  
// d3.json("./../../data/samples.json").then((data) => {
//     data.samples.forEach(d => {
//         // console.log(d);
//         // console.log("---------")

//         if (d.id == subjectID) {
//             otuIDs = d.otu_ids.slice(0, 10).reverse();
//             barLabels = otuIDs.forEach(function (v, i, a) {
//                 a[i] =
//                     `OTU ${v}`
//             });
//             otuValues = d.sample_values.slice(0, 10).reverse();
//             console.log(d.id);
//             console.log("------------");
//             console.log(barLabels);
//             console.log("------------");
//             console.log(otuIDs);
//             console.log("------------");
//             console.log(otuValues);

//             // graph output
//             var data = [{
//                 type: "bar",
//                 x: otuValues,
//                 y: otuIDs,
//                 orientation: "h"
//             }]

//             var layout = {
//                 title: "Subject ID Top 10 OTU's",
//                 showlegend: false,
//             };

//             Plotly.newPlot("bar", data, layout);
//         };
//     });
// });

// Bubble chart -- if id = subjectID, grabs otu_ids, values, and lables

// d3.json("./../../data/samples.json").then((data) => {
//     data.samples.forEach(d => {
//         // console.log(d);
//         // console.log("---------")

//         if (d.id == subjectID) {
//             otuIDs = d.otu_ids;
//             otuValues = d.sample_values;
//             otuLabels = d.otu_labels;
//             // console.log(d.id);
//             // console.log("------------");
//             // console.log(otuIDs);
//             // console.log("------------");
//             // console.log(otuValues);
//             console.log("------------");
//             console.log(otuLabels);

//             var data = [{
//                 x: otuIDs,
//                 y: otuValues,
//                 text: otuLabels,
//                 mode: "markers",
//                 marker: {
//                     size: otuValues,
//                     color: otuIDs,
//                 }
//             }];

//             var layout = {
//                 title: "Subject ID OTU's vs. OTU Sample Value",
//                 showlegend: false,
//             };

//             Plotly.newPlot("bubble", data, layout)

//         };
//     });

// Create chart functions
