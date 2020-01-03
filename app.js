function AddScript(src, callback) {
  var s = document.createElement('script');
  s.setAttribute('src', src);
  s.onload = callback;
  document.body.appendChild(s);
}

function Req(url, data, callback, async = true) {
  $.ajax({
    type: 'GET',
    url: url,
    data: data,
    dataType: "JSON",
    async: async,
    success: callback
  });
}

function GetNameSurname() {
  var ret;
  Req(
    "data.json",
    {},
    function (r) {
      ret = r.name + " " + r.surname;
    },
    false);
  return ret;
}

window.addEventListener("load", function () {
  AddScript("jquery.min.js", function () {
    console.log(document.title = GetNameSurname());
  });
});
