function findPokemon() {
    debugger;
    const name = document.getElementById('name').value;
    console.log(name);
    const url = 'https://pokeapi.co/api/v2/pokemon/';

    const po = `${url}${name}`;
    console.log(po);
    fetch(po)
        .then(
            (data) => {
                
                const res = data.json().then(
                    (response) => {
                        debugger;
                        document.getElementById('namep').innerText = response.name;
                        document.getElementById('imagep').src = response.sprites.front_default;

                        let rows = '';
                        response.abilities.forEach((dataAbility) => {

                            console.log(data);

                            rows +=
                                    '<tr>'
                                    + '<td>' + dataAbility.ability.name + '</td>'
                                   + '</tr>';
                        });

                        document.getElementById('tability').innerHTML = rows;
                    }
                ).catch(
                    (error) => {
                        console.error(error);
                    }
                );
            }
        )
        .catch(
            (error) => {
                console.error(error);
            }
        )
}