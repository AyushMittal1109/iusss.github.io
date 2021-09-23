let yetActive="home";




function fun1(a)
{

    let c1="nav-"+yetActive;
    let c2="nav-"+a;
    document.getElementById(yetActive).style.display='none';
    // console.log(document.getElementById(yetActive));
    document.getElementById(c1).style.color = "#34495e";
    document.getElementById(a).style.display='flex';
    yetActive=a;
    document.getElementById(c2).style.color="#0095eb";
    // console.log(document.getElementById(c2));
}

// let chari=0;
// let speed=50;
// let msg="..";

// function typeWriter()
// {
//     if(chari<msg.length)
//     {
//         document.getElementById("msg").innerHTML += msg.charAt(chari);
//         chari+=1;
//         setTimeout(typeWriter,speed);
//     }
// }