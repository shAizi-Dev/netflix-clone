    // for header to open sign up
    // const a = document.getElementById("get-started");

    // function open() {
    //     window.open("http://127.0.0.1:5500/netflix%20clone/setup-accunt.html", "_self");
    // }



    const tabItems = document.querySelectorAll('.tab-item');
    const tabContentItems = document.querySelectorAll('.tab-content-item');

    // Select tab content item
    function selectItem(e) {
        // Remove all show and border classes
        removeBorder();
        removeShow();
        // Add border to current tab item
        this.classList.add('tab-border');
        // Grab content item from DOM
        const tabContentItem = document.querySelector(`#${this.id}-content`);
        // Add show class
        tabContentItem.classList.add('show');
    }

    // Remove bottom borders from all tab items
    function removeBorder() {
        tabItems.forEach(item => {
            item.classList.remove('tab-border');
        });
    }

    // Remove show class from all content items
    function removeShow() {
        tabContentItems.forEach(item => {
            item.classList.remove('show');
        });
    }

    // Listen for tab item click
    tabItems.forEach(item => {
        item.addEventListener('click', selectItem);
    });



    // faq

    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach((question) => {
        question.addEventListener("click", (e) => {
            const answer = e.target.nextElementSibling;
            const icon = e.target.querySelector(".faq-icon");
            answer.classList.toggle("active");
            icon.classList.toggle("minus");
            e.target.classList.toggle("active");
            if (answer.classList.contains("active")) {
                answer.style.height = answer.scrollHeight + "px";
            } else {
                answer.style.height = 0;
            }
        });
    });





    ///coming soon page

    // Set the date we're counting down to
    var countDownDate = new Date("Jan 5, 2023 15:37:25").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

        // Get todays date and time
        var now = new Date().getTime();

        // Find the distance between now an the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in an element with id="demo"
        document.getElementById("demo").innerHTML = days + "d " + hours + "h " +
            minutes + "m " + seconds + "s ";

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED";
        }
    }, 1000);