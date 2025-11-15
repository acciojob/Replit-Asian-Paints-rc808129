//your JS code here. If required.
document.getElementById('change_button').addEventListener('click', function() {
    let blockId = document.getElementById('block_id').value;
    let color = document.getElementById('colour_id').value;
    
    // Reset all grid items to transparent
    let items = document.querySelectorAll('.grid-item');
    items.forEach(item => {
        item.style.backgroundColor = 'transparent';
    });

    // Change the color of the specific block
    document.getElementById(blockId).style.backgroundColor = color;
});

document.getElementById('Reset').addEventListener('click', function() {
    let items = document.querySelectorAll('.grid-item');
    items.forEach(item => {
        item.style.backgroundColor = 'transparent'; // or original color
    });
});
