/* jshint esversion: 6 */

//////////////////////////////////////////////////////
////////////////////// Set-up ////////////////////////
//////////////////////////////////////////////////////

// SVG size variables
const margin = {top: 100, right: 20, bottom: 40, left: 60},
			width = 1200 - margin.left - margin.right,
			height = 400 - margin.top - margin.bottom;

////////////////////////////////////////////////////////////
////////////////// Reposition elements /////////////////////
////////////////////////////////////////////////////////////

// Tooltip
d3.select("#tooltip")
		.style("top", `${margin.top}px`)
		.style("left", `${margin.left + 15}px`);

////////////////////////////////////////////////////////////
//////////////////// Manipulate data ///////////////////////
////////////////////////////////////////////////////////////

// Number of times appearing on chart
const numberOfTimesBooksdata = d3.nest()
		.key(d => d.asin)
		.rollup(leaves => leaves.length)
		.entries(booksdata);

// Add number of times appearing on chart to original booksdata
const dataCircles = join(numberOfTimesBooksdata, booksdata, "key", "asin", (booksdatum, numberOfTimesBooksdatum) => {
	return {
		year: booksdatum.year,
		rank: booksdatum.rank,
		numberOfTimes: numberOfTimesBooksdatum.value,
		title: booksdatum.title,
		author: booksdatum.author,
		asin: booksdatum.asin,
	};
});

// Nest data according to asin
// For plotting lines
const dataLines = d3.nest()
		.key(d => d.asin)
		.entries(dataCircles);

//////////////////////////////////////////////////////
///////////// Initialize Axes & Scales ///////////////
//////////////////////////////////////////////////////
const xScale = d3.scaleLinear()
		.range([0, width]);

const yScale = d3.scaleLinear()
		.range([0, height]);

const startYear = d3.min(dataCircles, d => d.year),
			endYear = d3.max(dataCircles, d => d.year);

xScale.domain([0, 101]);
yScale.domain([startYear - 1, endYear + 1]);

const color = [
	{color: "#82D8E3", text: "1", numberOfTimes: d3.range(1, 2)},
	{color: "#ADE423", text: "2 - 9", numberOfTimes: d3.range(2, 10)},
	{color: "#FFA725", text: "> 10", numberOfTimes: d3.range(10, (endYear - startYear + 2))}
];

const colorScale = d3.scaleThreshold()
		.domain([2, 10])
		.range(color.map(d => d.color));

const xAxis = d3.axisBottom()
		.scale(xScale)
		.tickFormat(d3.format("d"));

const yAxis = d3.axisLeft()
		.scale(yScale)
		.tickFormat(d3.format("d"))
		.tickValues([1995, 2000, 2005, 2010, 2015]);

////////////////////////////////////////////////////////////
///////////////////// Initiate SVG /////////////////////////
////////////////////////////////////////////////////////////

// SVG container
const svg = d3.select("#chart")
	.append("svg")
		.attr("width", width + margin.left + margin.right)
		.attr("height", height + margin.top + margin.bottom)
	.append("g")
		.attr("transform", `translate(${margin.left}, ${margin.top})`);

////////////////////////////////////////////////////////////
/////////////////////// Draw graph /////////////////////////
////////////////////////////////////////////////////////////

// Render x axis
svg.append("g")
		.attr("class", "x axis")
		.attr("transform", `translate(0, ${height})`)
		.call(xAxis)
	.append("text")
		.attr("class", "label")
		.attr("x", width)
		.attr("y", 28)
		.style("text-anchor", "end")
		.text("Chart Posision");

// Render y axis
svg.append("g")
		.attr("class", "y axis")
		.call(yAxis)
	.append("text")
		.attr("class", "label")
		.attr("transform", "rotate(-90)")
		.attr("y", -36)
		.style("text-anchor", "end")
		.text("Year");

// Render circles for each book
const circleContainer = svg.append("g")
		.attr("id", "circle-container");

const circleRadius = 5;

circleContainer.selectAll("circle")
	.data(dataCircles)
	.enter()
	.append("circle")
		.attr("class", d => `circle circle-${d.asin}`)
		.attr("cx", d => xScale(parseInt(d.rank)))
		.attr("cy", d => yScale(d.year))
		.attr("r", circleRadius)
		.style("fill", d => colorScale(d.numberOfTimes));

// Render lines for books with more than 1 entry
const line = d3.line()
		.curve(d3.curveMonotoneY)
		.x(d => xScale(parseInt(d.rank)))
		.y(d => yScale(d.year));


const lineContainer = svg.append("g")
		.attr("id", "line-container");

lineContainer.selectAll("path")
		.data(dataLines.filter(d => d.values.length > 1))
		.enter()
		.append("path")
			.attr("class", "line")
			.attr("id", d => `line-${d.key}`)
			.attr("d", d => line(d.values))
			.style("stroke-linejoin", "round")
			.style("stroke", d => colorScale(d.values.length))
			.style("opacity", 0);

////////////////////////////////////////////////////////////
/////////////////////////// Legend /////////////////////////
////////////////////////////////////////////////////////////

// Legend size variables
const legendWidth = 60,
			legendHeight = 60;

const legendContainer = svg.append("g")
		.attr("class", "legend-container")
		.attr("transform", `translate(${width - legendWidth - 8}, ${-legendHeight})`);

const legendTitle = legendContainer.append("text")
		.attr("x", legendWidth)
		.attr("y", 0)
		.attr("class", "legend-title")
		.style("text-anchor", "end")
		.text("Number of Years in Top 100");

