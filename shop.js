var n=['',1,1,1]
var p=['',69,420,911]
var t=['',69,420,911]
var total=1400

plus=(i)=>{
  n[i]++
  t[i]=n[i]*p[i]
  total=t[1]+t[2]+t[3]
  document.getElementById('count'+i).innerText=n[i]
  document.getElementById('price'+i).innerText='$'+t[i]
  document.getElementById('lkol').innerText=total+'$'
}
minus=(i)=>{
  if(n[i]<=0) return
  n[i]--
  t[i]=n[i]*p[i]
  total=t[1]+t[2]+t[3]
  document.getElementById('count'+i).innerText=n[i]
  document.getElementById('price'+i).innerText='$'+t[i]
  document.getElementById('lkol').innerText=total+'$'
}