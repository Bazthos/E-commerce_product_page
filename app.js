let button_menu = document.getElementById('mobile');
let cache = document.getElementById('cache');

let previous = document.getElementById('previous');
let next = document.getElementById('next');
let focused = document.getElementById('focused');

let add_cart = document.getElementById('add_cart');
let cart_total = document.getElementById('cart_total');
let product = {
    name : document.getElementById('product_name').innerHTML,
    price : parseFloat(document.getElementById('after_reduction').innerHTML),
};

let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let span_quantity = document.getElementById('quantity');
let quantity = parseInt(document.getElementById('quantity').innerHTML);

let screen = window.screen.availWidth;
let lightbox = document.getElementById('lightbox');
let close_light = document.getElementById('close_light');
let croix = document.getElementById('croix');
let mini1 = document.getElementById('mini_1');
let mini2 = document.getElementById('mini_2');
let mini3 = document.getElementById('mini_3');
let mini4 = document.getElementById('mini_4');
let all_mini = [mini1, mini2, mini3, mini4];

let mini_1 = document.getElementById('mini1');
let mini_2 = document.getElementById('mini2');
let mini_3 = document.getElementById('mini3');
let mini_4 = document.getElementById('mini4');
let all_light_mini = [mini_1, mini_2, mini_3, mini_4];
let focus_light = document.getElementById('focus_light');

let previousl = document.getElementById('previousl');
let nextl = document.getElementById('nextl');

let n = 1;

function addnone(element){
    element.classList.add('none');
}

function removenone(element){
    element.classList.remove('none');
}

/*Menu*/
button_menu.addEventListener('click', ()=>{
    if(cache.classList.contains('none')){
        removenone(cache);
    }else{
        addnone(cache);
    }
})

/*Gestion du cache*/
cache.addEventListener('click', ()=>{
    button_menu.checked = false;
    addnone(cache);
    lightbox.style.display = 'none';
})

/*Button next and previous*/
let i = 1;
next.addEventListener('click', ()=>{
    if(i>4){
        i=1;
    };

    if(i == 1){
        focused.style.backgroundImage = "url('images/image-product-2.jpg')";
    };

    if(i == 2){
        focused.style.backgroundImage = "url('images/image-product-3.jpg')";
    };

    if(i == 3){
        focused.style.backgroundImage = "url('images/image-product-4.jpg')";
    };

    if(i == 4){
        focused.style.backgroundImage = "url('images/image-product-1.jpg')";
    };

    i+=1;
})

previous.addEventListener('click', ()=>{
    if(i == 0){
        i=4;
    };

    if(i == 1){
        focused.style.backgroundImage = "url('images/image-product-4.jpg')";
    };

    if(i == 2){
        focused.style.backgroundImage = "url('images/image-product-1.jpg')";
    };

    if(i == 3){
        focused.style.backgroundImage = "url('images/image-product-2.jpg')";
    };

    if(i == 4){
        focused.style.backgroundImage = "url('images/image-product-3.jpg')";
    };

    i-=1;
})

/*Quantité*/

plus.addEventListener('click', ()=>{
    quantity += 1;
    span_quantity.innerHTML = quantity;
})

minus.addEventListener('click', ()=>{
    quantity -= 1;
    if(quantity < 0){
        quantity = 0;
    };
    span_quantity.innerHTML = quantity;
})

/*Lightbox*/

function focus1(){
    focused.style.backgroundImage = "url('images/image-product-1.jpg')";
    focus_light.style.backgroundImage = "url('images/image-product-1.jpg')";
    all_mini.forEach(element => {
        element.classList.remove('focus');
        element.classList.add('unfocus');
    });
    all_light_mini.forEach(element => {
        element.classList.remove('focus');
        element.classList.add('unfocus');
    });
    mini1.classList.remove('unfocus');
    mini1.classList.add('focus');
    mini_1.classList.remove('unfocus');
    mini_1.classList.add('focus');
    n =4;
}

function focus2(){
    focused.style.backgroundImage = "url('images/image-product-2.jpg')";
    focus_light.style.backgroundImage = "url('images/image-product-2.jpg')";
    all_mini.forEach(element => {
        element.classList.remove('focus');
        element.classList.add('unfocus');
    });
    all_light_mini.forEach(element => {
        element.classList.remove('focus');
        element.classList.add('unfocus');
    });
    mini2.classList.remove('unfocus');
    mini2.classList.add('focus');
    mini_2.classList.remove('unfocus');
    mini_2.classList.add('focus');
    n =1;
}

function focus3(){
    focused.style.backgroundImage = "url('images/image-product-3.jpg')";
    focus_light.style.backgroundImage = "url('images/image-product-3.jpg')";
    all_mini.forEach(element => {
        element.classList.remove('focus');
        element.classList.add('unfocus');
    });
    all_light_mini.forEach(element => {
        element.classList.remove('focus');
        element.classList.add('unfocus');
    });
    mini3.classList.remove('unfocus');
    mini3.classList.add('focus');
    mini_3.classList.remove('unfocus');
    mini_3.classList.add('focus');
    n =2;
}

function focus4(){
    focused.style.backgroundImage = "url('images/image-product-4.jpg')";
    focus_light.style.backgroundImage = "url('images/image-product-4.jpg')";
    all_mini.forEach(element => {
        element.classList.remove('focus');
        element.classList.add('unfocus');
    });
    all_light_mini.forEach(element => {
        element.classList.remove('focus');
        element.classList.add('unfocus');
    });
    mini4.classList.remove('unfocus');
    mini4.classList.add('focus');
    mini_4.classList.remove('unfocus');
    mini_4.classList.add('focus');
    n = 3;
}

