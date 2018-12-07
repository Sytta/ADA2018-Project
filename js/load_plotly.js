$(document).ready(function(e) {
    var graphs = [
    'share_gender_continent',
    'DALY_per_mental_illness_continent', 
    'DALY_per_anxiety_continent',
    ]
    graphs.forEach(function(graph) {
      $('#' + graph).load('./plotly/' + graph + '.html',function(){console.log('loaded ' + graph)});
    });
  });