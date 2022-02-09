function renderPosts(boston, container) {
  const people = boston.data;
  let html = '';
  html +=
     '<h1>' + "People with min of 2,00,000 salary" + '</h1>' ;
    for (let i = 0; i < boston.data.length; i++) {
      if(people[i][11]>=200000){
    html +=
      '<li class="post">' + '<h2 style="color: red;">' + people[i][8] + '</h2>' + '<h3 style="color: red;">' + people[i][11] + '</h3>';
      }
  }
    
    people.sort((a,b)=>{return b[11]-a[11]});
    people.splice(5,people.length);
    const len = people.length;
    
    var topSalaryPeople=[];
    
  //  html +=
 //    '<h1>' + "Top 5 earners of Boston City" + '</h1>' ;
 //   for (let i = 0; i < len; i++) { 
 //     html +=
 //       '<li class="post">' + '<h2 style="color: green;">' + people[i][8] + '</h2>' + '<h3 style="color: green;">' + people[i][11] + '</h3>';  
 //   }
    container.innerHTML = '<ul id = "data">' + html + '</ul>';
  }
  renderPosts(boston, document.getElementById('container')); 