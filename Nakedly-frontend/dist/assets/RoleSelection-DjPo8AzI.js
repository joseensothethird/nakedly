import{r as s,j as e,d as o,L as a}from"./index-C9wL5z-G.js";import{P as f,A as j,T as y,b as k,R as v,c as t,d as i,e as l,F as w}from"./AUTH-CB9xaSAe.js";const C=o.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`,S=o.div`
  background: white;
  padding: 30px;
  border-radius: 16px;
  max-width: 500px;
  width: 90%;
  text-align: center;
  position: relative;
  color: black;
  max-height: 90vh;
  overflow-y: auto;

  p,
  ul,
  li,
  strong,
  span {
    color: black;
    text-align: left;
    margin-bottom: 10px;
    font-size: 0.95rem;
  }

  ul {
    padding-left: 20px;
    text-align: left;
  }

  li {
    margin-bottom: 8px;
  }

  @media (max-width: 480px) {
    padding: 20px;
  }
`,M=o.button`
  padding: 12px 24px;
  background-color: #00aff0;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin: 20px auto 0;
  font-weight: 600;
  font-size: 1rem;

  &:hover {
    background-color: #008ecc;
  }
`,R=o.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #333;
`,L=o(a)`
  text-decoration: none;
  width: 100%;
  max-width: 200px;
`,T=o.label`
  display: block;
  margin-top: 20px;
  font-size: 0.9rem;
  text-align: left;
  line-height: 1.5;

  a {
    color: #00aff0;
    text-decoration: underline;

    &:hover {
      color: #008ecc;
    }
  }

  input {
    margin-right: 10px;
    transform: scale(1.1);
    cursor: pointer;
  }
`,A=o(a)`
  text-decoration: none;
  display: block;
  margin: 20px auto 0;
  max-width: 200px;
`,B=({onRoleSelect:c})=>{const[d,r]=s.useState(!1),[h,x]=s.useState(""),g=m=>{x(m),r(!0)},[n,u]=s.useState(!1),p=()=>{r(!1),c(h)},b=()=>{r(!1)};return e.jsx(f,{children:e.jsxs(j,{children:[e.jsxs(y,{children:["Welcome back to ",e.jsx("span",{style:{color:"#00aff0"},children:"Nakedly"})]}),e.jsx(k,{children:"Who are you?"}),e.jsxs(v,{children:[e.jsx(L,{to:"/signup",children:e.jsxs(t,{children:[e.jsx(i,{style:{backgroundImage:"url('/images/Subs.jpg')"}}),e.jsx(l,{children:"Subscriber"})]})}),e.jsxs(t,{onClick:()=>g("model"),children:[e.jsx(i,{style:{backgroundImage:"url('/images/ayesha.jpeg')"}}),e.jsx(l,{children:"Model"})]})]}),e.jsxs(w,{children:["Already have an account? ",e.jsx("a",{href:"/login",children:"Log in"})]}),d&&e.jsx(C,{children:e.jsxs(S,{children:[e.jsx(R,{onClick:b,children:"×"}),e.jsxs("p",{children:["You're selecting the ",e.jsx("strong",{children:"Model"})," role in"," ",e.jsx("span",{style:{color:"#00aff0"},children:"Nakedly"}),". Please review the registration rules before continuing:",e.jsxs("ul",{children:[e.jsxs("li",{children:["You must be ",e.jsx("strong",{children:"18 years old or above"}),"."]}),e.jsxs("li",{children:["A ",e.jsx("strong",{children:"valid government-issued ID"})," is required for age and identity verification."]}),e.jsxs("li",{children:["This platform is for selling your content and bookings only—",e.jsx("strong",{children:"no external transactions"})," allowed to protect against scams."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Only subscribers"})," can interact with you. No random friend requests or non-subscriber messaging."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Bookings must be confirmed"})," through the website to ensure safety for both you and your subscribers."]}),e.jsxs("li",{children:["All transactions and payments must happen here."," ",e.jsx("strong",{children:"You’ll receive booking payments after the session is marked complete."})]}),e.jsxs("li",{children:["There’s a button available for you to"," ",e.jsx("strong",{children:"confirm a booking"})," by uploading a photo of the client’s ID for verification."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Video call and Live features are coming soon"}),"—you'll be able to engage with your subscribers in real-time through secure sessions on the platform."]})]})]}),e.jsxs(T,{children:[e.jsx("input",{type:"checkbox",checked:n,onChange:()=>u(!n),required:!0}),"I have read and agree to the"," ",e.jsx("a",{href:"/model-terms",target:"_blank",rel:"noopener noreferrer",children:"Model Terms of Service"}),"."]}),e.jsx("div",{children:e.jsx(A,{to:n?"/signup":"#",onClick:p,children:e.jsx(M,{disabled:!n,children:"Yes, Continue"})})})]})})]})})};export{B as default};