const legend = legendContainer.selectAll(".legend")
	.data(color.reverse())
	.enter()
	.append("g")
		.attr("class", "legend")
		.attr("transform", (d, i) => `translate(0, ${circleRadius * (3 * i + 1) })`);

// Invisible rects to capture mouseover events
legend.append("rect")
		.attr("x", 0)
		.attr("y", 0)
		.attr("width", legendWidth)
		.attr("height", circleRadius * 2)
		.style("opacity", 0)
		.style("pointer-events", "all")
		.on("mouseover", legendHover)
		.on("mouseout", legendHoverOut);

// Colored dots
legend.append("circle")
		.attr("cx", legendWidth - circleRadius / 2)
		.attr("cy", circleRadius)
		.attr("r", 5)
		.style("fill", d => d.color)
		.style("pointer-events", "none");

// Text left to dots
legend.append("text")
		.attr("x", legendWidth - 12)
		.attr("y", circleRadius)
		.style("text-anchor", "end")
		.style("alignment-baseline", "central")
		.style("pointer-events", "none")
		.text(d => d.text);

function legendHover(d) {
	circleContainer.selectAll("circle")
			.style("opacity", g => {
				return d.numberOfTimes.includes(g.numberOfTimes) ? 1 : 0.4;
			});
}

function legendHoverOut() {
	circleContainer.selectAll("circle")
			.style("opacity", 1);
}

////////////////////////////////////////////////////////////
////////////////////////// Veronoi /////////////////////////
////////////////////////////////////////////////////////////

// Veronoi polygons to handle mouse event
const voronoi = d3.voronoi()
		.size([width, height])
		.x(d => xScale(parseInt(d.rank)))
		.y(d => yScale(d.year))(dataCircles);

svg.append("g")
		.attr("class", "voronoi")
	.selectAll("path")
	.data(voronoi.polygons())
	.enter()
	.append("path")
		.attr("d", d => "M" + d.join("L") + "Z")
		.on("mouseover", d => mouseover(d.data))
		.on("mouseout", d => mouseout(d.data));

function mouseover(d) {
	// Dim all circles
	d3.selectAll(".circle")
			.style("opacity", 0.4);
	// Highlight circles with the same asin as the hovered circle
	const selectedCircles = d3.selectAll(`.circle-${d.asin}`)
			.style("opacity", 1);
	// Show the trend line
	const selectedLine = d3.select(`#line-${d.asin}`)
			.style("opacity", 1);
	showTooltip(d);
}

function mouseout(d) {
	// Highlight all circels
	d3.selectAll(".circle")
			.style("opacity", 1);
	// Hide the trend line
	d3.select(`#line-${d.asin}`)
			.style("opacity", 0);
	hideTooltip();
}

////////////////////////////////////////////////////////////
////////////////////////// Tooltip /////////////////////////
////////////////////////////////////////////////////////////

// Show tooltip on mouseover
function showTooltip(d) {
	d3.select("#tooltip-title").html(d.title);
	d3.select("#tooltip-author").html(d.author);
	d3.select("#tooltip-number-of-times").html(d.numberOfTimes);
	d3.select("#tooltip-number-of-times").style("color", colorScale(d.numberOfTimes));
}

// Hide tooltip on mouseout
function hideTooltip() {
	d3.select("#tooltip-title").html("");
	d3.select("#tooltip-author").html("");
	d3.select("#tooltip-number-of-times").html("");
}

//////////////////////////////////////////////////////////////
//////////////////////// Data table //////////////////////////
//////////////////////////////////////////////////////////////

// Table headers set up
const headers = [
		{ key: "year", display: "Year", width: "5%" },
		{ key: "rank", display: "Rank", width: "5%" },
		{ key: "numberOfTimes", display: "Years In Chart", width: "5%" },
		{ key: "title", display: "Book Title", width: "60%" },
		{ key: "author", display: "Author", width: "15%" },
		{ key: "asin", display: "Asin", width: "10%" }
	];

// To enable position fixed header and scrollable body
// Use separate tables for header and body

const tableHeaders = d3.select("#table")
	.append("div")
		.attr("id", "table-headers")
	.append("table")
	.append("thead").append("tr")
	.selectAll("th")
	.data(headers)
	.enter()
	.append("th")
		.text(d => d.display)
		.style("width", d => d.width);

const tableBody = d3.select("#table")
	.append("div")
		.attr("id", "table-body")
	.append("table").append("tbody");

const tableRows = tableBody
	.selectAll("tr")
	.data(dataCircles)
	.enter()
	.append("tr");

tableRows
		.style("color", row => colorScale(row.numberOfTimes))
	.selectAll("td")
	.data(row => headers.map(header => ({ "key": header.key, "value": row[header.key], "width": header.width })))
	.enter()
	.append("td")
		.text(d => d.value)
		.style("width", d => d.width);

tableRows.on("mouseover", mouseover)
		.on("mouseout", mouseout);

//////////////////////////////////////////////////////////////
///////////////////// Helper functions ///////////////////////
//////////////////////////////////////////////////////////////

	// Combine data sets by common attributes
	function join(lookupTable, mainTable, lookupKey, mainKey, select) {
		var l = lookupTable.length,
			m = mainTable.length,
			lookupIndex = [],
			output = [];
		for (var i = 0; i < l; i++) { // loop through l items
			var row = lookupTable[i];
			lookupIndex[row[lookupKey]] = row; // create an index for lookup table
		}
		for (var j = 0; j < m; j++) { // loop through m items
			var y = mainTable[j];
			var x = lookupIndex[y[mainKey]]; // get corresponding row from lookupTable
			output.push(select(y, x)); // select only the columns you need
		}
		return output;
	}










