import { c as create_ssr_component, f as spread, h as escape_attribute_value, i as escape_object, b as validate_store, d as subscribe, e as escape, v as validate_component, j as add_attribute } from "../../chunks/index.js";
import { getFirestore, collection, onSnapshot } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { w as writable } from "../../chunks/index2.js";
import "firebase/auth";
import FaBrandsGithubAlt from "svelte-icons-pack/fa/FaBrandsGithubAlt.js";
import RiLogoLinkedinFill from "svelte-icons-pack/ri/RiLogoLinkedinFill.js";
import AiOutlineMail from "svelte-icons-pack/ai/AiOutlineMail.js";
const firebaseConfig = {
  apiKey: "AIzaSyAt6cMgO8KW3nkog59X6NW3Gs34a9SHRLI",
  authDomain: "personal-site-30a38.firebaseapp.com",
  projectId: "personal-site-30a38",
  storageBucket: "personal-site-30a38.appspot.com",
  messagingSenderId: "332315156685",
  appId: "1:332315156685:web:37eb4c26b42cb494aec984"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
function collectionStore(firestore, ref, startWith = []) {
  let unsubscribe;
  if (!firestore || !globalThis.window) {
    console.warn("Firestore is not initialized or not in browser");
    const { subscribe: subscribe3 } = writable(startWith);
    return {
      subscribe: subscribe3,
      ref: null
    };
  }
  const colRef = typeof ref === "string" ? collection(firestore, ref) : ref;
  const { subscribe: subscribe2 } = writable(startWith, (set) => {
    unsubscribe = onSnapshot(colRef, (snapshot) => {
      const data = snapshot.docs.map((s) => {
        return { id: s.id, ref: s.ref, ...s.data() };
      });
      set(data);
    });
    return () => unsubscribe();
  });
  return {
    subscribe: subscribe2,
    ref: colRef
  };
}
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { src } = $$props;
  let { size = "1em" } = $$props;
  let { color = void 0 } = $$props;
  let { title = void 0 } = $$props;
  let { className = "" } = $$props;
  let innerHtml;
  let attr;
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  {
    {
      attr = {};
      if (color) {
        if (src.a.stroke !== "none") {
          attr.stroke = color;
        }
        if (src.a.fill !== "none") {
          attr.fill = color;
        }
      }
    }
  }
  {
    {
      innerHtml = (title ? `<title>${title}</title>` : "") + src.c;
    }
  }
  return `<svg${spread(
    [
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      { "stroke-width": "0" },
      { class: escape_attribute_value(className) },
      escape_object(src.a),
      escape_object(attr),
      { xmlns: "http://www.w3.org/2000/svg" }
    ],
    {}
  )}><!-- HTML_TAG_START -->${innerHtml}<!-- HTML_TAG_END --></svg>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300&family=Lora:wght@700&display=swap");:root{overflow-x:hidden;background-color:#111117}.s-y_bCXRrkrYfP{font-family:"Inter", sans-serif;font-weight:300;margin:0;padding:0;border:0;color:#111117}div.s-y_bCXRrkrYfP{width:100%;height:100%;position:absolute;left:0}h1.s-y_bCXRrkrYfP{font-family:"Lora", serif;font-weight:700}img.s-y_bCXRrkrYfP{width:30%}#navbar.s-y_bCXRrkrYfP{width:100%;height:10%;background:#111117;position:absolute;top:0}#nav-text.s-y_bCXRrkrYfP{color:#d3e7f0;position:absolute;top:25%;left:20%}#nav-span.s-y_bCXRrkrYfP{color:#7be8b3}#nav-github.s-y_bCXRrkrYfP{position:absolute;right:5%;top:20%;font-size:3rem;z-index:5}#nav-linkedin.s-y_bCXRrkrYfP{position:absolute;right:1.5%;top:19%;font-size:3rem;z-index:5}#hook_bg.s-y_bCXRrkrYfP{position:absolute;width:100%;height:100%;right:0;top:0;z-index:-1}#hook_name.s-y_bCXRrkrYfP{font-size:5rem;position:absolute;top:20%;left:20%}#hook_desc.s-y_bCXRrkrYfP{position:absolute;top:31%;margin-top:1%;margin-left:21%}#about.s-y_bCXRrkrYfP{background-color:#111117;background-image:url("../lib/cartographer.png");top:100%}#about-text.s-y_bCXRrkrYfP{color:#7be8b3;font-size:4rem;position:absolute;margin-left:21%;top:10%}#about-desc.s-y_bCXRrkrYfP{color:#d3e7f0;position:absolute;margin-left:21%;top:20%;width:50%}#gallery.s-y_bCXRrkrYfP{top:200%;background:#d3e7f0}.gal-image.s-y_bCXRrkrYfP{position:float;float:left;margin-left:2.5rem;margin-top:1%}#gal-2.s-y_bCXRrkrYfP{margin-top:3%}#statement.s-y_bCXRrkrYfP{top:300%;background-color:#111117;background-image:url("../lib/asphalt.png");font-size:3rem;text-align:center}#statement-text.s-y_bCXRrkrYfP{margin-left:10%;width:75%;color:#7be8b3;margin-top:10%}#statement-subtext.s-y_bCXRrkrYfP{color:#d3e7f0;font-size:2rem}#contact.s-y_bCXRrkrYfP{top:400%;background:#111117}#contact-items.s-y_bCXRrkrYfP{position:absolute;top:10%;align-items:center;text-align:center}#contact-email.s-y_bCXRrkrYfP{color:#d3e7f0;position:absolute;top:20%;left:47%;font-size:5rem}#contact-arrow.s-y_bCXRrkrYfP{color:#d3e7f0;font-size:1rem;position:absolute;bottom:10%;margin-left:21%;text-decoration:none}#contact-arrow.s-y_bCXRrkrYfP:hover{color:#7be8b3}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $data, $$unsubscribe_data;
  const data = collectionStore(db, "pages");
  validate_store(data, "data");
  $$unsubscribe_data = subscribe(data, (value) => $data = value);
  const rand = Math.random() * 4;
  $$result.css.add(css);
  $$unsubscribe_data();
  return `
<div id="${"navbar"}" class="${"s-y_bCXRrkrYfP"}">${$data[0]?.text != void 0 ? `<h2 id="${"nav-text"}" class="${"s-y_bCXRrkrYfP"}">What I&#39;m Working On: <span id="${"nav-span"}" class="${"s-y_bCXRrkrYfP"}">${escape($data[0]?.text)}</span></h2>` : ``}
  <a id="${"nav-github"}" href="${"https://github.com/CalebHite"}" class="${"s-y_bCXRrkrYfP"}">${validate_component(Icon, "Icon").$$render($$result, { color: "#d3e7f0", src: FaBrandsGithubAlt }, {}, {})}</a>
  <a id="${"nav-linkedin"}" href="${"https://www.linkedin.com/in/caleb-hite-463214176/"}" class="${"s-y_bCXRrkrYfP"}">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      color: "#d3e7f0",
      src: RiLogoLinkedinFill
    },
    {},
    {}
  )}</a></div>


