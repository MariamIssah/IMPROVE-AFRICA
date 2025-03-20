// Handle user registration
async function registerUser(formData) {
    try {
        const response = await fetch('/api/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const data = await response.json();
        
        if (data.success) {
            // Store token in localStorage
            localStorage.setItem('token', data.user.token);
            localStorage.setItem('user', JSON.stringify(data.user));
            return { success: true, user: data.user };
        } else {
            throw new Error(data.message);
        }
    } catch (error) {
        return { success: false, message: error.message };
    }
}

// Handle user login
async function loginUser(formData) {
    console.log("loginUser called with:", formData);
    try {
        // Log complete request details
        console.log("Login request URL:", '/api/users/login');
        console.log("Login request method:", 'POST');
        console.log("Login request body:", JSON.stringify(formData));
        
        // Add timestamp to avoid any caching issues
        const timestamp = new Date().getTime();
        const url = `/api/users/login?_=${timestamp}`;
        
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache, no-store'
            },
            body: JSON.stringify(formData)
        });
        
        console.log("Login response status:", response.status);
        console.log("Login response status text:", response.statusText);
        
        // Check if response is ok
        if (!response.ok) {
            console.error("Login fetch error - HTTP status:", response.status);
            return { 
                success: false, 
                message: `Server error: ${response.status} ${response.statusText}` 
            };
        }
        
        // First get the raw text to check if it's empty
        const text = await response.text();
        console.log("Response text length:", text.length);
        
        if (!text || text.trim() === '') {
            console.error("Empty response from server");
            return { 
                success: false, 
                message: "Server returned an empty response. Please try again." 
            };
        }
        
        // Parse JSON carefully
        let data;
        try {
            data = JSON.parse(text);
            console.log("Login response parsed data:", data);
        } catch (jsonError) {
            console.error("Error parsing JSON response:", jsonError);
            return { success: false, message: "Error parsing server response: " + jsonError.message };
        }
        
        if (data && data.success === true) {
            console.log("Login successful, storing token...");
            // Store token in localStorage
            if (data.user && data.user.token) {
                localStorage.setItem('token', data.user.token);
                localStorage.setItem('user', JSON.stringify(data.user));
                return { success: true, user: data.user };
            } else {
                console.error("Login response missing token");
                return { success: false, message: "Invalid response from server (missing token)" };
            }
        } else {
            console.error("Login failed:", data ? data.message : "Unknown error");
            return { 
                success: false, 
                message: data && data.message ? data.message : "Login failed" 
            };
        }
    } catch (error) {
        console.error("Login exception:", error);
        return { success: false, message: error.message || "Network error" };
    }
}

// Get user profile
async function getUserProfile() {
    try {
        const token = localStorage.getItem('token');
        if (!token) {
            throw new Error('No token found');
        }

        const response = await fetch('/api/users/profile', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        const data = await response.json();
        
        if (data.success) {
            return { success: true, user: data.user };
        } else {
            throw new Error(data.message);
        }
    } catch (error) {
        return { success: false, message: error.message };
    }
}

// Update user profile
async function updateUserProfile(formData) {
    try {
        const token = localStorage.getItem('token');
        if (!token) {
            throw new Error('No token found');
        }

        const response = await fetch('/api/users/profile', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(formData)
        });

        const data = await response.json();
        
        if (data.success) {
            // Update stored user data
            localStorage.setItem('user', JSON.stringify(data.user));
            return { success: true, user: data.user };
        } else {
            throw new Error(data.message);
        }
    } catch (error) {
        return { success: false, message: error.message };
    }
}

// Logout user
function logoutUser() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/';
}

// Check if user is logged in
function isLoggedIn() {
    return localStorage.getItem('token') !== null;
}

// Get current user
function getCurrentUser() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
} 