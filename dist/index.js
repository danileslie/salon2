(()=>{"use strict";var n,e={28:(n,e,t)=>{t.d(e,{Z:()=>l});var a=t(81),i=t.n(a),r=t(645),o=t.n(r)()(i());o.push([n.id,"\n/******************************************\n/* GENERAL STYLES\n/*******************************************/\n\n:root {\n    --primary: #364652;\n    --secondary: #f19844;\n    --accent: #f5f3ef;\n    --bar-width: 60px;\n    --bar-height: 8px;\n    --hamburger-gap: 10px;\n    --animation-timing: 200ms ease-in-out;\n}\n\n*,\n*::after,\n*::before {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n/* test nav */\n\nnav .navlist .navitem {\n    cursor: pointer;\n}\n\n\n\nbody,\n.header,\n.navlist,\n.square,\n.inner,\n.row,\n.testimonial,\n.top,\n.socials,\n.text-item,\n.about-us,\n.about-blurb,\n.employee,\n.location-and-hours,\n.text-item,\n.hamburger-menu {\n    display: flex;\n}\n\nbody {\n    flex-direction: column;\n    font-family: Cabin, sans-serif;\n    font-size: 16px;\n}\n\n/* GENERAL SPACING */\n\n.details,\n.gallery,\n.staff,\n.contact-us {\n    width: 70vw;\n}\n\n/* TEXT AND COLOURS */\n\nheader,\nfooter,\n.home-page-link,\n.submit {\n    background: var(--primary);\n}\n\nheader a,\nfooter a,\n.phone-number,\n.copyright,\nh1,\nh2,\n.name,\n.about-name,\n.home-page-link,\n.submit {\n    color: var(--secondary);\n}\n\n.carousel-container,\n.testimonials,\n.about-us,\n.detail-text,\n.about-details,\n.contact-form {\n    background: var(--accent);\n}\n\n.title,\n.contact,\nh1,\nh2,\n.caption,\n.title,\n.contact {\n    font-size: 3rem;\n}\n\nheader a,\n.phone-number,\n.email,\n.phone {\n    font-size: 2rem;\n}\n\nfooter a,\n.review,\n.detail-text,\n.serviceTable1,\n.contact-info,\ninput,\ntextarea,\n.submit,\nlabel,\n.blurb,\n.name,\n.about-name {\n    font-size: 1.5rem;\n}\n\n.home-page-link,\n.position,\n.copyright p {\n    font-size: 1rem;\n}\n\n/******************************************\n/* PAGE-SPECIFIC STYLES\n/*******************************************/\n\n/* HEADER */\n\n.header,\n.top {\n    position: relative;\n    z-index: 1;\n    justify-content: space-between;\n    align-items: center;\n    width: 80%;\n    margin: 1rem auto;\n}\n\n.footer {\n    margin-bottom: 1rem;\n}\n\nheader a,\nfooter a {\n    text-decoration: none;\n}\n\nheader ul a:hover,\nfooter ul a:hover {\n    color: grey;\n\n}\n\nobject {\n    pointer-events: none;\n}\n\n.logo {\n    width: 20%;\n}\n\n.logo-and-name {\n    display: block;\n}\n\n.logo-isolated {\n    display: none;\n}\n\n.nav-toggle {\n    display: none;\n    cursor: pointer;\n    height: min-content;\n}\n\n#toggle {\n    display: none;\n}\n\n#toggle:checked~nav .navlist {\n    transform: translateY(0);\n}\n\n#toggle:checked~nav .nav-toggle .bar:nth-child(1) {\n    position: absolute;\n    transform: rotate(45deg);\n}\n\n#toggle:checked~nav .nav-toggle .bar:nth-child(2) {\n    display: none;\n}\n\n#toggle:checked~nav .nav-toggle .bar:nth-child(3) {\n    transform: rotate(-45deg);\n}\n\n.bar {\n    width: var(--bar-width);\n    height: var(--bar-height);\n    margin-bottom: var(--hamburger-gap);\n    background: #fff;\n    border-radius: 16px;\n    transition: 0.4s;\n}\n\nnav ul {\n    justify-content: space-between;\n}\n\nul li {\n    list-style-type: none;\n    margin-right: 5em;\n}\n\nul li:last-child {\n    margin-right: 0;\n}\n\n/* FOOTER */\n\n.copyright p {\n    text-align: center;\n    margin: 1rem 0 1rem 0;\n}\n\n.social-icon {\n    width: 2rem;\n    filter: invert(77%) sepia(19%) saturate(6497%) hue-rotate(332deg) brightness(106%) contrast(89%);\n    margin-right: 3rem;\n}\n\n.socials .social-icon:last-child {\n    margin-right: 0;\n}\n\n/* HOME PAGE */\n\n.carousel-img {\n    width: 100%;\n    height: 90vh;\n    object-fit: contain;\n    display: block;\n}\n\n/* .glide__arrow {\n    position: absolute;\n    display: block;\n    top: 50%;\n    z-index: 2;\n    color: #364652;\n    padding: 2rem;\n    border: 2px solid #364652;\n} */\n\n.carousel-container {\n    box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.2);\n}\n\nh1,\nh2 {\n    text-align: center;\n    padding: 2.5rem;\n}\n\n.inner {\n    max-width: 1200px;\n    margin: auto;\n    padding: 0 20px;\n}\n\n.row {\n    flex-wrap: wrap;\n    justify-content: center;\n    gap: 1rem;\n}\n\n.testimonials {\n    padding: 0 0 40px 0;\n    color: #434343;\n}\n\n.testimonial {\n    flex-direction: column;\n    justify-content: space-between;\n    background: #fff;\n    border-left: 15px solid #5f5b5b;\n    border-radius: 10px;\n    box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.2);\n\n}\n\n.col {\n    flex: 30%;\n    max-width: 33.33%;\n    box-sizing: border-box;\n    padding: 30px;\n}\n\n.name,\n.about-name {\n    text-transform: uppercase;\n    margin: 20px 0;\n    font-weight: 700;\n}\n\n.details {\n    display: grid;\n    gap: 1rem;\n    grid-template-columns: repeat(2, 50%);\n    grid-auto-flow: dense;\n    margin: 0 auto 2rem auto;\n}\n\n.square {\n    flex-direction: column;\n    box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.2);\n\n}\n\n.services-img {\n    display: block;\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n}\n\n.detail-text {\n    padding: 25px;\n}\n\n.home-page-link {\n    padding: 25px;\n    text-transform: uppercase;\n    text-decoration: underline;\n    text-align: center;\n    box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.2);\n    opacity: 1;\n    transition: 0.3s;\n    border-top: 1px solid var(--accent);\n}\n\n\n.home-page-link:hover {\n    opacity: 0.6;\n}\n\n/* SERVICES */\n\n.serviceTable1 {\n    width: 40%;\n    border-collapse: collapse;\n    margin: auto;\n    margin: 30px auto 50px auto;\n}\n\n.serviceTable1 td {\n    padding: 30px;\n}\n\n.serviceTable1 tr:hover {\n    background: var(--accent);\n}\n\n.caption {\n    border-bottom: 2px solid;\n    padding: 20px;\n    margin: auto;\n    width: 40%;\n}\n\ntr {\n    display: flex;\n    justify-content: space-between;\n}\n\n\n/* GALLERY */\n\n.gallery {\n    display: grid;\n    gap: 1rem;\n    grid-template-columns: repeat(4, 1fr);\n    grid-auto-flow: dense;\n    grid-auto-rows: 500px;\n\n    margin: 2% auto;\n}\n\n.gallery-image {\n    display: block;\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n}\n\n/* alternating gallery template */\n\n.gallery>picture:nth-child(10n + 1),\n.gallery>picture:nth-child(10n + 10) {\n    grid-area: span 2/span 2;\n}\n\n.gallery>picture:nth-child(10n + 8),\n.gallery>picture:nth-child(10n + 9) {\n    grid-column: 1;\n}\n\n.gallery>picture:nth-child(10n + 9) {\n    grid-column: 2;\n}\n\n.gallery>picture:nth-child(10n + 10) {\n    grid-column: 3/ -1;\n}\n\n/* ABOUT US */\n\n.about-page {\n    flex-direction: column;\n}\n\n.about-blurb {\n    flex-direction: column;\n    justify-content: center;\n    padding: 2%;\n}\n\n.title,\n.contact {\n    font-weight: 700;\n    padding: 5% 0;\n}\n\n.blurb {\n    line-height: 2;\n}\n\n.about-img img {\n    width: 50vw;\n    height: 100%;\n    display: block;\n}\n\n.employee {\n    flex-direction: column;\n    box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.2);\n}\n\n.staff {\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    gap: 1rem;\n    margin: auto;\n    margin-bottom: 2rem;\n}\n\n.staff-pic {\n    width: 100%;\n    object-fit: cover;\n    flex: 1;\n}\n\n.about-details {\n    text-align: center;\n    border-top: 6px solid;\n    padding: 5%;\n}\n\n.about-name {\n    margin: 0 0 2% 0;\n}\n\n/* CONTACT */\n\n.contact-us {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    gap: 1rem;\n    margin: 2% auto;\n}\n\n.location-and-hours {\n    flex-direction: column;\n    gap: 5%;\n}\n\n.contact-info {\n    text-align: center;\n}\n\n.contact {\n    padding: 0;\n}\n\n.contact-form {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 2rem;\n    margin: auto;\n    width: 100%;\n    padding: 2rem;\n    border-radius: 10px;\n}\n\nlabel,\ninput,\ntextarea {\n    display: block;\n    line-height: 2;\n    box-sizing: border-box;\n    width: 100%;\n    padding: 0.5rem 0.75rem;\n}\n\nlabel {\n    padding: 0.5rem 0;\n}\n\n.text-item {\n    flex-direction: column;\n}\n\nform input,\nform textarea {\n    border: none;\n    border: 1px solid rgba(0, 0, 0, .1);\n    border-radius: 10px;\n    padding-left: 10px;\n    outline: none;\n}\n\nform input:focus,\nform textarea:focus {\n    outline: 2px solid var(--primary);\n}\n\nform textarea {\n    height: 200px;\n}\n\n.full-width {\n    grid-column: span 2;\n}\n\n.submit {\n    display: block;\n    line-height: 2;\n    padding: 0 20px;\n    border: none;\n    letter-spacing: 2px;\n    transition: .2s all ease-in-out;\n    border-bottom: 2px solid transparent;\n    outline: none;\n    margin-top: 2%;\n}\n\n\n.submit:hover {\n    opacity: 0.6;\n    transition: 0.3s;\n}\n\n.map {\n    display: block;\n    height: 100%;\n}\n\n/******************************************\n/* MEDIA QUERIES\n/*******************************************/\n@media screen and (max-width: 1399px) {\n\n    .header,\n    .gallery,\n    .staff,\n    .contact-us,\n    .details {\n        width: 90%;\n    }\n\n    .caption,\n    .serviceTable1 {\n        width: 100%;\n        margin: auto;\n        text-align: center;\n    }\n\n    .phone-number {\n        display: none;\n    }\n\n    .logo-and-name {\n        display: none;\n    }\n\n    .logo-isolated {\n        display: block;\n    }\n\n    .navlist {\n        display: flex;\n        flex-direction: column;\n        margin: auto;\n        position: absolute;\n        left: 0;\n        top: 4.7rem;\n        background: var(--primary);\n        width: 100%;\n        text-align: center;\n        transform: translateY(-150%);\n        z-index: -1;\n        transition: 0.6s;\n    }\n\n    .navitem {\n        margin: 0;\n        padding: 1rem;\n        border-bottom: 1px solid var(--secondary);\n    }\n\n    .navitem:last-child {\n        border-bottom: none;\n    }\n\n    .nav-toggle {\n        display: grid;\n    }\n\n    .carousel-container {\n        display: none;\n    }\n\n    .details,\n    .gallery,\n    .staff {\n        grid-template-columns: 1fr;\n    }\n\n    .inner,\n    .row {\n        flex-direction: column;\n    }\n\n    .col {\n        max-width: 100%;\n    }\n\n    .top {\n        display: none;\n    }\n\n    .gallery,\n    .staff {\n        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n    }\n\n    .staff-pic {\n        height: 500px;\n        object-fit: cover;\n        flex: auto;\n    }\n\n    .gallery>picture:nth-child(10n + 1),\n    .gallery>picture:nth-child(10n + 10) {\n        grid-area: span 1 / span 1;\n    }\n\n    .gallery picture:nth-child(n) {\n        grid-column: span 1;\n    }\n\n    .about-img {\n        display: none;\n    }\n\n    .map {\n        display: none;\n    }\n\n    .contact-us {\n        grid-template-columns: 1fr;\n    }\n\n    .text-item {\n        grid-column: span 2;\n    }\n\n\n}\n\n@media (min-width: 1400px) and (max-width: 1719px) {\n    .header {\n        width: 100%;\n    }\n\n}",""]);const l=o},910:(n,e,t)=>{t(486);var a=t(379),i=t.n(a),r=t(795),o=t.n(r),l=t(569),d=t.n(l),s=t(565),c=t.n(s),p=t(216),g=t.n(p),m=t(589),u=t.n(m),h=t(28),b={};b.styleTagTransform=u(),b.setAttributes=c(),b.insert=d().bind(null,"head"),b.domAPI=o(),b.insertStyleElement=g(),i()(h.Z,b),h.Z&&h.Z.locals&&h.Z.locals}},t={};function a(n){var i=t[n];if(void 0!==i)return i.exports;var r=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(r.exports,r,r.exports,a),r.loaded=!0,r.exports}a.m=e,n=[],a.O=(e,t,i,r)=>{if(!t){var o=1/0;for(c=0;c<n.length;c++){for(var[t,i,r]=n[c],l=!0,d=0;d<t.length;d++)(!1&r||o>=r)&&Object.keys(a.O).every((n=>a.O[n](t[d])))?t.splice(d--,1):(l=!1,r<o&&(o=r));if(l){n.splice(c--,1);var s=i();void 0!==s&&(e=s)}}return e}r=r||0;for(var c=n.length;c>0&&n[c-1][2]>r;c--)n[c]=n[c-1];n[c]=[t,i,r]},a.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return a.d(e,{a:e}),e},a.d=(n,e)=>{for(var t in e)a.o(e,t)&&!a.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),a.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),a.nmd=n=>(n.paths=[],n.children||(n.children=[]),n),(()=>{var n={826:0};a.O.j=e=>0===n[e];var e=(e,t)=>{var i,r,[o,l,d]=t,s=0;if(o.some((e=>0!==n[e]))){for(i in l)a.o(l,i)&&(a.m[i]=l[i]);if(d)var c=d(a)}for(e&&e(t);s<o.length;s++)r=o[s],a.o(n,r)&&n[r]&&n[r][0](),n[r]=0;return a.O(c)},t=self.webpackChunkwebpack_test=self.webpackChunkwebpack_test||[];t.forEach(e.bind(null,0)),t.push=e.bind(null,t.push.bind(t))})(),a.nc=void 0;var i=a.O(void 0,[114],(()=>a(910)));i=a.O(i)})();