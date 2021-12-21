self.addEventListener("install", function (event) {
    event.waitUntil(
        caches.open("static").then(function (cache) {
            return cache.addAll([
                "index.html",
                "/assets/js/script.js",
                "/assets/css/style.css",
                "/assets/img/hero1.jpg",
                "/assets/img/about.jpg",
                "/assets/img/contact.jpg",
                "/assets/img/expertise.jpg",
                "/assets/img/footer-bg.jpg",
                "/assets/img/team1.jpg",
                "/assets/img/team2.jpg",
                "/assets/img/team3.jpg",
                "/assets/img/team4.jpg",
                "/assets/img/service.jpg",
                "/assets/img/clients/directrelief.PNG",
                "/assets/img/clients/Incture.png",
                "/assets/img/clients/kaavian.png",
                "/assets/img/clients/yash.png",
                "fallback.html"
            ]);
        })
    );
});

self.addEventListener("fetch", function (event) {
    event.respondWith(
        caches.match(event.request).then(function (response) {
            return response || fetch(event.request);
        }).catch(function () {
            return caches.match("fallback.html");
        })
    );
});