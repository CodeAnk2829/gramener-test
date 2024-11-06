export default function json2html(data) {
  let html = '<table data-user="ankitkumar143872@gmail.com">';

  html += "<thead><tr><th>Name</th><th>Age</th><th>Gender</th></tr></thead>";

  html += "<tbody>";
  data.forEach((row) => {
    html += `<tr><td>${row.Name || ""}</td><td>${row.Age || ""}</td><td>${
      row.Gender || ""
    }</td></tr>`;
  });
  html += "</tbody></table>";

  return html;
}
