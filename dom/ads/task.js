let rotCase = document.getElementsByClassName("rotator__case");

console.log(rotCase);
let counter = 0;
let phraseCount = rotCase.length - 1;

const colors = ["red", "green", "#000", "red", "blue", "gray"];
const sreeds = [1000, 2000, 1000, 1000, 500, 200];

for (d of rotCase) {
	d.dataset.speed = "1000";
	d.dataset.color = "red";
}

console.log(rotCase)

function changePhrase(){
	for (c of rotCase) {
		c.classList.remove("rotator__case_active");
	}
	rotCase[counter].classList.add("rotator__case_active");
	counter++;
	if(counter == phraseCount) {
		counter = 0;
	}


}

setInterval(changePhrase, 1000);