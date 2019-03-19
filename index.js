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

let dataset = [1, 2, 3, 4, 5];

d3.select('body')
  .selectAll('p')
  .data(dataset)
  .enter()
  .append('p') //appends paragraph for each data element
  //.text('D3 rocks my socks!');
  .text( d => {return d} );
