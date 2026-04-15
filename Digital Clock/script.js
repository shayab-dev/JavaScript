function clock(){
  let hour = document.getElementById('hour');
  let min = document.getElementById('min');
  let sec = document.getElementById('sec');
  let timezone = document.getElementById('timezone');


  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();

  let ampm = h>=12 ? "PM" : "AM";

  if(h > 12){
    h = h-12;   //  12 hr timezone mh chal rha
  }

  m = (m<10) ? "0" + m : m;   // min k pehle 0 lagega agar wo 10 se choota h

  hour.innerHTML = h;
  min.innerHTML = m;
  sec.innerHTML = s;
  timezone.innerHTML = ampm;
};
setInterval(clock,1000);
clock();

