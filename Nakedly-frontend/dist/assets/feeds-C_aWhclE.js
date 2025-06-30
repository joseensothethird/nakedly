import{r as f,R as l,d as o}from"./index-6Ahcc8D-.js";import{P as d}from"./index-YkbswCR5.js";function p(){return p=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},p.apply(this,arguments)}function g(e,r){if(e==null)return{};var n=b(e,r),i,a;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)i=s[a],!(r.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}function b(e,r){if(e==null)return{};var n={},i=Object.keys(e),a,s;for(s=0;s<i.length;s++)a=i[s],!(r.indexOf(a)>=0)&&(n[a]=e[a]);return n}var c=f.forwardRef(function(e,r){var n=e.color,i=n===void 0?"currentColor":n,a=e.size,s=a===void 0?24:a,x=g(e,["color","size"]);return l.createElement("svg",p({ref:r,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},x),l.createElement("circle",{cx:"11",cy:"11",r:"8"}),l.createElement("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}))});c.propTypes={color:d.string,size:d.oneOfType([d.string,d.number])};c.displayName="Search";const t={small:"576px",medium:"768px",large:"992px"},u=o.div`
  display: grid;
  grid-template-columns: 240px 1fr 320px;
  min-height: 100vh;
  width: 100vw;
  background-color: #f8f9fa;

  @media (max-width: ${t.large}) {
    grid-template-columns: 80px 1fr 280px;
  }

  @media (max-width: ${t.medium}) {
    grid-template-columns: 60px 1fr;
  }

  @media (max-width: ${t.small}) {
    grid-template-columns: 1fr;
  }
`,w=o.div`
  background-color: white;
  border-right: 1px solid #e9ecef;
  padding: 20px;
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
  height: 100vh;
  z-index: 100;

  @media (max-width: ${t.large}) {
    padding: 12px;
  }

  @media (max-width: ${t.medium}) {
    padding: 8px;
  }

  @media (max-width: ${t.small}) {
    position: fixed;
    bottom: 0;
    top: auto;
    height: auto;
    width: 100%;
    flex-direction: row;
    padding: 8px;
    border-top: 1px solid #e9ecef;
    border-right: none;
  }
`,v=o.div`
  background-color: white;
  width: 280px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  padding: 20px;
  display: flex;
  flex-direction: column;
  z-index: 1001;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
`,y=o.div`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 30px;

  img {
    height: 32px;
    width: auto;
  }

  @media (max-width: ${t.large}) {
    margin-bottom: 20px;
  }

  @media (max-width: ${t.medium}) {
    margin-bottom: 15px;
  }

  @media (max-width: ${t.small}) {
    display: block;
    margin-bottom: 20px;
  }
`,k=o.nav`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;

  @media (max-width: ${t.small}) {
    flex-direction: row;
    justify-content: space-around;
    flex: none;
  }
`,C=o.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border-radius: 8px;
  cursor: pointer;
  color: ${e=>e.active?"#3b82f6":"#495057"};
  background-color: ${e=>e.active?"#f0f7ff":"transparent"};
  font-weight: ${e=>e.active?"600":"normal"};
  
  &:hover {
    background-color: #f8f9fa;
  }
  
  svg {
    stroke-width: ${e=>e.active?"2.5":"2"};
  }

  span {
    @media (max-width: ${t.large}) {
      display: none;
    }

    @media (max-width: ${t.small}) {
      display: ${e=>e.mobileSidebar?"inline":"none"};
    }
  }

  @media (max-width: ${t.small}) {
    padding: 8px;
    flex-direction: column;
    gap: 4px;
    font-size: 12px;
  }
`,z=o.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 24px;
  padding: 12px;
  font-weight: 600;
  cursor: pointer;
  margin-top: auto;
  
  &:hover {
    background-color: #2563eb;
  }

  span {
    @media (max-width: ${t.large}) {
      display: none;
    }
  }

  @media (max-width: ${t.small}) {
    position: fixed;
    bottom: 80px;
    right: 20px;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    padding: 0;
    margin: 0;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`,M=o.div`
  background-color: white;
  border-right: 1px solid #e9ecef;
  min-width: auto;
  display: flex;
  flex-direction: column;
  height: auto;

  @media (max-width: ${t.large}) {
    min-width: auto;
  }

  @media (max-width: ${t.medium}) {
    border-right: none;
  }

  @media (max-width: ${t.small}) {
    margin-bottom: 60px;
  }
`,$=o.div`
  overflow-y: auto;
  flex: 1;
  padding-bottom: 20px;
`,j=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid #e9ecef;
  background-color: white;
  position: sticky;
  top: 0;
  z-index: 10;
  
  h1 {
    font-size: 18px;
    font-weight: 700;
  }

  @media (max-width: ${t.small}) {
    padding: 12px;
  }
`,A=o.div`
  padding: 16px;
  border-bottom: 1px solid #e9ecef;

  @media (max-width: ${t.small}) {
    padding: 12px;
  }
`,B=o.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 12px;
`,S=o.div`
  width: 40px;
  height: 40px;
  background-color: #3b82f6;
  border-radius: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  flex-shrink: 0;

  @media (max-width: ${t.small}) {
    width: 36px;
    height: 36px;
  }
`,F=o.div`
  flex: 1;
  min-width: 0;
`,P=o.div`
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color:black;
  
  svg {
    color: #3b82f6;
    flex-shrink: 0;
  }
`,E=o.div`
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,N=o.div`
  font-size: 14px;
  color: #6c757d;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,T=o.div`
  margin-bottom: 16px;
`,I=o.p`
  margin-bottom: 8px;
  line-height: 1.5;
  word-break: break-word;
  color:black;
`,O=o.span`
  color: #3b82f6;
`,H=o.div`
  color: #3b82f6;
  font-size: 14px;
  word-break: break-all;
`,L=o.div`
  height: 300px;
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  margin-bottom: 16px;
  position: relative;

  @media (max-width: ${t.small}) {
    height: 200px;
  }
`,D=o.div`
  position: absolute;
  top: 16px;
  left: 16px;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;

  @media (max-width: ${t.small}) {
    top: 8px;
    left: 8px;
    font-size: 10px;
  }
`,U=o.div`
  position: absolute;
  bottom: 16px;
  left: 16px;
  width: 12px;
  height: 12px;
  background-color: #ef4444;
  border-radius: 50%;
  border: 2px solid white;

  @media (max-width: ${t.small}) {
    bottom: 8px;
    left: 8px;
  }
`,G=o.div`
  display: flex;
  gap: 24px;
  padding-top: 12px;
  border-top: 1px solid #e9ecef;

  @media (max-width: ${t.small}) {
    gap: 12px;
  }
`,R=o.button`
  display: flex;
  align-items: center;
  gap: 6px;
  background: none;
  border: none;
  color: #6c757d;
  cursor: pointer;
  font-size: 14px;
  
  &:hover {
    color: #3b82f6;
  }

  @media (max-width: ${t.small}) {
    font-size: 12px;
    gap: 4px;
  }
`,V=o.div`
  background-color: white;
  padding: 16px;
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;

  @media (max-width: ${t.medium}) {
    display: none;
  }
`,W=o.div`
  position: relative;
  margin-bottom: 24px;
`,_=o.input`
  width: 100%;
  padding: 10px 16px 10px 40px;
  border-radius: 20px;
  border: 1px solid #e9ecef;
  background-color: #f8f9fa;
  outline: none;
  
  &:focus {
    background-color: white;
    border-color: #3b82f6;
  }
`,Y=o(c)`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: #6c757d;
`,q=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  
  h2 {
    font-size: 16px;
    font-weight: 700;
  }
`,J=o.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 0;
`,K=o.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`,Q=o.div`
  flex: 1;
  min-width: 0;
`,X=o.div`
  font-size: 14px;
  color: #6c757d;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Z=o.button`
  background: none;
  border: 1px solid #e9ecef;
  border-radius: 16px;
  padding: 4px 12px;
  font-size: 14px;
  cursor: pointer;
  white-space: nowrap;
  
  &:hover {
    background-color: #f8f9fa;
  }
`,oo=o.div`
  display: flex;
  gap: 12px;
  margin-top: 24px;
  padding-top: 16px;
  border-top: 1px solid #e9ecef;
  flex-wrap: wrap;
`,eo=o.a`
  color: #6c757d;
  font-size: 12px;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`,to=o.div`
  display: none;
  
  @media (max-width: ${t.small}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 16px;
    background-color: white;
    border-bottom: 1px solid #e9ecef;
    position: sticky;
    top: 0;
    z-index: 100;
    
    h1 {
      font-size: 18px;
      font-weight: 700;
      margin: 0;
    }
  }
`,io=o.button`
  display: none;
  
  @media (max-width: ${t.small}) {
    display: block;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    color: #495057;
  }
`,no=o.div`
  display: none;
  
  @media (max-width: ${t.small}) {
    display: ${e=>e.show?"block":"none"};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
  }
`,ao=o.div`
  height: 100vh;
  overflow-y: auto;
  padding: 16px;
  background:rgb(255, 255, 255);
  color: #ffffff;

  .notifications-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid #333;

    h2 {
      margin: 0;
      font-size: 20px;
    }

    .mark-all-read {
      background: transparent;
      color: #ff4d4f;
      border: none;
      cursor: pointer;
      font-size: 14px;
    }
      .notification-actions {
  position: relative;
  
  .more-options {
    background: none;
    border: none;
    color: #999;
    cursor: pointer;
    padding: 4px;
    margin-left: 8px;
    
    &:hover {
      color: #fff;
    }
  }
`,ro=o.div`
  background: white;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 12px;
  border-left: ${e=>e.unread?"3px solid #ff4d4f":"none"};
  transition: all 0.3s ease;

  &:hover {
    background:rgb(0, 115, 255);
  }
`,so=o.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
`,lo=o.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  flex-shrink: 0;
  font-size: 18px;
`,po=o.div`
  flex-grow: 1;
`,co=o.div`
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 16px;
  color:black;
`,xo=o.div`
  font-size: 12px;
  color: #aaa;
  margin-top: 4px;
  display: flex;
  gap: 8px;

  .price {
    color: #52c41a;
    font-weight: bold;
  }
`,fo=o.div`
  margin-top: 12px;
  margin-left: 60px;
`,go=o.div`
  margin: 4px 0;
  font-size: 14px;
  color: #000;
`,bo=o.span`
  color: #777;
`,mo=o.button`
  background: ${e=>e.primary?"#ff4d4f":"transparent"};
  color: ${e=>e.primary?"#fff":"#ff4d4f"};
  border: ${e=>e.primary?"none":"1px solid #ff4d4f"};
  border-radius: 20px;
  padding: 6px 12px;
  margin-right: 8px;
  font-size: 12px;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${e=>e.primary?"#ff7875":"rgba(255, 77, 79, 0.1)"};
  }
`,ho=o.div`
  width: 60px;
  height: 60px;
  border-radius: 4px;
  background-size: cover;
  background-position: center;
  flex-shrink: 0;
  border: 1px solid #333;
`,uo=o.div`
  display: flex;
  gap: 8px;
  margin-top: 8px;
`,wo=o.div`
  position: absolute;
  right: 20px;
  background: #2a2a2a;
  border: 1px solid #444;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 1;
  min-width: 180px;
`,vo=o.div`
  padding: 8px 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-size: 14px;
  
  &:hover {
    background: #333;
  }
`,yo=o.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #fff;
`,ko=o.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  border-bottom: 1px solid #eee;
  
  h3 {
    margin: 0;
    font-size: 1.2rem;
  }
`,Co=o.div`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  background: #f5f5f5;
  border-bottom: 1px solid #eee;

  input {
    flex: 1;
    border: none;
    background: transparent;
    padding: 8px 10px;
    margin-left: 10px;
    outline: none;
  }
`,zo=o.div`
  flex: 1;
  overflow-y: auto;
  border-right: 1px solid #eee;
`,Mo=o.div`
  display: flex;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid #eee;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #f9f9f9;
  }
`,$o=o.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #3b82f6;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  flex-shrink: 0;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${e=>e.online?"#4CAF50":"#ccc"};
    border: 2px solid white;
  }
`,jo=o.div`
  margin-left: 15px;
  flex: 1;
`,Ao=o.h4`
  font-weight: 700;
  margin-bottom: 3px;
  color: black;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Bo=o.p`
  font-size: 0.9rem;
  color: #6c757d;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px;
  margin: 0;
`,So=o.span`
  font-size: 0.8rem;
  color: #6c757d;
`,Fo=o.span`
  display: inline-block;
  background: #3b82f6;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  text-align: center;
  font-size: 0.7rem;
  line-height: 20px;
  margin-top: 5px;
`;o.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  border-left: 1px solid #eee;
`;const Po=o.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-top: 1px solid #eee;
  background: #f5f5f5;
`,Eo=o.input`
  flex: 1;
  border: none;
  border-radius: 20px;
  padding: 10px 15px;
  margin: 0 10px;
  outline: none;
`,No=o.button`
  background: transparent;
  border: none;
  color: #6c757d;
  cursor: pointer;
  padding: 8px;
  
  &:hover {
    color: #3b82f6;
  }
`,To=o.button`
  background: #3b82f6;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  
  &:hover {
    background: #2563eb;
  }
`,Io=o.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: #fff;
  position: relative;
`,Oo=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid #eee;
`,Ho=o.div`
  display: flex;
  gap: 12px;
`,Lo=o.button`
  display: flex;
  align-items: center;
  gap: 4px;
  background: none;
  border: none;
  padding: 6px 10px;
  border-radius: 20px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background: #f5f5f5;
  }

  &.collection-pinned {
    color: #3b82f6;
  }

  &.collection-saved {
    color: #3b82f6;
  }

  &.collection-delete-btn {
    color: #ff4d4f;
  }
`,Do=o.div`
  position: absolute;
  top: 60px;
  right: 16px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  z-index: 10;
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`,Uo=o.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background: #f5f5f5;
  }

  &.collection-active {
    background: #f0f7ff;
    color: #3b82f6;
  }
`,Go=o.div`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  background: #f5f5f5;
  border-bottom: 1px solid #eee;

  input {
    flex: 1;
    border: none;
    background: transparent;
    padding: 8px 12px;
    margin-left: 8px;
    outline: none;
    font-size: 14px;
  }
`,Ro=o.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 16px;
  padding: 16px;
  overflow-y: auto;
`,Vo=o.div`
  cursor: pointer;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s;
  position: relative;
  border: 1px solid #eee;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: scale(1.02);
  }

  &.collection-pinned {
    border: 1px solid #3b82f6;
  }
`,Wo=o.div`
  position: relative;
  aspect-ratio: 1/1;
  background: #f0f0f0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,_o=o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #666;
  font-size: 14px;
`,Yo=o.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0,0,0,0.7);
  color: white;
  padding: 6px;
  text-align: center;
  font-size: 12px;
`,qo=o.div`
  position: absolute;
  top: 8px;
  right: 8px;
  display: flex;
  gap: 4px;
  z-index: 2;
`,Jo=o.button`
  background: rgba(0,0,0,0.5);
  border: none;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;

  &.collection-pinned {
    background: #3b82f6;
  }
`,Ko=o.button`
  background: rgba(255,255,255,0.8);
  border: none;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ff4d4f;
  cursor: pointer;
`,Qo=o.div`
  padding: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  background: white;
`,Xo=o.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #3b82f6;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 12px;
`,Zo=o.p`
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,oe=o.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: white;
  z-index: 1000;
  display: flex;
  flex-direction: column;
`,ee=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid #eee;
`,te=o.button`
  background: none;
  border: none;
  padding: 4px;
`,ie=o.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
  margin: 0 16px;
`,ne=o.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #3b82f6;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 16px;
`,ae=o.div`
  display: flex;
  gap: 8px;
`,re=o.div`
  flex: 1;
  display: flex;
  position: relative;
  background: #000;
`,se=o.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #666;
  gap: 16px;
`,de=o.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 8px 16px;
  cursor: pointer;
`,le=o.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }

  video {
    max-width: 100%;
    max-height: 100%;
  }
`,pe=o.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255,255,255,0.2);
  border: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  z-index: 10;
  cursor: pointer;

  &.collection-prev-btn {
    left: 16px;
  }

  &.collection-next-btn {
    right: 16px;
  }
`,ce=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  border-top: 1px solid #eee;
`,xe=o.div`
  font-size: 14px;
  color: #666;
`,fe=o.div`
  display: flex;
  gap: 20px;
`,ge=o.div`
  display: flex;
  padding: 12px;
  gap: 8px;
  overflow-x: auto;
  background: #f5f5f5;
`,be=o.div`
  width: 60px;
  height: 60px;
  flex-shrink: 0;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  border: 2px solid transparent;

  &.collection-active {
    border-color: #3b82f6;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,me=o.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: #000;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.7;
  }

  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 20px;
  }
