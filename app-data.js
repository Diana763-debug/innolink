// app-data.js — contoh data & helper untuk app InnoLink (client-side demo)
const DATA = {
  ideas:[
    { id:1, title:"Tong Sampah Pintar", desc:"Alat pintar mengasing & memampat sampah, sesuai untuk rumah.", price:20, pdfName:"SmartBin.pdf", pdfUrl:"sample.pdf" },
    { id:2, title:"Pengecas Solar Mini", desc:"Pengecas mudah alih untuk telefon, guna panel solar kecil.", price:40, pdfName:"SolarCharger.pdf", pdfUrl:"sample.pdf" },
    { id:3, title:"Manual AR Makmal", desc:"Manual makmal AR untuk panduan eksperimen interaktif.", price:30, pdfName:"ARManual.pdf", pdfUrl:"sample.pdf" },
    { id:4, title:"Botol Pintar", desc:"Botol yang jejak pengambilan air & beri peringatan minum.", price:15, pdfName:"SmartBottle.pdf", pdfUrl:"sample.pdf" }
  ],
  random:[
    {title:"Sistem Mini-Drone", short:"Penghantaran item ch dalam kampus."},
    {title:"Penapis Air Mudah Alih", short:"Penapis ringkas untuk komuniti luar bandar."},
    {title:"Aplikasi Pembelajaran AR", short:"Pembelajaran interaktif untuk subjek sains."}
  ]
};

function saveIdeaLocal(newIdea){
  const list = JSON.parse(localStorage.getItem('userIdeas')||'[]');
  list.unshift(newIdea);
  localStorage.setItem('userIdeas', JSON.stringify(list));
}

function getAllIdeas(){
  const user = JSON.parse(localStorage.getItem('userIdeas')||'[]');
  return user.concat(DATA.ideas);
}


