$(document).ready(function(){
   
    var todoapp = $('#todoapp');
    var title = $('<h1>Todo App</h1>');
    var input = $('<input placeholder="type me"/>');
    var btn = $('<button>add</button>');
    var list = $('<ul></ul>');
    var clear = $('<button>clear the list</button>');

    todoapp.append(title);
    todoapp.append(input);
    todoapp.append(btn);
    todoapp.append(list);
    todoapp.append(clear);

    btn.on('click', function(){
        var inputVal = input.val();
        input.val(" ");
        var newListItem = $('<li></li>').html(inputVal)
        list.append(newListItem);
    })

    function clearItems(){
        $('li.done').remove();
    }

    list.on('click', 'li', function(){
        $(this).toggleClass('done');
    })

    clear.on('click', clearItems);

})