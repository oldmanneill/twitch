$(document).ready(function() {
    var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "habathcx", "RobotCaleb", "noobs2ninjas"];
    channels.forEach(function(i){   
        urlChannels = "https://wind-bow.gomix.me/twitch-api/channels/"+i+"?callback=?";
        $.ajax({
            type:"GET",
            url:urlChannels,
            async:false,
            dataType:"json",
            success:  function(data){
            	urlLive = "https://wind-bow.gomix.me/twitch-api/streams/"+i+"?callback=?";
        		$.ajax({
            		type:"GET",
            		url:urlLive,
            		async:false,
            		dataType:"json",
            		success: function(offline){
                		if (offline.stream== null || offline.stream==undefined){
				   			$('body').append("<div class='row'><div class='col card'><img src="+data.logo+" style=width:90px><a target='_blank' href="+data.url+">"+data.display_name+"</a></div><div class='col card' id='onlineCheck'>offline</div></div>");
						}
				   		else{
				   			$('body').append("<div class='row'><div class='col card'><img src="+data.logo+" style=width:90px><a target='_blank' href="+data.url+">"+data.display_name+"</div><div class='col card' id='onlineCheck'>"+data.status+"</div></div></a>");    
			   			}
                	},
            		error: function(errorMessage){
                		alert("error!");
            		}
        		});//ajax
            },
            error: function(errorMessage){
                alert("error!");
            }
        });//1st ajax
     });//for each counter  
});