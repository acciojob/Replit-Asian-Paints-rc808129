document.getElementById('change_button').addEventListener('click', function() {
    let blockId = document.getElementById('block_id').value;
    let color = document.getElementById('colour_id').value;

    let items = document.querySelectorAll('.grid-item');
    items.forEach(item => {
        item.style.backgroundColor = 'transparent';
    });

    document.getElementById(blockId).style.backgroundColor = color;
});

document.getElementById('reset_button').addEventListener('click', function() {
    let items = document.querySelectorAll('.grid-item');
    items.forEach(item => {
        item.style.backgroundColor = 'transparent';
    });
});
