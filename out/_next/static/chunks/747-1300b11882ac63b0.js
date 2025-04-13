"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[747],{4400:function(e,i,t){t.d(i,{X:function(){return Heading}}),t(7294);var n=t(5513),r=t(5893),Heading=function(e){var i=e.children,t=e.colorDark,o=e.as,a=e.size,s=e.uppercase;return(0,r.jsx)(n.D,{colorDark:void 0===t||t,as:void 0===o?"h1":o,size:void 0===a?"huge":a,uppercase:void 0!==s&&s,children:i})}},5513:function(e,i,t){t.d(i,{D:function(){return o}});var n=t(9521),r={small:function(e){return(0,n.iv)(["font-size:",";"],e.font.sizes.medium)},medium:function(e){return(0,n.iv)(["font-size:",";"],e.font.sizes.large)},big:function(e){return(0,n.iv)(["font-size:",";"],e.font.sizes.xlarge)},huge:function(e){return(0,n.iv)(["font-size:",";",";"],e.font.sizes.xhuge,mediaFont(e))}},mediaFont=function(e){return(0,n.iv)(["@media ","{font-size:",";}"],e.media.lteMedium,e.font.sizes.xlarge)},o=n.ZP.h1.withConfig({displayName:"styles__Title",componentId:"sc-156pguh-0"})(["",""],function(e){var i=e.theme,t=e.colorDark,o=e.size,a=e.uppercase;return(0,n.iv)(["color:",";line-height:1.2;",";",";"],t?i.colors.primary:i.colors.white,r[o](i),(0,n.iv)(["text-transform:",";"],a?"uppercase":"none"))})},9955:function(e,i,t){t.d(i,{r:function(){return HtmlContent}});var n=t(9521),r=n.ZP.div.withConfig({displayName:"styles__Container",componentId:"sc-1wochoz-0"})(["",";"],function(e){var i=e.theme;return(0,n.iv)(["font-size:calc("," + 0.6rem);line-height:1.5;p{margin:"," 0;}a,a:visited,a:link{color:",";text-decoration:none;transition:all 300ms ease-in-out;}a:hover{filter:brightness(50%);}code{font-family:monospace;color:",";font-size:",";background:",";padding:0.2rem;margin:0.2rem;}pre{background:",";padding:",";font-family:monospace;color:",";margin:"," 0;font-size:",";width:100%;overflow-x:auto;}pre code{color:inherit;background:inherit;}img{max-width:100%;}.image{background:",";line-height:0;margin:"," 0;}.image figcaption{background:",";font-size:",";padding:",";text-align:center;line-height:1.3;}.image-style-side{float:right;max-width:50%;margin:"," ",";}hr{border:none;border-bottom:0.1rem solid ",";}ul,ol{margin:"," ",";}.raw-html-embed{width:100%;overflow:hidden;overflow-x:auto;}.table{width:100%;overflow:hidden;overflow-x:auto;}table{width:100%;border-collapse:collapse;margin:"," 0;}table td,table th{padding:",";border:0.1rem solid ",";}.media iframe{width:100%;height:auto;aspect-ratio:16 / 9;}blockquote{border-left:0.5rem solid ",";color:",";filter:brightness(80%);padding-left:",";font-style:italic;margin:",";}@media ","{font-size:calc("," + 0.2rem);pre{font-size:1.2rem;}.image-style-side{float:none;max-width:100%;margin:"," 0;}}"],i.font.sizes.xsmall,i.spacings.medium,i.colors.secondary,i.colors.secondary,i.font.sizes.xsmall,i.colors.mediumGray,i.colors.primary,i.spacings.medium,i.colors.white,i.spacings.medium,i.font.sizes.xsmall,i.colors.mediumGray,i.spacings.medium,i.colors.mediumGray,i.font.sizes.xsmall,i.spacings.small,i.spacings.medium,i.spacings.small,i.colors.mediumGray,i.spacings.medium,i.spacings.xlarge,i.spacings.medium,i.spacings.small,i.colors.mediumGray,i.colors.secondary,i.colors.darkerGray,i.spacings.medium,i.spacings.medium,i.media.lteMedium,i.font.sizes.xsmall,i.spacings.xlarge)}),o=t(5893),HtmlContent=function(e){var i=e.html;return(0,o.jsx)(r,{dangerouslySetInnerHTML:{__html:i}})}},6882:function(e,i,t){t.d(i,{X:function(){return Base}});var n=t(9521),r=n.ZP.footer.withConfig({displayName:"styles__Container",componentId:"sc-axc4fe-0"})(["",""],function(e){var i=e.theme;return(0,n.iv)(["text-align:center;border-top:0.1rem solid ",";a{color:inherit;text-decoration:none;}"],i.colors.mediumGray)}),o=t(9955),a=t(5893),Footer=function(e){var i=e.footerHtml;return(0,a.jsx)(r,{children:(0,a.jsx)(o.r,{html:i})})},s=n.ZP.a.withConfig({displayName:"styles__Container",componentId:"sc-1jflt6x-0"})(["",""],function(e){var i=e.theme;return(0,n.iv)(["position:fixed;background:",";color:",";display:flex;align-items:center;justify-content:center;bottom:2rem;right:2rem;width:4rem;height:4rem;z-index:6;"],i.colors.primary,i.colors.white)}),l=t(7758),GoTop=function(){return(0,a.jsx)(s,{href:"#","aria-label":"Go to top",title:"Go to top",children:(0,a.jsx)(l.Q,{})})},c=t(4400),d=n.ZP.a.withConfig({displayName:"styles__Container",componentId:"sc-4lmby7-0"})(["",";"],function(){return(0,n.iv)(["display:flex;align-items:center;text-decoration:none;color:inherit;text-decoration:none;> img{width:15rem;height:15rem;border-radius:50%;}"])}),m=t(1664),u=t.n(m),LogoLink=function(e){var i=e.text,t=e.srcImg,n=void 0===t?"":t,r=e.link,o=e.newTab,s=!!r.match(/^\//),l=void 0!==o&&o?"_blank":"_self";return s?(0,a.jsx)(c.X,{size:"small",uppercase:!0,children:(0,a.jsx)(u(),{href:r,passHref:!0,legacyBehavior:!0,children:(0,a.jsxs)(d,{target:l,children:[!!n&&(0,a.jsx)("img",{src:n,alt:i}),!n&&i]})})}):(0,a.jsx)(c.X,{size:"small",uppercase:!0,children:(0,a.jsxs)(d,{href:r,target:l,children:[!!n&&(0,a.jsx)("img",{src:n,alt:i}),!n&&i]})})},g=t(5513),h=n.ZP.header.withConfig({displayName:"styles__Wrapper",componentId:"sc-10tofm5-0"})(["",""],function(e){var i=e.theme;return(0,n.iv)(["display:flex;justify-content:center;align-items:center;padding:0 0 "," 0;width:100%;max-width:",";color:",";font-size:",";margin:0 auto;","{margin:0 0 calc("," - 1rem);}@media ","{flex-flow:column wrap;text-align:center;> div{","{margin:"," 0 calc("," - 1rem);}}}"],i.spacings.large,i.sizes.max,i.colors.darkText,i.font.sizes.xsmall,g.D,i.spacings.xsmall,i.media.lteXSmall,g.D,i.spacings.xsmall,i.spacings.small)}),p=n.ZP.div.withConfig({displayName:"styles__Content",componentId:"sc-10tofm5-1"})(["",""],function(e){var i=e.theme;return(0,n.iv)(["display:flex;flex-flow:column wrap;margin-left:",";margin-right:",";max-width:48rem;"],i.spacings.medium,i.spacings.medium)}),Header=function(e){var i=e.blogName,t=e.blogDescription,n=e.logo,r=e.showText;return(0,a.jsxs)(h,{children:[(0,a.jsx)(LogoLink,{link:"/",srcImg:n,text:"".concat(i," - ").concat(t)}),(void 0===r||r)&&(0,a.jsxs)(p,{children:[(0,a.jsx)(c.X,{as:"h2",size:"small",children:i}),(0,a.jsx)("p",{children:t})]})]})},f=t(16),x=t(884),v=n.ZP.div.withConfig({displayName:"styles__Wrapper",componentId:"sc-1dr2iv5-0"})(["",""],function(e){var i=e.theme,t=e.menuVisible;return(0,n.iv)(["background:",";padding:",";display:flex;position:fixed;z-index:1;width:100%;max-width:32rem;height:100vh;top:0;left:0;transition:all 300ms ease-in-out;",""],i.colors.primary,i.spacings.large,(0,n.iv)(["left:",";overflow-y:",";@media ","{left:",";}"],t?"0":"-30rem",t?"auto":"hidden",i.media.lteMedium,t?"0":"-32rem"))}),y=n.ZP.nav.withConfig({displayName:"styles__Nav",componentId:"sc-1dr2iv5-1"})(["margin:auto;width:100%;"]),b=n.ZP.div.withConfig({displayName:"styles__Logo",componentId:"sc-1dr2iv5-2"})(["",""],function(e){var i=e.theme;return(0,n.iv)(["","{display:flex;justify-content:center;margin:0;margin-bottom:",";img{border:0.5rem solid ",";}}"],g.D,i.spacings.xlarge,i.colors.white)}),w=n.ZP.a.withConfig({displayName:"styles__OpenClose",componentId:"sc-1dr2iv5-3"})(["",""],function(e){var i=e.theme,t=e.menuVisible;return(0,n.iv)(["position:fixed;top:",";color:",";background:",";z-index:2;width:3rem;height:3rem;left:26rem;transition:all 350ms ease-in-out;",";"],i.spacings.medium,i.colors.white,i.colors.primary,(0,n.iv)(["left:",";color:",";"],t?"26rem":"1rem",t?i.colors.secondary:i.colors.white))}),j=n.ZP.a.withConfig({displayName:"styles__Container",componentId:"sc-192otf0-0"})(["",";"],function(e){var i=e.theme;return(0,n.iv)(["display:block;color:",";text-decoration:none;margin-bottom:",";font-size:1.8rem;border-right:0.5rem solid ",";transition:all 300ms ease-in-out;&:hover{border-right:0.5rem solid ",";color:",";}"],i.colors.white,i.spacings.small,i.colors.primary,i.colors.secondary,i.colors.secondary)}),MenuLink=function(e){var i=e.children,t=e.link,n=e.newTab,r=!!t.match(/^\//),o=void 0!==n&&n?"_blank":"_self";return r?(0,a.jsx)(u(),{href:t,passHref:!0,legacyBehavior:!0,children:(0,a.jsx)(j,{target:o,children:i})}):(0,a.jsx)(j,{href:t,target:o,children:i})},_=t(7294),Menu=function(e){var i=e.links,t=e.blogName,n=e.logo,r=(0,_.useState)(!1),o=r[0],s=r[1];return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(w,{menuVisible:o,href:"#","aria-label":"Open or close menu",title:"Open or close menu",onClick:function(e){e.preventDefault(),s(function(e){return!e})},children:[o&&(0,a.jsx)(x.x,{"aria-label":"Close menu"}),!o&&(0,a.jsx)(f.v,{"aria-label":"Open menu"})]}),(0,a.jsx)(v,{menuVisible:o,"aria-hidden":!o,children:(0,a.jsxs)(y,{children:[(0,a.jsx)(b,{children:(0,a.jsx)(LogoLink,{link:"/",text:t,srcImg:n})}),(void 0===i?[]:i).map(function(e){return(0,a.jsx)(MenuLink,{link:e.link,newTab:e.newTab,children:e.text},e.id)})]})})]})},k=n.ZP.div.withConfig({displayName:"styles__Wrapper",componentId:"sc-ekn04y-0"})(["",""],function(){return(0,n.iv)([""])}),C=n.ZP.div.withConfig({displayName:"styles__HeaderContainer",componentId:"sc-ekn04y-1"})(["",""],function(e){var i=e.theme;return(0,n.iv)(["margin-top:",";"],i.spacings.xhuge)}),z=n.ZP.div.withConfig({displayName:"styles__ContentContainer",componentId:"sc-ekn04y-2"})(["",""],function(e){var i=e.theme;return(0,n.iv)(["max-width:120rem;width:100%;margin:0 auto;margin-bottom:",";"],i.spacings.xhuge)}),N=n.ZP.div.withConfig({displayName:"styles__FooterContainer",componentId:"sc-ekn04y-3"})(["",""],function(e){var i=e.theme;return(0,n.iv)(["max-width:120rem;width:100%;margin:0 auto;margin-bottom:",";"],i.spacings.large)}),Base=function(e){var i=e.setting,t=e.children;return(0,a.jsxs)(k,{children:[(0,a.jsx)(Menu,{links:i.data.attributes.menuLink,blogName:i.data.attributes.blogName,logo:i.data.attributes.logo.data.attributes.url}),(0,a.jsx)(C,{children:(0,a.jsx)(Header,{blogName:i.data.attributes.blogName,blogDescription:i.data.attributes.blogDescription,logo:i.data.attributes.logo.data.attributes.url})}),(0,a.jsx)(z,{children:t}),(0,a.jsx)(N,{children:(0,a.jsx)(Footer,{footerHtml:i.data.attributes.text})}),(0,a.jsx)(GoTop,{})]})}},3747:function(e,i,t){t.d(i,{p:function(){return PostsTemplate}});var n=t(9521),r=t(5513),o=n.ZP.div.withConfig({displayName:"styles__Wrapper",componentId:"sc-c26b3g-0"})(["text-align:center;",""],function(e){var i=e.theme;return(0,n.iv)(["","{margin:0;margin-top:",";margin-bottom:",";transition:all 300ms ease-in-out;}a{text-decoration:none;}&:hover ","{color:",";}&:hover img{opacity:0.8;}"],r.D,i.spacings.small,i.spacings.small,r.D,i.colors.secondary)}),a=n.ZP.img.withConfig({displayName:"styles__Cover",componentId:"sc-c26b3g-1"})(["",""],function(){return(0,n.iv)(["max-width:100%;transition:opacity 300ms ease-in-out;"])}),s=n.ZP.p.withConfig({displayName:"styles__Excerpt",componentId:"sc-c26b3g-2"})(["",""],function(){return(0,n.iv)([""])}),l=t(1664),c=t.n(l),d=t(4400),m=t(5893),PostCard=function(e){var i=e.title,t=e.excerpt,n=e.cover,r=e.slug;return(0,m.jsxs)(o,{children:[(0,m.jsx)(c(),{href:"/post/".concat(r),passHref:!0,children:(0,m.jsx)(a,{src:n.data.attributes.url,alt:"a fox holding a box containing a bottle and ice cubes"})}),(0,m.jsx)(c(),{href:"/post/".concat(r),passHref:!0,children:(0,m.jsx)(d.X,{as:"h2",size:"small",children:i})}),(0,m.jsx)(s,{children:t})]})},u=n.ZP.div.withConfig({displayName:"styles__Wrapper",componentId:"sc-3yko3h-0"})(["",""],function(e){var i=e.theme;return(0,n.iv)(["width:100%;padding-left:",";@media ","{padding-left:0;}"],i.spacings.xsmall,i.media.lteMedium)}),g=n.ZP.p.withConfig({displayName:"styles__NotFound",componentId:"sc-3yko3h-1"})(["",""],function(e){var i=e.theme;return(0,n.iv)(["text-align:center;font-size:",";padding:",";"],i.font.sizes.xsmall,i.spacings.large)}),h=n.ZP.div.withConfig({displayName:"styles__Grid",componentId:"sc-3yko3h-2"})(["",""],function(e){var i=e.theme;return(0,n.iv)(["max-width:120rem;margin:0 auto;display:grid;justify-content:center;align-items:center;grid-template-columns:repeat(auto-fill,minmax(30rem,1fr));gap:",";padding:calc("," + 0.2rem);","{padding:1rem;border:0.5rem solid ",";border-radius:5%;height:100%;transition:border-color 300ms ease-in-out;}",":hover{border-color:",";}"],i.spacings.large,i.spacings.small,o,i.colors.secondary,o,i.colors.darkText)}),PostGrid=function(e){var i=e.posts;return i.data?(0,m.jsx)(u,{children:i.data.length>0&&(0,m.jsx)(h,{children:i.data.map(function(e){return(0,m.jsx)(PostCard,{id:e.id,title:e.attributes.title,excerpt:e.attributes.excerpt,cover:e.attributes.cover,slug:e.attributes.slug},e.id)})})}):(0,m.jsx)(u,{children:(0,m.jsx)(g,{children:"Nenhum post encontrado."})})},p=t(6882),PostsTemplate=function(e){var i=e.setting,t=e.posts;return(0,m.jsx)(p.X,{setting:i,children:(0,m.jsx)(PostGrid,{posts:t})})}}}]);