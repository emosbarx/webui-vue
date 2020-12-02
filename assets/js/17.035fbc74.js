(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{397:function(e,t,r){"use strict";r.r(t);var s=r(42),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"accessibility-conventions-and-standards"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#accessibility-conventions-and-standards"}},[e._v("#")]),e._v(" Accessibility Conventions and Standards")]),e._v(" "),r("p",[e._v("It is important that the OpenBMC Web UI meet accessibility guidelines established by the "),r("a",{attrs:{href:"https://www.w3.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("World Wide Web Consortium (W3C)"),r("OutboundLink")],1),e._v(". These guidelines are known as the "),r("a",{attrs:{href:"https://www.w3.org/WAI/standards-guidelines/wcag/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Web Content Accessibility Guidelines (WCAG)"),r("OutboundLink")],1),e._v(". Making the Web UI accessible to as many users as possible is the right thing to do. In many countries, it is also legally required. Organizations providing interfaces that users with permanent or temporary disabilities can not use, may lose sales or be susceptible to discriminatory lawsuits.")]),e._v(" "),r("h2",{attrs:{id:"accessibility-principles"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#accessibility-principles"}},[e._v("#")]),e._v(" Accessibility Principles")]),e._v(" "),r("p",[e._v("These "),r("a",{attrs:{href:"https://www.w3.org/WAI/fundamentals/accessibility-principles/",target:"_blank",rel:"noopener noreferrer"}},[e._v("principles"),r("OutboundLink")],1),e._v(" reference a set of international standards from the "),r("a",{attrs:{href:"https://www.w3.org/WAI/",target:"_blank",rel:"noopener noreferrer"}},[e._v("W3C Web Accessibility Intitiative (WAI)"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.w3.org/WAI/fundamentals/accessibility-principles/#perceivable",target:"_blank",rel:"noopener noreferrer"}},[e._v("Perceiveable"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.w3.org/WAI/fundamentals/accessibility-principles/#operable",target:"_blank",rel:"noopener noreferrer"}},[e._v("Operable"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.w3.org/WAI/fundamentals/accessibility-principles/#understandable",target:"_blank",rel:"noopener noreferrer"}},[e._v("Understandable"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.w3.org/WAI/fundamentals/accessibility-principles/#robust",target:"_blank",rel:"noopener noreferrer"}},[e._v("Robust"),r("OutboundLink")],1)])]),e._v(" "),r("h2",{attrs:{id:"semantic-html"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#semantic-html"}},[e._v("#")]),e._v(" Semantic HTML")]),e._v(" "),r("p",[e._v("Coding the UI using semantic markup is the most important step in creating an inclusive interface. The use of "),r("a",{attrs:{href:"https://www.w3.org/WAI/standards-guidelines/aria/",target:"_blank",rel:"noopener noreferrer"}},[e._v("WAI-ARIA"),r("OutboundLink")],1),e._v(" can help make an interface accessible to assistive technologies. However, there are two critical rules to follow:")]),e._v(" "),r("ol",[r("li",[e._v("Always favor semantic markup over ARIA")]),e._v(" "),r("li",[e._v("No ARIA is better than Bad ARIA")])]),e._v(" "),r("h2",{attrs:{id:"testing"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#testing"}},[e._v("#")]),e._v(" Testing")]),e._v(" "),r("p",[e._v("Assuring the Web UI meets accessibility guidelines requires a combination of automated and manual testing. Automated tests will test the application against common problems such as color contrast and ARIA use. Automated testing can be built into the CI process, integrated with code editors, and run using browser extensions.")]),e._v(" "),r("p",[e._v("The OpenBMC Web UI developers should test their development pages using one of the tools listed in the tools section below. If using Chrome, the Lighthouse application comes bundled with the browser and also includes testing for performance and best practices. If there is an issue that is created when using a Bootstrap-Vue component, we can "),r("a",{attrs:{href:"https://github.com/bootstrap-vue/bootstrap-vue/issues/new/choose",target:"_blank",rel:"noopener noreferrer"}},[e._v("create an issue in the Bootstrap-vue repo"),r("OutboundLink")],1),e._v(". Contributing to the Bootstrap-Vue open-source library, when possible, is strongly encouraged.")]),e._v(" "),r("h2",{attrs:{id:"tools"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tools"}},[e._v("#")]),e._v(" Tools")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.deque.com/axe/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Deque Axe"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Tools/Accessibility_inspector",target:"_blank",rel:"noopener noreferrer"}},[e._v("Firefox Accessibility Inspector"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.ibm.com/able/toolkit/tools",target:"_blank",rel:"noopener noreferrer"}},[e._v("IBM Accessibility Tools"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://developers.google.com/web/tools/lighthouse",target:"_blank",rel:"noopener noreferrer"}},[e._v("Lighthouse"),r("OutboundLink")],1)])]),e._v(" "),r("h2",{attrs:{id:"screen-readers"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#screen-readers"}},[e._v("#")]),e._v(" Screen Readers")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://webaim.org/articles/jaws/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Jaws - (Windows only)"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://support.microsoft.com/en-us/windows/complete-guide-to-narrator-e4397a0d-ef4f-b386-d8ae-c172f109bdb1",target:"_blank",rel:"noopener noreferrer"}},[e._v("Narrator - (Windows only)"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://webaim.org/articles/nvda/",target:"_blank",rel:"noopener noreferrer"}},[e._v("NVDA (Windows only)"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://webaim.org/articles/voiceover/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Voiceover (Mac only)"),r("OutboundLink")],1)])]),e._v(" "),r("h2",{attrs:{id:"resources"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#resources"}},[e._v("#")]),e._v(" Resources")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility",target:"_blank",rel:"noopener noreferrer"}},[e._v("Mozilla Developer Network - Accessibility"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.w3.org/WAI/standards-guidelines/wcag/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Web Content Accessibility Guidelines (WCAG)"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.w3.org/TR/wai-aria-practices/",target:"_blank",rel:"noopener noreferrer"}},[e._v("WAI-ARIA Authoring Practices"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Learn/Accessibility/WAI-ARIA_basics",target:"_blank",rel:"noopener noreferrer"}},[e._v("WAI-ARIA Basics"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://webaim.org/articles/",target:"_blank",rel:"noopener noreferrer"}},[e._v("WebAIM Articles"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://a11yproject.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("A11Y Project"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.ibm.com/able/",target:"_blank",rel:"noopener noreferrer"}},[e._v("IBM Accessibility"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://inclusive-components.design/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Inclusive Components"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=n.exports}}]);