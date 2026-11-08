import{t as e}from"./react-DlmbjZJV.js";import{t}from"./jsx-runtime-LKYXHABd.js";import{w as n}from"./assistantConfig-CMFmjgqI.js";import{C as r,D as i,E as a,S as o,T as s,x as c}from"./google-Ex7c_jsR.js";import{n as l}from"./vault-B9J6dqqq.js";var u=e(),d=(e,t)=>t===`nebula`?!!e.nebula:t===`ion`?!!e.ion:t===`friday`?!!e.friday:!e.only,f=[{id:`nebula-accueil`,label:`Sanctuaire`,icon:`M12 3a9 9 0 1 0 9 9 7 7 0 0 1-9-9z`,ready:!0,nebula:!0,only:`nebula`},{id:`nebula-discuter`,label:`Discuter`,icon:`M4 5h16v11H9l-5 4zM8 9h8M8 12h5`,ready:!0,nebula:!0,only:`nebula`},{id:`nebula-journal`,label:`Journal`,icon:`M6 3h12v18H6zM9 8h6M9 12h6M9 16h3`,ready:!0,nebula:!0,only:`nebula`},{id:`nebula-boussole`,label:`Boussole`,icon:`M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM15.500 8.500l-2 5-5 2 2-5z`,ready:!0,nebula:!0,only:`nebula`},{id:`nebula-atelier`,label:`Atelier`,icon:`M12 3l2.200 5.800L20 11l-5.800 2.200L12 19l-2.200-5.800L4 11l5.800-2.200z`,ready:!0,nebula:!0,only:`nebula`},{id:`ion-noyau`,label:`Noyau`,icon:`M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zM3 12c0-3 4-5.5 9-5.5s9 2.5 9 5.5-4 5.5-9 5.5S3 15 3 12zM12 3c3 0 5.5 4 5.5 9s-2.500 9-5.500 9-5.500-4-5.500-9S9 3 12 3z`,ready:!0,ion:!0,only:`ion`},{id:`ion-capture`,label:`Capture`,icon:`M12 3v12M7 10l5 5 5-5M4 20h16`,ready:!0,ion:!0,only:`ion`},{id:`ion-flux`,label:`Flux`,icon:`M3 7h13M3 12h18M3 17h9M16 4l3 3-3 3M16 14l3 3-3 3`,ready:!0,ion:!0,only:`ion`},{id:`ion-cerveau`,label:`Cerveau`,icon:`M9 4a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 3 3h6a3 3 0 0 0 3-3 3 3 0 0 0 2-5 3 3 0 0 0-2-5 3 3 0 0 0-3-3zM12 4v16`,ready:!0,ion:!0,only:`ion`},{id:`ion-discuter`,label:`Discuter`,icon:`M4 5h16v11H9l-5 4zM8 9h8M8 12h5`,ready:!0,ion:!0,only:`ion`},{id:`home`,label:`Accueil`,fridayLabel:`Paillasse`,icon:`M3 11l9-8 9 8v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z`,ready:!0,friday:!0},{id:`notes`,label:`Notes`,fridayLabel:`Cahier`,icon:`M6 3h9l4 4v14H6zM14 3v5h5M9 13h7M9 17h5`,ready:!0,friday:!0},{id:`thesis`,label:`Thèse`,icon:`M2 9l10-5 10 5-10 5zM6 11v5c3 2 9 2 12 0v-5M22 9v6`,ready:!0},{id:`agenda`,label:`Agenda`,icon:`M4 6h16v14H4zM4 10h16M8 3v4M16 3v4`,ready:!0},{id:`tasks`,label:`Tâches`,icon:`M5 12l4 4 10-10`,ready:!0},{id:`mail`,label:`Courrier`,icon:`M3 6h18v12H3zM3 7l9 6 9-6`,ready:!0},{id:`biblio`,label:`Bibliographie`,icon:`M5 4h11a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3zM5 17a3 3 0 0 1 3-3h11M9 8h6`,ready:!0,friday:!0},{id:`frise`,label:`Frise`,icon:`M3 12h18M6 12V7M12 12v5M18 12V6M6 7h0M12 17h0M18 6h0`,ready:!0,friday:!0},{id:`chapitres`,label:`Chapitres`,icon:`M4 5h7v6H4zM13 5h7v6h-7zM4 13h7v6H4zM13 13h7v6h-7z`,ready:!0,friday:!0,only:`friday`},{id:`drive`,label:`Drive`,icon:`M8 4h8l5 9-4 7H7l-4-7zM8 4l5 9M16 4l-5 9M3 13h18`,ready:!0,friday:!0,ion:!0},{id:`atlas`,label:`Atlas`,icon:`M12 3a2.2 2.2 0 1 0 0 4.4A2.2 2.2 0 0 0 12 3zM5 14a2.2 2.2 0 1 0 0 4.4A2.2 2.2 0 0 0 5 14zM19 14a2.2 2.2 0 1 0 0 4.4A2.2 2.2 0 0 0 19 14zM12 7.4l-6 6.8M12 7.4l6 6.8`,ready:!0,friday:!0,only:`friday`},{id:`redaction`,label:`Rédaction`,icon:`M4 20h4L19 9l-4-4L4 16zM13 7l4 4`,ready:!0,friday:!0,only:`friday`},{id:`trace`,label:`TRACE`,icon:`M3 20V4M3 20h18M6 15c3-9 5 3 8-4s4-2 6-5`,ready:!0,friday:!0,only:`friday`},{id:`backups`,label:`Sauvegardes`,icon:`M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6zM9 12l2 2 4-4`,ready:!0},{id:`discuter`,label:`Discuter`,icon:`M4 5h16v11H9l-5 4zM8 9h8M8 12h5`,ready:!0,friday:!0,only:`friday`},{id:`reflexions`,label:`Réflexions`,icon:`M12 3a6 6 0 0 0-3 11v3h6v-3a6 6 0 0 0-3-11zM10 21h4`,ready:!0,friday:!0,only:`friday`},{id:`projects`,label:`Projets`,icon:`M3 7h7l2 2h9v10H3z`,ready:!1},{id:`tools`,label:`Outils`,icon:`M14 7l3-3 3 3-3 3M4 20l9-9 3 3-9 9H4z`,ready:!0},{id:`settings`,label:`Réglages`,icon:`M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM19 12h2M3 12h2M12 3v2M12 19v2M17 7l1.4-1.4M5.6 18.4L7 17M17 17l1.4 1.4M5.6 5.6L7 7`,ready:!0,friday:!0,ion:!0,nebula:!0}],p=[{id:1,day:0,start:`09:30`,end:`10:30`,title:`Point avec la direction de thèse`,place:`Laboratoire`},{id:2,day:0,start:`14:00`,end:`15:30`,title:`Manip DSC — formulation F3`,place:`Salle 204`},{id:3,day:1,start:`11:00`,end:`12:00`,title:`Séminaire du département`,place:`Amphi B`},{id:4,day:2,start:`16:00`,end:`17:00`,title:`Rédaction chapitre 2`,place:`Bureau`},{id:5,day:4,start:`10:00`,end:`11:00`,title:`Revue bibliographique`,place:`Bureau`}],m=[{id:`n1`,title:`Cahier de laboratoire — 28 octobre`,folder:`Notes/Laboratoire`,updated:`Aujourd’hui`,body:`# Cahier de laboratoire — 28 octobre

## Objectif
Mesurer la transition vitreuse de la formulation **F3** par DSC.

## Protocole
- Masse échantillon : 8,4 mg
- Rampe : 10 °C/min, de −20 °C à 180 °C
- Deux cycles de chauffe

## Observations
La Tg du second cycle est plus nette. À répéter sur trois essais pour rapporter la dispersion.

- [x] Préparer les capsules
- [ ] Exporter les résultats vers [[PlotLab]]
- [ ] Comparer avec [[Formulation F2]]`},{id:`n2`,title:`Formulation F2`,folder:`Projects/Thèse`,updated:`Hier`,body:`# Formulation F2

Référence interne pour la comparaison des Tg.

## Composition
| Composant | Fraction |
|---|---|
| Matrice | 70 % |
| Additif A | 20 % |
| Additif B | 10 % |

> Voir aussi [[Cahier de laboratoire — 28 octobre]].`},{id:`n3`,title:`Idées en vrac`,folder:`Notes/Idées`,updated:`Lundi`,body:`# Idées en vrac

- Relier automatiquement les rendus PlotLab à l'expérience correspondante
- Vue frise pour les échéances de thèse
- Capture vocale depuis l'iPhone`}],h=e=>String(e).padStart(2,`0`),g=(e,t)=>{let n=new Date(e);return n.setDate(n.getDate()+t),`${n.getFullYear()}-${h(n.getMonth()+1)}-${h(n.getDate())}`};function _(e=new Date){let t=e.getFullYear(),r=new Date(e);r.setDate(e.getDate()+3-(e.getDay()+6)%7);let i=n(e),a=Math.floor(e.getMonth()/3)+1,o=`40 - Calendar`;return[...m.map(e=>({path:`${e.folder}/${e.title}.md`,content:e.body})),{path:`${o}/5_Quotidien/${g(e,0)}.md`,content:`# ${g(e,0)}

## 🎯 Objectifs du jour
- [ ] Relire le protocole de synthèse P-12
- [x] Préparer les capsules DSC ✅ ${g(e,0)}
- [ ] Point avec la direction de thèse à 14h
- [ ] Manip DSC 9h30, comparer avec [[Formulation F2]]
- [ ] Exporter les courbes vers PlotLab
- [ ] 

## 📅 Agenda
- 9h30 Manip DSC, salle 204
- 14h00 Point avec la direction de thèse
- Déjeuner avec l’équipe

## Travail de recherche
Voir [[Cahier de laboratoire — 28 octobre]].

## À faire demain
- [ ] Rédiger la section 2.3
- [ ] Commander de l’azote liquide
`},{path:`${o}/5_Quotidien/${g(e,-1)}.md`,content:`# ${g(e,-1)}

## 🎯 Objectifs du jour
- [x] Commander les réactifs ✅ ${g(e,-1)}
- [ ] Répondre au comité de suivi
- [x] Lire l’article de Martin et al.

## À faire demain
- [ ] Relire le protocole de synthèse P-12
`},{path:`20 - Domaines/Pilotage these/Objectifs-Court-Terme.md`,content:`---
horizon: court terme
---
# Objectifs court terme

## Deadlines fixes

| Date | Livrable | Statut |
|------|----------|--------|
| ${g(e,-10)} | Rapport comité de suivi | ✅ |
| ${g(e,-2)} | Abstract congrès | En cours |
| ${g(e,2)} | Figures du chapitre 2 | |
| ${g(e,5)} | Réunion projet ANR | À faire |
| ${g(e,30)} | Brouillon de l’article 1 | |
`},{path:`${o}/4_Hebdo/${r.getFullYear()}-W${h(i)}.md`,content:`# Semaine ${i}

## 🎯 Objectifs de la Semaine
- [ ] Finir les figures DSC
- [x] Lire 3 articles
- [ ] Préparer le point avec la direction
`},{path:`${o}/3_Mensuel/${t}-${h(e.getMonth()+1)}.md`,content:`# Objectifs du mois

## Objectifs du Mois
### Prioritaires
- [ ] Chapitre 2 : premier jet complet
- [ ] Série DSC sur les formulations F1 à F4
### Secondaires
- [ ] Ranger le stock du labo
`},{path:`${o}/2_Trimestriel/${t}-Q${a}.md`,content:`# T${a} ${t}

## Objectifs du Trimestre
### 🔬 Recherche
- [ ] Campagne DSC et rhéologie
### ✍️ Rédaction
- [ ] Chapitre 2
### 📄 Publications
- [ ] Soumettre l’article 1
`},{path:`${o}/1_Annuel/${t}.md`,content:`# ${t}

## Objectifs
### Réussir l’évaluation de mi-thèse
### Publier un premier article
### Rédiger trois chapitres
`}]}var v=e=>{let t=new TextEncoder().encode(e),n=``;for(let e=0;e<t.length;e+=32768)n+=String.fromCharCode(...t.subarray(e,e+32768));return btoa(n)},y=e=>new TextDecoder().decode(Uint8Array.from(atob(e.replace(/\s/g,``)),e=>e.charCodeAt(0))),b=e=>s(e).split(`/`).map(encodeURIComponent).join(`/`),x=/^[0-9a-f]{40}$/,S=class extends Error{constructor(){super(`Hors ligne : non enregistré. Votre modification reste en brouillon sur cet appareil.`),this.name=`OfflineError`}},C=class extends Error{status;constructor(e,t){super(t),this.name=`GithubError`,this.status=e}},w=class{kind=`github`;pollMs=1e4;cfg;constructor(e){this.cfg=e}get name(){return`${this.cfg.owner}/${this.cfg.repo}`}async api(e,t={}){let{owner:n,repo:r,token:i}=this.cfg,a;try{a=await fetch(`https://api.github.com/repos/${n}/${r}${e}`,{...t,cache:`no-cache`,headers:{Accept:`application/vnd.github+json`,"X-GitHub-Api-Version":`2022-11-28`,Authorization:`Bearer ${i}`,...t.body?{"Content-Type":`application/json`}:{}}})}catch{throw new S}if(a.status===429||a.status===403&&a.headers.get(`x-ratelimit-remaining`)===`0`)throw new C(a.status,`Quota de requêtes GitHub atteint : réessayez dans quelques minutes.`);if(a.status===401||a.status===403)throw new C(a.status,`GitHub a refusé le jeton (expiré, ou permission « Contents » manquante).`);return a}cacheKey(e){return`ghcache:${this.cfg.owner}/${this.cfg.repo}@${this.cfg.branch}:${e}`}async cached(e,t){try{let n=await t();return i.set(this.cacheKey(e),n).catch(()=>{}),n}catch(t){if(!(t instanceof S))throw t;let n=await i.get(this.cacheKey(e)).catch(()=>void 0);if(n===void 0)throw t;return n}}fetchFile(e){return this.cached(`file:${e}`,()=>this.fetchRemote(e))}async fetchRemote(e){let t=await this.api(`/contents/${b(e)}?ref=${encodeURIComponent(this.cfg.branch)}`);if(t.status===404)return null;if(!t.ok)throw new C(t.status,`GitHub : erreur ${t.status}`);let n=await t.json();if(Array.isArray(n))return null;if(n.encoding===`base64`&&(n.content||n.size===0))return{sha:n.sha,content:y(n.content)};if(!x.test(n.sha))throw new C(502,`Réponse GitHub inattendue`);let r=await(await this.api(`/git/blobs/${n.sha}`)).json();return{sha:n.sha,content:y(r.content)}}async fetchTree(){let e=await this.api(`/git/trees/${encodeURIComponent(this.cfg.branch)}?recursive=1`);if(e.status===404||e.status===409)return[];if(!e.ok)throw new C(e.status,`GitHub : erreur ${e.status}`);return(await e.json()).tree}async list(e,t=!1){let n=e?s(e)+`/`:``;return(await this.cached(`tree`,()=>this.fetchTree())).filter(e=>e.type===`blob`&&e.path.startsWith(n)).filter(e=>t||!e.path.slice(n.length).split(`/`).some(e=>e.startsWith(`.`))).map(e=>({path:e.path,version:e.sha}))}async stat(e){return(await this.fetchFile(e))?.sha??null}async read(e){let t=await this.fetchFile(e);if(!t)throw Error(`Fichier introuvable : ${e}`);return{content:t.content,version:t.sha}}async write(e,t,n=null){let r=await this.api(`/contents/${b(e)}`,{method:`PUT`,body:JSON.stringify({message:`Jarvis : ${e}`,content:v(t),branch:this.cfg.branch,...n?{sha:n}:{}})});if(r.status===409||r.status===422)throw new c;if(!r.ok)throw new C(r.status,`GitHub : écriture refusée (${r.status})`);let a=(await r.json()).content.sha;return i.set(this.cacheKey(`file:${e}`),{sha:a,content:t}).catch(()=>{}),a}async remove(e,t=null){let n=t??await this.stat(e);if(!n)return;let r=await this.api(`/contents/${b(e)}`,{method:`DELETE`,body:JSON.stringify({message:`Jarvis : suppression de ${e}`,sha:n,branch:this.cfg.branch})});if(r.status===409||r.status===422)throw new c;if(!r.ok&&r.status!==404)throw new C(r.status,`GitHub : suppression refusée (${r.status})`);i.del(this.cacheKey(`file:${e}`)).catch(()=>{})}async history(e){let t=await this.api(`/commits?sha=${encodeURIComponent(this.cfg.branch)}&path=${encodeURIComponent(s(e))}&per_page=30`).catch(()=>null);return t?.ok?(await t.json()).map(e=>({id:Date.parse(e.commit.author.date),ref:e.sha,label:e.commit.message})):[]}async recentChanges(e){let t=await this.api(`/commits?sha=${encodeURIComponent(this.cfg.branch)}&per_page=${Math.min(e,30)}`).catch(()=>null);return t?.ok?(await t.json()).map(e=>{let t=e.commit.message.split(`
`)[0],n=/^Jarvis : (.+)$/.exec(t);return{date:Date.parse(e.commit.author.date),path:n?n[1]:null,message:t}}):[]}async readVersion(e,t){if(!x.test(t))throw new C(400,`Version invalide`);let n=await this.api(`/contents/${b(e)}?ref=${t}`);if(!n.ok)throw new C(n.status,`GitHub : version introuvable (${n.status})`);return y((await n.json()).content)}};async function T(e){if(!/^[A-Za-z0-9-]{1,39}$/.test(e.owner)||!/^[A-Za-z0-9._-]{1,100}$/.test(e.repo)||/^\.\.?$/.test(e.repo))throw Error(`Nom de dépôt invalide : attendu propriétaire/nom.`);let t=await fetch(`https://api.github.com/repos/${e.owner}/${e.repo}`,{cache:`no-cache`,headers:{Accept:`application/vnd.github+json`,Authorization:`Bearer ${e.token}`}});if(t.status===404)throw Error(`Dépôt introuvable : vérifiez son nom, et que le jeton y a accès.`);if(t.status===401)throw Error(`Jeton refusé par GitHub.`);if(!t.ok)throw Error(`GitHub : erreur ${t.status}`);let n=await t.json();if(n.permissions&&!n.permissions.push)throw Error(`Le jeton n’a pas le droit d’écrire (permission « Contents : Read and write »).`);return{...e,branch:e.branch||n.default_branch||`main`}}var E=t(),D=(0,u.createContext)(null),O={mode:`readwrite`},k=2;async function A(e){if(!((await i.get(`demoSeed`)??0)>=k)){for(let t of _())await e.stat(t.path)===null&&await e.write(t.path,t.content);await i.set(`demoSeed`,k)}}function j({children:e}){let[t,n]=(0,u.useState)(`loading`),[s,c]=(0,u.useState)(null),[d,f]=(0,u.useState)(null),p=(0,u.useCallback)(e=>{f(e),c(new l(new o(e))),n(`ready`)},[]),m=(0,u.useCallback)(async()=>{let e=new r;await A(e),c(new l(e)),n(`ready`)},[]),h=(0,u.useCallback)(e=>{c(new l(new w(e))),n(`ready`)},[]);(0,u.useEffect)(()=>{(async()=>{try{let e=await i.get(`mode`);if(e===`local`)return await m();if(e===`github`){let e=await i.get(`github`);if(e)return h(e)}let t=await i.get(`dirHandle`);if(e===`fs`&&t)return await t.queryPermission(O)===`granted`?p(t):(f(t),n(`needs-permission`))}catch{}n(`none`)})()},[p,m,h]);let g=(0,u.useMemo)(()=>({status:t,vault:s,folderName:d?.name??null,canPickFolder:a(),pickFolder:async()=>{try{let e=await window.showDirectoryPicker(O);await i.set(`dirHandle`,e),await i.set(`mode`,`fs`),p(e)}catch(e){if(e.name!==`AbortError`)throw e}},reconnect:async()=>{await d.requestPermission(O)===`granted`&&p(d)},useLocal:async()=>{await i.set(`mode`,`local`),await m()},connectGithub:async e=>{let t=await T(e);await i.set(`github`,t),await i.set(`mode`,`github`),h(t)},disconnect:async()=>{await i.del(`mode`),await i.del(`dirHandle`),await i.del(`github`),await i.delPrefix(`ghcache:`);try{for(let e of Object.keys(localStorage))e.startsWith(`jarvis.draft:`)&&localStorage.removeItem(e)}catch{}c(null),f(null),n(`none`)}}),[t,s,d,p,m,h]);return(0,E.jsx)(D.Provider,{value:g,children:e})}function M({vault:e,children:t}){let n=N(),r=(0,u.useMemo)(()=>({...n,status:`ready`,vault:e,folderName:null,canPickFolder:!1,disconnect:async()=>{}}),[n,e]);return(0,E.jsx)(D.Provider,{value:r,children:t})}function N(){let e=(0,u.useContext)(D);if(!e)throw Error(`useVault doit être utilisé dans <VaultProvider>`);return e}export{v as a,d as c,y as i,j as n,p as o,N as r,f as s,M as t};