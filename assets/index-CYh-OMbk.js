import{P as p,R as e,r as l,A as M,a as j,c as G}from"./vendor-CBcWhN8x.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const r of c.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function i(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerPolicy&&(c.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?c.credentials="include":a.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(a){if(a.ep)return;a.ep=!0;const c=i(a);fetch(a.href,c)}})();const N=({onStartGame:n})=>e.createElement("div",{className:"container"},e.createElement("div",null,e.createElement("h2",null," Basic Arithmetic Learning Game!"),e.createElement("button",{id:"start-button",onClick:n},"play")));N.propTypes={onStartGame:p.func.isRequired};const H=()=>{const[n,t]=l.useState(!1),i=()=>{t(!0)},s=()=>{t(!1)};return e.createElement("div",null,e.createElement("button",{onClick:i},"About"),n&&e.createElement("dialog",{open:!0,onClose:s,className:"dialog-content"},e.createElement("article",null,e.createElement("h3",null,"About Our Number Learning Game"),e.createElement("p",null,"Welcome to our interactive number learning game designed especially for children aged 4 to 10! Our innovative web app combines the excitement of a game with the educational value of practicing handwriting and arithmetic, making learning fun and engaging for young minds."),e.createElement("h4",null,"What We Offer"),e.createElement("ul",null,e.createElement("li",null,e.createElement("strong",null,"Interactive Learning"),": Our app features a virtual canvas where children can write numbers with their fingers or a stylus. The app then uses advanced machine learning models trained on the MNIST dataset to predict the handwritten digits. This immediate feedback helps children improve their number writing skills in a fun and interactive way."),e.createElement("li",null,e.createElement("strong",null,"Engaging Quizzes"),': We incorporate simple arithmetic quizzes, such as "5 - 4 = ?", to make learning numbers even more enjoyable. These quizzes are designed to be straightforward, ensuring that the answers always fall within the 0-9 range, perfect for young learners.'),e.createElement("li",null,e.createElement("strong",null,"Encouraging Improvement"),": To motivate children to improve their handwriting, our app turns incorrect predictions into a game. If a digit is not recognized correctly, children are encouraged to try again until the prediction matches their intended number. This not only helps them practice their writing but also builds perseverance and attention to detail."),e.createElement("li",null,e.createElement("strong",null,"Fun and Educational"),": By combining handwriting practice with arithmetic quizzes, our app helps children enhance their numerical understanding and fine motor skills. It’s a perfect blend of education and entertainment that keeps children engaged and motivated to learn."),e.createElement("li",null,e.createElement("strong",null,"Child-Friendly Interface"),": Our user-friendly and colorful interface is designed with young users in mind, ensuring that children can navigate and use the app with ease. Parents can rest assured that their children are learning in a safe and supportive environment.")),e.createElement("p",null,e.createElement("strong",null,"Join the Fun:")," We invite you to explore our number learning game and see how it can benefit your child's educational journey. Whether they are just starting to learn numbers or looking to improve their handwriting and arithmetic skills, our app provides a fun, interactive, and rewarding experience."),e.createElement("p",null,"Start playing today and watch your child’s confidence and skills grow as they master the world of numbers!"),e.createElement("button",{onClick:s},"Close"))))},J=()=>e.createElement("footer",{className:"footer"},e.createElement("hr",null),e.createElement("p",null,"Contact: ",e.createElement("a",{href:"mailto:kmotshoana@gmail.com"},"kmotshoana@gmail.com")),e.createElement("p",null,"© 2024 K.T MOTSHOANA."),e.createElement("p",null," All Rights Reserved."));class K{constructor(t,i){this.equations=t,this.askedQuestions=new Set,this.unaskedQuestions=Object.keys(t).flatMap(s=>t[s]),this.currentQuestion=null,this.remainingAttempts=3,this.updateQuizState=i}getRandomEquation(){if(this.unaskedQuestions.length===0)return this.updateQuizState("No more questions available."),null;const t=Math.floor(Math.random()*this.unaskedQuestions.length);return this.currentQuestion=this.unaskedQuestions[t],this.unaskedQuestions.splice(t,1),this.currentQuestion[0]}getCurrentQuestion(){return this.currentQuestion||this.getRandomEquation(),this.currentQuestion?this.currentQuestion[0]:""}validateAnswer(t){const i=this.currentQuestion[1];return t===i}checkAnswer(t){if(!this.currentQuestion)return!1;if(t!==""){let i=this.validateAnswer(t);return!i&&this.remainingAttempts>1?(this.updateQuizState("Please try again."),this.remainingAttempts--,!1):i?(this.askedQuestions.add(this.currentQuestion[0]),this.updateQuizState("Correct !"),this.remainingAttempts=3,this.currentQuestion=null,!0):(this.updateQuizState(`Correct answer was :
  ${this.currentQuestion[1]}`),this.unaskedQuestions.push(this.currentQuestion),this.remainingAttempts=3,this.currentQuestion=null,!1)}}}const U=[["0 + 0 = ?",0],["0 + 1 = ?",1],["0 + 2 = ?",2],["0 + 3 = ?",3],["0 + 4 = ?",4],["0 + 5 = ?",5],["0 + 6 = ?",6],["0 + 7 = ?",7],["0 + 8 = ?",8],["0 + 9 = ?",9],["1 + 0 = ?",1],["1 + 1 = ?",2],["1 + 2 = ?",3],["1 + 3 = ?",4],["1 + 4 = ?",5],["1 + 5 = ?",6],["1 + 6 = ?",7],["1 + 7 = ?",8],["1 + 8 = ?",9],["2 + 0 = ?",2],["2 + 1 = ?",3],["2 + 2 = ?",4],["2 + 3 = ?",5],["2 + 4 = ?",6],["2 + 5 = ?",7],["2 + 6 = ?",8],["2 + 7 = ?",9],["3 + 0 = ?",3],["3 + 1 = ?",4],["3 + 2 = ?",5],["3 + 3 = ?",6],["3 + 4 = ?",7],["3 + 5 = ?",8],["3 + 6 = ?",9],["4 + 0 = ?",4],["4 + 1 = ?",5],["4 + 2 = ?",6],["4 + 3 = ?",7],["4 + 4 = ?",8],["4 + 5 = ?",9],["5 + 0 = ?",5],["5 + 1 = ?",6],["5 + 2 = ?",7],["5 + 3 = ?",8],["5 + 4 = ?",9],["6 + 0 = ?",6],["6 + 1 = ?",7],["6 + 2 = ?",8],["6 + 3 = ?",9],["7 + 0 = ?",7],["7 + 1 = ?",8],["7 + 2 = ?",9],["8 + 0 = ?",8],["8 + 1 = ?",9],["9 + 0 = ?",9]],V=[["0 - 0 = ?",0],["1 - 0 = ?",1],["1 - 1 = ?",0],["2 - 0 = ?",2],["2 - 1 = ?",1],["2 - 2 = ?",0],["3 - 0 = ?",3],["3 - 1 = ?",2],["3 - 2 = ?",1],["3 - 3 = ?",0],["4 - 0 = ?",4],["4 - 1 = ?",3],["4 - 2 = ?",2],["4 - 3 = ?",1],["4 - 4 = ?",0],["5 - 0 = ?",5],["5 - 1 = ?",4],["5 - 2 = ?",3],["5 - 3 = ?",2],["5 - 4 = ?",1],["5 - 5 = ?",0],["6 - 0 = ?",6],["6 - 1 = ?",5],["6 - 2 = ?",4],["6 - 3 = ?",3],["6 - 4 = ?",2],["6 - 5 = ?",1],["6 - 6 = ?",0],["7 - 0 = ?",7],["7 - 1 = ?",6],["7 - 2 = ?",5],["7 - 3 = ?",4],["7 - 4 = ?",3],["7 - 5 = ?",2],["7 - 6 = ?",1],["7 - 7 = ?",0],["8 - 0 = ?",8],["8 - 1 = ?",7],["8 - 2 = ?",6],["8 - 3 = ?",5],["8 - 4 = ?",4],["8 - 5 = ?",3],["8 - 6 = ?",2],["8 - 7 = ?",1],["8 - 8 = ?",0],["9 - 0 = ?",9],["9 - 1 = ?",8],["9 - 2 = ?",7],["9 - 3 = ?",6],["9 - 4 = ?",5],["9 - 5 = ?",4],["9 - 6 = ?",3],["9 - 7 = ?",2],["9 - 8 = ?",1],["9 - 9 = ?",0]],$=[["0 * 0 = ?",0],["0 * 1 = ?",0],["0 * 2 = ?",0],["0 * 3 = ?",0],["0 * 4 = ?",0],["0 * 5 = ?",0],["0 * 6 = ?",0],["0 * 7 = ?",0],["0 * 8 = ?",0],["0 * 9 = ?",0],["1 * 0 = ?",0],["1 * 1 = ?",1],["1 * 2 = ?",2],["1 * 3 = ?",3],["1 * 4 = ?",4],["1 * 5 = ?",5],["1 * 6 = ?",6],["1 * 7 = ?",7],["1 * 8 = ?",8],["1 * 9 = ?",9],["2 * 0 = ?",0],["2 * 1 = ?",2],["2 * 2 = ?",4],["2 * 3 = ?",6],["2 * 4 = ?",8],["3 * 0 = ?",0],["3 * 1 = ?",3],["3 * 2 = ?",6],["3 * 3 = ?",9],["4 * 0 = ?",0],["4 * 1 = ?",4],["4 * 2 = ?",8],["5 * 0 = ?",0],["5 * 1 = ?",5],["6 * 0 = ?",0],["6 * 1 = ?",6],["7 * 0 = ?",0],["7 * 1 = ?",7],["8 * 0 = ?",0],["8 * 1 = ?",8],["9 * 0 = ?",0],["9 * 1 = ?",9]],X=[["0 / 1 = ?",0],["0 / 2 = ?",0],["0 / 3 = ?",0],["0 / 4 = ?",0],["0 / 5 = ?",0],["0 / 6 = ?",0],["0 / 7 = ?",0],["0 / 8 = ?",0],["0 / 9 = ?",0],["1 / 1 = ?",1],["2 / 1 = ?",2],["2 / 2 = ?",1],["3 / 1 = ?",3],["3 / 3 = ?",1],["4 / 1 = ?",4],["4 / 2 = ?",2],["4 / 4 = ?",1],["5 / 1 = ?",5],["5 / 5 = ?",1],["6 / 1 = ?",6],["6 / 2 = ?",3],["6 / 3 = ?",2],["6 / 6 = ?",1],["7 / 1 = ?",7],["7 / 7 = ?",1],["8 / 1 = ?",8],["8 / 2 = ?",4],["8 / 4 = ?",2],["8 / 8 = ?",1],["9 / 1 = ?",9],["9 / 3 = ?",3],["9 / 9 = ?",1]],Y={addition:U,subtraction:V,multiplication:$,division:X};function q(n,t){t.fillStyle="white",t.fillRect(0,0,n.width,n.height)}function O(n,t){t.clearRect(0,0,n.width,n.height),q(n,t)}function Z(n,t,i,s){i.lineWidth=s,i.lineCap="round",i.strokeStyle="black",i.beginPath(),i.moveTo(n.x,n.y),i.lineTo(t.x,t.y),i.stroke()}const x=({clearTrigger:n,onClearComplete:t,handlePredict:i})=>{const s=l.useRef(null),[a]=l.useState(10);l.useEffect(()=>{const r=s.current,o=r.getContext("2d"),w=()=>{r.width=300,r.height=300,q(r,o)};w(),window.addEventListener("resize",w);let b=!1,m={x:0,y:0};const C=d=>{const E=r.getBoundingClientRect(),k=d.touches?d.touches[0]:d;return{x:k.clientX-E.left,y:k.clientY-E.top}},h=d=>{b=!0,m=C(d),o.beginPath(),o.moveTo(m.x,m.y),d.preventDefault()},f=()=>{b=!1,o.beginPath()},v=d=>{if(!b)return;d.preventDefault();const E=C(d);Z(m,E,o,a),m=E};return r.addEventListener("mousedown",h),r.addEventListener("mouseup",f),r.addEventListener("mousemove",v),r.addEventListener("touchstart",h),r.addEventListener("touchend",f),r.addEventListener("touchmove",v),()=>{window.removeEventListener("resize",w),r.removeEventListener("mousedown",h),r.removeEventListener("mouseup",f),r.removeEventListener("mousemove",v),r.removeEventListener("touchstart",h),r.removeEventListener("touchend",f),r.removeEventListener("touchmove",v)}},[a]),l.useEffect(()=>{if(n){const r=s.current,o=r.getContext("2d");O(r,o),t&&t()}},[n,t]);const c=()=>{const r=s.current,o=r.getContext("2d");O(r,o)};return e.createElement("div",{className:"canvas-container"},e.createElement("canvas",{id:"canvas",ref:s}),e.createElement("div",{className:"button-group"},e.createElement("button",{id:"clear",title:"Clear canvas",onClick:c},e.createElement(M,{style:{width:"60px",height:"30px"}})),e.createElement("button",{id:"answer",title:"submit answer",onClick:i},"Answer")))};x.propTypes={clearTrigger:p.bool.isRequired,onClearComplete:p.func,handlePredict:p.func.isRequired};const _=()=>e.createElement("div",{className:"loading-spinner"},e.createElement("div",{className:"spinner"})),I=({isCorrect:n,onRemove:t,responseMessage:i,predictedAnswer:s})=>(l.useEffect(()=>{const a=setTimeout(t,6e3);return()=>clearTimeout(a)},[t]),e.createElement("div",{className:`feedback ${n?"correct":"incorrect"}`},n?"✔️":"❌",e.createElement("div",{id:"predicted"},!n&&e.createElement("p",null,"It's like you wrote: ",s," , 🤔"),e.createElement("div",{id:"result"},i))));I.propTypes={isCorrect:p.bool.isRequired,onRemove:p.func.isRequired,responseMessage:p.string.isRequired,predictedAnswer:p.number.isRequired};const P=({onBackToHome:n})=>{const[t,i]=l.useState(""),[s,a]=l.useState(""),[c,r]=l.useState(""),[o,w]=l.useState(null),[b,m]=l.useState(!1),[C,h]=l.useState(!1),[f,v]=l.useState({show:!1,isCorrect:!1});l.useEffect(()=>{E()},[]);const d=g=>{i(g)},E=()=>{const g=new K(Y,d);w(g),r(g.getCurrentQuestion()),m(!0)},k=()=>{h(!0);const g=document.getElementById("canvas"),W=g.getContext("2d");if((y=>!new Uint32Array(y.getImageData(0,0,g.width,g.height).data.buffer).some(R=>R!==0))(W)){console.log("Nothing to post"),h(!1);return}const F=g.toDataURL("image/png"),S=new Image;S.src=F,S.onload=()=>{const y=document.createElement("canvas"),L=y.getContext("2d");y.width=28,y.height=28,L.drawImage(S,0,0,28,28);const Q=L.getImageData(0,0,28,28).data,T=[];for(let u=0;u<Q.length;u+=4){const A=(Q[u]+Q[u+1]+Q[u+2])/3;T.push(255-A)}const z=new FormData;z.append("input",JSON.stringify(T)),fetch("https://dipalo-tsa-motheo-api.onrender.com/predict",{method:"POST",body:z,headers:{"Access-Control-Allow-Origin":"*"}}).then(u=>u.json()).then(u=>{if(a(u.digit),o){const A=o.checkAnswer(u.digit);v({show:!0,isCorrect:A}),(A||o.remainingAttempts===0)&&m(!0),o.currentQuestion?r(o.currentQuestion[0]):r(o.getCurrentQuestion())}h(!1)}).catch(u=>{console.error("Error:",u),h(!1)})}},D=()=>{m(!1)},B=()=>{v({show:!1,isCorrect:!1})};return e.createElement("div",{className:"game-container",style:{margin:"auto",position:"relative"}},e.createElement("button",{id:"home",onClick:n},e.createElement(j,null)),e.createElement("h2",{id:"problem"},"Problem: ",c),e.createElement("hr",null),e.createElement(x,{clearTrigger:b,onClearComplete:D,handlePredict:k}),C&&e.createElement(_,null),f.show&&e.createElement(I,{isCorrect:f.isCorrect,onRemove:B,predictedAnswer:s,responseMessage:t}))};P.propTypes={onBackToHome:p.func.isRequired};const ee="/assets/icon%20(3)-jcV3HiWl.jpg",te=()=>{const[n,t]=l.useState("welcome"),i=()=>t("game"),s=()=>t("welcome");return e.createElement("div",{id:"home-page"},n==="welcome"&&e.createElement(e.Fragment,null,e.createElement("section",{id:"banner"},e.createElement("img",{src:ee,alt:"logo image"}),e.createElement(H,null)),e.createElement(N,{onStartGame:i}),e.createElement(J,null)),n==="game"&&e.createElement(P,{onBackToHome:s}))};"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("./sw.js").then(n=>{console.log("service worker registered as: ",n.scope)}).catch(n=>console.error("service worker registration: ",n))});G.createRoot(document.getElementById("root")).render(e.createElement(e.StrictMode,null,e.createElement(te,null)));
