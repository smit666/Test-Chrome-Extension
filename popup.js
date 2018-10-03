$(function(){
    chrome.storage.sync.get('total',function(budget){
        $('#total').text(budget.total);
    });
$('#spendAmount').click(function(){
    chrome.storage.sync.get('total',function(budget){
        var newTotal=0;
        if(budget.total){
            newTotal+=parseInt(budget.total);
        }

        var amount=$('#amount').val();
        if(amount){
            newTotal+=parseInt(amount);
        }
            chrome.storage.sync.set({'total':newTotal});
            $('#total').text(newTotal);
            $('#amount').val('');    
    });

});
chrome.app.runtime.onLaunched.addListener(function() {
    chrome.app.window.create('window.html', {
        id: "mainwin",
      innerBounds: {
        width: 700,
        height: 600
      }
    });
  });
});