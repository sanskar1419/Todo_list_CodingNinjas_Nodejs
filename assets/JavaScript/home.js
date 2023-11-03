document.addEventListener("click", handleClickOnScreen);
function handleClickOnScreen(event) {
  const target = event.target;
  console.log(target);
  if (target.className === "delcheck") {
    checkedOrNot();
  } else if (target.className === "btn-delete") {
    deleteCheckedTask();
  }
}

function checkedOrNot() {
  let checkBoxs = document.querySelectorAll(".delcheck");
  let taskHeadings = document.querySelectorAll(".task-heading");
  let duedates = document.querySelectorAll(".due_date");
  //   console.log(checkBoxs);
  //   console.log(taskHeadings);
  for (let i = 0; i < taskHeadings.length; i++) {
    if (checkBoxs[i].checked == true) {
      let taskHeading = document.getElementById(
        taskHeadings[i].getAttribute("id")
      );
      //   console.log(taskHeading);
      taskHeading.style.textDecoration = "line-through";
      let duedate = document.getElementById(duedates[i].getAttribute("id"));
      //   console.log(duedate);
      duedate.style.textDecoration = "line-through";
    } else if (checkBoxs[i].checked == false) {
      let taskHeading = document.getElementById(
        taskHeadings[i].getAttribute("id")
      );
      //   console.log(taskHeading);
      taskHeading.style.textDecoration = "none";
      let duedate = document.getElementById(duedates[i].getAttribute("id"));
      //   console.log(duedate);
      duedate.style.textDecoration = "none";
    }
  }
}

function deleteCheckedTask() {
  var checkedItems = document.querySelectorAll(".delcheck:checked");
  //   console.log(checkedItems);
  var idArr = [];
  for (let i = 0; i < checkedItems.length; i++) {
    var checkedItemId = checkedItems[i].getAttribute("checkedId");
    // console.log(checkedItemId);
    idArr.push(checkedItemId);
  }
  console.log(idArr);
  if (idArr.length === 0) {
    alert(
      "No item selected to delete, Select the item which you want to delete"
    );
    return;
  }

  $.ajax({
    type: "post",
    url: "/delete_todo_items/?id=" + idArr,
    success: function () {
      alert("Item is deleted ");
      window.location = "/";
    },
    error: function (err) {
      console.log("Error : ", err);
    },
  });
}
