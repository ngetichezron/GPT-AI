// to reduce the redundancy of:
// import React from 'react' 
// import ......
// import ...... so many times over in the corresponding files 

// now this can be imported in one line in app js as:
//    import { Article,Brand,CTA, Feature,Navbar } from './components';



export { default as Article } from './article/Article';
export { default as Brand } from './brand/Brand';
export { default as CTA } from './cta/CTA';
export { default as Feature } from './feature/Feature';
export { default as Navbar } from './navbar/Navbar';
