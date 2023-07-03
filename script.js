  
  const sound = document.getElementById('thunder')
  const btn = document.querySelector('button');
  const div = document.querySelector('.name');
  const wojak = document.getElementById('wojak')
  const wojowniczka = document.getElementById('wojowniczka')
  const valkiries = ['Zdzisława', 'Dobrawa', 'Dobrosława', 'Budzisława','Boguchwała', 'Biezdziadka', 'Chwalimira', 'Chwalisława', 'Czcibora', 'Cieszysława', 'Dobrosułka']
  const names = ['Bożydar', 'Zdzisław', 'Mieszko', 'Mściwój', 'Zasław', 'Moczywój', 'Bezprym', 'Będzimir', 'Bezluj', 'Chwalisław', 'Ciecimar', 'Godzimir'];
  const prefixes = ['bogowie wybrali imię', 'O niebiosa! ', 'Perun rzekł: ']

  const loader = document.querySelector('.loader')
// math.floor sprowadza do liczb całkowitych, math random wprowadza losowość z takim samym prawdopodobieństwem dla każdej liczby. 
  
  const nameGenerator = ()=> {
    sound.play()
    div.style.opacity="0"
    loader.style.display = 'block';
    setTimeout(()=>{
      if(wojowniczka.checked){
       const indexValkirie = Math.floor(Math.random()*valkiries.length);
       const indexPrefix = Math.floor(Math.random()*prefixes.length);
       div.textContent = `${prefixes[indexPrefix]} ${valkiries[indexValkirie]}`
   }
  
    else{
   const indexName = Math.floor(Math.random()*names.length);
   const indexPrefix = Math.floor(Math.random()*prefixes.length);
   div.textContent = `${prefixes[indexPrefix]} ${names[indexName]} `
  }
  div.style.opacity='1';
  loader.style.display = 'none';
    }, 2000)
    

}


  btn.addEventListener('click', nameGenerator)

