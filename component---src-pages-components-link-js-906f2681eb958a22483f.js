webpackJsonp([89842151690323],{1086:function(e,t){e.exports={description:"",displayName:"Link",methods:[],props:{disabled:{type:{name:"bool"},required:!1,description:"Disable or enable button.",defaultValue:{value:"false",computed:!1}},className:{type:{name:"string"},required:!1,description:"CSS Class to apply to button.",defaultValue:{value:"''",computed:!1}},style:{type:{name:"objectOf",value:{name:"any"}},required:!1,description:"Css style applied to the component",defaultValue:{value:"null",computed:!1}},tooltip:{type:{name:"string"},required:!1,description:"Button tooltip.",defaultValue:{value:"''",computed:!1}},href:{type:{name:"string"},required:!0,description:"Link to open."},target:{type:{name:"string"},required:!1,description:"Target of link.",defaultValue:{value:"''",computed:!1}},children:{type:{name:"union",value:[{name:"arrayOf",value:{name:"node"}},{name:"node"}]},required:!1,description:"Elements to show inside of Links",defaultValue:{value:"null",computed:!1}}},filename:"/components/Link/Link.jsx"}},465:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=n(1),u=o(s),l=n(5),c=o(l),p=n(6),d=o(p),f=n(520),m=o(f),h=n(1086),b=o(h),y=function(e){function t(){return a(this,t),i(this,e.apply(this,arguments))}return r(t,e),t.prototype.render=function(){return u.default.createElement(c.default,{pagePushedFunction:this.handlepushedPageLayout},m.default&&u.default.createElement(d.default,{name:m.default.name,linkGithub:"https://github.com/front10/landing-page-book/tree/master/src/components/Link",description:m.default.summary,stories:m.default.stories,importCode:m.default.import,withStyles:m.default.withStyles,extractProps:m.default.extractProps,propsDescription:b.default.props}))},t}(u.default.Component);t.default=y,e.exports=t.default},520:function(e,t){"use strict";t.__esModule=!0,t.default={name:"Link",summary:"Link are hyperlink. You can click on a link and jump to another document. When you move the mouse over a link, the mouse arrow will turn into a little hand.",import:"",withStyles:!0,stories:[{name:"Basic",summary:"",code:'<Link href="https://front10.com" tooltip="This is a tooltip" target="_blank">This is a link</Link>',tabsActive:["code"]},{name:"Disabled",summary:"",code:'<Link disabled href="https://front10.com">This is disabled</Link>',tabsActive:[]},{name:"With icon",summary:"",code:'<Link href="https://front10.com" tooltip="This is a tooltip" target="_blank">\n    <Icon icon="fa fa-home" />\n    <span>This is disabled</span>\n</Link>',tabsActive:[]},{name:"Like a button",summary:"",code:'<>\n    <Link className="btn btn-primary mr-1" href="https://github.com/front10/landing-page-book" tooltip="This is a tooltip" target="_blank">\n        <Icon icon="fa fa-github" /> View code on Github\n    </Link>\n    <Link className="btn btn-outline-success mr-1" href="https://front10.com/#contactForm" tooltip="Contact us" target="_blank">\n        <Icon icon="fa fa-info-circle" /> Contact us\n    </Link>\n</>',tabsActive:[]}]},e.exports=t.default}});
//# sourceMappingURL=component---src-pages-components-link-js-906f2681eb958a22483f.js.map