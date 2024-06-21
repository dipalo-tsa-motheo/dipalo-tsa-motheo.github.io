import{P as p,R as e,r as u,A as G,a as H,c as $}from"./vendor-CBcWhN8x.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function i(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(s){if(s.ep)return;s.ep=!0;const l=i(s);fetch(s.href,l)}})();const x=({onStartGame:n})=>e.createElement("div",{className:"container"},e.createElement("div",null,e.createElement("h2",null," Basic Arithmetic Learning Game!"),e.createElement("button",{id:"start-button",onClick:n},"play")));x.propTypes={onStartGame:p.func.isRequired};const J=()=>{const[n,t]=u.useState(!1),i=()=>{t(!0)},a=()=>{t(!1)};return e.createElement("div",null,e.createElement("button",{onClick:i},"About"),n&&e.createElement("dialog",{open:!0,onClose:a,className:"dialog-content"},e.createElement("article",null,e.createElement("h3",null,"About Our Number Learning Game"),e.createElement("p",null,"Welcome to our interactive number learning game designed especially for children aged 4 to 10! Our innovative web app combines the excitement of a game with the educational value of practicing handwriting and arithmetic, making learning fun and engaging for young minds."),e.createElement("h4",null,"What We Offer"),e.createElement("ul",null,e.createElement("li",null,e.createElement("strong",null,"Interactive Learning"),": Our app features a virtual canvas where children can write numbers with their fingers or a stylus. The app then uses advanced machine learning models trained on the MNIST dataset to predict the handwritten digits. This immediate feedback helps children improve their number writing skills in a fun and interactive way."),e.createElement("li",null,e.createElement("strong",null,"Engaging Quizzes"),': We incorporate simple arithmetic quizzes, such as "5 - 4 = ?", to make learning numbers even more enjoyable. These quizzes are designed to be straightforward, ensuring that the answers always fall within the 0-9 range, perfect for young learners.'),e.createElement("li",null,e.createElement("strong",null,"Encouraging Improvement"),": To motivate children to improve their handwriting, our app turns incorrect predictions into a game. If a digit is not recognized correctly, children are encouraged to try again until the prediction matches their intended number. This not only helps them practice their writing but also builds perseverance and attention to detail."),e.createElement("li",null,e.createElement("strong",null,"Fun and Educational"),": By combining handwriting practice with arithmetic quizzes, our app helps children enhance their numerical understanding and fine motor skills. It’s a perfect blend of education and entertainment that keeps children engaged and motivated to learn."),e.createElement("li",null,e.createElement("strong",null,"Child-Friendly Interface"),": Our user-friendly and colorful interface is designed with young users in mind, ensuring that children can navigate and use the app with ease. Parents can rest assured that their children are learning in a safe and supportive environment.")),e.createElement("p",null,e.createElement("strong",null,"Join the Fun:")," We invite you to explore our number learning game and see how it can benefit your child's educational journey. Whether they are just starting to learn numbers or looking to improve their handwriting and arithmetic skills, our app provides a fun, interactive, and rewarding experience."),e.createElement("p",null,"Start playing today and watch your child’s confidence and skills grow as they master the world of numbers!"),e.createElement("button",{onClick:a},"Close"))))},K=()=>e.createElement("footer",{className:"footer"},e.createElement("hr",null),e.createElement("p",null,"Contact: ",e.createElement("a",{href:"mailto:kmotshoana@gmail.com"},"kmotshoana@gmail.com")),e.createElement("p",null,"© 2024 K.T MOTSHOANA."),e.createElement("p",null," All Rights Reserved."));class U{constructor(t,i){this.equations=t,this.askedQuestions=new Set,this.unaskedQuestions=Object.keys(t).flatMap(a=>t[a]),this.currentQuestion=null,this.remainingAttempts=3,this.updateQuizState=i}getRandomEquation(){if(this.unaskedQuestions.length===0)return this.updateQuizState("No more questions available."),null;const t=Math.floor(Math.random()*this.unaskedQuestions.length);return this.currentQuestion=this.unaskedQuestions[t],this.unaskedQuestions.splice(t,1),this.currentQuestion[0]}getCurrentQuestion(){return this.currentQuestion||this.getRandomEquation(),this.currentQuestion?this.currentQuestion[0]:""}validateAnswer(t){const i=this.currentQuestion[1];return t===i}checkAnswer(t){if(!this.currentQuestion)return!1;if(t!==""){let i=this.validateAnswer(t);return!i&&this.remainingAttempts>1?(this.updateQuizState("Please try again."),this.remainingAttempts--,!1):i?(this.askedQuestions.add(this.currentQuestion[0]),this.updateQuizState("Correct !"),this.remainingAttempts=3,this.currentQuestion=null,!0):(this.updateQuizState(`Correct answer was :
  ${this.currentQuestion[1]}`),this.unaskedQuestions.push(this.currentQuestion),this.remainingAttempts=3,this.currentQuestion=null,!1)}}}const V=[["0 + 0 = ?",0],["0 + 1 = ?",1],["0 + 2 = ?",2],["0 + 3 = ?",3],["0 + 4 = ?",4],["0 + 5 = ?",5],["0 + 6 = ?",6],["0 + 7 = ?",7],["0 + 8 = ?",8],["0 + 9 = ?",9],["1 + 0 = ?",1],["1 + 1 = ?",2],["1 + 2 = ?",3],["1 + 3 = ?",4],["1 + 4 = ?",5],["1 + 5 = ?",6],["1 + 6 = ?",7],["1 + 7 = ?",8],["1 + 8 = ?",9],["2 + 0 = ?",2],["2 + 1 = ?",3],["2 + 2 = ?",4],["2 + 3 = ?",5],["2 + 4 = ?",6],["2 + 5 = ?",7],["2 + 6 = ?",8],["2 + 7 = ?",9],["3 + 0 = ?",3],["3 + 1 = ?",4],["3 + 2 = ?",5],["3 + 3 = ?",6],["3 + 4 = ?",7],["3 + 5 = ?",8],["3 + 6 = ?",9],["4 + 0 = ?",4],["4 + 1 = ?",5],["4 + 2 = ?",6],["4 + 3 = ?",7],["4 + 4 = ?",8],["4 + 5 = ?",9],["5 + 0 = ?",5],["5 + 1 = ?",6],["5 + 2 = ?",7],["5 + 3 = ?",8],["5 + 4 = ?",9],["6 + 0 = ?",6],["6 + 1 = ?",7],["6 + 2 = ?",8],["6 + 3 = ?",9],["7 + 0 = ?",7],["7 + 1 = ?",8],["7 + 2 = ?",9],["8 + 0 = ?",8],["8 + 1 = ?",9],["9 + 0 = ?",9]],X=[["0 - 0 = ?",0],["1 - 0 = ?",1],["1 - 1 = ?",0],["2 - 0 = ?",2],["2 - 1 = ?",1],["2 - 2 = ?",0],["3 - 0 = ?",3],["3 - 1 = ?",2],["3 - 2 = ?",1],["3 - 3 = ?",0],["4 - 0 = ?",4],["4 - 1 = ?",3],["4 - 2 = ?",2],["4 - 3 = ?",1],["4 - 4 = ?",0],["5 - 0 = ?",5],["5 - 1 = ?",4],["5 - 2 = ?",3],["5 - 3 = ?",2],["5 - 4 = ?",1],["5 - 5 = ?",0],["6 - 0 = ?",6],["6 - 1 = ?",5],["6 - 2 = ?",4],["6 - 3 = ?",3],["6 - 4 = ?",2],["6 - 5 = ?",1],["6 - 6 = ?",0],["7 - 0 = ?",7],["7 - 1 = ?",6],["7 - 2 = ?",5],["7 - 3 = ?",4],["7 - 4 = ?",3],["7 - 5 = ?",2],["7 - 6 = ?",1],["7 - 7 = ?",0],["8 - 0 = ?",8],["8 - 1 = ?",7],["8 - 2 = ?",6],["8 - 3 = ?",5],["8 - 4 = ?",4],["8 - 5 = ?",3],["8 - 6 = ?",2],["8 - 7 = ?",1],["8 - 8 = ?",0],["9 - 0 = ?",9],["9 - 1 = ?",8],["9 - 2 = ?",7],["9 - 3 = ?",6],["9 - 4 = ?",5],["9 - 5 = ?",4],["9 - 6 = ?",3],["9 - 7 = ?",2],["9 - 8 = ?",1],["9 - 9 = ?",0]],Y=[["0 * 0 = ?",0],["0 * 1 = ?",0],["0 * 2 = ?",0],["0 * 3 = ?",0],["0 * 4 = ?",0],["0 * 5 = ?",0],["0 * 6 = ?",0],["0 * 7 = ?",0],["0 * 8 = ?",0],["0 * 9 = ?",0],["1 * 0 = ?",0],["1 * 1 = ?",1],["1 * 2 = ?",2],["1 * 3 = ?",3],["1 * 4 = ?",4],["1 * 5 = ?",5],["1 * 6 = ?",6],["1 * 7 = ?",7],["1 * 8 = ?",8],["1 * 9 = ?",9],["2 * 0 = ?",0],["2 * 1 = ?",2],["2 * 2 = ?",4],["2 * 3 = ?",6],["2 * 4 = ?",8],["3 * 0 = ?",0],["3 * 1 = ?",3],["3 * 2 = ?",6],["3 * 3 = ?",9],["4 * 0 = ?",0],["4 * 1 = ?",4],["4 * 2 = ?",8],["5 * 0 = ?",0],["5 * 1 = ?",5],["6 * 0 = ?",0],["6 * 1 = ?",6],["7 * 0 = ?",0],["7 * 1 = ?",7],["8 * 0 = ?",0],["8 * 1 = ?",8],["9 * 0 = ?",0],["9 * 1 = ?",9]],Z=[["0 / 1 = ?",0],["0 / 2 = ?",0],["0 / 3 = ?",0],["0 / 4 = ?",0],["0 / 5 = ?",0],["0 / 6 = ?",0],["0 / 7 = ?",0],["0 / 8 = ?",0],["0 / 9 = ?",0],["1 / 1 = ?",1],["2 / 1 = ?",2],["2 / 2 = ?",1],["3 / 1 = ?",3],["3 / 3 = ?",1],["4 / 1 = ?",4],["4 / 2 = ?",2],["4 / 4 = ?",1],["5 / 1 = ?",5],["5 / 5 = ?",1],["6 / 1 = ?",6],["6 / 2 = ?",3],["6 / 3 = ?",2],["6 / 6 = ?",1],["7 / 1 = ?",7],["7 / 7 = ?",1],["8 / 1 = ?",8],["8 / 2 = ?",4],["8 / 4 = ?",2],["8 / 8 = ?",1],["9 / 1 = ?",9],["9 / 3 = ?",3],["9 / 9 = ?",1]],_={addition:V,subtraction:X,multiplication:Y,division:Z};function q(n,t){t.fillStyle="white",t.fillRect(0,0,n.width,n.height)}function N(n,t){t.clearRect(0,0,n.width,n.height),q(n,t)}function ee(n,t,i,a){i.lineWidth=a,i.lineCap="round",i.strokeStyle="black",i.beginPath(),i.moveTo(n.x,n.y),i.lineTo(t.x,t.y),i.stroke()}const I=({clearTrigger:n,onClearComplete:t,handlePredict:i})=>{const a=u.useRef(null),[s]=u.useState(10);u.useEffect(()=>{const r=a.current,o=r.getContext("2d"),w=()=>{r.width=300,r.height=300,q(r,o)};w(),window.addEventListener("resize",w);let y=!1,m={x:0,y:0};const k=d=>{const E=r.getBoundingClientRect(),Q=d.touches?d.touches[0]:d;return{x:Q.clientX-E.left,y:Q.clientY-E.top}},h=d=>{y=!0,m=k(d),o.beginPath(),o.moveTo(m.x,m.y),d.preventDefault()},f=()=>{y=!1,o.beginPath()},v=d=>{if(!y)return;d.preventDefault();const E=k(d);ee(m,E,o,s),m=E};return r.addEventListener("mousedown",h),r.addEventListener("mouseup",f),r.addEventListener("mousemove",v),r.addEventListener("touchstart",h),r.addEventListener("touchend",f),r.addEventListener("touchmove",v),()=>{window.removeEventListener("resize",w),r.removeEventListener("mousedown",h),r.removeEventListener("mouseup",f),r.removeEventListener("mousemove",v),r.removeEventListener("touchstart",h),r.removeEventListener("touchend",f),r.removeEventListener("touchmove",v)}},[s]),u.useEffect(()=>{if(n){const r=a.current,o=r.getContext("2d");N(r,o),t&&t()}},[n,t]);const l=()=>{const r=a.current,o=r.getContext("2d");N(r,o)};return e.createElement("div",{className:"canvas-container"},e.createElement("canvas",{id:"canvas",ref:a}),e.createElement("div",{className:"button-group"},e.createElement("button",{id:"clear",title:"Clear canvas",onClick:l},e.createElement(G,{style:{width:"60px",height:"30px"}})),e.createElement("button",{id:"answer",title:"submit answer",onClick:i},"Answer")))};I.propTypes={clearTrigger:p.bool.isRequired,onClearComplete:p.func,handlePredict:p.func.isRequired};const te=()=>e.createElement("div",{className:"loading-spinner"},e.createElement("div",{className:"spinner"})),P=({isCorrect:n,onRemove:t,responseMessage:i,predictedAnswer:a})=>(u.useEffect(()=>{const s=setTimeout(t,6e3);return()=>clearTimeout(s)},[t]),e.createElement("div",{className:`feedback ${n?"correct":"incorrect"}`},n?"✔️":"❌",e.createElement("div",{id:"predicted"},!n&&e.createElement("p",null,"It's like you wrote: ",a," , 🤔"),e.createElement("div",{id:"result"},i))));P.propTypes={isCorrect:p.bool.isRequired,onRemove:p.func.isRequired,responseMessage:p.string.isRequired,predictedAnswer:p.number.isRequired};const B=({onBackToHome:n})=>{const[t,i]=u.useState(""),[a,s]=u.useState(""),[l,r]=u.useState(""),[o,w]=u.useState(null),[y,m]=u.useState(!1),[k,h]=u.useState(!1),[f,v]=u.useState({show:!1,isCorrect:!1});u.useEffect(()=>{E()},[]);const d=g=>{i(g)},E=()=>{const g=new U(_,d);w(g),r(g.getCurrentQuestion()),m(!0)},Q=()=>{h(!0);const g=document.getElementById("canvas"),M=g.getContext("2d");if((b=>!new Uint32Array(b.getImageData(0,0,g.width,g.height).data.buffer).some(z=>z!==0))(M)){console.log("Nothing to post"),h(!1);return}const j=g.toDataURL("image/png"),S=new Image;S.src=j,S.onload=()=>{const b=document.createElement("canvas"),A=b.getContext("2d");b.width=28,b.height=28,A.drawImage(S,0,0,28,28);const L=A.getImageData(0,0,28,28).data,O=[];for(let c=0;c<28;c++){const C=[];for(let T=0;T<28;T++){const R=(c*28+T)*4,F=(L[R]+L[R+1]+L[R+2])/3;C.push(255-F)}O.push(C)}fetch("https://dipalo-tsa-motheo-api.onrender.com/predict",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({input:O})}).then(c=>{if(!c.ok)throw new Error(`Network response was not ok, status: ${c.status}`);return c.json()}).then(c=>{if(c.error)throw new Error(c.error);if(console.log(c),console.log(c.digit),s(c.digit),o){const C=o.checkAnswer(c.digit);v({show:!0,isCorrect:C}),(C||o.remainingAttempts===0)&&m(!0),o.currentQuestion?r(o.currentQuestion[0]):r(o.getCurrentQuestion())}h(!1)}).catch(c=>{console.error("Error:",c),h(!1)})}},D=()=>{m(!1)},W=()=>{v({show:!1,isCorrect:!1})};return e.createElement("div",{className:"game-container",style:{margin:"auto",position:"relative"}},e.createElement("button",{id:"home",onClick:n},e.createElement(H,null)),e.createElement("h2",{id:"problem"},"Problem: ",l),e.createElement("hr",null),e.createElement(I,{clearTrigger:y,onClearComplete:D,handlePredict:Q}),k&&e.createElement(te,null),f.show&&e.createElement(P,{isCorrect:f.isCorrect,onRemove:W,predictedAnswer:a,responseMessage:t}))};B.propTypes={onBackToHome:p.func.isRequired};const ne="/assets/icon%20(3)-jcV3HiWl.jpg",re=()=>{const[n,t]=u.useState("welcome"),i=()=>t("game"),a=()=>t("welcome");return e.createElement("div",{id:"home-page"},n==="welcome"&&e.createElement(e.Fragment,null,e.createElement("section",{id:"banner"},e.createElement("img",{src:ne,alt:"logo image"}),e.createElement(J,null)),e.createElement(x,{onStartGame:i}),e.createElement(K,null)),n==="game"&&e.createElement(B,{onBackToHome:a}))};"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("./sw.js").then(n=>{console.log("service worker registered as: ",n.scope)}).catch(n=>console.error("service worker registration: ",n))});$.createRoot(document.getElementById("root")).render(e.createElement(e.StrictMode,null,e.createElement(re,null)));
