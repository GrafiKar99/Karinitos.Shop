const categories=
["Skincare","Accesorios","Perfumería","Maquillaje","Calzado","Hogar","Cocina","Mascotas","Tecnología","Salud","Papelería","Cuidado Capilar","Ropa","Herramientas"];

const products=[

 {id:1,
  name:"Serum de pétalos de rosas - Rose Petal®",
  category:"Skincare",
  price:60000,
  images:["Imagenes/Productos/Skincare/Serum de pétalos de rosas - Rose Petal®.jpg",
          "imagenes/Productos/Skincare/Serum de pétalos de rosas - Rose Petal® 2.jpg"]},

 {id:2,
  name:"Serum de The Ordinary Niacinamide 10 Zinc 1®",
  category:"Skincare",
  price:60000,
  images:["Imagenes/Productos/Skincare/Serum de The Ordinary Niacinamide 10 Zinc 1®.jpg",
          "Imagenes/Productos/Skincare/Serum de The Ordinary Niacinamide 10 Zinc 1®.jpg"]},

 {id:3,
  name:"Dúo de Hyaluronic Acid 2% + B5 & AHA 30% + BHA 2% Peeling Solution de The Ordinary®",
  category:"Skincare",
  price:77000,
  images:["Imagenes/Productos/Skincare/Serum-Duo.jpg",
          "Imagenes/Productos/Skincare/Serum-Duo.jpg"]},

 {id:4,
  name:"Gafas unisex de PRADA®",
  category:"Accesorios",
  price:78000,
  images:["Imagenes/Productos/Accesorios/Gafas unisex de PRADA®.jpg",
          "Imagenes/Productos/Accesorios/Gafas unisex de PRADA® 2.png"]},

 {id:5,
  name:"Almohada viajeras®",
  category:"Accesorios",
  price:76000,
  images:["Imagenes/Productos/Accesorios/Almohada viajeras®.jpg",
          "Imagenes/Productos/Accesorios/Almohada viajeras® 2.jpg"]},

 {id:6,
  name:"Kit de Manicure & Pedicure x12 piezas®",
  category:"Accesorios",
  price:56000,
  images:["Imagenes/Productos/Accesorios/Kit de Manicure & Pedicure x12 piezas®.jpg",
          "Imagenes/Productos/Accesorios/Kit de Manicure & Pedicure x12 piezas® 2.jpg"]},

 {id:7,
  name:"Perfume Jean Paul Gaultier de hombre Le beau paradise garden de 125ml®",
  category:"Perfumería",
  price:97000,
  images:["Imagenes/Productos/Perfumería/Perfume Jean Paul Gaultier de hombre Le beau paradise garden de 125ml®.jpg",
          "Imagenes/Productos/Perfumería/Perfume Jean Paul Gaultier de hombre Le beau paradise garden de 125ml® 2.jpg"]},

 {id:8,
  name:"Sauvage Dior de 100ml®",
  category:"Perfumería",
  price:82000,
  images:["Imagenes/Productos/Perfumería/Sauvage Dior de 100ml®.jpg",
          "Imagenes/Productos/Perfumería/Sauvage Dior de 100ml®.jpg"]},

 {id:9,
  name:"Perfume BVLGARI de 100 ml®",
  category:"Perfumería",
  price:87000,
  images:["Imagenes/Productos/Perfumería/bvlgari-man-glacial-essence.jpg.jpg",
          "Imagenes/Productos/Perfumería/bvlgari-man-glacial-essence.jpg.jpg"]},

 {id:10,
  name:"Brocha mágica®",
  category:"Maquillaje",
  price:51000,
  images:["Imagenes/Productos/Maquillaje/Brocha mágica® 2.jpg",
          "Imagenes/Productos/Maquillaje/Brocha mágica® 1.jpg"]},

 {id:11,
  name:"Crema hidratante facial NIDA®",
  category:"Skincare",
  price:62000,
  images:["Imagenes/Productos/Skincare/Crema hidratante facial NIDA®.jpg",
          "Imagenes/Productos/Skincare/Crema hidratante facial NIDA® 2.jpg"]},

 {id:12,
  name:"Crema aclarante x3 de ZAMIA®",
  category:"Maquillaje",
  price:61000,
  images:["Imagenes/Productos/Maquillaje/Crema aclarante x3 de ZAMIA®.jpg",
          "Imagenes/Productos/Maquillaje/Crema aclarante x3 de ZAMIA®.jpg"]}, 
          
 {id:13,
  name:"Mocasín de hombre VELEZ®",
  category:"Calzado",
  price:107000,
  images:["Imagenes/Productos/Calzado/Mocasín de hombre VELEZ®.jpg",
          "Imagenes/Productos/Calzado/Mocasín de hombre VELEZ®.jpg"]},      
          
 {id:14,
  name:"Tennis deportivos Unisex®",
  category:"Calzado",
  price:112000,
  images:["Imagenes/Productos/Calzado/Tennis deportivos Unisex®.jpg",
          "Imagenes/Productos/Calzado/Tennis deportivos Unisex® 2.jpg"]},          
          
 {id:15,
  name:"Plataformas Negras®",
  category:"Calzado",
  price:100000,
  images:["Imagenes/Productos/Calzado/Plataformas Negras®.jpg",
          "Imagenes/Productos/Calzado/Plataformas Negras®.jpg"]},      
          
 {id:16,
  name:"Tijeras con guía láser®",
  category:"Hogar",
  price:57000,
  images:["Imagenes/Productos/Hogar/Tijeras con guía láser® 2.jpg",
          "Imagenes/Productos/Hogar/Tijeras con guía láser®.jpg"]},     
          
 {id:17,
  name:"Reloj de arena sensorial móvil®",
  category:"Hogar",
  price:67000,
  images:["Imagenes/Productos/Hogar/Reloj de arena sensorial móvil® 2.jpg",
          "Imagenes/Productos/Hogar/Reloj de arena sensorial móvil®.jpg"]},          
          
 {id:18,
  name:"Protector de sofá de 2 puestos®",
  category:"Hogar",
  price:69000,
  images:["Imagenes/Productos/Hogar/Protector de sofá de 2 puestos®.jpg",
          "Imagenes/Productos/Hogar/Protector de sofá de 2 puestos® 2.jpg"]},          
          
 {id:19,
  name:"Tapete grande antideslizante®",
  category:"Cocina",
  price:70000,
  images:["Imagenes/Productos/Cocina/Tapete grande antideslizante®.jpg",
          "Imagenes/Productos/Cocina/Tapete grande antideslizante® 2.jpg"]},          
          
 {id:20,
  name:"Caneca de basura plegable (pequeña)®",
  category:"Cocina",
  price:62000,
  images:["Imagenes/Productos/Cocina/Caneca de basura plegable (pequeña)®.jpg",
          "Imagenes/Productos/Cocina/Caneca de basura plegable (pequeña)®.jpg"]},          

 {id:21,
  name:"Medidor de cocción de huevo®",
  category:"Cocina",
  price:53000,
  images:["Imagenes/Productos/Cocina/Medidor de cocción de huevo®.jpg",
          "Imagenes/Productos/Cocina/Medidor de cocción de huevo® 2.jpg"]},   
          
 {id:22,
  name:"Pelota interactiva para gatos®",
  category:"Mascotas",
  price:57000,
  images:["Imagenes/Productos/Mascotas/Pelota interactiva para gatos®.jpg",
          "Imagenes/Productos/Mascotas/Pelota interactiva para gatos® 2.jpg"]},  
          
 {id:23,
  name:"Micrófono de solapa inalámbrico®",
  category:"Tecnología",
  price:92000,
  images:["Imagenes/Productos/Tecnología/Micrófono de solapa inalámbrico® 2.jpg",
          "Imagenes/Productos/Tecnología/Micrófono de solapa inalámbrico®.jpg"]},   
          
 {id:24,
  name:"Mochila transportadora para tu mascota®",
  category:"Mascotas",
  price:92000,
  images:["Imagenes/Productos/Mascotas/Mochila transportadora para tu mascota® 2.png",
          "Imagenes/Productos/Mascotas/Mochila transportadora para tu mascota®.png"]},      
          
 {id:25,
  name:"Cepillo a vapor 3 en 1 (masajeador, peine, spray)®",
  category:"Mascotas",
  price:56000,
  images:["Imagenes/Productos/Mascotas/Cepillo a vapor 3 en 1 (masajeador, peine, spray)®.png",
          "Imagenes/Productos/Mascotas/Cepillo a vapor 3 en 1 (masajeador, peine, spray)® 2.png"]},    
          
 {id:26,
  name:"Mini proyector LED portátil modelo YG-300®",
  category:"Tecnología",
  price:92000,
  images:["Imagenes/Productos/Tecnología/Mini proyector LED portátil modelo YG-300®.png",
          "Imagenes/Productos/Tecnología/Mini proyector LED portátil modelo YG-300®.png"]},          
          
 {id:27,
  name:"Combo de teclado + mouse inalámbrico recargable ®",
  category:"Tecnología",
  price:82000,
  images:["Imagenes/Productos/Tecnología/Combo de teclado + mouse inalámbrico recargable ®.jpg",
          "Imagenes/Productos/Tecnología/Combo de teclado + mouse inalámbrico recargable ® 2.png"]},     
          
 {id:28,
  name:"Bella All Natural Extreme Detox, sabor piña de 400 g®",
  category:"Salud",
  price:68000,
  images:["Imagenes/Productos/Salud/Bella All Natural Extreme Detox, sabor piña de 400 g®.png",
          "Imagenes/Productos/Salud/Bella All Natural Extreme Detox, sabor piña de 400 g®.png"]},     
          
 {id:29,
  name:"Prebióticos + Probióticos y Zinc x2 (Cuidado Íntimo)®",
  category:"Salud",
  price:100000,
  images:["Imagenes/Productos/Salud/Prebióticos + Probióticos y Zinc x2 (Cuidado Íntimo)®.jfif",
          "Imagenes/Productos/Salud/Prebióticos + Probióticos y Zinc x2 (Cuidado Íntimo)® 2.jpg"]},    
          
 {id:30,
  name:"Aceite de Batana 100% Puro y Natural®",
  category:"Cuidado Capilar",
  price:50000,
  images:["Imagenes/Productos/Cuidado Capilar/Aceite-batana.gif",
          "Imagenes/Productos/Cuidado Capilar/Aceite-batana.gif"]}, 

{id:31,
  name:"Bebida Anti-Estrés MaxCalm (MaxCalm Relaxing Drink Mix)®",
  category:"Salud",
  price:66000,
  images:["Imagenes/Productos/Salud/Bebida Anti-Estrés MaxCalm (MaxCalm Relaxing Drink Mix)®.jpeg",
          "Imagenes/Productos/Salud/Bebida Anti-Estrés MaxCalm (MaxCalm Relaxing Drink Mix)® 2.jpeg"]},   

{id:32,
  name:"Sujeta libros de escritorio (Expandible y Retráctil)®",
  category:"Papelería",
  price:50000,
  images:["Imagenes/Productos/Papelería/Sujeta libros de escritorio (Expandible y Retráctil)®.jpeg",
          "Imagenes/Productos/Papelería/Sujeta libros de escritorio (Expandible y Retráctil)®.jpeg"]},   
          
{id:33,
  name:"Globo terráqueo escolar®",
  category:"Papelería",
  price:62000,
  images:["Imagenes/Productos/Papelería/Globo terráqueo escolar®.jpeg",
          "Imagenes/Productos/Papelería/Globo terráqueo escolar®.jpeg"]},   

{id:34,
  name:"Mini guillotina de papel portátil / Cortador de precisión A4®",
  category:"Papelería",
  price:60000,
  images:["Imagenes/Productos/Papelería/Mini guillotina de papel portátil Cortador de precisión A4®.jpeg",
          "Imagenes/Productos/Papelería/Mini guillotina de papel portátil Cortador de precisión A4®.jpeg"]},
          
{id:35,
  name:"Tratamiento repolarizador + restaurador con células madre vegetales (Fórmula bomba 16 en 1)®",
  category:"Cuidado Capilar",
  price:74000,
  images:["Imagenes/Productos/Cuidado Capilar/Tratamiento repolarizador + restaurador con células madre vegetales (Fórmula bomba 16 en 1)®.jpeg",
          "Imagenes/Productos/Cuidado Capilar/Tratamiento repolarizador + restaurador con células madre vegetales (Fórmula bomba 16 en 1)®.jpeg"]},   

{id:36,
  name:"Combo / Kit / S.O.S. / Ultra reparador y crecimiento®",
  category:"Cuidado Capilar",
  price:133000,
  images:["Imagenes/Productos/Cuidado Capilar/Combo Kit S.O.S. Ultra reparador y crecimiento®.jpeg",
          "Imagenes/Productos/Cuidado Capilar/Combo Kit S.O.S. Ultra reparador y crecimiento® 2.jpeg"]},    
          
{id:37,
  name:"Body con escote en gota en tela suplex (talla única)®",
  category:"Ropa",
  price:60000,
  images:["Imagenes/Productos/Ropa/Body con escote en gota en tela suplex (talla única)®.jpeg",
          "Imagenes/Productos/Ropa/Body con escote en gota en tela suplex (talla única)® 2.jpeg"]},   

{id:38,
  name:"Body Selección Colombiana®",
  category:"Ropa",
  price:64000,
  images:["Imagenes/Productos/Ropa/Body Selección Colombiana®.jpeg",
          "Imagenes/Productos/Ropa/Body Selección Colombiana® 2.jpeg"]},   

{id:39,
  name:"Pantalón para dama en bota recta®",
  category:"Ropa",
  price:82000,
  images:["Imagenes/Productos/Ropa/Pantalón para dama en bota recta®.jpeg",
          "Imagenes/Productos/Ropa/Pantalón para dama en bota recta® 2.jpeg"]},
          
{id:40,
  name:"Kit Destornillador Eléctrico Inalámbrico Recargable 47 en 1®",
  category:"Herramientas",
  price:74000,
  images:["Imagenes/Productos/Herramientas/Kit Destornillador Eléctrico Inalámbrico Recargable 47 en 1®.jpeg",
          "Imagenes/Productos/Herramientas/Kit Destornillador Eléctrico Inalámbrico Recargable 47 en 1®.jpeg"]},   
          
{id:41,
  name:"Kit de supervivencia táctico profesional 14 en 1®",
  category:"Herramientas",
  price:84000,
  images:["Imagenes/Productos/Herramientas/Kit de supervivencia táctico profesional 14 en 1®.jpeg",
          "Imagenes/Productos/Herramientas/Kit de supervivencia táctico profesional 14 en 1®.jpeg"]},   

{id:42,
  name:"Kit Taladro Percutor Inalámbrico 48V con 25 Accesorios®",
  category:"Herramientas",
  price:132000,
  images:["Imagenes/Productos/Herramientas/Kit Taladro Percutor Inalámbrico 48V con 25 Accesorios®.jpeg",
          "Imagenes/Productos/Herramientas/Kit Taladro Percutor Inalámbrico 48V con 25 Accesorios®.jpeg"]},   

 {id:43,
  name:"Crema elixir Anti-Edad con extracto de Cebolla Roja®",
  category:"Skincare",
  price:52000,
  images:["Imagenes/Productos/Skincare/Crema elixir Anti-Edad con extracto de Cebolla Roja®.jpeg",
          "Imagenes/Productos/Skincare/Crema elixir Anti-Edad con extracto de Cebolla Roja® 2.jpeg"]},   

{id:44,
  name:"Espuma limpiadora facial®",
  category:"Skincare",
  price:84000,
  images:["Imagenes/Productos/Skincare/Espuma limpiadora facial®.jpeg",
          "Imagenes/Productos/Skincare/Espuma limpiadora facial® 2.jpeg"]},   

{id:45,
  name:"Limpiador hidratante & Refrescante de placenta®",
  category:"Skincare",
  price:50000,
  images:["Imagenes/Productos/Skincare/Limpiador hidratante & Refrescante de placenta®.jpeg",
          "Imagenes/Productos/Skincare/Limpiador hidratante & Refrescante de placenta® 2.jpeg"]},
];

