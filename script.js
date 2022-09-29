var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');
var btn4 = document.getElementById('btn4');
var moneys = document.getElementById('money');
var table1 = document.getElementById('table1');
var totmoney =document.getElementById('totmoney');
var buybtn = document.getElementById('buybtn');
var table = document.getElementById('table');

const television = {
    id: "1",
    item: "television",
    money:200,
    piece: '1',
    totalmoney:'200',

};

const mouse = {
    id: "2",
    item: "mouse",
    money:30,
    piece: "1",
    totalmoney:"30",

};
const telephone = {
    id: "3",
    item: "telephone",
    money:800,
    piece: "1",
    totalmoney:"800",

};
const computer = {
    id: "4",
    item: "computer",
    money:1200,
    piece: '1',
    totalmoney:"1200",

};




btn1.addEventListener('click',function(){
    let table = document.createElement('tr');
    table1.appendChild(table);
    table.innerHTML = "<tr><td>"+television.id+"</td><td>"+television.item+"</td><td>"+television.money+"$</td><td>"+television.piece+"</td><td>"+television.totalmoney+"$</td></tr>";
    let dltbtn =document.createElement('button');
    table.appendChild(dltbtn);
    dltbtn.innerHTML =' x ';
    dltbtn.classList.add("btn");
    dltbtn.addEventListener('click',function(){
        table1.removeChild(table);
        totmoney.innerHTML = +parseInt(totmoney.innerHTML)-parseInt(television.money)
        if(totmoney.innerHTML<moneys.innerHTML){
            buybtn.style.display=''
        }
    });
    totmoney.innerHTML = +parseInt(totmoney.innerHTML)+parseInt(television.money);

    if(totmoney.innerHTML>moneys.innerHTML){
        buybtn.style.display ='none';
    }
}
);

btn2.addEventListener('click',function(){
    let table = document.createElement('tr');
    table1.appendChild(table);
    table.innerHTML = "<tr><td>"+mouse.id+"</td><td>"+mouse.item+"</td><td>"+mouse.money+"$</td><td>"+mouse.piece+"</td><td>"+mouse.totalmoney+"$</td></tr>";
    let dltbtn2 =document.createElement('button')
    table.appendChild(dltbtn2);
    dltbtn2.innerHTML =' x ';
    dltbtn2.classList.add("btn");
    dltbtn2.addEventListener('click',function(){
        table1.removeChild(table);
        totmoney.innerHTML = +parseInt(totmoney.innerHTML)-parseInt(mouse.money)
        if(totmoney.innerHTML<moneys.innerHTML){
            buybtn.style.display=''
        }
    });
    totmoney.innerHTML = +parseInt(totmoney.innerHTML)+parseInt(mouse.money);

    if(totmoney.innerHTML>moneys.innerHTML){
        buybtn.style.display ='none';
    }
    
   

}
);

btn3.addEventListener('click',function(){
    let table = document.createElement('tr');
    table1.appendChild(table);
    table.innerHTML ="<tr><td>"+telephone.id+"</td><td>"+telephone.item+"</td><td>"+telephone.money+"$</td><td>"+telephone.piece+"</td><td>"+telephone.totalmoney+"$</td></tr>";
    let dltbtn3 =document.createElement('button')
    table.appendChild(dltbtn3);
    dltbtn3.innerHTML =' x ';
    dltbtn3.classList.add("btn");
    dltbtn3.addEventListener('click',function(){
        table1.removeChild(table);
        totmoney.innerHTML = +parseInt(totmoney.innerHTML)-parseInt(telephone.money)
        if(totmoney.innerHTML<moneys.innerHTML){
            buybtn.style.display=''
        }
    });
    
    totmoney.innerHTML = +parseInt(totmoney.innerHTML)+parseInt(telephone.money);

    if(totmoney.innerHTML>moneys.innerHTML){
        buybtn.style.display ='none';
    }

}
);

btn4.addEventListener('click',function(){
    let table = document.createElement('tr');
    table1.appendChild(table);
    table.innerHTML = "<tr><td>"+computer.id+"</td><td>"+computer.item+"</td><td>"+computer.money+"$</td><td>"+computer.piece+"</td><td>"+computer.totalmoney+"$</td></tr>";
    let dltbtn4 =document.createElement('button')
    table.appendChild(dltbtn4);
    dltbtn4.innerHTML =' x ';
    dltbtn4.classList.add("btn");
    dltbtn4.addEventListener('click',function(){
        table1.removeChild(table);
        totmoney.innerHTML = +parseInt(totmoney.innerHTML)-parseInt(computer.money)
        if(totmoney.innerHTML<moneys.innerHTML){
            buybtn.style.display=''
        }
    });
    
    totmoney.innerHTML = +parseInt(totmoney.innerHTML)+parseInt(computer.money);

    if(totmoney.innerHTML>moneys.innerHTML){
        buybtn.style.display ='none';
    }

}
);


buybtn.addEventListener('click',function(){
    moneys.innerHTML = parseInt(moneys.innerHTML)-parseInt(totmoney.innerHTML);
    totmoney.innerHTML ='0';
    table.removeChild(table1)
   
     if(computer.money>moneys.innerHTML){
        btn4.style.display = 'none';
    }
    if(telephone.money>moneys.innerHTML){
        btn3.style.display = 'none';
        btn4.style.display = 'none';
    }
    if(television.money>moneys.innerHTML){
        btn2.style.display = 'none';
        btn3.style.display = 'none';
        btn4.style.display = 'none';
    }
    if(mouse.money>moneys.innerHTML){
        btn1.style.display = 'none';
        btn2.style.display = 'none';
        btn3.style.display = 'none';
        btn4.style.display = 'none';
    };


   
});





