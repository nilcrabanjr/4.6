const svg = d3.select(".responsive-svg-container")
    .append("svg")
    .attr("viewBox", "0 0 1200 1600")
    .style("border", "1px solid black");

const createBarChart = data => {
  const barHeight = 20;   
  const barSpacing = 10;   

  svg
    .selectAll("rect")
    .data(data)
    .join("rect")
    .attr("class", d => `bar bar-${d.count}`)
    .attr("x", 0)                   
    .attr("y", (d, i) => i * (barHeight + barSpacing))
    .attr("width", d => d.count)            
    .attr("height", barHeight)       
    .attr("fill", "blue");  
};
d3.csv("data/task4data.csv", d => {
  return {
    brand: d.brand,
    count: +d.count
  };
}).then(data => {
  data.sort((a, b) => d3.descending(a.count, b.count));
  console.log(data);
  console.log(data.length);
  console.log(d3.max(data, d => d.count));
  console.log(d3.min(data, d => d.count));
  console.log(d3.extent(data, d => d.count));
  createBarChart(data);
});
