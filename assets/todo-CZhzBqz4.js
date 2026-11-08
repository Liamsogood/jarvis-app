import{A as e}from"./assistantConfig-CMFmjgqI.js";var t=`# Tâches

Liste gérée par Jarvis : une tâche par ligne, « 📅 AAAA-MM-JJ » pour une échéance.

## À faire
`,n=/^(\s*[-*+]\s+)\[( |x|X)\]\s+(.*)$/,r=/\s*📅\s*(\d{4}-\d{2}-\d{2})/,i=/\s*✅\s*(\d{4}-\d{2}-\d{2})/,a=e=>e.split(`
`).map(e=>e.replace(/\r$/,``)),o=(e,t)=>e.join(t.includes(`\r
`)?`\r
`:`
`);function s(e){let t=[];return a(e).forEach((e,a)=>{let o=n.exec(e);if(!o)return;let s=o[3],c=s.replace(r,``).replace(i,``).trim();c&&t.push({line:a,raw:e,text:c,done:o[2]!==` `,due:r.exec(s)?.[1]??null,doneOn:i.exec(s)?.[1]??null})}),t}function c(e,n,r){let i=`- [ ] ${n.replace(/\s+/g,` `).trim()}${r?` 📅 ${r}`:``}`,s=e&&e.trim()?e:t,c=a(s),u=c.findIndex(e=>/^#{1,6}\s+.*(à|a) faire/i.test(e));if(u<0)return o([...c.slice(0,l(c)+1),``,`## À faire`,i,``],s);let d=u+1;for(;d<c.length&&!/^#{1,6}\s/.test(c[d]);)d++;let f=d;for(;f>u+1&&c[f-1].trim()===``;)f--;return o([...c.slice(0,f),i,...c.slice(f)],s)}var l=e=>{let t=e.length-1;for(;t>=0&&!e[t].trim();)t--;return t};function u(e,t){return e[t.line]===t.raw?t.line:e.findIndex(e=>e===t.raw)}function d(t,r,s,c=new Date){let l=a(t),d=u(l,r);if(d<0)return null;let f=n.exec(l[d]),p=f[3].replace(i,``).trimEnd();return l[d]=`${f[1]}[${s?`x`:` `}] ${p}${s?` ✅ ${e(c)}`:``}`,o(l,t)}function f(e,t){let n=a(e),r=u(n,t);return r<0?null:(n.splice(r,1),o(n,e))}function p(t,n=new Date){if(t.done)return`done`;if(!t.due)return`nodate`;let r=e(n);if(t.due<r)return`late`;if(t.due===r)return`today`;let i=new Date(n);return i.setDate(i.getDate()+7),t.due<=e(i)?`soon`:`later`}export{d as a,f as i,p as n,s as r,c as t};