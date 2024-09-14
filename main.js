document.getElementById('toggleSkills').addEventListener('click', function() {
  var skillsSection = document.getElementById('skillsSection');
  if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
      skillsSection.style.display = 'block';
      this.textContent = 'Hide Skills';
  } else {
      skillsSection.style.display = 'none';
      this.textContent = 'Show Skills';
  }
});