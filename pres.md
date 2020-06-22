


# *DirectSearch.jl* Demo

<input type="text" id="vector_input">
<button type="button" id="inp_button">Set Point</button>
<button type="button" id="load_button">Load Graph </button>

<script>
document.getElementById("inp_button").onclick = function (){
	ws.send(JSON.stringify({type:"path",inp: JSON.parse("[" + document.getElementById("vector_input").value + "]")}))
}
document.getElementById("load_button").onclick = function (){
    ws.send(JSON.stringify({type:"surface"}))
}
</script>
<div id="tester" style="width:600px;height:250px;"></div>
---