<img id="${"hook_bg"}"${add_attribute("src", $data[0]?.imageID, 0)} alt="${"Background"}" class="${"s-y_bCXRrkrYfP"}">
<div id="${"hook"}" class="${"s-y_bCXRrkrYfP"}"><h1 id="${"hook_name"}" class="${"s-y_bCXRrkrYfP"}">Caleb Hite</h1>
  ${$data[0]?.text != void 0 ? `${rand < 1 ? `<h3 id="${"hook_desc"}" class="${"s-y_bCXRrkrYfP"}">${escape($data[3]?.text1)}</h3>` : `${rand < 2 ? `<h3 id="${"hook_desc"}" class="${"s-y_bCXRrkrYfP"}">${escape($data[3]?.text2)}</h3>` : `${rand < 3 ? `<h3 id="${"hook_desc"}" class="${"s-y_bCXRrkrYfP"}">${escape($data[3]?.text3)}</h3>` : `<h3 id="${"hook_desc"}" class="${"s-y_bCXRrkrYfP"}">${escape($data[3]?.text4)}</h3>`}`}`}` : ``}</div>


<div id="${"about"}" class="${"s-y_bCXRrkrYfP"}"><h1 id="${"about-text"}" class="${"s-y_bCXRrkrYfP"}">About Me</h1>
  <p id="${"about-desc"}" class="${"s-y_bCXRrkrYfP"}">${escape($data[1]?.text)}</p></div>


<div id="${"gallery"}" class="${"s-y_bCXRrkrYfP"}"><img class="${"gal-image s-y_bCXRrkrYfP"}" id="${"gal-1"}" src="${"src\\lib\\me.jpg"}" alt="${"Me"}">
  <img class="${"gal-image s-y_bCXRrkrYfP"}" id="${"gal-2"}" src="${"src\\lib\\munich.jpg"}" alt="${"Munich"}">
  <img class="${"gal-image s-y_bCXRrkrYfP"}" id="${"gal-3"}" src="${"src\\lib\\prom.jpg"}" alt="${"Me and My Parents"}"></div>


<div id="${"statement"}" class="${"s-y_bCXRrkrYfP"}">${$data[2] != void 0 ? `<h1 id="${"statement-text"}" class="${"s-y_bCXRrkrYfP"}">${escape($data[2]?.text)}</h1>
    <p id="${"statement-subtext"}" class="${"s-y_bCXRrkrYfP"}">${escape($data[2]?.subtext)}</p>` : ``}</div>


<div id="${"contact"}" class="${"s-y_bCXRrkrYfP"}"><div id="${"contact-items"}" class="${"s-y_bCXRrkrYfP"}"><a id="${"contact-email"}" href="${"mailto: chite2457@gmail.com"}" class="${"s-y_bCXRrkrYfP"}">${validate_component(Icon, "Icon").$$render($$result, { color: "#d3e7f0", src: AiOutlineMail }, {}, {})}</a></div>
  <a href="${"/"}" id="${"contact-arrow"}" class="${"s-y_bCXRrkrYfP"}">Back to Top</a>
</div>`;
});
export {
  Page as default
};
