
fetch('data/news.json')
.then(r=>r.json())
.then(news=>{
 const c=document.getElementById('news-container');
 news.forEach(item=>{
  const a=document.createElement('div');
  a.className='news-card';
  a.innerHTML=`<div class="news-date">${item.date}</div><h3>${item.title}</h3><p>${item.content}</p>`;
  c.appendChild(a);
 });
});
