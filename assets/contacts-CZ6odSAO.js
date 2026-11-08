var e=`30 - Ressources/Friday`,t=`${e}/Recus`,n=`${e}/Quarantaine.md`,r=`30 - Ressources/Bibliographie/Articles`,i=`.jarvis/bibliothecaire.json`,a=150,o=3e5,s=e=>String(e??``).replace(/\r\n?/g,`
`),c=e=>String(e).normalize(`NFD`).replace(/[̀-ͯ]/g,``).toLowerCase().replace(/\s+/g,` `).trim(),l=e=>/^\s*(?:(?:re|fwd?|tr)\s*:\s*)*\[?friday\]?(?:[\s:·–—-]|$)/i.test(e??``),u=e=>(e??``).replace(/^\s*(?:(?:re|fwd?|tr)\s*:\s*)*\[?friday\]?[\s:·–—-]*/i,``).trim()||`Document`,d=(e,t)=>!!e&&t.map(e=>e.toLowerCase()).includes(e.toLowerCase()),f=e=>(e.match(/\(/g)??[]).length>=(e.match(/\)/g)??[]).length;function p(e){let t=e.replace(/[\u0000-\u001f\u007f-\u009f\u00ad\u200b-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,``);try{t=decodeURIComponent(t.replace(/%(?![0-9a-f]{2})/gi,`%25`))}catch{}for(;;){let e=t.replace(/[.,;:*_>\]}'"`]+$/,``);if(e.endsWith(`)`)&&!f(e))t=e.slice(0,-1);else{if(e===t)break;t=e}}return t.toLowerCase()}function m(e){let t=new Map;return e.replace(/\r/g,``).split(`
`).forEach((e,n)=>{for(let r of e.matchAll(/10\.\d{4,9}\/[^\s"<>]+/gi)){let i=p(r[0]);/^10\.\d{4,9}\/\S+$/.test(i)&&!t.has(i)&&t.set(i,{doi:i,line:e,lineNo:n+1})}}),[...t.values()]}function h(e,t){let n=e.replace(/\[([^\]]*)\]\([^)]*\)/g,`$1`).replace(/https?:\/\/\S+/gi,` `).replace(new RegExp(t.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`),`gi`),` `).replace(/\bdoi\s*:?/gi,` `),r=[...n.matchAll(/\*([^*\n]{12,})\*|(?:^|[^\w])_([^_\n]{12,})_(?![\w])|"([^"\n]{12,})"|«\s*([^»\n]{12,}?)\s*»|“([^”\n]{12,})”/g)].map(e=>(e[1]??e[2]??e[3]??e[4]??e[5]).trim());if(r.length)return r.sort((e,t)=>t.length-e.length)[0].slice(0,300);if(n.includes(`|`)){let e=n.split(`|`).map(e=>e.replace(/[*_`]/g,``).trim()).filter(e=>e.length>=12&&!/^[\d\s.,()-]+$/.test(e));if(e.length)return e.sort((e,t)=>t.length-e.length)[0].slice(0,300)}return``}var g=new Set(`the.and.for.with.from.des.les.pour.dans.une.que.sur.par.and.of.in.on.to.a.an.un.le.la.de.du.et`.split(`.`)),_=e=>new Set(c(e).replace(/[^a-z0-9 ]/g,` `).split(` `).filter(e=>e.length>=3&&!g.has(e)));function v(e,t){let n=_(e),r=_(t);if(!n.size||!r.size)return 0;let i=0;for(let e of n)r.has(e)&&i++;return Math.max(i/(n.size+r.size-i),i/Math.min(n.size,r.size)*.85)}var y=e=>e.replace(/<\/?(?:jats:)?(?:p|title|sec|br)\b[^>]*>/gi,` `).replace(/<[^>]+>/g,``).replace(/&amp;/g,`&`).replace(/&lt;/g,`<`).replace(/&gt;/g,`>`).replace(/\s+/g,` `).trim();function b(e,t){let n=((e[0]??``).trim().split(/\s+/).pop()??``).normalize(`NFD`).replace(/[̀-ͯ]/g,``).replace(/[^A-Za-z]/g,``);return(n?n[0].toUpperCase()+n.slice(1):`Anonyme`)+(t??``)}var x=e=>e.name?`{${e.name}}`:e.family?[e.family,e.given].filter(Boolean).join(`, `):``;function S(e){let t=(e.author??[]).map(e=>e.name??[e.given,e.family].filter(Boolean).join(` `)).filter(Boolean),n=e.issued?.[`date-parts`]?.[0]?.[0]??null;return{doi:e.DOI.toLowerCase(),title:y(e.title?.[0]??`(sans titre)`),titleRaw:e.title?.[0]??``,bibAuthors:(e.author??[]).map(x).filter(Boolean),volume:e.volume?String(e.volume):``,issue:e.issue?String(e.issue):``,pages:e.page?String(e.page):e[`article-number`]?String(e[`article-number`]):``,publisher:e.publisher?y(e.publisher):``,kind:e.type??``,authors:t,year:n,journal:y(e[`container-title`]?.[0]??``),abstract:e.abstract?y(e.abstract).replace(/^abstract\s*/i,``):void 0,url:`https://doi.org/${e.DOI}`,key:b(t,n)}}function C(e,t){let n=(e.authorships??[]).map(e=>e.author?.display_name).filter(Boolean),r=e.publication_year??null,i=e.biblio??{},a=i.first_page?i.last_page&&i.last_page!==i.first_page?`${i.first_page}-${i.last_page}`:String(i.first_page):``;return{doi:t,title:y(e.title??`(sans titre)`),titleRaw:e.title??``,bibAuthors:[],volume:i.volume?String(i.volume):``,issue:i.issue?String(i.issue):``,pages:a,publisher:``,kind:e.type===`article`?`journal-article`:e.type??``,authors:n,year:r,journal:y(e.primary_location?.source?.display_name??``),abstract:w(e.abstract_inverted_index),url:`https://doi.org/${t}`,key:b(n,r)}}function w(e){if(!e)return;let t=[];for(let[n,r]of Object.entries(e))for(let e of r)t[e]=n;return t.filter(e=>e!==void 0).join(` `).trim()||void 0}async function T(e,t){let n;try{n=await t(e,{headers:{Accept:`application/json`}})}catch{return{error:`service injoignable`}}if(n.status===404)return{notFound:!0};if(!n.ok)return{error:`erreur ${n.status}`};try{return{data:await n.json()}}catch{return{error:`réponse illisible`}}}async function E(e,t=``,n=fetch){let[r,i]=await Promise.all([T(`https://api.crossref.org/works/${encodeURIComponent(e)}`,n),T(`https://api.openalex.org/works/doi:${encodeURIComponent(e)}?select=doi,title,publication_year,authorships,primary_location,is_retracted,abstract_inverted_index,biblio,type`,n)]);if(r.error&&i.error)return{doi:e,status:`erreur`,reason:`Services de références injoignables (${r.error}).`};let a=r.data?.message?S(r.data.message):i.data?C(i.data,e):null;if(!a)return r.error||i.error?{doi:e,status:`erreur`,reason:`Un service de références a répondu « ${r.error??i.error} » : à revérifier.`}:{doi:e,status:`introuvable`,reason:`Ce DOI n’existe ni chez Crossref ni chez OpenAlex.`};if(a.abstract===void 0&&i.data?.abstract_inverted_index&&(a.abstract=w(i.data.abstract_inverted_index)),i.data?.is_retracted===!0||(r.data?.message?.[`updated-by`]??[]).some(e=>/retraction/i.test(e.type??``)))return{doi:e,status:`retracte`,article:a,reason:`Article RÉTRACTÉ.`};if(t&&_(t).size>=3){let n=v(t,a.title);return n<.5?{doi:e,status:`titre_different`,article:a,similarity:n,reason:`Le DOI existe mais correspond à un autre article : « ${a.title} ».`}:{doi:e,status:`verifie`,article:a,similarity:n,reason:`Existe, titre concordant.`}}return{doi:e,status:`verifie`,article:a,reason:`Existe (aucun titre annoncé à comparer).`}}var D=e=>JSON.stringify(String(e??``).replace(/\s+/g,` `).trim()),O=(e,t=60)=>e.replace(/[\\/:*?"<>|#^[\]]/g,` `).replace(/\s+/g,` `).trim().slice(0,t).trim();function k(e,t){let n=O(e.title.split(/\s+/).slice(0,7).join(` `),50)||`Sans titre`,i=`${r}/${e.key} - ${n}.md`;for(let a=2;t(i);a++)i=`${r}/${e.key}${String.fromCharCode(96+a)} - ${n}.md`;return i}function A(e,{today:t,source:n,verif:r=`doi-verifie`,claimed:i=``,themes:a=[],apport:o=``}){let s=e.authors.length?e.authors.length>2?`${e.authors[0]} et al.`:e.authors.join(` et `):`Auteurs inconnus`,c=e.abstract?`${e.abstract}\n\n*(Résumé de l'éditeur, tel que reçu : à reformuler en français.)*`:`À compléter`;return`---
type: article
cle: ${e.key}
titre: ${D(e.title)}
auteur: ${D(e.authors[0]??``)}
auteurs: ${D((e.bibAuthors??[]).join(` ; `))}
annee: ${e.year??``}
revue: ${D(e.journal)}
volume: ${D(e.volume??``)}
numero: ${D(e.issue??``)}
pages: ${D(e.pages??``)}
editant: ${D(e.publisher??``)}
type_ref: ${D(e.kind??``)}
titre_brut: ${D(e.titleRaw??``)}
doi: ${e.doi}
pdf:
zotero:
statut: a-lire
themes: [${a.join(`, `)}]
ajoute: ${t}
verif: ${r}
source: ${D(n)}
---

