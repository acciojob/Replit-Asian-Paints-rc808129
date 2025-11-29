
let input1 = document.getElementById('block_id')
	let input2 = document.getElementById('colour_id')

input1.addEventListener('keydown', function(e){
		if(e.key === "Enter"){
			input2.focus();
		}
	})
let values;
document.getElementById('change_button').addEventListener('click', function() {
	
    let blockId = document.getElementById('block_id').value;
    let color = document.getElementById('colour_id').value;
	
    if(values){
		values.style.backgroundColor = 'transparent';
	}
	values = document.getElementById(blockId)
    

    document.getElementById(blockId).style.backgroundColor = color;
});

document.getElementById('reset_button').addEventListener('click', function() {
  

    if (values) {
        values.style.backgroundColor = 'transparent';
        values = null;
    }

    document.getElementById('block_id').value = "";
    document.getElementById('colour_id').value = "";
});

