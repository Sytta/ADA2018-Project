$(document).ready(function(e) {
    var graphs = [
    'share_gender_continent',
    // 'DALY_per_mental_illness_continent', 
    // 'DALY_per_anxiety_continent',
    'prevalence_gender_disorder_share_global',
    'prevalence_gender_share_per_country',
    'mental_illness_life_satisfaction'
    ]
    graphs.forEach(function(graph) {
      $('#' + graph).load('./plotly/' + graph + '.html',function(){console.log('loaded ' + graph)});
    });
  });