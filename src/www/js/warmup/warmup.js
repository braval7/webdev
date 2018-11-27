/*
 * Use Case:
 *
 * 1. User clicks on the "Change" button.
 *
 * 2. If the text input is blank then nothing changes.
 *
 * 3. The contents of the <h1> element are replaced with the contents
 *    of the text input.
 *
 * 4. The text input is cleared.
 *
 * BONUS 1:
 *
 * Before step 3 above: Save the current text content of the <h1>
 * element by creating an <li> element.  Set the text content of the
 * <li> element to the text content of the <h1> element.  Find the
 * <ul> element with the ID of "history" and insert the new <li>
 * element as its first child.  Therefore, each time the <h1>
 * element is changed, its current value is prepended to the <ul>
 * element.
 *
 * BONUS 2:
 *
 * If one of the <li> elements inside the <ul> element from bonus 1
 * is clicked, update the text content of the <h1> element with the
 * text content of the clicked <li> element.
 */
function HeaderManager(header, history) {
  this.header = document.querySelector(header);
  this.history = document.querySelector(history);
}

HeaderManager.prototype.change = function(newText) {
  this.push();
  this.header.textContent = newText;
};

HeaderManager.prototype.push = function() {
  let li = document.createElement("li");
  li.textContent = this.header.textContent;
  this.history.appendChild(li);
};

let header = new HeaderManager("h1", "#history");
let form = document.querySelector("form");
let input = document.getElementById("new-text");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  if (input.value.match(/\S/)) {
    header.change(input.value);
    input.value = "";
  }
});
