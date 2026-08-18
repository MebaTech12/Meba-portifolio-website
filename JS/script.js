/**
 * Portfolio Interactive Logic Controller Orchestration Script
 */
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Sidebar Display State Toggle Trigger (Mobile Viewports)
    const sidebar = document.querySelector("[data-sidebar]");
    const sidebarBtn = document.querySelector("[data-sidebar-btn]");

    if (sidebar && sidebarBtn) {
        sidebarBtn.addEventListener("click", () => {
            sidebar.classList.toggle("active");
        });
    }

    // 2. Tab Navigation Routing System Architecture
    const tabButtons = document.querySelectorAll("[data-tab-btn]");
    const tabContents = document.querySelectorAll("[data-tab-content]");

    tabButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const selectedTab = btn.getAttribute("data-tab-btn");

            // Toggle active tracking configurations across navigation elements
            tabButtons.forEach(button => button.classList.remove("active"));
            btn.classList.add("active");

            // Toggle active status visibility blocks over layout sections
            tabContents.forEach(content => {
                if (content.getAttribute("data-tab-content") === selectedTab) {
                    content.classList.add("active");
                } else {
                    content.classList.remove("active");
                }
            });

            // Scroll smoothly to top layout upon active tab updates on mobile views
            if (window.innerWidth < 1024) {
                window.scrollTo({ top: 0, behavior: "smooth" });
            }
        });
    });

    // 3. Dynamic Grid Project Category Filtering System
    const filterButtons = document.querySelectorAll("[data-filter-btn]");
    const projectCards = document.querySelectorAll(".project-item-card");

    filterButtons.forEach(filterBtn => {
        filterBtn.addEventListener("click", () => {
            const filterValue = filterBtn.getAttribute("data-filter-btn");

            // Toggle programmatic filter tracking highlight states
            filterButtons.forEach(btn => btn.classList.remove("active"));
            filterBtn.add("active");

            // Evaluate item tracking states matching data layout types
            projectCards.forEach(card => {
                const cardCategory = card.getAttribute("data-category");

                if (filterValue === "all" || cardCategory === filterValue) {
                    card.classList.remove("is-hidden");
                } else {
                    card.classList.add("is-hidden");
                }
            });
        });
    });

    // 4. Client Contact Form Interception Event Handler
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            
            const clientName = document.getElementById("name").value;
            const clientEmail = document.getElementById("email").value;
            const clientMessage = document.getElementById("message").value;

            // Log processing or ready to wire endpoint dispatchers
            console.log("Contact submission intercepted:", { clientName, clientEmail, clientMessage });
            
            alert(`Thank you, ${clientName}! Your message was successfully sent.`);
            contactForm.reset();
        });
    }

    // 5. Dynamic Footer Year Automation
    const yearSpan = document.getElementById("current-year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});