`,he=o.div`
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
`,ue=o.div`
  margin-bottom: 30px;
  width: 100%;
`,we=o.h1`
  font-size: 24px;
  font-weight: 600;
  color: #1F2937;
  margin: 0;
`,ve=o.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
`,ye=o.section`
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  width: 100%;
  box-sizing: border-box;
`,ke=o.h2`
  font-size: 18px;
  font-weight: 600;
  color: #1F2937;
  margin-bottom: 8px;
  margin-top: 0;
`,Ce=o.p`
  font-size: 14px;
  color: #6B7280;
  margin-bottom: 20px;
  margin-top: 0;
`,ze=o.div`
  margin-bottom: 12px;
  width: 100%;
`,Me=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border: 1px solid #E5E7EB;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  width: 100%;
  box-sizing: border-box;

  &:hover {
    border-color: #9CA3AF;
  }
`,$e=o.div`
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0; /* Prevent overflow */
`,je=o.div`
  min-width: 40px;
  width: 40px;
  height: 40px;
  background: #F3F4F6;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #4B5563;
  flex-shrink: 0;
`,Ae=o.div`
  display: flex;
  flex-direction: column;
  min-width: 0; /* Prevent text overflow */
`,Be=o.span`
  font-weight: 500;
  color: #1F2937;
  display: flex;
  align-items: center;
  gap: 6px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Se=o.div`
  color: #9CA3AF;
  flex-shrink: 0;
`,Fe=o.button`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 16px;
  background: transparent;
  border: 1px dashed #D1D5DB;
  border-radius: 8px;
  color: #4B5563;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  box-sizing: border-box;

  &:hover {
    border-color: #9CA3AF;
    background: #F9FAFB;
  }
`,Pe=o.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 16px;
  margin-bottom: 20px;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Ee=o.div`
  background: #F9FAFB;
  border-radius: 8px;
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
`,Ne=o.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #6B7280;
  font-size: 14px;
  margin-bottom: 12px;
  width: 100%;
