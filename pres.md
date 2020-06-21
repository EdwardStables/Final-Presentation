


# *DirectSearch.jl* Demo

<input type="text" id="vector_input">
<button type="button" id="inp_button">Set Point</button>
<button type="button" id="load_button">Load Graph </button>

<script>
document.getElementById("inp_button").onclick = function (){
    ws.send("path")
}
document.getElementById("load_button").onclick = function (){
    ws.send("surface")
}
</script>
<div id="tester" style="width:600px;height:250px;"></div>
---




