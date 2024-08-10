//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
//GEN1 -> 1 to 151
//GEN2 -> 151 to 251
//GEN3 -> 252 to 386

const mainBox = document.querySelector('#container');
const baseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const gen3 = document.querySelector('.Gen3');
const gen1 = document.querySelector('.Gen1');
const gen2 = document.querySelector('.Gen2');

for (let i = 1; i < 151 ; i++ )
    {
            const head1 = document.querySelector('.head__1');
            const pokemon = document.createElement('div');
            pokemon.classList.add('pokemon');
            const label = document.createElement('span');
            label.innerText = `#${i}`;
            const newImage = document.createElement('img');
            newImage.src = `${baseUrl}${i}.png`;
            
            pokemon.appendChild(newImage);
            pokemon.appendChild(label);
            gen1.appendChild(pokemon);
            head1.appendChild(gen1)
            mainBox.appendChild(head1);
    
    }

    for (let i = 151; i <= 251 ; i++ )
        {
                const head2 = document.querySelector('.head__2');
                const pokemon = document.createElement('div');
                pokemon.classList.add('pokemon');
                const label = document.createElement('span');
                label.innerText = `#${i}`;
                const newImage = document.createElement('img');
                newImage.src = `${baseUrl}${i}.png`;
                
                pokemon.appendChild(newImage);
                pokemon.appendChild(label);
                gen2.appendChild(pokemon);
                head2.appendChild(gen2)
                mainBox.appendChild(head2);
        
        }
        
    for (let i = 252; i <= 386 ; i++ )
        {
                const head3 = document.querySelector('.head__3');
                const pokemon = document.createElement('div');
                pokemon.classList.add('pokemon');
                const label = document.createElement('span');
                label.innerText = `#${i}`;
                const newImage = document.createElement('img');
                newImage.src = `${baseUrl}${i}.png`;
                
                pokemon.appendChild(newImage);
                pokemon.appendChild(label);
                gen3.appendChild(pokemon);
                head3.appendChild(gen3)
                mainBox.appendChild(head3);
        
        
        }
        
        
    let toggle = false;
    gen1.style.display = "none";
    gen2.style.display = "none";
    gen3.style.display = "none";

    function dropDown1(){
        if(toggle){
            gen1.style.display = "none";
            toggle = false;
        }
        else{
            gen1.style.display = "block";
            toggle = true;
        }
    
    }
    
    function dropDown2(){
        if(toggle){
            gen2.style.display = "none";
            toggle = false;
        }
        else{
            gen2.style.display = "block";
            toggle = true;
        }
    
    
    }
    
    function dropDown3(){
        if(toggle){
            gen3.style.display = "none";
            toggle = false;
        }
        else{
            gen3.style.display = "block";
            toggle = true;
        }
    }