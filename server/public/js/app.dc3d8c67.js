(function(){var e={5840:function(e,t,n){"use strict";var o=n(9242),s=n(3396),a=n(7139),i=n(7718),r=n(9156),l=n(702),c=n(5039),u=n(1888),d=n(1334),g=n(3849),h=n(9234),m=n(3289),p=n(8961),f=n(9457),v=n(2127),w=n(3140),y=n(9657);const b={class:"header"},k={class:"header__inner"},E={class:"header__subheader"},S={class:"header__links"},A={class:"header__pages"},C=(0,s._)("div",{class:"header__pages__title"},[(0,s._)("span",null,"Pages")],-1),T={key:0,class:"header__settings"},R=(0,s._)("div",{class:"header__settings__title"},[(0,s._)("span",null,"Settings")],-1),U={class:"header__account"},_=(0,s._)("div",{class:"header__account__title"},[(0,s._)("span",null,"Account")],-1),x={class:"header__collection"},L=(0,s._)("footer",null,"Design and Created 2023 | Cool-ore",-1);function O(e,t,n,o,O,B){const P=(0,s.up)("Logo"),V=(0,s.up)("CloseBtn"),j=(0,s.up)("NavigationList"),I=(0,s.up)("router-view");return(0,s.wg)(),(0,s.j4)(i.q,null,{default:(0,s.w5)((()=>[(0,s.Wm)(w.O,null,{default:(0,s.w5)((()=>[(0,s._)("header",b,[(0,s._)("div",k,[(0,s.Wm)(P,{onMouseover:e.textToSpeech},null,8,["onMouseover"]),(0,s.Wm)(h.C),(0,s.Wm)(y.V,{modelValue:e.isNavOpen,"onUpdate:modelValue":t[1]||(t[1]=t=>e.isNavOpen=t),location:"right",temporary:""},{default:(0,s.w5)((()=>[(0,s._)("div",E,[(0,s.Wm)(P,{onMouseover:e.textToSpeech},null,8,["onMouseover"]),(0,s.Wm)(V,{onClick:e.navigation},null,8,["onClick"])]),(0,s._)("div",S,[(0,s._)("ul",A,[C,(0,s.Wm)(j,{lists:e.state.navigationList.navigationLists},null,8,["lists"])]),e.state.user?((0,s.wg)(),(0,s.iD)("ul",T,[R,(0,s.Wm)(j,{lists:e.state.navigationList.settingsLists},null,8,["lists"])])):(0,s.kq)("",!0),(0,s._)("ul",U,[_,(0,s.Wm)(p.i,{density:"compact","active-class":"header__nav-active",nav:""},{default:(0,s.w5)((()=>[e.state.user?((0,s.wg)(),(0,s.j4)(f.l,{key:1,class:"header__lists header__logout",value:"logout",to:{name:e.state.navigationList.logout.name},onClick:t[0]||(t[0]=t=>e.state.navigationList.logout.func())},{prepend:(0,s.w5)((()=>[(0,s.Wm)(m.t,{icon:e.state.navigationList.logout.icon},null,8,["icon"])])),default:(0,s.w5)((()=>[(0,s.Wm)(v.V,{textContent:(0,a.zw)(e.state.navigationList.logout.text)},null,8,["textContent"])])),_:1},8,["to"])):((0,s.wg)(),(0,s.j4)(f.l,{key:0,class:"header__lists header__login",value:"login",to:{name:e.state.navigationList.login.name}},{prepend:(0,s.w5)((()=>[(0,s.Wm)(m.t,{icon:e.state.navigationList.login.icon},null,8,["icon"])])),default:(0,s.w5)((()=>[(0,s.Wm)(v.V,{textContent:(0,a.zw)(e.state.navigationList.login.text)},null,8,["textContent"])])),_:1},8,["to"]))])),_:1})])])])),_:1},8,["modelValue"]),(0,s._)("div",x,[e.state.user?(0,s.kq)("",!0):((0,s.wg)(),(0,s.j4)(l.T,{key:0,onMouseover:e.textToSpeech,class:"header__login",elevation:"0",to:{name:"login"}},{default:(0,s.w5)((()=>[(0,s.Uk)(" Login ")])),_:1},8,["onMouseover"])),(0,s.Wm)(r.g,{onClick:e.navigation,class:"header__burger",elevation:"0"},null,8,["onClick"])])])]),(0,s.Wm)(I),L,(0,s.Wm)(g.B,{class:"home__dialog",persistent:"",modelValue:e.state.textToSpeech.dialog,"onUpdate:modelValue":t[2]||(t[2]=t=>e.state.textToSpeech.dialog=t)},{default:(0,s.w5)((()=>[(0,s.Wm)(c._,null,{default:(0,s.w5)((()=>[(0,s.Wm)(u.Z,null,{default:(0,s.w5)((()=>[(0,s.Uk)(" Do you want to read it for you? ")])),_:1}),(0,s.Wm)(d.h,null,{default:(0,s.w5)((()=>[(0,s.Wm)(l.T,{color:"error",onClick:e.handleDialog},{default:(0,s.w5)((()=>[(0,s.Uk)("No, thank you")])),_:1},8,["onClick"]),(0,s.Wm)(h.C),(0,s.Wm)(l.T,{color:"success",onClick:e.allowSpeaking},{default:(0,s.w5)((()=>[(0,s.Uk)("Yes, please")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1})}var B=n(4870),P=n(65);const V={class:"header__logo"},j=["src"];function I(e,t,o,a,i,r){const l=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",V,[(0,s.Wm)(l,{to:{name:"home"}},{default:(0,s.w5)((()=>[(0,s._)("img",{src:n(5080),alt:"Cool-ore Logo"},null,8,j)])),_:1})])}var W=(0,s.aZ)({setup(){const{state:e,commit:t}=(0,P.oR)();return{state:e}}}),G=n(89);const J=(0,G.Z)(W,[["render",I]]);var Q=J;function D(e,t,n,o,a,i){return(0,s.wg)(),(0,s.j4)(l.T,{class:"header__close",elevation:"0",small:"",icon:""},{default:(0,s.w5)((()=>[(0,s.Wm)(m.t,null,{default:(0,s.w5)((()=>[(0,s.Uk)("mdi-close")])),_:1})])),_:1})}var N=(0,s.aZ)({setup(){const{state:e,commit:t}=(0,P.oR)();return{state:e}}});const M=(0,G.Z)(N,[["render",D]]);var Z=M;function H(e,t,n,o,i,r){return(0,s.wg)(),(0,s.j4)(p.i,{density:"compact","active-class":"header__nav-active",nav:""},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.lists,((e,t)=>((0,s.wg)(),(0,s.j4)(f.l,{class:"header__lists",key:t,value:e,to:e.name?{name:e.name}:null},{prepend:(0,s.w5)((()=>[(0,s.Wm)(m.t,{icon:e.icon},null,8,["icon"])])),default:(0,s.w5)((()=>[(0,s.Wm)(v.V,{textContent:(0,a.zw)(e.text)},null,8,["textContent"])])),_:2},1032,["value","to"])))),128))])),_:1})}var F=(0,s.aZ)({name:"NavigationList",props:{lists:{type:Array,required:!0}},setup({user:e,lists:t}){}});const X=(0,G.Z)(F,[["render",H]]);var q=X,Y=(0,s.aZ)({name:"App",components:{Logo:Q,CloseBtn:Z,NavigationList:q},setup(){const{state:e,commit:t,dispatch:n}=(0,P.oR)(),o=(0,B.iH)(!1);function s(){let e=document.querySelector(":root"),t=getComputedStyle(e);t.getPropertyValue("--primary-color"),t.getPropertyValue("--secondary-color");e.style.setProperty("--primary-color","green"),e.style.setProperty("--secondary-color","yellow")}function a(e){t("textToSpeech/textToSpeech",{event:e})}function i(){o.value=!o.value}function r(){t("textToSpeech/allowSpeaking"),t("textToSpeech/textToSpeech",{event:e.textToSpeech.event})}function l(e){t("textToSpeech/handleDialog",{event:e})}return console.log("GENERATE TOKEN"),{changeColor:s,textToSpeech:a,navigation:i,allowSpeaking:r,handleDialog:l,state:e,isNavOpen:o}}});const K=(0,G.Z)(Y,[["render",O]]);var z=K,$=n(2483);n(7658);class ee{constructor(e){this.text=e,this.speech=new SpeechSynthesisUtterance,this.synthesis=window.speechSynthesis,this.voices=this.synthesis.getVoices(),this.currentVoice=21,this.isListening=!1}debug(){console.log(this.speech),console.log(this.synthesis.getVoices())}setVoice(e){this.currentVoice=e}start(){console.log("START"),console.log(this.synthesis.getVoices()),this.isListening=!this.isListening,this.speech.text=this.text,this.speech.voice=this.voices[this.currentVoice],this.synthesis.speak(this.speech),console.log(this.speech)}get listening(){return this.speech}get getVoices(){return this.voices}}var te=ee;const ne={namespaced:!0,state:{event:null,isListening:!1,dialog:!1,isSpeaking:!1},getters:{},mutations:{handleDialog(e,{event:t}){t.preventDefault(),e.dialog=!e.dialog,3===t.which&&(e.event=t)},allowSpeaking(e){e.isSpeaking=!e.isSpeaking,e.dialog=!e.dialog},textToSpeech(e,{event:t}){if(e.isListening)return;console.log("Text Speech Invoked");const n=t.target.closest("button"),o=t.target.closest("img"),s=t.target.closest("a"),a=s?.attributes["href"].nodeValue;let i;switch(a){case"/":i=o?`This is the homepage logo that goes to the ${a} homepage.`:`This is home link and goes to the ${a} homepage.`;break;case"/about":i=`This is about link and goes to the ${a} page.`;break;case"/contact":i=`This is contact link and goes to the ${a} page.`;break;case"/article":i=`This is article link and goes to the ${a} page.`;break;default:i=n?`This is ${t.target.textContent} button`:3===t.which?`${t.target.textContent}`:"This is going to nothing route"}const r=new te(i);r.start(),r.listening.onstart=()=>{console.log("Speech Start"),e.isListening=!e.isListening},r.listening.onend=()=>{console.log("Speech End"),e.isListening=!e.isListening}}},actions:{},modules:{}},oe={state:{types:{redGreen:{name:"Red-Green Color blindness",desc:"The most common type is seen in familial causes and has damaged or reduced red or green con pigment function. There are four subtypes of the Red-Green Type.",subtypes:[{name:"Protanomaly",desc:"A form of red-green color blindness in which the red cones detect insufficient red and are overly sensitive to greens, yellows, and oranges. Greens, yellows, oranges, reds, and browns may appear similar as a result, especially in low light."},{name:"Protanopia",desc:"Protanopia is a type of color blindness in which people see more green than red, a state in which the red cones are absent, leaving only the cones that absorb blue and green light."},{name:"Deuteranomaly",desc:"The most common type of red-green color blindness is deuteranomaly. It intensifies the redness of green. This type is mild and usually does not interfere with normal activities."},{name:"Deuteranopia",desc:"Deuteranopia prevents people from seeing 'green' light because it causes green to appear more red. As a result, people with deuteranopia lack green cones and cannot perceive 'green' light."}]},blueYellow:{name:"Blue-Yellow Color blindness",desc:"This less common type of color blindness makes it difficult to distinguish between blue and green, as well as yellow and red.",subtypes:[{name:"Tritanomaly",desc:"Tritanomaly makes it difficult to distinguish between blue and green, as well as yellow and red. The most difficult colors are green-blue, yellow-pink, and purple-red."},{name:"Tritanopia",desc:"Tritanopia is characterized by the inability to distinguish between blue and green, purple and red, and yellow and pink. It also makes colors appear less vibrant."}]},blackWhite:{name:"Monochromacy Color blindness",desc:"People with monochromatic vision cannot see color at all, and their world consists of various shades of grey ranging from black to white, similar to viewing the world through an old black and white television set.",subtypes:[{name:"Achromatomaly",desc:"The blue cones in the eyes are either completely absent or nonfunctional in this kind of color blindness, leaving little to no ability to discern colors at all."},{name:"Achromatopsia",desc:"Achromatopsia is a disorder that causes a partial or complete loss of color vision. People with full achromatopsia cannot see colors; they only see black, white, and degrees of gray."}]}}},mutations:{},actions:{}},se={namespaced:!0,state:{settingsLists:[{text:"Profile",icon:"mdi-account",name:"profile"},{text:"Audio",icon:"mdi-volume-high",name:"audio"},{text:"Appearance",icon:"mdi-brush",name:"appearance"},{text:"Change Password",icon:"mdi-lock-outline",name:"change_password"}],navigationLists:[{text:"Home",icon:"mdi-home",name:"home"},{text:"About",icon:"mdi-information",name:"about"},{text:"Article",icon:"mdi-newspaper",name:"article"}],logout:{text:"Logout",icon:"mdi-logout",func:()=>{ye.dispatch("logoutUser")}},login:{text:"Login",icon:"mdi-login",name:"login"}},mutations:{handleAccountList(e,t){console.log("somesssss",t)}}};var ae=n(4161);let ie=ae.Z.create({baseURL:"http://localhost:8080",withCredentials:!0});ie.defaults.withCredentials=!0,ie.interceptors.response.use((function(e){return console.log(e,"THIS IS THE RESPONSE"),e}),(function(e){return"Network Error"==e.message?Promise.resolve({status:500,data:{message:"Server is down",ok:!1,report:e.message}}):(console.log(e),console.log("There is an "+e),Promise.reject(e))}));var re=ie,le=n(5391),ce=n.n(le);const ue=ce().users;class de{static generateToken(){return new Promise((async(e,t)=>{try{const t=await re.post(ue+"token");console.log(t),e(t)}catch(n){401!=n.response.status&&403!=n.response.status||e(n.response),t(n)}}))}static getUser(){return new Promise((async(e,t)=>{try{const e=await re.get(ue);console.log(e)}catch(n){t(n)}}))}static logoutUser(e){return new Promise((async(t,n)=>{try{const n=await re.post(ue+"logout",{id:e}),o=n.data;t(o)}catch(o){n(o)}}))}static insertUser(e,t,n){return console.log("InsertUser Function"),new Promise((async(o,s)=>{try{const s=await re.post(ue+"register",{username:e,email:t,password:n}),a=s.data;o(a)}catch(a){if(409==a.request.status)return void o(a.response);s(a)}}))}static verifyUser(e,t){return console.log("verifyUser was used"),new Promise((async(n,o)=>{try{const o=await re.post(ue+"login",{email:e,password:t}),s=o.data;console.log(o),console.log(s),n(s)}catch(s){if(console.log(Object.keys(s)),console.log(s.message),401==s.response.status)return void n(s.response.data);404==s.response.status&&n(s.response.data),o(s)}}))}}var ge=de;const{getUser:he,insertUser:me,logoutUser:pe,verifyUser:fe,generateToken:ve}=ge,we=(0,P.MT)({state:{templateValidation:!1,validateUsingLogin:!1,test:null,accessToken:"",refreshToken:"",isGuest:!0,message:"",ok:!1,user:null,username:"",email:"",password:"",lists:[],listname:"",isDone:!1},mutations:{resetForm(e){e.message=null,e.ok=!1,e.username=null,e.email=null,e.password=null,e.user=null},notFoundMsg(e){}},actions:{async setToken(){},async generateToken({state:e},{routename:t}){const n=sessionStorage.getItem("id");if(!n)return void(e.isGuest=!0);e.isGuest=!1;const o=await ve();if(console.log(o,"RESPONSE"),401===o.status||403===o.status||500===o.status)return e.message=o.data.message,void setTimeout((async()=>{await Ee.push("/notfound")}),1e3);e.user=o.data.user,console.log(o.data.user,"103"),e.ok=o.data.ok,e.templateValidation=o.data.ok},async logoutUser({state:e}){e.isGuest=!0;const t=await pe(e.user.id);e.message=t.message,console.log(e),sessionStorage.clear(),e.user=null,await Ee.push("/notfound")},async getUsers({state:e}){const t=await ae.Z.get("http://localhost:5000/sample");console.log(t)},async insertUser({state:e}){if(null==e.username||""==e.username)return e.message="Username is empty";if(null==e.email||""==e.email)return e.message="Email is empty";if(null==e.password||""==e.password)return e.message="Password is empty";const t=await me(e.username,e.email,e.password);e.message=t.message,e.ok=t.ok,setTimeout((async()=>{await Ee.push("/login")}),2e3)},async verifyUser({state:e}){if(""==e.email&&""==e.password)return void(e.message="All fields are empty!");if(null==e.email||""==e.email)return void(e.message="Email is empty");if(null==e.password||""==e.password)return e.message="Password is empty";const t=await fe(e.email,e.password);if(!t.ok)return e.ok=t.ok,void(e.message=t.message);console.log(t),e.user=t.user,e.message=t.message,e.ok=t.ok,e.templateValidation=!0,e.validateUsingLogin=!0,e.isGuest=!1,sessionStorage.setItem("id",t.user.id),ae.Z.defaults.headers.common.Authorization=`Bearer ${t.token}`,setTimeout((async()=>{await Ee.push({name:"profile"})}),500)}},getters:{},modules:{textToSpeech:ne,colorblind:oe,navigationList:se}});var ye=we;const be=[{path:"/",name:"home",component:()=>n.e(402).then(n.bind(n,1402))},{path:"/register",name:"register",component:()=>Promise.all([n.e(13),n.e(871)]).then(n.bind(n,4871))},{path:"/login",name:"login",component:()=>Promise.all([n.e(13),n.e(319)]).then(n.bind(n,4319))},{path:"/notfound",name:"notfound",component:()=>n.e(223).then(n.bind(n,9396))},{path:"/about",name:"about",component:()=>n.e(91).then(n.bind(n,2091))},{path:"/contact",name:"contact",component:()=>Promise.all([n.e(13),n.e(194)]).then(n.bind(n,3194))},{path:"/article",name:"article",component:()=>n.e(350).then(n.bind(n,4350))},{path:"/settings",name:"settings",component:()=>n.e(396).then(n.bind(n,8396))},{path:"/profile",name:"profile",component:()=>n.e(518).then(n.bind(n,3518))},{path:"/audio-synthesis",name:"audio",component:()=>n.e(321).then(n.bind(n,8321))},{path:"/appearance",name:"appearance",component:()=>n.e(497).then(n.bind(n,497))},{path:"/change-password",name:"change_password",component:()=>n.e(388).then(n.bind(n,4388))}],ke=(0,$.p7)({history:(0,$.PO)("/"),routes:be});ke.beforeEach(((e,t)=>{if(!ye.state.isGuest&&("login"==e.name||"register"==e.name))return alert("You are accessing a restricted route!"),{name:t.name}}));var Ee=ke,Se=(n(9773),n(8957)),Ae=(0,Se.Rd)();async function Ce(){const e=await n.e(461).then(n.t.bind(n,3657,23));e.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}Ce(),(0,o.ri)(z).use(Ee).use(ye).use(Ae).mount("#app")},5391:function(e){const t={users:"api/users/"};e.exports=t},5080:function(e){"use strict";e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJIAAACSCAYAAACue5OOAAAL20lEQVR4nO2dTWsUTReGO69REjEmBgQV1NGdoia6FhJdiSCJrsRN4tKV4y4byfgLMoK4zWQhKggZQdeJ+AMSXYi7JP6BjB+guOmHu0nl7bT9UZ/dVdXngiI+eWbSXdV3nzpVdepUQBAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRBB0KfYBhvUhl5xRvaL/Rou3tDwN4jq2VS5g//RAyR0QEIitEBCIrRAQiK0QEIitEBCIrRAQiK0oGMeyWnGx8eDsbGxoNFo7Bbw9u3boN1u76las9kMpqamon+vr68HvV4v+rm1tRX9rDO1E9L09HQwMTERCWhycjLzcx8+fPjndyMjI7vfSfvu6upqJKhut5v6fSIbLJGENpeRkZHw4cOH4crKSihCq9X6p174nQjLy8vhzMxMdA+2t5Pqcpe3FgmWZ2ZmJvpZ5T2goAuElVpaWoqslo9452zPzs4GGxsbwfLycqUiioMuEfe1srIS3RsE7hteCAkPan5+Ptje3g4WFxd3HWYbwb11Oh3vBOW8kGB11tbWglarFQnKFZigcO95Tr8rOCskjLrQVaALs9kCFeFLPZwUEuZzfHmTGcyywpdyEaeEhDcWb+/CwoIFd6MfdM3w8WCdXOqmA5eEBOvjmxXKAtYJzji6PVdwQkhs6OzaW6oC6oo6u9LVWS8kjMZg7usI6+rQBrZjvZAwI/z9+3cL7qQaUHe0ge1YLyQsgsIvqqOYUGfU3YXIAid8pDqKySURBTYKCUsdaU51ncSUJyK0DebRfENrGMns7GwUpLG2tpYZejE+Ph72ej2hcA4ZdISRyIC6oY5pdUeboG0A2sqmMBJVtAlpcnJyT7NXLaYqhMQrIkbWZ6sQkhVdG2asMZsbh61B1aWbK+rO0BbJCUr8zpb1OSuEhLmSNMHURUzfvn0TFlEQm2fyAeWurdlsFpr8vG5udHQ03Nra0t7NlNW1PX/+PNy3bx93d5YG2rDWPhL6+O3tba4GzxPT4OCgdjGVIaS5ubnMtuEVEUODv+SukEQD8vPEhLf648ePck80BZNCwstz7949bSICaMtaCml6elrqIRSJCV2FDkwJCSK6ePGiVhEx0Ka1EhIaa2NjQ/ph5IkJ5cWLF9J/m2FCSKjz8PCwERGxv6+w9ck9Iel4s4sccNl5ps+fP4ftdjvV58DvXr16FW5ubkr97Xfv3hkTESPtBfBSSGgwXge7CJVJS3y30+lEDX/hwoXw0KFDwo0PwV6/fj0S3urqam69RCcbZcE9SFolt4TElkF0wSsmNDCEg+ub3PmKa0JYcWGUJSKG5PKJW0JS8Y2yyBPTqVOnwqtXrxoTTl5pNBrhgwcPwvPnz5cmonDHV/JaSLqtUZwiB9y2YkpEDAmr5I6Qut2usYYD79+/D/fv35967YGBgbCvr680QfX390fXTPt/Bw8eNCoigLb2Ukgw86aAKTcQVmG0wGcSnZAVBW3unZB41tREgQOdNty9detWePjwYevEA0t0/PjxPb9D+IwpQQmuwbkhJN2mHLmHkj4RchExZx7XGxoaskZEzCeC+Ofn5/+ZmMRD1zUtwsD1vBISGlEXaOzkUsDExMQ/bzXW3WyyRpinik9kMkHFP4OuSLd1EhiA2C8kXaM1NHK838dbDcuUxtGjR60SEgrW2JLAguJFiH9OZ5SBwPqb/ULCRKAqyf5+amoqsyuw2fHOEsnCwsKe7g7OuA53AG3vjZBUJiEhlvisMBp7cXEx8/OYRcbQ21YhYRCQtXQD4YyNje1+Ft2SalcnMDlpt5BU/CM0bFxEaOQiUbowDVDUdSV9p7wXhwcvhJTcHcJLcqYaI7Ii8KYfOHDAeiHBqhYB8cS7OpXpEzwD54Uk0wBoxLiI8IbygKA220XECs8sP16muJhkBy2c80l2Cwkr4aIiin9fxKxfuXJF24OGn3XixInw7NmzUdE9CuQVBbryuN8kIybOGCW7hYQ4HV7iE2h4E0UdTV0PGSOoNOD4I/m7jmuI+I64roqY8AxqI6SkTyQ69OVsrMKHy3PdpNWULevr69z1UxGTF0LimfZPikhmlCIwX5JZRLphxUD7qIhGQyTFlGU5k3BOASgJScdx7bl7houOTPj7929w586d4NevX9F/z83NBTdu3BC+kWfPngVv3rwR/h5jaGgo+PHjB/fnNzc3gzNnpE83j0BaP9HUfminu3fvCrcXR+7NTZXj2lWx/lAb3nLp0iUh6wCy4o0cLe4nkbABWCRRBgcHa95q/4eERGiBhLTDz58/hb/z+/dvQ3fjHsbPa0MqvyKQzgVHf4KBgYHo1KBjx44JXQcnNqqchYYE6SLg+NE/f/5IXy/YcYBxmqUIr1+/Dr5+/Rp9A0eo8h4l9uTJE6V7NU2hs81LfG5GZocFhu6uDf9Fw2viC9KIYeIFAXWmh/+qaJ3ZjosJq/4i4Se6JiR5Jgl1zFmJtk1cRJhLEgnLrdXMNiO+BCFqmXQNu7PCPBBdoCmpVVR4SIYWi4oo9EVIMtGRSTFlhdMmydrRKlNML9rypPVJBvXJiCjk7/btFpJs/LFMFICuLqeMUvSCwRLH49PhE8nuMvEijEQ2sC3c2XIkEo+DhnZFSHmZUhD1IBrUl4cXgW2qO2yTwV1FQfEuhNpmvRB4EZLWg3dhNg/OLUn2B/+rJldPrnoHOV2mZCaOUktaoq60rVaqsdoh/9DfDSHpSh6RDIqHyU6bIrDZKqWFHicjGOEP6Ur/49V2JJ37/tO27OBBxB1R/DsvV2NVBRYnfp94yEkrpKMriyPwUtkvJBOZSJIhr0xQDA3pgrUXNqeGe0s6wHg5TKS68WrLdpDhF6iCB5Lc7gzR4k2HXyaY1sVowb0gH0FSQCasEAOz9AJ1ckNIortJRICgTp8+ved6tu9vg4Dg8+nOQBJHMMOtG0LCsN00GOUgZ6TNAkJB1n+TAmKUmWirtHgkhIp8+vTJ6DVu374djI6OGr2GDr58+RL09amGy+eDsBrElbuCUMy2iaxtjLwUxGXmjkyWrIQWpg8v9DoZKUYQJhqPJ481llsw0jt58qRR4SAZ6s2bN6NuFnNBVZyEib8pkeHXrTzbup1umWToeMCPHz8Oz507p01AGL6/fPky9R7LFpPkMRJuCUnnnJKOjPoQFYbfySUYnoJr47s8s9BliUnSGrknpEBTBjcTxzJAEJhKwLA861Ab/D98RmYJowwx1eZQG2aVVBqtjLM9TJ3XZlJMCtZIWUiVbEfCsLTdbkt9V+Y0apsweeBzs9kMer2etXXPQ2nLtuiySZmnDJk+01a3ZRJcDvHDIjHwBvHiuiVKotsyibSljSgnkeBxvMs+7yws8bh2HZZJwcHWZpFUURYSGjGvi6tCRFkPx4SQQkUxaejS3O/aAJzDrG3HvnVnWch2c/idaH4lU1iRRAKNdf/+/T2/q4uIGDJigl+U1j4uojXRFvOXqurO4pTZtcXh7eY0+UX++EjJgo0CVYso60GVIaSQQ0yGNoL6JaSsUqaIwoqFFFZzRq//qf989ImKyPOZbMR6IdVRRAyXxGS9kFqtVi1FxEDdXZi1tl5IaMSlpSUL7qQanj59Gr1MtuOEj4RJt+Q8Ux1AnV1ZQ3Mmq22n0wkuX74cJQH1HdQRdUWdXcGp9MiYxYXPAHPvK+jGUUfXZqydy7ONtTmY+2vXrnllnVAX7MtDN+5icJqzCduRU7vRaET5o2UjCm0BdYAV6na7ztbB+cz/bHrAxZEd7hknLKEOrobIMrw4QgIx4OgS8FDwcGy3UExAuGeXtlXn4dVZJExQ6PIePXpklQ+Fe8E9HTlyxCsBMbw81AbdBHapQFAYRmOUV4WocE1YHwwMcC+4J9e7sCyMH2pTNRhGY5SHAl8KAWKIyMS/h4eHtd8dO1wHjrMvQWc8eC+kOHiwKGxPHcSEAmuBn1gc5REYfDAmEogG3RT723XF+Jm2hDMonWlLB/8RWiAhEVogIRFaICERWiAhEVogIRFaICERWtAxIenXohFBEARBEARBEARBEARBEARBEARBEARBEARBEFIEQfAfYjpWQneMeUoAAAAASUVORK5CYII="}},t={};function n(o){var s=t[o];if(void 0!==s)return s.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,o,s,a){if(!o){var i=1/0;for(u=0;u<e.length;u++){o=e[u][0],s=e[u][1],a=e[u][2];for(var r=!0,l=0;l<o.length;l++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](o[l])}))?o.splice(l--,1):(r=!1,a<i&&(i=a));if(r){e.splice(u--,1);var c=s();void 0!==c&&(t=c)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[o,s,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(o,s){if(1&s&&(o=this(o)),8&s)return o;if("object"===typeof o&&o){if(4&s&&o.__esModule)return o;if(16&s&&"function"===typeof o.then)return o}var a=Object.create(null);n.r(a);var i={};e=e||[null,t({}),t([]),t(t)];for(var r=2&s&&o;"object"==typeof r&&!~e.indexOf(r);r=t(r))Object.getOwnPropertyNames(r).forEach((function(e){i[e]=function(){return o[e]}}));return i["default"]=function(){return o},n.d(a,i),a}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+(461===e?"webfontloader":e)+"."+{13:"92440306",91:"4b61d5e9",194:"ca7d36d0",223:"3b44dcd3",319:"330a8de2",321:"9a81442d",350:"48f160bf",388:"da3a2a55",396:"d6bd1139",402:"45944a9f",461:"f63c62f1",497:"de13b2d8",518:"ae032f4f",871:"ca939d03"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{13:"83e5555a",91:"6439fadf",194:"907e1c5a",223:"454b01cd",350:"4f9ab38a",402:"f2339951"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="cool_ore:";n.l=function(o,s,a,i){if(e[o])e[o].push(s);else{var r,l;if(void 0!==a)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+a){r=d;break}}r||(l=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,n.nc&&r.setAttribute("nonce",n.nc),r.setAttribute("data-webpack",t+a),r.src=o),e[o]=[s];var g=function(t,n){r.onerror=r.onload=null,clearTimeout(h);var s=e[o];if(delete e[o],r.parentNode&&r.parentNode.removeChild(r),s&&s.forEach((function(e){return e(n)})),t)return t(n)},h=setTimeout(g.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=g.bind(null,r.onerror),r.onload=g.bind(null,r.onload),l&&document.head.appendChild(r)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,o,s){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=function(n){if(a.onerror=a.onload=null,"load"===n.type)o();else{var i=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=i,l.request=r,a.parentNode.removeChild(a),s(l)}};return a.onerror=a.onload=i,a.href=t,n?n.parentNode.insertBefore(a,n.nextSibling):document.head.appendChild(a),a},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var s=n[o],a=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(a===e||a===t))return s}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){s=i[o],a=s.getAttribute("data-href");if(a===e||a===t)return s}},o=function(o){return new Promise((function(s,a){var i=n.miniCssF(o),r=n.p+i;if(t(i,r))return s();e(o,r,null,s,a)}))},s={143:0};n.f.miniCss=function(e,t){var n={13:1,91:1,194:1,223:1,350:1,402:1};s[e]?t.push(s[e]):0!==s[e]&&n[e]&&t.push(s[e]=o(e).then((function(){s[e]=0}),(function(t){throw delete s[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,o){var s=n.o(e,t)?e[t]:void 0;if(0!==s)if(s)o.push(s[2]);else{var a=new Promise((function(n,o){s=e[t]=[n,o]}));o.push(s[2]=a);var i=n.p+n.u(t),r=new Error,l=function(o){if(n.o(e,t)&&(s=e[t],0!==s&&(e[t]=void 0),s)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;r.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",r.name="ChunkLoadError",r.type=a,r.request=i,s[1](r)}};n.l(i,l,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var s,a,i=o[0],r=o[1],l=o[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(s in r)n.o(r,s)&&(n.m[s]=r[s]);if(l)var u=l(n)}for(t&&t(o);c<i.length;c++)a=i[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(u)},o=self["webpackChunkcool_ore"]=self["webpackChunkcool_ore"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(5840)}));o=n.O(o)})();
//# sourceMappingURL=app.dc3d8c67.js.map