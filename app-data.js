
// DATA contoh — boleh tambah banyak idea
const DATA = {
  ideas:[
    { id:1, title:"Tong Sampah Pintar", desc:"Alat pintar mengasing dan memampat sampah, sesuai untuk rumah.", price:20, pdfName:"SmartBin.pdf", pdfUrl:"sample.pdf" },
    { id:2, title:"Pengecas Solar Mini", desc:"Pengecas mudah alih untuk telefon, guna panel solar kecil.", price:40, pdfName:"SolarCharger.pdf", pdfUrl:"sample.pdf" },
    { id:3, title:"Manual AR Makmal", desc:"Manual makmal interaktif menggunakan AR untuk panduan eksperimen.", price:30, pdfName:"ARManual.pdf", pdfUrl:"sample.pdf" },
    { id:4, title:"Botol Pintar", desc:"Botol yang jejak pengambilan air dan beri amaran minum.", price:15, pdfName:"SmartBottle.pdf", pdfUrl:"sample.pdf" }
  ],
  random:[
    {title:"Sistem Mini-Drone", short:"Penghantaran item ke kawasan kampus."},
    {title:"Reka Bentuk Penapis Air", short:"Penapis mudah alih untuk komuniti luar bandar."},
    {title:"Aplikasi Pembelajaran AR", short:"Platform pembelajaran AR untuk pelajar."}
  ]
};

// save idea created by user to localStorage
function saveIdeaLocal(newIdea){
  const existing = JSON.parse(localStorage.getItem('userIdeas')||'[]');
  existing.unshift(newIdea);
  localStorage.setItem('userIdeas', JSON.stringify(existing));
}
