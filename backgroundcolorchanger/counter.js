let counter = document.querySelector("#counter"),
button = document.querySelectorAll(".button button"),
count = 0;

button.forEach(el =>
el.addEventListener('click', function(event){

    switch (event.target.id){

case 'decrease':
    count--;
    break;
    case 'reset':
    count = 0;
    break;
    case 'increase':
        count++;
        break;

    }
    counter.textContent = count;

    if (count > 0){

    
    counter.style.color = "green";

    }else if(count < 0 ){

        counter.style.color = "red";

    }else if(count == 0){

        counter.style.color = "black";

    }

})

)