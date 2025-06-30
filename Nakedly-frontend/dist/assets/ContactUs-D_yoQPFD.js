import{r as d,d as r,j as e,h as F,i as y,k as w,l as S,a as C,F as z,m as M}from"./index-6Ahcc8D-.js";const E=()=>{const[t,i]=d.useState({name:"",email:"",message:""}),[c,l]=d.useState(!1),a=s=>{const{name:j,value:v}=s.target;i(k=>({...k,[j]:v}))},m=s=>{s.preventDefault(),console.log("Form submitted:",t),l(!0),i({name:"",email:"",message:""}),setTimeout(()=>l(!1),3e3)},x=r.section`
    padding: 80px 20px;
    background: #f9f9f9;
    color: #333;
  `,h=r.div`
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 40px;
  `,p=r.div`
    h2 {
      font-size: 2.2rem;
      margin-bottom: 20px;
      color: #222;
    }

    p {
      margin-bottom: 30px;
      line-height: 1.6;
      color: #555;
    }
  `,n=r.div`
    display: flex;
    align-items: flex-start;
    margin-bottom: 25px;

    svg {
      margin-right: 15px;
      color: #4a6bff;
      font-size: 1.2rem;
      margin-top: 4px;
    }

    div {
      h3 {
        margin: 0 0 5px 0;
        font-size: 1.1rem;
      }

      p, a {
        margin: 0;
        color: #666;
        text-decoration: none;
        transition: color 0.3s;

        &:hover {
          color: #4a6bff;
        }
      }
    }
  `,g=r.div`
    display: flex;
    margin-top: 30px;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      background: #4a6bff;
      color: white;
      border-radius: 50%;
      margin-right: 15px;
      transition: all 0.3s;

      &:hover {
        background: #3a5bef;
        transform: translateY(-3px);
      }

      svg {
        font-size: 1.1rem;
      }
    }
  `,u=r.form`
    background: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);

    h3 {
      margin-top: 0;
      margin-bottom: 20px;
      font-size: 1.5rem;
      color: #222;
    }
  `,o=r.div`
    margin-bottom: 20px;

    label {
      display: block;
      margin-bottom: 8px;
      font-weight: 500;
      color: #555;
    }

    input, textarea {
      width: 100%;
      padding: 12px 15px;
      border: 1px solid #ddd;
      border-radius: 5px;
      font-size: 1rem;
      transition: border 0.3s;

      &:focus {
        outline: none;
        border-color: #4a6bff;
      }
    }

    textarea {
      min-height: 120px;
      resize: vertical;
    }
  `,f=r.button`
    background: #4a6bff;
    color: white;
    border: none;
    padding: 12px 25px;
    border-radius: 5px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      background: #3a5bef;
      transform: translateY(-2px);
    }
  `,b=r.div`
    background: #e6f7e6;
    color: #2e7d32;
    padding: 15px;
    border-radius: 5px;
    margin-top: 20px;
    text-align: center;
  `;return e.jsx(x,{id:"contact",children:e.jsxs(h,{children:[e.jsxs(p,{children:[e.jsx("h2",{children:"Get In Touch"}),e.jsx("p",{children:"Have questions about our models or services? Reach out to us directly through any of these channels or fill out the contact form."}),e.jsxs(n,{children:[e.jsx(F,{}),e.jsxs("div",{children:[e.jsx("h3",{children:"Email"}),e.jsx("a",{href:"mailto:jamesjebery@gmail.com",children:"jamesjebery@gmail.com"})]})]}),e.jsxs(n,{children:[e.jsx(y,{}),e.jsxs("div",{children:[e.jsx("h3",{children:"Phone"}),e.jsx("p",{children:"+1 (555) 123-4567"})]})]}),e.jsxs(n,{children:[e.jsx(w,{}),e.jsxs("div",{children:[e.jsx("h3",{children:"Location"}),e.jsx("p",{children:"123 Model Street, Fashion District, NY 10001"})]})]}),e.jsxs(g,{children:[e.jsx("a",{href:"https://facebook.com",target:"_blank",rel:"noopener noreferrer",children:e.jsx(S,{})}),e.jsx("a",{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer",children:e.jsx(C,{})}),e.jsx("a",{href:"https://instagram.com",target:"_blank",rel:"noopener noreferrer",children:e.jsx(z,{})}),e.jsx("a",{href:"https://linkedin.com",target:"_blank",rel:"noopener noreferrer",children:e.jsx(M,{})})]})]}),e.jsxs(u,{onSubmit:m,children:[e.jsx("h3",{children:"Send Us a Message"}),e.jsxs(o,{children:[e.jsx("label",{htmlFor:"name",children:"Your Name"}),e.jsx("input",{type:"text",id:"name",name:"name",value:t.name,onChange:a,required:!0})]}),e.jsxs(o,{children:[e.jsx("label",{htmlFor:"email",children:"Your Email"}),e.jsx("input",{type:"email",id:"email",name:"email",value:t.email,onChange:a,required:!0})]}),e.jsxs(o,{children:[e.jsx("label",{htmlFor:"message",children:"Your Message"}),e.jsx("textarea",{id:"message",name:"message",value:t.message,onChange:a,required:!0})]}),e.jsx(f,{type:"submit",children:"Send Message"}),c&&e.jsx(b,{children:"Thank you! Your message has been sent."})]})]})})};export{E as default};