if(screen > 767){
    mini1.addEventListener('click', ()=>{
        focus1();
    })

    mini2.addEventListener('click', ()=>{
        focus2();
    })

    mini3.addEventListener('click', ()=>{
        focus3();
    })

    mini4.addEventListener('click', ()=>{
        focus4();
    })

    mini_1.addEventListener('click', ()=>{
        focus1();
    })

    mini_2.addEventListener('click', ()=>{
        focus2();
    })

    mini_3.addEventListener('click', ()=>{
        focus3();
    })

    mini_4.addEventListener('click', ()=>{
        focus4();
    })
}

if(screen > 975){
    focused.addEventListener('click', ()=>{
        lightbox.style.display = 'flex';
        removenone(cache);
        close_light.scrollIntoView({block : 'start'});
    })

    close_light.addEventListener('click', ()=>{
        lightbox.style.display = 'none';
        addnone(cache);
    })

    close_light.addEventListener('mouseover', ()=>{
        croix.style.fill = 'hsl(26, 100%, 55%)';
    })

    close_light.addEventListener('mouseleave', ()=>{
        croix.style.fill = 'hsl(0, 0%, 100%)';
    })
}

nextl.addEventListener('click', ()=>{
    n+=1;
    if(n == 5){
        n=1;
    };

    if(n == 1){
        focus2();
    };

    if(n == 2){
        focus3();
    };

    if(n == 3){
        focus4();
    };

    if(n == 4){
        focus1();
    };
})

nextl.addEventListener('mouseover', ()=>{
    nextl.querySelector('path').style.stroke = 'hsl(26, 100%, 55%)';
})
nextl.addEventListener('mouseout', ()=>{
    nextl.querySelector('path').style.stroke = '#1D2026';
})

previousl.addEventListener('click', ()=>{
    n-=1;
    if(n == 0){
        n=4;
    };
    if(n == 1){
        focus2();
    };

    if(n == 2){
        focus3();
    };

    if(n == 3){
        focus4();
    };

    if(n == 4){
        focus1();
    };
})

previousl.addEventListener('mouseover', ()=>{
    previousl.querySelector('path').style.stroke = 'hsl(26, 100%, 55%)';
})

previousl.addEventListener('mouseout', ()=>{
    previousl.querySelector('path').style.stroke = '#1D2026';
})

let number = 0;
let number_product = 0;
/*Add product to cart*/
add_cart.addEventListener('click', ()=>{
    let total = product.price * quantity;
    let li = document.createElement('li');
    let div_product = document.createElement('div');
    let img_thumb = document.createElement('img');
    let h3 = document.createElement('h3');
    let p = document.createElement('p');
    let span = document.createElement('span');
    let quantity_each = document.createElement('span');
    let img_delete = document.createElement('img');
    let check = document.getElementById('check');
    let number_items = document.getElementById('number_items');

    if(quantity == 0){
        return;
    }
    /*Creation de l'élément conteneur en fonction du produit*/
    if(cart_total.childElementCount == 3){

        quantity_each.innerHTML = quantity;
        quantity_each.setAttribute('class', 'none');

        div_product.classList.add('product');

        img_thumb.setAttribute('src', 'images/image-product-1-thumbnail.jpg');
        img_thumb.setAttribute('alt', '');
        img_thumb.setAttribute('aria-hidden', 'true');
    
        h3.innerHTML = product.name;
    
        p.innerHTML = "$" + product.price + " x " + quantity;
        p.setAttribute('id', 'resume_price');
    
        span.innerHTML = "$" + total;
        span.setAttribute('id', 'total_price');
    
        p.append(span);
        
        img_delete.setAttribute('src', 'images/icon-delete.svg')
        img_delete.setAttribute('alt', '');
        img_delete.setAttribute('aria-hidden', 'true');
        img_delete.setAttribute('class', 'delete_item');
    
        div_product.append(img_thumb);
        div_product.append(h3);
        div_product.append(p);
        div_product.append(img_delete);
        div_product.append(quantity_each);
    
        li.append(div_product);
    
        /*Gestion des boutons de checkout et 'empty' cart*/
        addnone(document.getElementById('empty'));
        check.insertAdjacentElement("beforebegin",li);
        document.getElementById('check').classList.remove('none');

        removenone(number_items);
        number += quantity;
        number_items.innerHTML = number; 
    }else{
        number += quantity;
        total = number * product.price;
        
        document.getElementById('resume_price').innerHTML =  "$" + product.price + " x " + number;
        span.innerHTML = "$" + total;
        span.setAttribute('id', 'total_price');
        document.getElementById('resume_price').append(span);
        number_items.innerHTML = number; 
    }


    /*Supprimer un objet de la liste*/
    let delete_item = document.querySelectorAll('.delete_item');
    delete_item.forEach((e) =>{
        e.addEventListener('click', (event)=>{
    
            if(cart_total.childElementCount == 4){
                e.parentElement.parentElement.remove();
                addnone(document.getElementById('check'));
                removenone(document.getElementById('empty'));
                number = 0;
                number_items.innerHTML = number; 
                addnone(number_items);
            }else{
                e.parentElement.parentElement.remove();
            }
        })
    })
})
