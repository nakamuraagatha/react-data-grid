var ReactGrid             = require('../build/react-data-grid');
var QuickStartDescription = require('../components/QuickStartDescription')
var ReactPlayground       = require('../assets/js/ReactPlayground');

var NavigationExample = `

//helper to generate a random date
function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toLocaleDateString();
};

var _rows = [];
for (var i = 1; i < 1000; i++) {
  _rows.push({
    id: i,
    task: 'Task ' + i,
    complete: Math.min(100, Math.round(Math.random() * 110)),
    priority : ['Critical', 'High', 'Medium', 'Low'][Math.floor((Math.random() * 3) + 1)],
    issueType : ['Bug', 'Improvement', 'Epic', 'Story'][Math.floor((Math.random() * 3) + 1)],
    startDate: randomDate(new Date(2015, 3, 1), new Date()),
    completeDate: randomDate(new Date(), new Date(2016, 0, 1))
  });
};

//function to retrieve a row for a given index
var rowGetter = function(i){
  return _rows[i];
};


//Columns definition
var columns = [
{
  key: 'id',
  name: 'ID',
  locked : true
},
{
  key: 'task',
  name: 'Title',
  width: 200
},
{
  key: 'priority',
  name: 'Priority',
  width: 200
},
{
  key: 'issueType',
  name: 'Issue Type',
  width: 200
},
{
  key: 'complete',
  name: '% Complete',
  width: 200
},
{
  key: 'startDate',
  name: 'Start Date',
  width: 200
},
{
  key: 'completeDate',
  name: 'Expected Complete',
  width: 200
},
{
  key: 'completeDate',
  name: 'Expected Complete',
  width: 200
}
]


ReactDOM.render(<ReactDataGrid
  columns={columns}
  rowGetter={rowGetter}
  rowsCount={_rows.length}
  minHeight={500}
  enableCellSelect={true}
  cellNavigationMode="changeRow" />, mountNode);
`;

module.exports = React.createClass({

  render:function(){
    return(
      <div>
        <h3>Column Navigation Modes Example</h3>
        <p>By setting <code>cellNavigationMode = 'loopOverRow'</code>, you enable looping round the same row when navigation goes beyond the first/last cells.</p>
        <p>Setting <code>cellNavigationMode = 'changeRow'</code>, would make the selection jump to the next/previous row.</p>
        <p>The default behavior is to do nothing.</p>
        <ReactPlayground codeText={NavigationExample} />
      </div>
    )
  }

});
