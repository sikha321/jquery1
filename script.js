// jquery file for the first asssignemnt $(document).ready(function() {
//     $("input[id='coinName']").on("change", function() {
//         var coinName = $(this).val();
//         var base_url = "https://api.coincap.io/v2/assets/";
//         $.ajax({
//             url: base_url + coinName,
//             method: "GET",
//             success: function(data) {
//                 if (data.ok) {
//                     var coinData = data.data;
//                    
//                 } else {
//                     $("#error").html("Error fetching data");
//                 }
//             },

//                 error: function(jqXHR, textStatus, errorThrown) {
//                     $("#error").html("Error: " + errorThrown);
//                 }
//             }
//         }
//     } ) ;
// }) ;

function bitcoinD() {
  const inputString = $("#coinName").val();
//   console.log(inputString);
  const base_url = "https://api.coincap.io/v2/assets/";
  $.ajax({
    url: base_url + inputString,
    method: "GET",
    success: function (data) {
      
        console.log(data);
        $("#cname").text(data.data.id);
        $("#position").text(data.data.rank);
        $("#sym").text(data.data.symbol);
        $("#nam").text(data.data.name);
        $("#sup").text(data.data.supply);
        $("#msupply").text(data.data.maxSupply);
        $("#bca").text(data.data.marketCapUsd);
        $("#acm").text(data.data.volumeUsd24hr);
        $("#ade").text(data.data.priceUsd);
        $("#aem").text(data.data.changePercent24Hr);
        $("#afo").text(data.data.vwap24Hr);
        $("#agk").text(data.data.explorer);
      
    },
    error: function (error) {
      console.log(error);
    },
  });
}
