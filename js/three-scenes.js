// Animations Three.js : « float » (bouteilles et pièces qui flottent sur les photos) et « bin » (poubelle 3D).
const T={fns:[],end(){this.fns.forEach(f=>f());this.fns=[]},
run(cv,kind){
 if(!window.THREE||matchMedia('(prefers-reduced-motion:reduce)').matches||!cv.getContext('webgl'))return;
 const w=cv.clientWidth||300,h=cv.clientHeight||300,r=new THREE.WebGLRenderer({canvas:cv,alpha:true,antialias:true}),s=new THREE.Scene(),c=new THREE.PerspectiveCamera(40,w/h,.1,60),G=new THREE.Group();
 r.setPixelRatio(Math.min(devicePixelRatio,2));r.setSize(w,h,false);c.position.z=9;s.add(G,new THREE.AmbientLight(0xffffff,.85));
 const l=new THREE.DirectionalLight(0xffffff,.9);l.position.set(3,5,6);s.add(l);
 const M=(col,o)=>new THREE.MeshStandardMaterial({color:col,roughness:.35,...o}),Cy=(a,b,n,k=20)=>new THREE.CylinderGeometry(a,b,n,k),
 glass=M(0x9fe3c0,{transparent:true,opacity:.85}),gold=M(0xF5B301,{metalness:.6,roughness:.3}),
 mesh=(g,m,p,x=0,y=0,z=0)=>{const o=new THREE.Mesh(g,m);o.position.set(x,y,z);p.add(o);return o},
 bottle=()=>{const b=new THREE.Group();mesh(Cy(.32,.32,1.1,12),glass,b);mesh(Cy(.12,.32,.4,12),glass,b,0,.75);mesh(Cy(.13,.13,.12,12),M(0x17803F),b,0,1.02);return b},
 coin=(k=1)=>{const g=new THREE.Group();mesh(Cy(.4*k,.4*k,.09,24),gold,g).rotation.x=Math.PI/2;return g};
 let items=[];const ax=3.2*c.aspect;
 if(kind==='float')for(let i=0;i<16;i++){const o=i%3?bottle():coin();o.position.set((Math.random()*2-1)*ax,(Math.random()*2-1)*3.6,Math.random()*2-1);o.rotation.z=Math.random()*6;o.userData={v:.01+Math.random()*.012,rt:.01+Math.random()*.02};G.add(o);items.push(o)}
 else{G.position.y=-.5;mesh(Cy(1.5,1.2,2.4),M(0x17803F),G,0,-.5);mesh(Cy(1.65,1.65,.25),M(0x0F5E2D),G,0,.85);const f=coin(2.2);f.position.set(0,-.4,1.38);G.add(f);items=[-.7,0,.7].map(x=>{const b=bottle();b.position.set(x,1.7,0);b.rotation.z=x*.5;G.add(b);return b})}
 let id;const t0=performance.now(),loop=()=>{if(!cv.isConnected)return;id=requestAnimationFrame(loop);if(document.hidden)return;const t=(performance.now()-t0)/1e3;
  if(kind==='float')items.forEach(o=>{o.position.y+=o.userData.v;o.rotation.y+=o.userData.rt;if(o.position.y>3.8)o.position.y=-3.8});
  else{G.rotation.y=Math.sin(t*.7)*.7;items.forEach((b,i)=>{b.position.y=1.7+Math.sin(t*2+i*1.4)*.3;b.rotation.y=t})}
  r.render(s,c)};loop();this.fns.push(()=>{cancelAnimationFrame(id);r.dispose();r.forceContextLoss()})}};
