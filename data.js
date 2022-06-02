function displayRadioValue() {
  var ele = document.getElementsByTagName("input");
  let golbal = [];
  let convert = golbal.concat();
  var name = document.getElementById("Name").value;
  var email = document.getElementById("Email").value;
  var phone = document.getElementById("Phone").value;
  if (name == "" || email == "" || phone == "") {
    alert("please fillout the form");
  }

  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked) {
      golbal.push(ele[i].value);
    }
  }
  let csvFileData = [
    [
      (Name = name),
      (Email = email),
      (Phone = phone),
      (Ele = golbal.toString()),
    ],
  ];
  let csv = `Name,Email,Phone,1) Do you hear but have problems understanding the words?,2) Do you feel left out of group conversations because you can't quite make out what people are saying?,3) Do you strain to hear?,4) Do you find yourself more isolated from friends and family because of your hearing loss?,5) Do you find it hard to hear and to understand words in background noise situations such as restaurants?  \n`;

  csvFileData.forEach(function (row) {
    csv += row.join(",");
    csv += "\n";
  });
  var hiddenElement = document.createElement("a");
  hiddenElement.href = "data:text/csv;charset=utf-8," + encodeURI(csv);
  hiddenElement.target = "_blank";

  //provide the name for the CSV file to be downloaded
  hiddenElement.download = "earQuiz.csv";
  hiddenElement.click();
}
