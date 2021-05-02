$(document).ready(function(){

    let item_list = $('#item-list-section');
    let list_array = [];
    let table = document.getElementById('item-list-table')
    

$('form').submit(addItem);
$('.done-box').on('click', completeTask);

    function addItem() {
    let item_to_add = $('#item-to-add');
    list_array.push(item_to_add.val());
    console.log(item_to_add);
        let tr = table.insertRow(-1);
        let checkbox_cell = tr.insertCell(-1);
        let task_name_cell = tr.insertCell(-1);
        let modify_cell = tr.insertCell(-1);
        checkbox_cell = <input type="checkbox"></input> 
        task_name_cell.innerHTML = item_to_add.val();
        modify_cell = <button>Edit</button>
    }

    function completeTask(){

    }

   
})