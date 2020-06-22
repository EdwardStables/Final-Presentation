
//---Websockets---//

MakeWebSocket()
function MakeWebSocket(){
    ws = new WebSocket("ws://localhost:8084");

    ws.onopen = function() {
        console.log("Opened")    
    }

    ws.onmessage = function(evt){
        console.log("rx")
        var rx = evt.data 
        console.log(rx)
       	distribute_response(rx) 
    }

    ws.onclose = function(){
        alert("Websocket closed")
    }
}

function distribute_response(rx){
	data = JSON.parse(rx)
	
	if (data["response"] == "path"){
		path_plotter(data["data"])
	}
	else if (data["response"] == "surface"){
		surface_plotter(data["data"])
	}
}

//---/Websockets---//

//---3D plotting---//

function path_plotter(path){
	console.log("Plotting path")
	x_points = path["x"]	
	y_points = path["y"]	
	z_points = path["z"]	

	console.log(x_points)
    data = {
               mode: 'line',
			   line:{
			        width: 6	
			   },
               marker:{
                    size: 8,
                    line: {
						color: 'rgba(217, 217, 217, 0.14)',
						width: 0.5
					},
					opacity: 0.8
			   },
               x: x_points,
               y: y_points,
               z: z_points,
               type: 'scatter3d',
            }
	Plotly.addTraces('tester', data)
}
 

function surface_plotter(surface){
	console.log("Plotting surface")

	x_data = surface["x"]	
	y_data = surface["y"]	
	z_data = surface["z"]	

	console.log(x_data.length)
	console.log(y_data.length)
	console.log(z_data.length)


    var data = [{
               x: x_data,
               y: y_data,
               z: z_data,
               type: 'surface'
            },
   ];
      
    var layout = {
      title: 'Camel6',
      autosize: false,
      //width: 50,
      //height: 50,
      margin: {
        l: 10,//l: 65,
        r: 10,//r: 50,
        b: 10,//b: 65,
        t: 10,//t: 90,
      }
    };
    Plotly.newPlot('tester', data, layout);
}
//---/3D plotting---//
