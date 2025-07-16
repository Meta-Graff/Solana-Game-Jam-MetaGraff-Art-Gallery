// Interactive Wireframe Navigation and Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Navigation functionality
    const navButtons = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.wireframe-section');

    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetSection = this.getAttribute('data-section');
            
            // Remove active class from all buttons and sections
            navButtons.forEach(btn => btn.classList.remove('active'));
            sections.forEach(section => section.classList.remove('active'));
            
            // Add active class to clicked button and corresponding section
            this.classList.add('active');
            document.getElementById(targetSection).classList.add('active');
        });
    });

    // Interactive VR Menu Simulation
    const vrButtons = document.querySelectorAll('.vr-btn');
    vrButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            this.style.background = '#2ecc71';
            setTimeout(() => {
                this.style.transform = '';
                this.style.background = '';
            }, 200);
        });
    });

    // Launch Button Interactions
    const launchButtons = document.querySelectorAll('.launch-btn');
    launchButtons.forEach(button => {
        button.addEventListener('click', function() {
            const mode = this.classList.contains('vr') ? 'VR' : 'Desktop';
            showNotification(`Launching ${mode} Mode...`);
        });
    });

    // NFT Action Buttons
    const nftButtons = document.querySelectorAll('.buy-btn, .offer-btn, .details-btn');
    nftButtons.forEach(button => {
        button.addEventListener('click', function() {
            const action = this.textContent;
            showNotification(`${action} action triggered`);
        });
    });

    // Multiplayer and Lobby Button functionality
    const multiplayerBtn = document.querySelector('.multiplayer-btn');
    if (multiplayerBtn) {
        multiplayerBtn.addEventListener('click', function() {
            showNotification('Connecting to multiplayer lobby...');
        });
    }

    // Join Lobby Button
    const joinLobbyBtn = document.querySelector('.join-lobby');
    if (joinLobbyBtn) {
        joinLobbyBtn.addEventListener('click', function() {
            showNotification('Joining multiplayer lobby...');
            // Visual feedback
            this.textContent = 'Joining...';
            this.style.background = '#f39c12';
            setTimeout(() => {
                this.textContent = 'Join Lobby';
                this.style.background = '#27ae60';
                showNotification('Successfully joined lobby!');
            }, 1500);
        });
    }

    // Leave Lobby Button
    const leaveLobbyBtn = document.querySelector('.leave-lobby');
    if (leaveLobbyBtn) {
        leaveLobbyBtn.addEventListener('click', function() {
            showNotification('Leaving current lobby...');
            // Visual feedback
            this.textContent = 'Leaving...';
            this.style.background = '#95a5a6';
            setTimeout(() => {
                this.textContent = 'Leave Lobby';
                this.style.background = '#e74c3c';
                showNotification('Left lobby - now in solo mode');
            }, 1000);
        });
    }

    // Auth Button Simulation
    const authButtons = document.querySelectorAll('.primary-btn, .secondary-btn');
    authButtons.forEach(button => {
        button.addEventListener('click', function() {
            const action = this.textContent;
            showNotification(`${action} clicked`);
        });
    });

    // Toggle functionality for settings
    const toggleButtons = document.querySelectorAll('.toggle-btn');
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const isOn = this.textContent === 'On/Off';
            if (isOn) {
                this.textContent = this.textContent === 'On/Off' ? 'Off' : 'On';
                this.style.background = this.textContent === 'Off' ? '#e74c3c' : '#2ecc71';
            }
        });
    });

    // Slider interaction simulation
    const sliders = document.querySelectorAll('.slider');
    sliders.forEach(slider => {
        slider.addEventListener('click', function() {
            // Simulate slider movement
            const options = ['○●○○○', '○○●○○', '○○○●○', '○○○○●'];
            const currentIndex = options.indexOf(this.textContent);
            const nextIndex = (currentIndex + 1) % options.length;
            this.textContent = options[nextIndex];
        });
    });

    // Back button functionality
    const backButtons = document.querySelectorAll('.back-btn');
    backButtons.forEach(button => {
        button.addEventListener('click', function() {
            showNotification('Returning to main menu...');
        });
    });

    // Profile and market navigation
    const navBtnSmall = document.querySelectorAll('.nav-btn-small');
    navBtnSmall.forEach(button => {
        button.addEventListener('click', function() {
            const section = this.textContent;
            showNotification(`Opening ${section}...`);
        });
    });

    // Notification system
    function showNotification(message) {
        // Remove existing notification
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        // Create notification element
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #2ecc71;
            color: white;
            padding: 15px 25px;
            border-radius: 8px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
            z-index: 1000;
            font-weight: 600;
            animation: slideIn 0.3s ease-out;
        `;

        // Add animation keyframes
        if (!document.querySelector('#notification-styles')) {
            const style = document.createElement('style');
            style.id = 'notification-styles';
            style.textContent = `
                @keyframes slideIn {
                    from {
                        transform: translateX(100%);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }
                
                @keyframes slideOut {
                    from {
                        transform: translateX(0);
                        opacity: 1;
                    }
                    to {
                        transform: translateX(100%);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }

        document.body.appendChild(notification);

        // Auto remove after 3 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease-in';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }

    // Artwork hover effects
    const artworkItems = document.querySelectorAll('.artwork-item');
    artworkItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.background = '#3498db';
            this.style.color = 'white';
            this.style.transition = 'all 0.3s ease';
        });

        item.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.background = '';
            this.style.color = '';
        });
    });

    // Flow diagram interaction
    const flowBoxes = document.querySelectorAll('.flow-box');
    flowBoxes.forEach(box => {
        box.addEventListener('click', function() {
            const stage = this.textContent;
            showNotification(`Viewing ${stage} details`);
        });
    });

    // Canvas simulation
    const canvasPlaceholder = document.querySelector('.canvas-placeholder');
    if (canvasPlaceholder) {
        canvasPlaceholder.addEventListener('click', function() {
            this.textContent = '[✨ Painting in progress... ✨]';
            this.style.color = '#e74c3c';
            setTimeout(() => {
                this.textContent = '[Live Collaborative Painting]';
                this.style.color = '';
            }, 2000);
        });
    }

    // Initialize tooltips for better UX
    function addTooltips() {
        const tooltipElements = [
            { selector: '.primary-btn', text: 'Connect your Web3 wallet to start' },
            { selector: '.launch-btn.vr', text: 'Requires VR headset (Oculus, Vive, etc.)' },
            { selector: '.launch-btn.desktop', text: 'Standard desktop/mobile experience' },
            { selector: '.multiplayer-btn', text: 'Join other users in shared virtual space' },
            { selector: '.join-lobby', text: 'Connect to a multiplayer lobby with other users' },
            { selector: '.leave-lobby', text: 'Return to solo mode and disconnect from lobby' },
            { selector: '.buy-btn', text: 'Purchase NFT with SOL cryptocurrency' },
            { selector: '.offer-btn', text: 'Make a custom offer below market price' }
        ];

        tooltipElements.forEach(({ selector, text }) => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(element => {
                element.title = text;
            });
        });
    }

    addTooltips();

    // Keyboard navigation
    document.addEventListener('keydown', function(event) {
        if (event.key >= '1' && event.key <= '3') {
            const index = parseInt(event.key) - 1;
            const sections = ['react', 'unity', 'flow'];
            if (sections[index]) {
                const button = document.querySelector(`[data-section="${sections[index]}"]`);
                if (button) button.click();
            }
        }
    });

    // Add keyboard shortcuts info
    const keyboardInfo = document.createElement('div');
    keyboardInfo.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 20px;
        background: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 10px 15px;
        border-radius: 8px;
        font-size: 0.9rem;
        z-index: 999;
    `;
    keyboardInfo.innerHTML = `
        <strong>Keyboard Shortcuts:</strong><br>
        1 - React Components<br>
        2 - Unity Game UI<br>
        3 - User Flow
    `;
    document.body.appendChild(keyboardInfo);

    console.log('🎨 MetaGraff Art Gallery Wireframes Loaded!');
    console.log('💡 Use keyboard shortcuts 1-3 to navigate sections');
});
