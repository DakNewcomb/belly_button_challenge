// 1. Use D3 library to read in samples from 
// URL: "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"
let BBurl = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

d3.json(BBurl).then(function(data) {
    console.log(data)
    });

//Create dropdown menu
function init() {
    let dropdownMenu = d3.select("#selDataset");

    //get sample names
    d3.json("samples.json").then((data) => {
        let name = data.names;

        //add sample names to dropdown and log id
        names.forEach((id) =>{
            console.log(id);
            dropdownMenu
                .append("option")
                .text(sample)
                .property("value", sample);
        });
    })
};



//<script src="./static/js/bonus.js"></script>