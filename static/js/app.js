// Load data from samples.json; review dataset
d3.json("../data/samples.json").then(function (data) {
    console.log(data);
});


// Loda data from samples.json; create ID array and load to dropdown menu

d3.json("../data/samples.json").then((data) => {
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


// Select subject ID
let subjectID1 = d3.select("#selDataset").property("value");
console.log(subjectID1)

// Function to laod selected data into charts

function optionChanged(subjectID1) {
    // d3.event.preventDefault();

    // Load and select data for meta data table 
    d3.json("../data/samples.json").then((data) => {
        data.metadata.forEach(d => {

            // For selected Subject ID
            if (d.id == subjectID1) {

                // Select and load metadata
                //-------------------------------------
                let meta = Object.entries(d);

                d3.select("#sample-metadata")
                    .selectAll("option")
                    .data(meta)
                    .enter()
                    .append("option")
                    .text(function (d1) {
                        return d1;
                    });

                // Select and load data for gauge chart
                //--------------------------------------   
                let washFreq = d.wfreq

                var data = [
                    {
                        domain: { x: [0, 1], y: [0, 1] },
                        value: washFreq,
                        title: { text: "Belly Button Washing Frequency" },
                        type: "indicator",
                        mode: "gauge+number",
                        // delta: { reference: 0 },
                        gauge: {
                            axis: { range: [null, 10] },
                            steps: [
                                { range: [0, 2], color: "rgb(235, 152, 78" },
                                { range: [2, 4], color: "rgb(245, 176, 65" },
                                { range: [4, 6], color: "rgb(244, 208, 63" },
                                { range: [6, 8], color: "rgb(88, 214, 141" },
                                { range: [8, 10], color: "rgb(82, 191, 128" }
                            ],
                        }
                    }
                ];

                var layout = { width: 600, height: 450, margin: { t: 0, b: 0 } };
                Plotly.newPlot('gauge', data, layout);

            };

        });

    });


    // Load and select data for bar and bubble charts 
    d3.json("../data/samples.json").then((data) => {
        data.samples.forEach(d => {

            // For selected Subject ID
            if (d.id == subjectID1) {

                // Select and load data for bar chart
                //--------------------------------------                   
                let otuIDs = d.otu_ids.slice(0, 10).reverse();
                let barLabels = otuIDs.forEach(function (v, i, a) {
                    a[i] = `OTU ${v}`
                });
                let otuValues = d.sample_values.slice(0, 10).reverse();

                // Graph output to bar chart
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
                //--------------------------------------    
                let bubbleIDs = d.otu_ids;
                let bubbleValues = d.sample_values;
                let bubbleLabels = d.otu_labels;

                // Graph ouutput to bubble chart
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
// ------------------- Initialize Site -------------------------------------
// Call optionChanged function to load data with initial ID of 940
optionChanged("940");


