# Plotly-Dashboard-Challenge


Notes:
- Basic and Advanced Challenge assignment running under single apps.js file
- Web page is initialized with the first Subject ID selection, which is fixed to ID940; if dataset was dynamic, I'd change to default to the first selection in the data.id, but fixing the ID was sufficient and simpler for this purpose
- There is one main fuction, optionChanged, which calls the data and selects and outputs the metadata table, and bar, bubble, and gauge graphs.  I contemplated breaking these out into subfunctions, but in this case the code is only used once, and I didn't see much benefit in simplifying the various sections further.  


10/1:
- Minor clean-ups

9/30:
- Charts dynamically loading based on selection of OTU ID
- Initialize page with default ID (first id)
- Create functions to call to load charts
- Added working gauge chart

9/29:
- Correctly pulling and loading metadata

9/28:
- Loaded data for subject id dropdown menu and pushed to html file
- Correctly pulling graphical data for horizontal bar chart and bubble chart; statically linked to ID
- Correctly displaying bubble and horizontal bar charts; statically linked to ID

9/27:
- Loading and console logged data; review dataset
- Dataset consists of three main arrays -- metadata, names, and samples
- "metadata" -- inforrmation on each test subject ("id", "ethnicity", "gender", "age", "location", "bbtype", "wfreq"); 153 entries
- "names" -- subject id; 153 entries
- "samples" -- for each subject, information on operational taxonomic units ("OTUs") ("otu-ids", "otu-lables", "sample_values"); sample size vary from low of 0 to high of 82

