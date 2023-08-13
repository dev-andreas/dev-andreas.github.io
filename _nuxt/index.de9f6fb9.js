import{r as h,w as I,a as U,o as m,b as f,e as L,f as t,h as e,i as R,F as D,j as G,t as y,k as V,s as P,l as B,m as M,c as A,p as a,T as $,u as b,q as v,v as E,x as F,y as C,z as j,A as k,B as J,C as H,D as O,E as W,G as z,H as Q,I as q,J as X}from"./entry.c0f75953.js";const T={__name:"IntersectionObserver",props:{debug:{type:Boolean,default:!1}},emits:{intersects:null},setup(d,{emit:p}){const n=d,s=h(!1);I(s,c=>{p("intersects",c)});const r=h(null);function u(c){c[0].isIntersecting?s.value=!0:s.value=!1}return U(()=>{new window.IntersectionObserver(u).observe(r.value)}),(c,g)=>(m(),f("div",{ref_key:"line",ref:r,class:L(["w-full h-px relative z-50",{"bg-red-600":n.debug}])},null,2))}},K={class:"w-full absolute top-2/3 pointer-events-none"},N={__name:"IntersectionAnimation",props:{startingClass:String,endingClass:String,transitionClass:{type:String,default:"transition ease-out duration-1000"},delay:{type:Number,default:0}},setup(d){const p=d,n=h(!1);async function s(r){!r||await setTimeout(()=>{n.value=!0},p.delay)}return(r,u)=>(m(),f("div",{class:L([d.transitionClass,n.value?d.endingClass:d.startingClass])},[t("div",K,[e(T,{onIntersects:s})]),R(r.$slots,"default")],2))}},Y={class:"flex flex-col items-start justify-center justify-self-center"},Z={class:"flex flex-col items-start h-full border-font-dark"},tt={class:"text-xs font-bold flat-shadow-sm"},et={class:"text-center flex flat-shadow"},st=t("div",{class:"flex justify-between w-full opacity-50"},[t("p",{class:"text-xs"},"Noob"),t("p",{class:"text-xs"},"Pro")],-1),at={__name:"StatGraph",props:{items:Array},setup(d){return(p,n)=>(m(),f("div",Y,[(m(!0),f(D,null,G(d.items,s=>(m(),f("div",{key:s.id,class:"my-4 flex items-center h-full transform hover:translate-x-2 transition ease-out duration-200"},[t("div",Z,[t("p",tt,y(s.name),1),t("div",et,[t("div",{class:"h-8 border border-l-4 border-font-dark bg-backg-light bgg rounded-md",style:V({width:s.votes/100*35+"rem"})},null,4)])])]))),128)),st]))}},ot={key:"hover",class:"flex flex-col justify-center items-center text-center"},lt={key:"nonhover",class:"flex flex-col justify-center items-center"},nt=["src","alt"],rt={class:"text-2xl font-bold mt-2"},it={__name:"ProjectBox",props:{logo:{type:String,default:null},alt:{type:String,default:"project"},title:{type:String,default:"title"},index:{type:Number}},setup(d){const p=d,{currentProject:n}=P(B()),s=h(!1);function r(){s.value=!0,n.value=p.index}function u(){s.value=!1,n.value=-1}const c=M(()=>s.value);return(g,_)=>{const o=N;return m(),A(o,{class:"p-5 w-80 h-60 flex flex-col justify-center items-center border border-font-dark bg-backg-light flat-shadow rounded-md",startingClass:"opacity-0 translate-y-10",endingClass:"opacity-100 translate-y-0"},{default:a(()=>[t("div",{class:"bgg w-full h-full flex flex-col justify-center items-center",onMouseover:_[0]||(_[0]=w=>r()),onMouseleave:_[1]||(_[1]=w=>u())},[e($,{name:"slide-top",mode:"out-in"},{default:a(()=>[b(c)&&b(n)==p.index?(m(),f("div",ot,[R(g.$slots,"default",{},()=>[v("Project")])])):(m(),f("div",lt,[t("img",{src:d.logo,alt:d.alt,class:"h-24"},null,8,nt),t("p",rt,y(d.title),1)]))]),_:3})],32)]),_:3})}}},ct=["onSubmit"],dt=t("label",{for:"name",class:"text-sm"},"Full Name / Company Name:",-1),mt={class:"text-sm text-red-500"},ut=t("label",{for:"email",class:"text-sm mt-3"},"E-Mail:",-1),pt={class:"text-sm text-red-500"},ft=t("label",{for:"subject",class:"text-sm mt-3"},"Subject:",-1),_t={class:"text-sm text-red-500"},xt=t("label",{for:"message",class:"text-sm mt-3"},"Message:",-1),gt={class:"text-sm text-red-500"},ht=t("p",{class:"mt-5 text-sm"},[v(" This site is protected by reCAPTCHA and the Google "),t("a",{href:"https://policies.google.com/privacy",class:"text-blue-500"},"Privacy Policy"),v(" and "),t("a",{href:"https://policies.google.com/terms",class:"text-blue-500"},"Terms of Service"),v(" apply. ")],-1),yt={class:"flex items-center gap-5 mt-5"},vt={key:0,class:"w-2 h-2 bg-font-dark slide-left-right rounded-full"},bt={key:1,class:"p-1 text-blue-500"},wt={key:2,class:"p-1 text-red-500"},Ct={key:3,type:"submit",value:"Send Mail",class:"btn-primary self-start"},jt={__name:"ContactForm",setup(d){const p=E();F({script:[{src:`https://www.google.com/recaptcha/api.js?render=${p.recaptchaPublic}`}]});const n=C({input:"",error:""}),s=C({input:"",error:""}),r=C({input:"",error:""}),u=C({input:"",error:""}),c=h(!1),g=h(""),_=h(""),o=h([]);U(()=>{const x=JSON.parse(localStorage.getItem("mailResData"));x!=null&&Date.now()<x.time+6e4&&(g.value=x.msg)});async function w(){grecaptcha.ready(async()=>{c.value=!0,g.value="";try{const x=await grecaptcha.execute(p.recaptchaPublic,{action:"submit"}),i=await(await fetch(p.apiUrl,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n.input,email:s.input,subject:r.input,message:u.input,recaptchaToken:x})})).json();if(i.msg){n.input="",s.input="",r.input="",u.input="",g.value=i.msg;const S={time:Date.now(),msg:i.msg};localStorage.setItem("mailResData",JSON.stringify(S))}_.value=i.error?i.error:"",o.value=i.errors?i.errors:[]}catch(x){o.value=[],console.log(x),_.value="The server is currently under maintenance. Please try again later."}finally{c.value=!1}})}return I(o,x=>{n.error="",s.error="",r.error="",u.error="",x.forEach(l=>{switch(l.param){case"name":n.error=l.msg;break;case"email":s.error=l.msg;break;case"subject":r.error=l.msg;break;case"message":u.error=l.msg;break}})}),(x,l)=>(m(),f("div",null,[t("form",{onSubmit:J(w,["prevent"]),class:"flex flex-col"},[dt,j(t("input",{type:"text",class:"inpt",id:"name","onUpdate:modelValue":l[0]||(l[0]=i=>n.input=i)},null,512),[[k,n.input]]),t("p",mt,y(n.error),1),ut,j(t("input",{type:"email",class:"inpt",id:"email","onUpdate:modelValue":l[1]||(l[1]=i=>s.input=i)},null,512),[[k,s.input]]),t("p",pt,y(s.error),1),ft,j(t("input",{type:"text",id:"subject",class:"inpt","onUpdate:modelValue":l[2]||(l[2]=i=>r.input=i)},null,512),[[k,r.input]]),t("p",_t,y(r.error),1),xt,j(t("textarea",{class:"tbox",id:"message",cols:"10",rows:"10","onUpdate:modelValue":l[3]||(l[3]=i=>u.input=i)},null,512),[[k,u.input]]),t("p",gt,y(u.error),1),ht,t("span",yt,[e($,{name:"slide-top",mode:"out-in"},{default:a(()=>[c.value?(m(),f("div",vt)):g.value?(m(),f("p",bt,"\u2713 "+y(g.value),1)):_.value?(m(),f("p",wt,"\u2717 "+y(_.value),1)):(m(),f("input",Ct))]),_:1})])],40,ct)]))}},kt=""+new URL("andreas_gerasimow.8b12f835.jpg",import.meta.url).href,St=""+new URL("vue.8fc2607d.svg",import.meta.url).href,$t=""+new URL("nuxt.ecf30bbc.svg",import.meta.url).href,It=""+new URL("node.cccb3a5b.svg",import.meta.url).href,Ut=""+new URL("tailwindcss.5f11af83.svg",import.meta.url).href,Lt=""+new URL("django.d8d63104.svg",import.meta.url).href,Rt=""+new URL("mysql.a3c37fe3.svg",import.meta.url).href,Pt=""+new URL("pgsql.8e0938f6.svg",import.meta.url).href,At=""+new URL("jfx.7154b22c.svg",import.meta.url).href,Tt=""+new URL("git.063895ec.svg",import.meta.url).href,Nt=""+new URL("bash.57ab69b9.svg",import.meta.url).href,Dt=""+new URL("vscode.10c0a793.svg",import.meta.url).href,Gt=""+new URL("intellij.39709b6c.svg",import.meta.url).href,Vt=""+new URL("mail.a4138ab8.svg",import.meta.url).href,Bt=""+new URL("ultratec_logo.3c50acc1.svg",import.meta.url).href,Mt=""+new URL("hat.180ae5e1.svg",import.meta.url).href,Et=""+new URL("cryptoeditor.e0fc5bba.svg",import.meta.url).href,Ft=""+new URL("pollapp.2e8701d7.svg",import.meta.url).href,Jt={class:"flex flex-col justify-between items-center h-screen"},Ht=t("span",null,null,-1),Ot={class:"flex flex-col justify-center items-center flat-shadow-sm mt-10"},Wt=t("img",{src:W,alt:"logo",class:"h-24"},null,-1),zt=t("h1",{class:"text-font-dark text-3xl xs:text-4xl sm:text-5xl md:text-6xl mt-3 font-bold"},"Andreas Gerasimow",-1),Qt=t("p",{class:"mt-1 text-xs xs:text-sm sm:text-base"},"Computer Science Student and Full Stack Developer",-1),qt={class:"h-10 w-10 mb-24"},Xt={class:"flex flex-col items-center justify-between",id:"about"},Kt=t("h2",{class:"text-4xl font-bold text-center flat-shadow-sm"},"About me",-1),Yt={class:"min-h-screen standard-grid-width place-items-center grid grid-cols-1 lg:grid-cols-3 gap-10"},Zt=t("img",{src:kt,alt:"Andreas Gerasimow",class:"w-72 h-72 xl:w-80 xl:h-80 rounded-md shadow-xl"},null,-1),te=t("div",{class:"pl-5 py-2 border-l border-font-dark mt-10 lg:mt-5"},[t("p",{class:"font-bold"},"Andreas Gerasimow"),t("p",{class:""},"Ulm, Baden-W\xFCrttemberg, Germany"),t("p",{class:""},"andreas.gerasimow@uni-ulm.de")],-1),ee=t("p",{class:"text-2xl text-center"}," Hi, I'm Andreas and I study computer science at Ulm University in Germany. I am interested in web development and almost everything else that has to do with computers. ",-1),se=t("span",{class:"flex mt-10"},[t("a",{href:"https://www.linkedin.com/in/andreas-gerasimow-341a551b2/",target:"_blank",rel:"noopener noreferrer"},[t("img",{src:z,alt:"LinkedIn Account",class:"w-12 h-12 mr-4 flat-shadow-sm"})]),t("a",{href:"https://github.com/dev-andreas",target:"_blank",rel:"noopener noreferrer"},[t("img",{src:Q,alt:"GitHub Account",class:"w-12 h-12 mr-4 flat-shadow-sm"})]),t("a",{href:"https://www.instagram.com/real_gera_/",target:"_blank",rel:"noopener noreferrer"},[t("img",{src:q,alt:"Instagram Account",class:"w-12 h-12 flat-shadow-sm"})])],-1),ae=t("span",null,null,-1),oe={class:"min-h-screen flex flex-col items-center justify-between",id:"technologies"},le={class:"flex flex-col items-center"},ne=t("h2",{class:"text-4xl font-bold text-center flat-shadow-sm"},"Technologies",-1),re=t("p",{class:"text-3xl text-center standard-grid-width"},"This is what I use for development:",-1),ie={class:"flex flex-col items-center sm:mt-40 xl:mt-0"},ce={class:"grid grid-cols-1 xl:grid-cols-2 place-items-center standard-grid-width sm:gap-20 lg:gap-40 xl:gap-0"},de=t("div",{class:"framework"},[t("img",{src:St,alt:"Vue.js"}),t("p",{class:"text-xs sm:text-lg xl:text-xl font-bold my-1"},"Vue.js")],-1),me=t("div",{class:"framework"},[t("img",{src:$t,alt:"Nuxt.js"}),t("p",{class:"text-xs sm:text-lg xl:text-xl font-bold my-1"},"Nuxt.js")],-1),ue=t("div",{class:"framework"},[t("img",{src:It,alt:"Node.js"}),t("p",{class:"text-xs sm:text-lg xl:text-xl font-bold my-1"},"Node.js")],-1),pe=t("div",{class:"framework"},[t("img",{src:Ut,alt:"Tailwind CSS"}),t("p",{class:"text-xs sm:text-lg xl:text-xl font-bold my-1"},"Tailwindcss")],-1),fe=t("div",{class:"framework"},[t("img",{src:Lt,alt:"Django"}),t("p",{class:"text-xs sm:text-lg xl:text-xl font-bold my-1"},"Django")],-1),_e=t("div",{class:"framework"},[t("img",{src:Rt,alt:"PostgreSQL"}),t("p",{class:"text-xs sm:text-lg xl:text-xl font-bold my-1"},"MySQL")],-1),xe=t("div",{class:"framework"},[t("img",{src:Pt,alt:"PostgreSQL"}),t("p",{class:"text-xs sm:text-lg xl:text-xl font-bold my-1"},"pgSQL")],-1),ge=t("div",{class:"framework"},[t("img",{src:At,alt:"JavaFX"}),t("p",{class:"text-xs sm:text-lg xl:text-xl font-bold my-1"},"JavaFX")],-1),he=t("div",{class:"framework"},[t("img",{src:Tt,alt:"Git"}),t("p",{class:"text-xs sm:text-lg xl:text-xl font-bold my-1"},"Git")],-1),ye=t("div",{class:"framework"},[t("img",{src:Nt,alt:"Bash"}),t("p",{class:"text-xs sm:text-lg xl:text-xl font-bold my-1"},"Bash")],-1),ve=t("div",{class:"framework"},[t("img",{src:Dt,alt:"VSCode"}),t("p",{class:"text-xs sm:text-lg xl:text-xl font-bold my-1"},"VSCode")],-1),be=t("div",{class:"framework"},[t("img",{src:Gt,alt:"Intellij Idea"}),t("p",{class:"text-xs sm:text-lg xl:text-xl font-bold my-1"},"Intellij Idea")],-1),we=t("span",{class:"mb-40"},null,-1),Ce={class:"min-h-screen flex flex-col items-center justify-between",id:"projects"},je={class:"flex flex-col items-center"},ke=t("h2",{class:"text-4xl font-bold text-center flat-shadow-sm"},"Projects / Work",-1),Se=t("p",{class:"text-3xl text-center standard-grid-width"},"Projects I have completed or am still working on:",-1),$e={class:"flex flex-col items-center mt-10 sm:mt-40 md:mt-0"},Ie=t("p",{class:"mb-10"},"Touch a box to learn more",-1),Ue={id:"projects",class:"flex flex-wrap items-center justify-center standard-grid-width gap-8"},Le=t("span",{class:"mb-40"},null,-1),Re={class:"min-h-screen flex flex-col items-center justify-between",id:"contact"},Pe={class:"flex flex-col items-center"},Ae=t("h2",{class:"text-4xl font-bold text-center flat-shadow-sm"},"Contact",-1),Te=t("p",{class:"text-3xl text-center standard-grid-width"},"You can contact me per E-Mail:",-1),Ne={class:"grid md:grid-cols-2 gap-8 standard-grid-width place-items-center mt-20 md:mt-0"},De=t("img",{src:Vt,alt:"Mail",class:"w-64 flat-shadow"},null,-1),Ge=t("span",{class:"mb-10 md:mb-0"},null,-1),Be={__name:"index",setup(d){const{showIcon:p}=P(H()),n=C([{name:"Java/Kotlin",votes:90},{name:"JavaScript/TypeScript",votes:70},{name:"Python",votes:60},{name:"PHP",votes:60},{name:"SQL",votes:40}]),s=h(!0);function r(c){s.value=c}function u(c){p.value=!c}return(c,g)=>{const _=T,o=N,w=X,x=at,l=it,i=jt;return m(),f("div",null,[e(_,{onIntersects:r}),t("header",Jt,[Ht,t("div",Ot,[e(o,{startingClass:"opacity-0 translate-y-3 blur-sm",endingClass:"opacity-100 translate-y-0 blur-none"},{default:a(()=>[Wt,e(_,{onIntersects:g[0]||(g[0]=S=>u(S))})]),_:1}),zt,Qt]),t("div",qt,[e($,{name:"slide-bottom"},{default:a(()=>[s.value?(m(),A(w,{key:0,class:"h-10 fill-font-dark animate-bounce"})):O("",!0)]),_:1})])]),t("section",Xt,[e(o,{class:"mt-5",startingClass:"opacity-0 translate-y-5",endingClass:"opacity-100 translate-y-0"},{default:a(()=>[Kt]),_:1}),t("div",Yt,[e(o,{class:"flex flex-col justify-center self-end lg:self-center",startingClass:"opacity-0 -translate-x-5",endingClass:"opacity-100 translate-x-0"},{default:a(()=>[Zt,te]),_:1}),e(o,{class:"lg:col-span-2 flex flex-col items-center justify-center self-start lg:self-center",startingClass:"opacity-0 translate-x-5",endingClass:"opacity-100 translate-x-0"},{default:a(()=>[ee,se]),_:1})]),ae]),t("section",oe,[t("div",le,[e(o,{class:"mt-5",startingClass:"opacity-0 translate-y-5",endingClass:"opacity-100 translate-y-0"},{default:a(()=>[ne]),_:1}),e(o,{class:"mt-10",startingClass:"opacity-0 translate-y-5",endingClass:"opacity-100 translate-y-0"},{default:a(()=>[re]),_:1})]),t("div",ie,[t("div",ce,[e(o,{class:"flex flex-col justify-center scale-60 xs:scale-70 sm:scale-100 lg:scale-125 xl:scale-100 -mt-5 lg:mt-0",startingClass:"opacity-0 -translate-x-5",endingClass:"opacity-100 translate-x-0"},{default:a(()=>[e(x,{items:n},null,8,["items"])]),_:1}),e(o,{class:"flex flex-wrap items-center justify-center gap-4 sm:w-132 scale-100 lg:scale-125 xl:scale-100",startingClass:"opacity-0 translate-x-5",endingClass:"opacity-100 translate-x-0"},{default:a(()=>[de,me,ue,pe,fe,_e,xe,ge,he,ye,ve,be]),_:1})])]),we]),t("section",Ce,[t("div",je,[e(o,{class:"mt-5",startingClass:"opacity-0 translate-y-5",endingClass:"opacity-100 translate-y-0"},{default:a(()=>[ke]),_:1}),e(o,{class:"mt-10",startingClass:"opacity-0 translate-y-5",endingClass:"opacity-100 translate-y-0"},{default:a(()=>[Se]),_:1})]),t("div",$e,[Ie,t("div",Ue,[e(l,{title:"PERI Smart Factory",alt:"Working Student",index:1,logo:b(Mt)},{default:a(()=>[v(" Working Student / Digitalization and automation of quality control. ")]),_:1},8,["logo"]),e(l,{title:"UltraTEC Website",alt:"UltraTEC Website",index:2,logo:b(Bt)},{default:a(()=>[v(" Website of a start up which manufactures ultrasonic deburring machines.")]),_:1},8,["logo"]),e(l,{title:"cryptoeditor",alt:"cryptoeditor",index:3,logo:b(Et)},{default:a(()=>[v(" A program to encrypt passwords and files. ")]),_:1},8,["logo"]),e(l,{title:"Poll App",alt:"Poll App",index:4,logo:b(Ft)},{default:a(()=>[v(" A web app for anonymous surveys. ")]),_:1},8,["logo"])])]),Le]),t("section",Re,[t("div",Pe,[e(o,{class:"mt-5",startingClass:"opacity-0 translate-y-5",endingClass:"opacity-100 translate-y-0"},{default:a(()=>[Ae]),_:1}),e(o,{class:"mt-10",startingClass:"opacity-0 translate-y-5",endingClass:"opacity-100 translate-y-0"},{default:a(()=>[Te]),_:1})]),t("div",Ne,[e(o,{class:"mt-5",startingClass:"opacity-0 -translate-x-5",endingClass:"opacity-100 translate-x-0"},{default:a(()=>[De]),_:1}),e(o,{class:"w-full",startingClass:"opacity-0 translate-x-5",endingClass:"opacity-100 translate-x-0"},{default:a(()=>[e(i)]),_:1})]),Ge])])}}};export{Be as default};
