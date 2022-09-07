
const hourElm = document.getElementById("chour");
const minuteElm = document.getElementById('cminute');
const secondElm = document.getElementById('csecond');

document.getElementById('countdown').innerHTML = 00 +"d:"+ 00 +"h:"+ 00 +"m:"+ 00 +"s";

//call back function ()=>{ };
setInterval(() => {   
    d = new Date();
    const htime = d.getHours();
    const mtime = d.getMinutes();
    const stime = d.getSeconds();

    const hrotation = 30*htime + mtime/2;
    const mrotation = 6*mtime;
    const srotation = 6*stime;

    hourElm.style.transform = `rotate(${hrotation}deg)`;
    minuteElm.style.transform = `rotate(${mrotation}deg)`;
    secondElm.style.transform = `rotate(${srotation}deg)`;

}, 1000); 


clickfnc = () =>{
    const myTimeout = setInterval(()=>{
        a = new Date();
        
        let year = document.getElementById('year').value;
        let month = document.getElementById('month').value - 1;
        let day = document.getElementById('day').value;
        let hours = document.getElementById('hour').value;
        let minutes = document.getElementById('minute').value;
        
        b = new Date(year, month, day, hours, minutes);
        diff=b-a;
        
        d = Math.floor(diff/(1000*60*60*24));
        h = Math.floor((diff%(1000*60*60*24))/(1000*60*60));
        m = Math.floor((diff%(1000*60*60))/(1000*60));
        s = Math.floor((diff%(1000*60))/1000);
        
        if(diff <= 0){
            clearTimeout(myTimeout);
        }else{
            document.getElementById('countdown').innerHTML = d+"d:"+ h +"h:"+ m +"m:"+ s +"s";
        }

    },1000)
}