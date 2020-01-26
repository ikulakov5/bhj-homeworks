let tips = document.querySelectorAll('.has-tooltip');

for (let tip of tips) {
	tip.addEventListener('click', (e) => {
		let tipTitle = e.target.getAttribute('title');
		let activeTooltip = document.querySelector(".tooltip_active");

		if(activeTooltip) {
			if (activeTooltip.textContent != tipTitle) {
                activeTooltip.remove();
				let left = tip.getBoundingClientRect().left;
				let top = tip.getBoundingClientRect().top + 18;
				tip.insertAdjacentHTML("afterEnd", `<div class="tooltip tooltip_active" style="left: ${left}px; top: ${top}px">${tipTitle}</div>`);
		        } else {
                activeTooltip.remove();
        		}
 		} else {
		let left = tip.getBoundingClientRect().left;
		let top = tip.getBoundingClientRect().top + 18;

		tip.insertAdjacentHTML("afterEnd", `<div class="tooltip tooltip_active" style="left: ${left}px; top: ${top}px">${tipTitle}</div>`);
		}

		e.preventDefault();
	});
}