`,Te=o.div`
  font-size: 24px;
  font-weight: 600;
  color: #1F2937;
  margin-bottom: 4px;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
`,Ie=o.div`
  font-size: 14px;
  color: #6B7280;
  width: 100%;
`,Oe=o.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`,He=o.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px solid #E5E7EB;
  width: 100%;
`,Le=o.span`
  color: #6B7280;
  white-space: nowrap;
`,De=o.span`
  font-weight: 500;
  color: #1F2937;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-left: 10px;
`,Ue=o.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`,Ge=o.div`
  display: flex;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #E5E7EB;
  width: 100%;
`,Re=o.div`
  margin-right: 16px;
  flex-shrink: 0;
`,Ve=o.div`
  flex: 1;
  min-width: 0; /* Prevent overflow */
`,We=o.div`
  font-weight: 500;
  color: #1F2937;
  margin-bottom: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,_e=o.div`
  font-size: 12px;
  color: #6B7280;
  display: flex;
  align-items: center;
  white-space: nowrap;
`,Ye=o.div`
  font-weight: 500;
  color: ${e=>e.positive?"#10B981":"#EF4444"};
  margin-left: 10px;
  white-space: nowrap;
`,qe=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  text-align: center;
  width: 100%;
`,Je=o.div`
  margin-bottom: 16px;
  color: #9CA3AF;
`,Ke=o.p`
  color: #6B7280;
  font-size: 16px;
  margin: 0;
`;export{fo as $,u as A,H as B,L as C,D,U as E,j as F,G,R as H,ao as I,ro as J,so as K,w as L,to as M,k as N,lo as O,A as P,po as Q,V as R,W as S,co as T,J as U,go as V,xo as W,bo as X,wo as Y,vo as Z,ho as _,y as a,je as a$,uo as a0,mo as a1,yo as a2,ko as a3,Co as a4,c as a5,zo as a6,Mo as a7,$o as a8,jo as a9,oe as aA,ee as aB,te as aC,ie as aD,ne as aE,ae as aF,re as aG,pe as aH,le as aI,se as aJ,de as aK,ce as aL,xe as aM,fe as aN,ge as aO,be as aP,me as aQ,he as aR,ue as aS,we as aT,ve as aU,ye as aV,ke as aW,Ce as aX,ze as aY,Me as aZ,$e as a_,Ao as aa,Bo as ab,So as ac,Fo as ad,Po as ae,No as af,Eo as ag,To as ah,Io as ai,Oo as aj,Ho as ak,Lo as al,Do as am,Uo as an,Go as ao,Ro as ap,Vo as aq,Wo as ar,_o as as,Yo as at,qo as au,Jo as av,Ko as aw,Qo as ax,Xo as ay,Zo as az,C as b,Ae as b0,Be as b1,Se as b2,qe as b3,Je as b4,Ke as b5,Fe as b6,Pe as b7,Ee as b8,Ne as b9,Te as ba,Ie as bb,Oe as bc,He as bd,Le as be,De as bf,Ue as bg,Ge as bh,Re as bi,Ve as bj,We as bk,_e as bl,Ye as bm,z as c,io as d,no as e,v as f,M as g,_ as h,Y as i,q as j,K as k,Q as l,E as m,X as n,Z as o,oo as p,eo as q,$ as r,B as s,S as t,F as u,P as v,N as w,T as x,I as y,O as z};
