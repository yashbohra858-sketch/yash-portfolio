/* ===== EDIT ME: add links here and they appear automatically; empty ones stay hidden ===== */
const CONFIG={linkedin:"",github:"",instagram:"",resume:""}; // resume e.g. "assets/resume.pdf"
const P={
adappt:{tag:"Experience",title:"Adappt 3.0",
overview:"Adappt 3.0 is a technology-focused student event built around digital ideas, curiosity and collaboration.",
context:"The event gave students a space to explore technology, work with others and communicate ideas clearly.",
role:"Part of the Adappt 3.0 experience.",
focus:["Engaging with technology and innovation themes","Collaborating with other students","Thinking through problems creatively","Paying attention to how the event was experienced and communicated"],
skills:"Collaboration, communication, creative problem-solving",
take:"Good events are built on clear communication and teamwork as much as on good ideas.",gallery:[]},
conclave:{tag:"Leadership",title:"R&D Head, Social Conclave",
overview:"As R&D Head at Social Conclave, I lead the research and development side of our work.",
context:"Ideas are only useful if they are explored properly, compared fairly and turned into something the team can act on.",
role:"R&D Head",
focus:["Researching and brainstorming new ideas","Evaluating options and organizing information","Turning concepts into actionable plans","Coordinating with teammates","Communicating findings to support decisions"],
skills:"Research, analysis, leadership, coordination, communication",
take:"Leading research means making complicated information simple enough for a team to decide on.",gallery:[]},
rally:{tag:"Concept, not built yet",title:"Rally Lab",
overview:"A simple practice log for table tennis. After each session you record what you worked on, and the app shows trends over time.",
context:"I train often, but progress is hard to see session by session. Data should make it visible.",
role:"Idea and future build",
focus:["Log drills, results and notes","Chart consistency and improvement","Spot patterns, like which shots fail late in a game"],
skills:"Data analysis, dashboards, front-end development",
take:"I want to apply my data science studies to something I care about personally.",gallery:[]},
frame:{tag:"Concept, not built yet",title:"Frame by Frame",
overview:"A visual breakdown of how a short video is edited, from raw clips to final cut, showing the decisions between each step.",
context:"Video editing is where my creative side gets the most room, and I’d like to show the thinking behind it.",
role:"Idea and future build",
focus:["Before and after comparisons","Notes on pacing, cuts and sound","A short written reflection for each edit"],
skills:"Video editing, visual storytelling, design",
take:"Explaining a creative choice helps me make better ones.",gallery:[]}};
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const L=[["linkedin","LinkedIn"],["github","GitHub"],["instagram","Instagram"]];
L.forEach(([k,n])=>{if(CONFIG[k]){const a=document.createElement("a");a.className="btn";a.href=CONFIG[k];a.textContent=n;a.target="_blank";a.rel="noopener";$("#links").append(a)}});
if(CONFIG.resume){$("#resume").hidden=false;$("#resumeLink").href=CONFIG.resume}
$("#yr").textContent="© "+new Date().getFullYear();
const esc=t=>t.replace(/[&<>]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;"}[c]));
const dlg=$("#cs");
$$(".proj").forEach(b=>b.onclick=()=>{const p=P[b.dataset.p];
$("#csBody").innerHTML=`<p class="tag">${esc(p.tag)}</p><h2>${esc(p.title)}</h2><p>${esc(p.overview)}</p><h3>Context</h3><p>${esc(p.context)}</p><h3>My role</h3><p>${esc(p.role)}</p><h3>What I focus on</h3><ul>${p.focus.map(f=>"<li>"+esc(f)+"</li>").join("")}</ul><h3>Skills</h3><p>${esc(p.skills)}</p><h3>Takeaway</h3><p>${esc(p.take)}</p>${p.gallery.map(g=>`<img src="${g}" alt="${esc(p.title)} photo" loading="lazy">`).join("")}`;
dlg.showModal()});
$(".x").onclick=()=>dlg.close();
dlg.onclick=e=>{if(e.target===dlg)dlg.close()};
const bg=$(".burger"),nav=$("#menu");
bg.onclick=()=>{const o=nav.classList.toggle("open");bg.setAttribute("aria-expanded",o)};
nav.onclick=e=>{if(e.target.tagName==="A"){nav.classList.remove("open");bg.setAttribute("aria-expanded",false)}};
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)$$("nav a").forEach(a=>a.classList.toggle("on",a.hash==="#"+e.target.id))}),{rootMargin:"-45% 0px -50% 0px"});
$$("main section").forEach(s=>io.observe(s));
