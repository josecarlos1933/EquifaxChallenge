$("#btn_single_search").click(function(){
  $.ajax({
    type:"POST",
    contentType: "application/json",
    dataType: "json",
    url:"http://localhost:3000/ok",
    data:JSON.stringify({issuekey:$("#input_single_key").val()}),
    success:function(result){
      fields=result.fields
      //console.log(result)
    $('#single_search_results').html(`
      <h3><b>Key</b>: ${result.key}</h3>
      <h3><b>Summary</b>: ${fields.summary}</h3>
      <h3><b>Description</b>: ${fields.description}</h3>
      `)
    },
    error:function(x,status,error){
      console.log('localhost is not accessible')
    }
  });

});
