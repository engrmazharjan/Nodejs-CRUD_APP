$("#add_user").submit(function (event) {
  alert("Data Inserted Successfully!");
});

$("#update_user").submit(function (e) {
  e.preventDefault();

  let unindexed_array = $("#update_user").serializeArray();
  let data = {};

  $.map(unindexed_array, function (n, i) {
    data[n["name"]] = n["value"];
  });

  // console.log(data);

  let request = {
    url: `http://localhost:9000/api/user/${data.id}`,
    method: "PUT",
    data: data,
  };
  // ajax request
  $.ajax(request).done(function (response) {
    alert("Data Updated Successfully!");
  });
});

// Delete Request
if (window.location.pathname == "/") {
  $ondelete = $(".table tbody td a.delete");
  $ondelete.click(function () {
    let id = $(this).attr("data-id");

    let request = {
      url: `http://localhost:9000/api/user/${id}`,
      method: "DELETE",
    };
    if (confirm("Do you really want to delete this record? ")) {
      // ajax request
      $.ajax(request).done(function (response) {
        alert("Data Deleted Successfully!");
        location.reload();
      });
    }
  });
}
