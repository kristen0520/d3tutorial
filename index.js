/*  APPEND AND TRANSFORM ELEMENTS IN THE DOM

d3.select();
d3.selectAll();

d3.select('h1').style('color', 'red')
.attr('class', 'heading')
.text('Update h1 tag');

d3.select('body').append('p').text('first paragraph');
d3.select('body').append('p').text('second paragraph');
d3.select('body').append('p').text('third paragraph');


d3.selectAll('p').style('color', 'blue');*/


/* USE DATA TO CREATE DOM ELEMENTS

let dataset = [1, 2, 3, 4, 5];

d3.select('body')
  .selectAll('p')
  .data(dataset)
  .enter()
  .append('p') //appends paragraph for each data element
  //.text('D3 rocks my socks!');
  .text( d => {return d} );
*/

let dataset = [40, 30, 100, 55, 120, 106, 35, 70];

d3.select(".chart")
  .selectAll("div") //I am selecting all divs in chart class, which is none but I will make some
  .data(dataset) //get the data
  .enter() //move on from the "waiting" state
  .append("div") //now I have a div to work with
  .style("width", d => {return d * 2 + "px"})
  .style("background-color", "#009933")
  .style("color", "white")
  .text(d => {return d});
