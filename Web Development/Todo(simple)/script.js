var inputBox = document.getElementById("input-box");
      var addBtn = document.getElementById("add-btn");
      var deleteBtn = document.getElementById("delete-btn");
      var ul = document.getElementById("list-container");
      var deleteElement =
        ' <button class="delBtn" onclick="deleteItem(event)">Delete</button>';
      var listFullMessage =
        "List is full please delete task to add another task";
      var listFull = document.getElementById("list-full");
      var listLength = 8;

      addBtn.addEventListener("click", function () {
        var value = inputBox.value.trim();
        if (value) {
          if (ul.children.length < listLength) {
            var listItem = document.createElement("li");
            listItem.innerHTML = inputBox.value + deleteElement;
            ul.append(listItem);
            inputBox.value = "";
          }
          if (ul.children.length >= listLength) {
            listFull.textContent = listFullMessage;
          }
        }
      });
      inputBox.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
          var value = inputBox.value.trim();
          if (value) {
            if (ul.children.length < listLength) {
              var listItem = document.createElement("li");
              listItem.innerHTML = inputBox.value + deleteElement;
              ul.append(listItem);
              inputBox.value = "";
            }
            if (ul.children.length >= listLength) {
              listFull.textContent = listFullMessage;
            }
            
          }
        }
      });

      function deleteItem(event) {
        event.target.parentElement.remove();
        event.target.remove();
        if(ul.children.length<listLength){
            listFull.textContent = '';
        }
      }