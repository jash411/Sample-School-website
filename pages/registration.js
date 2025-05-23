document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registrationForm');
    
    registrationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Form validation
        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        const courses = document.querySelectorAll('input[name="course"]:checked');
        const learningMode = document.querySelector('input[name="learningMode"]:checked');
        
        if (!fullName || !email) {
            alert('Please fill in all required fields');
            return;
        }
        
        if (courses.length === 0) {
            alert('Please select at least one course');
            return;
        }
        
        if (!learningMode) {
            alert('Please select a preferred learning mode');
            return;
        }
        
        // Collect form data
        const formData = new FormData(this);
        const data = {};
        
        formData.forEach((value, key) => {
            if (data[key]) {
                if (Array.isArray(data[key])) {
                    data[key].push(value);
                } else {
                    data[key] = [data[key], value];
                }
            } else {
                data[key] = value;
            }
        });
        
        // In a real application, you would send this data to your server
        console.log('Form data collected:', data);
        
        // Show success message
        alert('Registration submitted successfully!');
        
        // Reset form (optional)
        // registrationForm.reset();
    });
});