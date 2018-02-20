var j1=JSON.stringify(Quiz);
var j2=JSON.parse(j1);
var radio_ans;
var text_ans;
var page=(-1);
var check_ans=[];
var x=0;
function next()
{
    page++;
    if(page<=4 && page>=(-1))
    {
        page_load(page);    
    }
    if(page>=4)
    {
        page=3;
        page_load(page);
    } 
}
function previous()
    {
        page--;
        if(page>=(-1) && page<=4)
        {
             page_load(page);
        }
        if(page<=0)
        {
            page=0;
            document.getElementById("d1").style.display="block";
            page_load(page);
        }
    }
function text_que()
{
    var q1=j2.quiz[0].question;
    var para = document.createElement("input");
    document.getElementById("p1").style.display="none";
    document.getElementById("d2").style.display="none";
    document.getElementById("d3").style.display="none";
    document.getElementById("d4").style.display="none";
    para.type="text";
    para.id="text_id";
    document.getElementById("d1").innerHTML=q1 + "<br/>"+ "<br/>";
    document.getElementById("d1").appendChild(para);
}

function radio_que()
{
    var q2=j2.quiz[1].question;
    document.getElementById("p1").style.display="block";
    document.getElementById("n1").style.display="block"
    document.getElementById("d2").style.display="block";
    document.getElementById("d3").style.display="none";
    document.getElementById("d1").style.display="none";
    document.getElementById("d4").style.display="none";
    var main_div=document.getElementById("d2");
    main_div.innerHTML=q2 +"</br>"+ "</br>";
    var l=j2.quiz[1].choices.length;
    for(var i=0; i<l; i++)
    {
    var rd_div=document.getElementById("d2");
    var radio_item=document.createElement("input");
    radio_item.type="radio";
    radio_item.name="rd_grp";
    radio_item.id="rd_id"+i;
    radio_item.value=j2.quiz[1].choices[i];

    var obj_radio=document.createTextNode(j2.quiz[1].choices[i]);

    var obj_radio_label=document.createElement("label");
    obj_radio_label.htmlFor=radio_item.id;
    obj_radio_label.appendChild(radio_item);
    obj_radio_label.appendChild(obj_radio);
    rd_div.appendChild(obj_radio_label);
    }
    main_div.appendChild(rd_div);

}
function check_que()
{
    var q3=j2.quiz[2].question;
    
    document.getElementById("p1").style.display="block";
    document.getElementById("n1").style.display="block"
    document.getElementById("d3").style.display="block";
    document.getElementById("d2").style.display="none";
    document.getElementById("d1").style.display="none";
    document.getElementById("d4").style.display="none";
    var main_div=document.getElementById("d3");
    main_div.innerHTML=q3 +"<br/>"+ "<br/>";
    var l=j2.quiz[2].choices.length;
    var ch_div=document.getElementById("d3");
    for(var i=0; i<l; i++)
    {
    var check_item=document.createElement("input");
    check_item.type="checkbox";
    check_item.className="ch_grp";
    check_item.id="ch_id"+i;
    check_item.value=j2.quiz[2].choices[i];

    var obj_check=document.createTextNode(j2.quiz[2].choices[i]);
    var obj_check_label=document.createElement("label");
    obj_check_label.htmlFor=check_item.id;
    obj_check_label.appendChild(check_item);
    obj_check_label.appendChild(obj_check);
    ch_div.appendChild(obj_check_label);
    }
    main_div.appendChild(ch_div);
}
function drop_que()
{
    var q4=j2.quiz[3].question;
    document.getElementById("p1").style.display="block";
    document.getElementById("n1").style.display="none";
    var d=document.getElementById("d4");
    d.style.display="block";
    document.getElementById("d3").style.display="none";
    document.getElementById("d2").style.display="none";
    document.getElementById("d1").style.display="none";
    document.getElementById("d4").innerHTML=q4 + "<br/>";
    
    var node = document.createElement("input");
    node.setAttribute("type","submit");
    node.innerHTML = "Submit";
    node.value="Submit";
    node.onclick=function(){ans_display();};
    d.appendChild(node);
}
function page_load(page)
{
    switch(page){
    case 0:
        text_que(); 
        break;

    case 1:
       radio_que();
        break;

    case 2:
        check_que();
         break;
    case 3:
        drop_que();
        break;
    }
}
function ans_display()
{
    if(rd_id0.checked)
    {
        radio_ans="Mango";
    }
    if(rd_id1.checked)
    {
        radio_ans="Banana";
    }
    if(rd_id2.checked)
    {
        radio_ans="Apple";
    }
    if(rd_id3.checked)
    {
        radio_ans="Orange";
    }

    if(ch_id0.checked)
    {
        check_ans[x]="Cricket";
        x++;
    }
    if(ch_id1.checked)
    {
        check_ans[x]="Hockey";
        x++;
    }
    if(ch_id2.checked)
    {
        check_ans[x]="Kabaddi";
        x++;
    }

    if(ch_id3.checked)
    {
        check_ans[x]="Kho-Kho";
        x++;
    }
    text_ans=text_id.value; 
        var answers={"quiz": [
                            {"Question":j2.quiz[0].question,
                            "answer":text_ans,
                            "page":j2.quiz[0].page,
                            "type":j2.quiz[0].type,
                            "choices":j2.quiz[0].choices,
                            },
                            {"Question":j2.quiz[1].question,
                            "answer":radio_ans,
                            "page":j2.quiz[1].page,
                             "type":j2.quiz[1].type,
                             "choices":j2.quiz[1].choices,
                            },
                            {
                            "Question":j2.quiz[2].question,
                            "answer":check_ans,
                            "page":j2.quiz[2].page,
                             "type":j2.quiz[2].type,
                             "choices":j2.quiz[2].choices,
                            }  
        ]
    }
    var str = JSON.stringify(answers);
    document.getElementById("demo1").innerHTML = str;
   // console.log(per2);
    //console.log(per3);
}
