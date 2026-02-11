
        const foods = [{
                name: "Sambar Sadham",
                cat: "veg",
                price: 50,
                status: "available",
                time: "Afternoon",
                img: "https://i.pinimg.com/736x/7c/71/12/7c711207572eda3f8cced9a5af8775d6.jpg"
            },
            {
                name: "Curd Rice",
                cat: "veg",
                price: 40,
                status: "available",
                time: "Afternoon",
                img: "https://i.pinimg.com/1200x/af/07/0e/af070eb7e6313a1826e1331904027bf0.jpg"
            },
            {
                name: "Lemon Rice",
                cat: "veg",
                price: 45,
                status: "available",
                time: "Afternoon",
                img: "https://i.pinimg.com/736x/59/72/6f/59726fe85513e1b8f7462d6b9b27b50a.jpg"
            },
            {
                name: "Tomato Rice",
                cat: "veg",
                price: 45,
                status: "sold",
                time: "Afternoon",
                img: "https://i.pinimg.com/736x/34/ed/a7/34eda73a51d3bfc1b140b7a93c8e7823.jpg"
            },
            {
                name: "Idli",
                cat: "veg",
                price: 25,
                status: "available",
                time: "Morning",
                img: "https://i.pinimg.com/736x/ec/70/fc/ec70fc5b647092b9ef2116088709df60.jpg"
            },
            {
                name: "Dosa",
                cat: "veg",
                price: 35,
                status: "available",
                time: "Morning",
                img: "https://i.pinimg.com/1200x/78/1c/68/781c6867d971c5fa7a704c992dc755c3.jpg"
            },
            {
                name: "Veg Meals",
                cat: "veg",
                price: 70,
                status: "available",
                time: "Afternoon",
                img: "https://i.pinimg.com/1200x/ec/ac/38/ecac38f46bc461161c414679acb7700c.jpg"
            },

            /* NON-VEG - Full List */
            {
                name: "Chicken Biryani",
                cat: "nonveg",
                price: 120,
                status: "available",
                time: "Afternoon",
                img: "https://i.pinimg.com/736x/cd/db/85/cddb857b8679f88c33d393480e20e2fc.jpg"
            },
            {
                name: "Mutton Biryani",
                cat: "nonveg",
                price: 160,
                status: "available",
                time: "Afternoon",
                img: "https://i.pinimg.com/736x/55/4c/58/554c580df5f40d0ef8e0efd860acb5d8.jpg"
            },
            {
                name: "Egg Biryani",
                cat: "nonveg",
                price: 90,
                status: "sold",
                time: "Afternoon",
                img: "https://i.pinimg.com/736x/19/d7/45/19d7457c29f17f0a0632371b2fc7b403.jpg"
            },
            {
                name: "Chicken 65",
                cat: "nonveg",
                price: 80,
                status: "available",
                time: "Afternoon",
                img: "https://i.pinimg.com/1200x/6b/ee/97/6bee973baaeab4c4da15ef28eaf06241.jpg"
            },
            {
                name: "Fish Fry",
                cat: "nonveg",
                price: 100,
                status: "available",
                time: "Afternoon",
                img: "https://i.pinimg.com/736x/74/ac/ed/74aced382e11275764347b81554cebde.jpg"
            },

            /* SNACKS - Full List */
            {
                name: "Vadai",
                cat: "snacks",
                price: 10,
                status: "available",
                time: "Morning",
                img: "https://i.pinimg.com/736x/9b/51/f2/9b51f2f4d27151e50a8bde49a54281aa.jpg"
            },
            {
                name: "Bajji",
                cat: "snacks",
                price: 15,
                status: "available",
                time: "Afternoon",
                img: "https://i.pinimg.com/736x/14/11/a2/1411a28a6279ea38b42507b23e11b21a.jpg"
            },
            {
                name: "Samosa",
                cat: "snacks",
                price: 15,
                status: "sold",
                time: "Afternoon",
                img: "https://i.pinimg.com/736x/2f/a4/4a/2fa44ae0b66a1d7cbd1bd89a3a23c88c.jpg"
            },
            {
                name: "Cool Drinks",
                cat: "snacks",
                price: 25,
                status: "available",
                time: "All",
                img: "https://i.pinimg.com/736x/32/29/eb/3229eb066f1c9a51f9437510b334e911.jpg"
            },
            {
                name: "Ice Cream",
                cat: "snacks",
                price: 40,
                status: "available",
                time: "All",
                img: "https://i.pinimg.com/1200x/00/26/0f/00260fea0e22a3c5380f4edb270ff05a.jpg"
            }
        ];

        let list = [...foods];

        function render() {
            const f = document.getElementById("foods");
            f.innerHTML = "";
            list.forEach(x => {
                f.innerHTML += `
                <div class="card">
                    <img src="${x.img}">
                    <h4>${x.name}</h4>
                    <p class="price">₹${x.price}</p>
                    <span class="badge ${x.status}">${x.status}</span>
                </div>`;
            });
        }

        function showSub(type) {
            const s = document.getElementById("subNav");
            s.innerHTML = "";
            let opts = [];
            if (type === "cat") opts = ["veg", "nonveg", "snacks"];
            if (type === "price") opts = ["low", "high"];
            if (type === "status") opts = ["available", "sold"];

            opts.forEach(o => {
                const b = document.createElement("button");
                b.className = "sub-btn";
                b.innerText = o.toUpperCase();
                b.onclick = () => filter(type, o);
                s.appendChild(b);
            });
        }

        function filter(type, val) {
            list = [...foods];
            if (type === "cat") list = list.filter(f => f.cat === val);
            if (type === "status") list = list.filter(f => f.status === val);
            if (type === "price") list.sort((a, b) => val === "low" ? a.price - b.price : b.price - a.price);
            render();
        }

        function filterByTime(time) {
            if (time === 'All') {
                list = [...foods];
            } else {
                list = foods.filter(item => item.time === time || item.time === "All");
            }
            render();
        }

        function scrollToId(id) {
            const section = document.getElementById(id);
            if (section) {
                section.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }

        render();
    