# ${e.key} - ${e.title}

**Référence :** ${s}${e.journal?`, *${e.journal}*`:``}${e.year?`, ${e.year}`:``}. DOI : ${e.url}
${r===`accepte-manuellement`&&i?`\n> Référence acceptée manuellement. Titre annoncé dans le document reçu : « ${i} ».\n`:``}
**PDF :** À fournir (si l'accès est payant, voir la liste « à récupérer »)

---

## RÉSUMÉ

${c}

---

## CE QUE J'EN RETIENS

- Résultats clés (avec les chiffres) :
- Méthode :

---

## LIMITES / POINTS CRITIQUES

À compléter

---

## LIEN AVEC MES TRAVAUX

- Manips concernées :

---

## IDÉES RELIÉES

-

---

## CITATIONS UTILES

À compléter
${o?`\n---\n\n## NOTES REÇUES (${n})\n\n${o}\n`:``}`}function j({doi:e,claimed:t,today:n,source:r}){let i=t||`Référence ${e}`;return`---
type: article
cle: Reference
titre: ${D(i)}
doi: ${e}
statut: a-lire
themes: []
ajoute: ${n}
verif: non-verifie-accepte
source: ${D(r)}
---

# ${i}

> **Référence NON vérifiée**, acceptée manuellement le ${n}. DOI annoncé : ${e}. Titre annoncé : ${t?`« ${t} »`:`inconnu`}. À contrôler avant toute citation.

À compléter
`}var M=e=>new Intl.DateTimeFormat(`fr-CA`,{timeZone:`Europe/Paris`,year:`numeric`,month:`2-digit`,day:`2-digit`}).format(e);function N(e,t,n){let r=t.map(e=>`| \`${e.doi}\` | ${P[e.status]??e.status} | ${(e.article?.title??``).replace(/\|/g,`/`)} |`).join(`
`),i=e=>t.filter(t=>t.status===e).length,a=e.texts.map((e,t)=>t===0?e.text:`\n\n## Pièce jointe : ${e.name}\n\n${e.text}`).join(``).slice(0,o);return`---
type: recu-friday
objet: ${D(e.subject)}
recu: ${M(new Date(e.at))}
importe: ${n}
expediteur: ${D(e.address)}
references: ${t.length}
verifiees: ${i(`verifie`)+i(`deja`)}
quarantaine: ${t.length-i(`verifie`)-i(`deja`)}
---

# ${u(e.subject)}

## Vérification des références

${t.length?`| DOI | Statut | Titre réel |\n|---|---|---|\n${r}`:`Aucun DOI trouvé dans ce document : rien à vérifier, rien n'est entré dans la bibliothèque.`}
${e.pdfs?.length?`\nPièces jointes non lues (PDF) : ${e.pdfs.join(`, `)}.\n`:``}
---

