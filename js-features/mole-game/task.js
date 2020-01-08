let kills = document.getElementById("dead");
let lose = document.getElementById("lost");
let got = 0;
let miss = 0;






for (let i = 1; i < 10; i++) {
	let hole = document.getElementById(`hole${i}`);

	hole.onclick = function() {
		if(this.className.includes( 'hole_has-mole' )) {
			got += 1;
			kills.textContent = got;
		}
		else {
			miss += 1;
			lose.textContent = miss;
		}

		if(miss == 5) {
			alert("Поражение :(");
		}
		if(got == 10) {
			alert("Победа!");
		}
		if(miss == 5 || got == 10) {
			kills.textContent = 0;
			lose.textContent = 0;
			got = 0;
			miss = 0;
		}
	}
}
