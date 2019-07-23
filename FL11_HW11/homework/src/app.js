let rootNode = document.getElementById('root');
let cursorIsPlased = document.getElementById('new-action');
let btn = document.getElementById('add-button');
let count = 3;
let maxcount = 13;
let positionWarning = 2;
cursorIsPlased.addEventListener('focus', function() {
  document.querySelector('#add-button i').style.color = '#41B5FE';
  btn.removeAttribute('disabled');
});
cursorIsPlased.addEventListener('blur', function() {
	document.querySelector('#add-button i').style.color = '#C8D0D8';
});
btn.onclick = function () {
	if (count < maxcount) {
		let currentAction = cursorIsPlased.value;
		cursorIsPlased.value = '';
		document.querySelector('#add-button > i').style.color = '#C8D0D8';
		btn.setAttribute('disabled', 'disabled');
		newActionInput(count, currentAction);
		count++;
	} else {
		setActionOverflow();
		btn.setAttribute('disabled', 'disabled');
	}
}
let setActionOverflow = function () {
	document.getElementById('root').children[positionWarning].innerHTML = 'WARNING!! Overflow allowable cat\'s actions';
}
let newActionInput = function (count, textAction) {
	let nthActionNode = document.createElement('div');
	let leftSectionAction = document.createElement('div');
	let rightSectionAction = document.createElement('div');
	let checkBox = document.createElement('input');
	let labelCheckBox = document.createElement('label');
	let iconEmptySquare = document.createElement('i');
	let iconCreate = document.createElement('i');
	let iconDelete = document.createElement('i');
	let itemList = document.createElement('p');
	let buttonCreate = document.createElement('button');
	let buttonDelete = document.createElement('button');
	nthActionNode.classList.add('nth-action');
	leftSectionAction.classList.add('left-section');
	document.getElementById('root').children[count].after(nthActionNode);
	nthActionNode.appendChild(leftSectionAction);
	leftSectionAction.appendChild(checkBox);
	checkBox.setAttribute('id', 'check-action');
	checkBox.setAttribute('type', 'checkbox');
	checkBox.setAttribute('name', 'check-action');
	checkBox.after(labelCheckBox);
	labelCheckBox.setAttribute('for', 'check-action');
	labelCheckBox.appendChild(iconEmptySquare);
	iconEmptySquare.innerHTML = 'check_box_outline_blank';
	iconEmptySquare.classList.add('material-icons');
	iconEmptySquare.classList.add('empty');
	labelCheckBox.after(itemList);
	itemList.innerHTML = textAction;
	itemList.after(buttonCreate);
	buttonCreate.setAttribute('id', 'edit-button');
	buttonCreate.setAttribute('type', 'button');
	buttonCreate.appendChild(iconCreate);
	iconCreate.classList.add('material-icons');
	iconCreate.innerHTML = 'create';
	nthActionNode.appendChild(rightSectionAction);
	rightSectionAction.classList.add('right-section');
	rightSectionAction.appendChild(buttonDelete);
	buttonDelete.setAttribute('id', 'delete-button');
	buttonDelete.setAttribute('type', 'button');
	buttonDelete.appendChild(iconDelete);
	iconDelete.classList.add('material-icons');
	iconDelete.innerHTML = 'delete';
}