${a}
`}var P={verifie:`✓ vérifié`,deja:`✓ déjà en bibliothèque`,titre_different:`✗ autre article`,retracte:`✗ RÉTRACTÉ`,introuvable:`✗ introuvable`,erreur:`… à revérifier`};function F(e){if(e.length>1&&e.startsWith(`"`)&&e.endsWith(`"`))try{return JSON.parse(e)}catch{}return e.replace(/^["']|["']$/g,``)}function I(e){e=s(e);let t=/^\s*---\n([\s\S]*?)\n---[ \t]*(?:\n|$)/.exec(e),n={};if(!t)return{meta:n,body:e};for(let e of t[1].split(/\r?\n/)){let t=/^([A-Za-z_][\w-]*):\s*(.*)$/.exec(e);t&&(n[t[1].toLowerCase()]=F(t[2].trim()))}return{meta:n,body:e.slice(t[0].length)}}var L=e=>e.replace(/^#+\s*/,``).replace(/[*_`]/g,``).replace(/^(?:branche|axe|sous-domaine)\s*[\w.]*\s*[:\-–—.)]?\s*/i,``).replace(/[,[\]]/g,` `).replace(/\s+/g,` `).trim().slice(0,80);function R(e){let t=[],n=null;for(let r of s(e).split(`
`)){let e=/^#{2,4}\s+(.+)$/.exec(r);if(e)n=/^(?:branche|axe|sous-domaine)\b/i.test(e[1].replace(/[*_`]/g,``).trim())?{name:L(r),dois:[]}:null,n&&n.name?t.push(n):n=null;else if(n)for(let e of m(r))n.dois.includes(e.doi)||n.dois.push(e.doi)}return t}function z(e){let t=[],n=0;for(let r of s(e).split(`
`)){let e=/^(#{1,6})\s+(.*)$/.exec(r);e&&(n&&e[1].length<=n&&(n=0),!n&&/^[*_`\s]*(?:articles?\s+)?[ée]cart[ée]s?\b/i.test(e[2])&&(n=e[1].length)),n||t.push(r)}return t.join(`
`)}function B(e,t){let n=e.includes(`\r
`);e=s(e);let r=/^themes:[ \t]*\[?([^\]\n]*)\]?[ \t]*$/m.exec(e);if(!r)return e;let i=r[1].split(`,`).map(e=>e.trim()).filter(Boolean),a=t.filter(e=>!i.some(t=>c(t)===c(e))),o=a.length?e.replace(r[0],`themes: [${[...i,...a].join(`, `)}]`):e;return n?o.replace(/\n/g,`\r
`):o}var V=`# Quarantaine des références

Références reçues dans des documents Friday dont la source n'a **pas pu être vérifiée**. Rien de ce qui est ici n'est dans la bibliothèque.
**Cochez [x]** une ligne pour accepter la référence (une fiche sera créée au prochain import, marquée comme acceptée à la main), ou supprimez la ligne pour l'écarter.

## À valider
`,H=`
## Acceptées
`;function U(e){let t=s(e).split(`## Acceptées`)[0],n=[];for(let e of t.split(`
`)){let t=/^- \[([ xX])\]\s+`([^`]+)`(.*)$/.exec(e.trim());if(!t)continue;let r=/annoncé\s*:\s*«\s*([^»]*?)\s*»/.exec(t[3])?.[1]??``,i=/document\s*:\s*\[\[([^\]]+)\]\]/.exec(t[3])?.[1]??``;n.push({checked:t[1]!==` `,doi:t[2].toLowerCase(),claimed:r,doc:i})}return n}var W=e=>`- [ ] \`${e.doi}\` — ${e.reason}${e.claimed?` — annoncé : « ${e.claimed.replace(/[»«\n]/g,` `)} »`:``} — document : [[${e.doc}]]`;function G(e,t,n,r){let i=s(e),a=i?i.split(`## Acceptées`)[0].split(`
`).filter(e=>/^- \[[ xX]\]\s+`/.test(e.trim())):[],o=a.filter(e=>!/^- \[[xX]\]/.test(e.trim())),c=new Set(a.map(e=>/`([^`]+)`/.exec(e)?.[1]?.toLowerCase())),l=t.filter(e=>!c.has(e.doi)).map(W),u=i.includes(`## Acceptées`)?i.split(`## Acceptées`)[1].split(`
`).filter(e=>e.trim().startsWith(`- `)):[],d=n.map(e=>`- [x] \`${e.doi}\` — acceptée le ${r}${e.link?` — fiche : [[${e.link}]]`:``}`);return`${V}${[...o,...l].join(`
`)}${o.length+l.length?`
`:``}${H}${[...u,...d].join(`
`)}${u.length+d.length?`
`:``}`}function K(e,t){let n=[];if(n.push(`Monsieur,`,``),e.imported.length){let t=e.imported.map(e=>`« ${e.title} » (${e.verified} réf. vérifiée(s)${e.quarantined?`, ${e.quarantined} en quarantaine`:``})`);n.push(`${e.imported.length} document(s) Friday importé(s) : ${t.join(` ; `)}.`)}for(let t of e.projects??[])n.push(`Projet « ${t.title} » : ${t.branches} branche(s), ${t.refs} référence(s) suivie(s) dans Friday/Projets/.`);if(e.fiches.length&&n.push(``,`Nouvelles fiches dans la bibliothèque (${e.fiches.length}) :`,...e.fiches.map(e=>`  • ${e}`)),e.accepted.length&&n.push(``,`Références acceptées à la main et ajoutées (${e.accepted.length}) : ${e.accepted.join(`, `)}.`),e.quarantined.length){n.push(``,`⚠ ${e.quarantined.length} référence(s) À VALIDER (source non vérifiée, non ajoutées à la bibliothèque) :`);for(let t of e.quarantined)n.push(`  • ${t.doi} — ${t.reason}${t.claimed?` (annoncé : « ${t.claimed} »)`:``} — document : ${t.doc}`);n.push(``,`Pour en accepter une : Friday → Cahier → Friday/Quarantaine.md, cochez la case [x] ; elle sera ajoutée à l'import suivant.`)}return e.warnings?.length&&n.push(``,`⚠ ${e.warnings.length} point(s) à corriger dans vos documents :`,...e.warnings.map(e=>`  • ${e}`)),e.ignored.length&&n.push(``,`${e.ignored.length} message(s) « FRIDAY » ignoré(s) car l'expéditeur n'est pas autorisé : ${e.ignored.join(`, `)}. Pour les accepter, ajoutez l'adresse dans .jarvis/automatisations.json (bibliotheque → expediteurs), puis renvoyez le message.`),e.retry&&n.push(``,`${e.retry} document(s) n'ont pas pu être vérifiés (service de références indisponible) : ils seront retentés au prochain passage.`),n.push(``,`— Jarvis, bibliothèque du ${t}.`),{subject:`Jarvis · Bibliothèque : ${e.imported.length} document(s)${e.quarantined.length?`, ${e.quarantined.length} référence(s) à valider`:``}`,body:n.join(`
`)}}async function q(e,t,n){let r=[];for(let i=0;i<e.length;i+=t)r.push(...await Promise.all(e.slice(i,i+t).map(n)));return r}async function J({messages:r,existing:i,state:l={},now:f=new Date,fetchImpl:g=fetch,allowedSenders:_=[],concurrency:v=4}){let y=M(f),b={...l.processed??{}},x=[],S=new Set,C=e=>i.has(e)||S.has(e),w=new Map(i.doiToPath),T={imported:[],fiches:[],accepted:[],quarantined:[],ignored:[],retry:0,projects:[],warnings:[]},D=new Map,P=new Map,F=new Set([...w.values()].map(e=>e.replace(/^.*\//,``).split(` - `)[0])),V=e=>{let t=e;for(let n=0;F.has(t);n++)t=e+String.fromCharCode(97+n);return F.add(t),t},H=(e,t,n,r,i={})=>{e={...e,key:V(e.key)};let a=k(e,C);return S.add(a),w.set(e.doi,a),x.push({path:a,content:A(e,{today:y,source:t,verif:n,claimed:r,...i}),create:!0}),T.fiches.push(`${e.key} — ${e.title}`),a.replace(/^.*\//,``).replace(/\.md$/,``)},W=[];for(let e of U(i.quarantineMd??``).filter(e=>e.checked&&!w.has(e.doi))){let t=await E(e.doi,``,g);if(t.status===`erreur`)continue;let n=t.article?H(t.article,e.doc||`quarantaine`,`accepte-manuellement`,t.status===`retracte`?`ARTICLE RÉTRACTÉ. ${e.claimed}`:e.claimed):(()=>{let t=k({key:`Reference`,title:e.claimed||e.doi},C);return S.add(t),w.set(e.doi,t),x.push({path:t,content:j({doi:e.doi,claimed:e.claimed,today:y,source:e.doc||`quarantaine`}),create:!0}),T.fiches.push(`${e.doi} (non vérifiée, acceptée à la main)`),t.replace(/^.*\//,``).replace(/\.md$/,``)})();W.push({doi:e.doi,link:n}),T.accepted.push(e.doi)}let J=[];for(let n of r){let r={...n,texts:n.texts.map(e=>({...e,text:s(e.text)}))};if(b[r.id])continue;if(!d(r.address,_)){T.ignored.push(r.address||`(expéditeur inconnu)`),b[r.id]=`${f.toISOString()} ignoré`;continue}let l=r.texts.map(e=>z(e.text)).join(`

`).slice(0,o),k=r.texts.map(e=>({name:e.name,text:e.text,...I(e.text)})),A=new Map,j=new Map,M=(e,t)=>t&&j.set(e,[...new Set([...j.get(e)??[],t])]),F=[],B=[];for(let e of k){let t=(e.meta.type??``).toLowerCase();if(t===`article`&&e.meta.doi){let t=p(e.meta.doi);for(let n of(e.meta.branches??e.meta.branche??``).replace(/^\[|\]$/g,``).split(/[;,]/)){let e=L(`## ${n}`);M(t,e),e&&B.push({doi:t,name:e})}A.set(t,{titre:e.meta.titre??``,apport:e.body.replace(/^\s*#[^\n]*\n/,``).trim().slice(0,2e4)})}else{let n=R(e.body);for(let e of n)for(let t of e.dois)M(t,e.name);(t===`cadrage`||t===`projet`)&&F.push({...e,sections:n})}}let V=new Set(F.flatMap(e=>e.sections.map(e=>c(e.name))));if(V.size){for(let e of B)if(!V.has(c(e.name))){let t=`Branche « ${e.name} » (fiche ${e.doi}) absente du cadrage « ${u(r.subject)} » : la fiche ne sera rattachée à aucun bilan tant que les noms ne sont pas identiques.`;T.warnings.includes(t)||T.warnings.push(t)}}let U=m(l),W=e=>A.get(e.doi)?.titre||h(e.line,e.doi);if(U.length>a){T.ignored.push(`« ${u(r.subject)} » (${U.length} DOI : document trop long, à découper)`),b[r.id]=`${f.toISOString()} trop long`;continue}let G=await q(U.filter(e=>!P.has(e.doi)&&!w.has(e.doi)),v,e=>E(e.doi,W(e),g));if(G.some(e=>e.status===`erreur`)){T.retry++;continue}for(let e of G)P.set(e.doi,e);let K=`${y} ${O(u(r.subject),70)}`,Y=0,X=0,Z=N(r,U.map(e=>{if(w.has(e.doi)&&!P.has(e.doi))return j.has(e.doi)&&i.doiToPath.has(e.doi)&&D.set(e.doi,j.get(e.doi)),{doi:e.doi,status:`deja`,article:void 0};let t=P.get(e.doi);return t.status===`verifie`?(!w.has(t.doi)&&!w.has(e.doi)&&H(t.article,K,`doi-verifie`,``,{themes:j.get(e.doi)??[],apport:A.get(e.doi)?.apport??``}),Y++,t):(X++,J.push({doi:e.doi,reason:t.reason,claimed:W(e),doc:K}),T.quarantined.some(t=>t.doi===e.doi)||T.quarantined.push({doi:e.doi,reason:t.reason,claimed:W(e),doc:K}),t)}),y),Q=`${t}/${K}.md`;for(let e=2;C(Q);e++)Q=`${t}/${K} (${e}).md`;S.add(Q),x.push({path:Q,content:Z,create:!0});for(let t of F){let n=O(t.meta.projet||t.meta.titre||u(r.subject),70),a=e=>{let t=w.get(e);return t?`[[${t.replace(/^.*\//,``).replace(/\.md$/,``)}]]`:`⚠ en quarantaine (\`${e}\`)`},o=t.sections.map(e=>`### ${e.name}\n\n${e.dois.length?e.dois.map(e=>`- ${a(e)}`).join(`
`):`Aucune référence listée.`}`).join(`

`),s=`${e}/Projets/${n}.md`;x.push({path:s,content:`${t.text.trimEnd()}\n\n---\n\n## Suivi des références (Friday, ${y})\n\n${o||`Aucune branche détectée (titres « Branche … » attendus).`}\n`,create:!i.has(s)}),T.projects.push({title:n,branches:t.sections.length,refs:new Set(t.sections.flatMap(e=>e.dois)).size})}T.imported.push({title:u(r.subject),verified:Y,quarantined:X}),b[r.id]=`${f.toISOString()} importé`}for(let[e,t]of D){let n=i.doiToPath.get(e),r=n&&i.readFile?await i.readFile(n).catch(()=>null):null,a=r?B(r,t):null;a&&a!==r&&x.push({path:n,content:a,create:!1})}(J.length||W.length)&&x.push({path:n,content:G(i.quarantineMd??``,J,W,y),create:!i.has(n)});let Y=!T.imported.length&&!T.accepted.length&&!T.ignored.length&&!T.retry&&!T.warnings.length;return{writes:x,state:{processed:b,lastRun:f.toISOString()},report:T,mail:Y?null:K(T,y)}}var Y=/^[^\s@<>()[\],;:"]+@[^\s@<>()[\],;:"]+\.[^\s@<>()[\],;:"]+$/,X=e=>Y.test(e.trim());function Z(e){return e.normalize(`NFD`).replace(/[̀-ͯ]/g,``).toLowerCase().replace(/[’']/g,` `).replace(/\b(a|au|aux|avec|pour|mon|ma|mes|son|sa|ses|le|la|les|l|de|du|des|d)\b/g,` `).replace(/[^a-z0-9@.+_-]+/g,` `).trim()}function Q(e){let t=[];for(let n of e.replace(/\r/g,``).split(`
`)){let e=n.replace(/^\s*(?:[-*+]|\d+\.)\s+/,``).replace(/\[\[([^\]|]+)(?:\|[^\]]*)?\]\]/g,`$1`).replace(/[*_`]/g,``).trim();if(!e.includes(`=`)||e.startsWith(`#`))continue;let r=e.split(`=`).map(e=>e.replace(/^<|>$/g,``).trim()).filter(Boolean),i=r.find(e=>X(e)),a=r.filter(e=>!X(e));i&&a.length&&t.push({name:a[0],aliases:a,address:i})}return t}function $(e,t){let n=Z(t);if(!n)return null;let r=e.filter(e=>e.aliases.some(e=>Z(e)===n));if(r.length===1)return{contact:r[0]};if(r.length>1)return{ambiguous:r};let i=e.filter(e=>e.aliases.some(e=>{let t=Z(e);return t.length>=3&&(t.split(` `).includes(n)||n.split(` `).includes(t)||t.includes(n)||n.includes(t))}));return i.length===1?{contact:i[0]}:i.length?{ambiguous:i}:null}var ee=(e,t)=>`- ${[...e.map(e=>e.trim()).filter(Boolean),t.trim()].join(` = `)}`,te=`# Contacts

Une ligne par personne ou adresse : les noms et surnoms séparés par « = », l'adresse e-mail en dernier.
Jarvis s'en sert pour savoir à qui envoyer un mail (« envoie à mon encadrant », « sur mon mail perso »).

`;export{U as _,$ as a,E as b,n as c,R as d,b as f,l as g,k as h,Q as i,i as l,A as m,ee as n,r as o,m as p,X as r,e as s,te as t,w as u,J as v,I as y};