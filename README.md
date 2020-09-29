# Plotly-Dashboard-Challenge


Code Structure Outline
- Link subject ids to dropdown menu (id - "selDataset")
- For each id selected, create four graphical / tabular outputs -- subejct id metadata, barchart gpaph of top ten OTUs by ID, bubble chart of all otus for subject id vs. sample values, and guage chart
- Try following structure
- function getData -- calls data for graphs; calls ploting and table functions
- function subjectInfo -- for subject ID, formats metadata table
- function barChart -- for subject ID, plots bar chart
- function bubbleChart - for subject ID, plots bubble chart
- function guageChart - for subject ID, plots guage chart


9/28:
- Loaded data for subject id dropdown menu and pushed to html file
- Correctly pulling graphical data for horizontal bar chart and bubble chart
- Correctly displaying bubble and horizontal bar charts


9/27:
- Loading and console logged data; review dataset
- Dataset consists of three main arrays -- metadata, names, and samples
- "metadata" -- inforrmation on each test subject ("id", "ethnicity", "gender", "age", "location", "bbtype", "wfreq"); 153 entries
- "names" -- subject id; 153 entries
- "samples" -- for each subject, information on operational taxonomic units ("OTUs") ("otu-ids", "otu-lables", "sample_values"); sample size vary from low of 0 to high of 82