let cart=JSON.parse(localStorage.getItem("karinitosCart")||"[]"), activeCategory="Todas";

const money=n=>new Intl.NumberFormat("es-CO",{style:"currency",currency:"COP",maximumFractionDigits:0}).format(n);

function save()
{localStorage.setItem("karinitosCart",JSON.stringify(cart));updateCartCount()}

function updateCartCount()
{document.querySelectorAll("#cartCount").forEach(x=>x.textContent=cart.reduce((s,i)=>s+i.qty,0))}

function renderCategories()
{
 const box=document.getElementById("categoryCarousel"); if(box) box.innerHTML=categories.map((c,i)=>`<a class="category-card" href="tienda.html?cat=${encodeURIComponent(c)}"><img src="https://images.unsplash.com/photo-${["1556228578-8c89e6adf883","1611652022419-a9419f74343d","1541643600914-78b084683601","1596462502278-27bfdc403348","1542291026-7eec264c27ff","1586023492125-27b2c045efd7","1556911220-bff31c812dba","1552053831-71594a27632d","1496181133206-80ce9b88a853","1584308666744-24d5c474f2b6","1456735190827-d1262f71b8a3","1522337360788-8b13dee7a37e","1525507119028-ed4c629a60a3","1504148455328-c376907d081c"][i]}?w=600"><div>${c.toUpperCase()}</div></a>`).join("");
}

