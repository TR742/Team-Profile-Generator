function generateMarkdown(data) {
  return `
  <div>
  <div>
    <h4>${data.managerName}</h4>
    <p>Manager</p>
    <p>ID: ${data.managerId}</p>
    <p>${data.managerEmail}</p>
    <p>Office number: ${data.managerNumber}</p>
  </div>
</div>`;
}

module.exports = generateMarkdown;