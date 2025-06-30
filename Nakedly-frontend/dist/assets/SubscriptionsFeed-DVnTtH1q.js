import{R as d,j as e,d as r}from"./index-C9wL5z-G.js";const T=r.div`
  min-height: calc(100vh - 110px);
  display: flex;
  flex-direction: column;
  background: #f9f9f9;
`,$=r.main`
  flex: 1;
  padding: 2rem;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
`,E=r.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #333;
`,x=r.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,g=r.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  margin-bottom: 1rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
`,f=r.div`
  flex: 1;
`,j=r.h3`
  margin: 0;
  font-size: 1.1rem;
  color: #333;
`,S=r.p`
  margin: 0.5rem 0 0;
  font-size: 0.9rem;
  color: #666;
`,M=r.span`
  font-weight: bold;
  color: #333;
`,v=r.button`
  padding: 0.5rem 1rem;
  background: ${i=>i.subscribed?"#4CAF50":"#ff2d55"};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.2s;
  margin-left: 1rem;

  &:hover {
    background: ${i=>i.subscribed?"#3d8b40":"#e61e4d"};
  }
`,A=r.div`
  padding: 1rem;
  background: white;
  border-radius: 8px;
  margin-bottom: 2rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
`,z=r.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 1rem;
`,c=r.div`
  padding: 1rem;
  background: #f5f5f5;
  border-radius: 8px;
  text-align: center;
`,a=r.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
`,l=r.div`
  font-size: 0.8rem;
  color: #666;
`,R=()=>{const[i,y]=d.useState("subscriber"),b=[{id:1,name:"Jessica Parker",price:"$9.99",posts:245,subscribed:!0},{id:2,name:"Alex Morgan",price:"$14.99",posts:189,subscribed:!0}],w=[{id:3,name:"Sophie Turner",price:"$12.99",posts:312,subscribed:!1},{id:4,name:"Emma Watson",price:"$19.99",posts:156,subscribed:!1},{id:5,name:"Taylor Swift",price:"$24.99",posts:421,subscribed:!1},{id:6,name:"Ariana Grande",price:"$17.99",posts:278,subscribed:!1}],u=[{id:101,name:"John Doe",joined:"2023-01-15",lastActive:"2 days ago"},{id:102,name:"Jane Smith",joined:"2023-02-20",lastActive:"1 week ago"},{id:103,name:"Mike Johnson",joined:"2023-03-10",lastActive:"3 days ago"}],o={totalEarnings:"$1,245.50",monthlyEarnings:"$345.20",totalSubscribers:42,newThisMonth:5},[n,m]=d.useState("subscribed"),[h,p]=d.useState(b),k=s=>{console.log(`Subscribed to creator ${s}`),p(h.map(t=>t.id===s?{...t,subscribed:!t.subscribed}:t))};d.useEffect(()=>{p(n==="subscribed"?b:w)},[n]);const C=()=>{y(i==="subscriber"?"seller":"subscriber")};return e.jsx(T,{children:e.jsxs($,{children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx(E,{children:i==="subscriber"?"Subscriptions":"Your Subscribers"}),e.jsxs("button",{onClick:C,style:{padding:"0.5rem 1rem",background:"#666",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},children:["Switch to ",i==="subscriber"?"Seller":"Subscriber"," View"]})]}),i==="seller"?e.jsxs(e.Fragment,{children:[e.jsxs(A,{children:[e.jsx("h3",{children:"Your Earnings"}),e.jsxs(z,{children:[e.jsxs(c,{children:[e.jsx(a,{children:o.totalEarnings}),e.jsx(l,{children:"Total Earnings"})]}),e.jsxs(c,{children:[e.jsx(a,{children:o.monthlyEarnings}),e.jsx(l,{children:"This Month"})]}),e.jsxs(c,{children:[e.jsx(a,{children:o.totalSubscribers}),e.jsx(l,{children:"Total Subscribers"})]}),e.jsxs(c,{children:[e.jsx(a,{children:o.newThisMonth}),e.jsx(l,{children:"New This Month"})]})]})]}),e.jsxs("h3",{children:["Your Subscribers (",u.length,")"]}),e.jsx(x,{children:u.map(s=>e.jsxs(g,{children:[e.jsxs(f,{children:[e.jsx(j,{children:s.name}),e.jsxs(S,{children:["Joined: ",s.joined," • Last active: ",s.lastActive]})]}),e.jsx(v,{style:{background:"#666"},onClick:()=>console.log(`Message ${s.name}`),children:"Message"})]},s.id))})]}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",marginBottom:"2rem"},children:[e.jsx("button",{style:{padding:"0.75rem 1.5rem",background:"none",border:"none",cursor:"pointer",fontSize:"1rem",color:n==="subscribed"?"#ff2d55":"#666",borderBottom:n==="subscribed"?"2px solid #ff2d55":"none",marginRight:"1rem"},onClick:()=>m("subscribed"),children:"Your Subscriptions"}),e.jsx("button",{style:{padding:"0.75rem 1.5rem",background:"none",border:"none",cursor:"pointer",fontSize:"1rem",color:n==="discover"?"#ff2d55":"#666",borderBottom:n==="discover"?"2px solid #ff2d55":"none"},onClick:()=>m("discover"),children:"Discover Creators"})]}),e.jsx(x,{children:h.map(s=>e.jsxs(g,{children:[e.jsxs(f,{children:[e.jsx(j,{children:s.name}),e.jsxs(S,{children:[e.jsx(M,{children:s.price})," per month • ",s.posts," posts"]})]}),e.jsx(v,{subscribed:s.subscribed,onClick:()=>k(s.id),children:s.subscribed?"Subscribed":"Subscribe"})]},s.id))})]})]})})};export{R as default};