function renderFilters()
{
 const box=document.getElementById("categoryFilters");
 if(!box)return;

 box.innerHTML=
   `<button class="category-filter ${activeCategory==="Todas"?"active":""}" data-cat="Todas">TODAS</button>`+
   categories.map(c=>
     `<button class="category-filter ${activeCategory===c?"active":""}" data-cat="${c}">${c.toUpperCase()}</button>`
   ).join("");

 const selected=document.getElementById("selectedCategory");

 if(selected){
   selected.textContent=activeCategory==="Todas"
     ? "CATEGORÍAS"
     : activeCategory.toUpperCase();
 }

 box.querySelectorAll(".category-filter").forEach(b=>{
   b.onclick=()=>{
     activeCategory=b.dataset.cat;

     renderFilters();
     renderProducts();

     const menu=document.querySelector(".mobile-category-menu");

     if(menu){
       menu.classList.remove("open");
     }
   };
 });
}

function renderProducts()
{
 const grid=document.getElementById("productsGrid"); if(!grid)return;
 const q=(document.getElementById("searchInput")?.value||"").toLowerCase(), min=Number(document.getElementById("minPrice")?.value||0), max=Number(document.getElementById("maxPrice")?.value||Infinity);
 const list=products.filter(p=>(activeCategory==="Todas"||p.category===activeCategory)&&p.name.toLowerCase().includes(q)&&p.price>=min&&p.price<=max);
 document.getElementById("resultCount").textContent=`${list.length} producto${list.length===1?"":"s"} encontrado${list.length===1?"":"s"}`;
 grid.innerHTML=list.length?list.map(p=>`<article class="product-card"><div class="product-image"><img class="first" src="${p.images[0]}" alt="${p.name}"><img class="second" src="${p.images[1]}" alt=""></div><div class="product-info"><h3>${p.name}</h3><div class="price">${money(p.price)}</div><button class="add-btn" data-id="${p.id}">AÑADIR AL CARRITO</button></div></article>`).join(""):`<div class="empty">💛 No encontramos productos con esos filtros. 💛</div>`;
 grid.querySelectorAll(".add-btn").forEach(b=>b.onclick=()=>add(Number(b.dataset.id)));
}

