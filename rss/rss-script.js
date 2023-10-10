let prom = await fetch( 'https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml' );
let text = await prom.text();


console.log( text.substring(0, 100) );

let parser = new DOMParser();
let xmlDoc = parser.parseFromString(text, "texl/xml");

console.log(xmlDoc);

const items = xmlDoc.querySElectorAll("item");
console.log('items:',items);

items.forEach( (el)=>{
  let title = el.querySelector('title').textContent;
  let description = el.querySelector('description').textContent;
  let guid = el.querySelector('guid').textContent;

  console.log('title:', title);
  console.log('description:', description);
  console.log('guid', guid);

  let div = document.createElement('div');
  document.body.appendChild( div);
  div.innerHTML = 
    <h2>${title}</h2>
    <p>${description}</p>
    ;
  if ( guid ) div.innerHTML `<a href'${guid}'LINK</a>`;

 });
