
## 🚀 How to Use

1. **Open the App**: Open `index.html` in your web browser
2. **Add a Task**: 
   - Type your task in the input field
   - Click the **"Add Task"** button
   - The task appears instantly in the list
3. **Delete a Task**: Click the **"Delete"** button next to any task to remove it
4. **View Console**: Open Developer Tools (F12 or Right-click > Inspect > Console) to see debug logs

## 💡 Key Concepts Demonstrated

### JavaScript DOM Methods Used:
* `document.querySelector()` - Select elements by CSS selectors
* `document.querySelectorAll()` - Select multiple elements
* `document.createElement()` - Create new DOM elements
* `.addEventListener()` - Attach event listeners (click, input, etc.)
* `.appendChild()` - Add elements to the DOM
* `.remove()` - Delete elements from the DOM
* `.innerHTML` / `.innerText` - Set element content

### JavaScript Concepts:
* **Event Delegation**: Single event listener on parent (`<ul>`) handles clicks on all delete buttons
* **Arrow Functions**: Modern ES6 syntax for concise callbacks
* **Event Object**: Using `event.target` to identify which button was clicked
* **DOM Traversal**: Using `parentElement` to navigate the DOM tree

## 📝 Example Workflow

```javascript
// Event listener on "Add Task" button
btn.addEventListener('click', () => {
    // Create new list item
    let item = document.createElement('li');
    item.innerHTML = inp.value;
    
    // Create delete button
    let delBtn = document.createElement('button');
    delBtn.innerText = 'Delete';
    
    // Append to DOM
    item.appendChild(delBtn);
    ul.appendChild(item);
});

// Event delegation: single listener on <ul> for all delete buttons
ul.addEventListener('click', (event) => {
    if(event.target.nodeName==="BUTTON"){
        event.target.parentElement.remove();
    }
});