function add(id)
{const p=products.find(x=>x.id===id), old=cart.find(x=>x.id===id);old?old.qty++:cart.push({...p,qty:1});save();renderCart();openCart()}

function renderCart()
{
 const box=document.getElementById("cartItems");if(!box)return;
 box.innerHTML=cart.length?cart.map(i=>`<div class="cart-item"><img src="${i.images[0]}"><div><h4>${i.name}</h4><div class="qty">Cantidad: ${i.qty}</div><div class="price">${money(i.price*i.qty)}</div></div><button class="remove" data-id="${i.id}">Eliminar</button></div>`).join(""):`<div class="empty">Tu carrito está vacío.</div>`;
 const total=cart.reduce((s,i)=>s+i.price*i.qty,0);document.getElementById("cartTotal").textContent=money(total);
 box.querySelectorAll(".remove").forEach(b=>b.onclick=()=>{cart=cart.filter(i=>i.id!==Number(b.dataset.id));save();renderCart()});
}

function openCart()
{document.getElementById("cartDrawer")?.classList.add("open");document.getElementById("overlay")?.classList.add("open")}

function closeCart()
{document.getElementById("cartDrawer")?.classList.remove("open");document.getElementById("overlay")?.classList.remove("open")}

document.addEventListener("DOMContentLoaded",()=>{
 renderCategories();updateCartCount();renderCart();
 const params=new URLSearchParams(location.search);if(params.get("cat")&&categories.includes(params.get("cat")))activeCategory=params.get("cat");
 renderFilters();
 renderProducts();
 const categoryToggle=document.getElementById("categoryToggle");

if(categoryToggle){
  categoryToggle.addEventListener("click",()=>{
    document.querySelector(".mobile-category-menu")?.classList.toggle("open");
  });
}
 ["searchInput","minPrice","maxPrice"].forEach(id=>document.getElementById(id)?.addEventListener("input",renderProducts));
 document.getElementById("clearFilters")?.addEventListener("click",()=>{activeCategory="Todas";["searchInput","minPrice","maxPrice"].forEach(id=>{if(document.getElementById(id))document.getElementById(id).value=""});renderFilters();renderProducts()});
 document.getElementById("cartButton")?.addEventListener("click",openCart);document.getElementById("closeCart")?.addEventListener("click",closeCart);document.getElementById("overlay")?.addEventListener("click",closeCart);
 document.getElementById("checkout")?.addEventListener("click",()=>{
   if(!cart.length)return alert("💛 Agrega productos al carrito primero. 💛");
   const phone=document.getElementById("customerWhatsapp").value.trim();if(!phone)return alert("📲 Déjanos tu número de WhatsApp para continuar. ¡Gracias por confiar en nosotros! 💛");
   const lines=cart.map(i=>`• ${i.name} | ${i.category} | Cantidad: ${i.qty} | ${money(i.price*i.qty)}`).join("\n"),total=cart.reduce((s,i)=>s+i.price*i.qty,0);
   const message=`Hola Kariñito's Shop 💛\nQuiero realizar este pedido:\n\n${lines}\n\nTOTAL: ${money(total)}\nMi WhatsApp: ${phone}\n\nQuedo pendiente para coordinar mi pedido.`;
   const shopPhone="573054683323";window.open(`https://wa.me/${shopPhone}?text=${encodeURIComponent(message)}`,"_blank");
 });
 
});
