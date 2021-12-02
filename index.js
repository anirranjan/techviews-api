const express = require("express");
const app = express();
const port = 3000;

//add the CSS
app.use(express.static('public'));

//start server
app.listen(port, function () {
  console.log("Server running!");
});

//display API Documentation Page when a request is made to the root url
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

//send iphone 12 JSON data when a request is made to the iphone-12 endpoint
app.get("/iphone-12", function (req, res) {
  res.send({
    deviceName: "iPhone 12",
    imageUrl: "https://tinyurl.com/iphone-12-img",
    imageAttribution: "Photo by Vựa Táo on Unsplash",
    techradarReview:
      "It’s easy to dismiss the iPhone 12 as just 'more of the same', especially when you consider the new and compact iPhone 12 mini is also an option, and you can always go for the iPhone 13 series now. However, 5G networks are continuing to roll out across the globe, and the MagSafe addition is a useful addition to the iPhone arsenal – these things, combined with an improved design and screen, mean the iPhone 12 will become more useful the longer you own it. It's no longer the latest iPhone thanks to the iPhone 13, and it doesn’t come with a charger in the box; yes, there are environmental benefits to this, but you may need to factor buying a new charger into the cost of your new iPhone on top of the higher price.",
      mashableReview: "Apple’s iPhone 12 and iPhone 12 Pro are the company’s latest and greatest, but they don’t come with all that much in the way of worthy upgrades. If you’re looking for a revolutionary iPhone experience, you’re better off waiting until next year.",
      cnetReview: "5G support, a new striking design, improved cameras and four models all add up to make the iPhone 12 an absolute unit.",
      videoReviews: "https://www.youtube.com/results?search_query=iphone+12",
      bestbuyUrl: "https://www.bestbuy.com/site/apple-iphone-12-5g-64gb-black-verizon/6009897.p?skuId=6009897",
      amazonUrl: "https://www.amazon.com/Apple-iPhone-Locked-Carrier-Subscription/dp/B08L5NZHK6",
  });
});

//send switch oled JSON data when a request is made to the switch-oled endpoint
app.get("/switch-oled", function(req, res) {
  res.send({
    deviceName: "Nintendo Switch OLED",
    imageUrl: "https://tinyurl.com/switch-oled-img",
    imageAttribution: "Photo by Jeremy Bezanger on Unsplash",
    techradarReview: "The Nintendo Switch OLED is a welcome upgrade, but one that pleases more than it wows. It's an inherently flawed product due to the console's original hybrid design: dock the Switch OLED, and the benefits of the sumptuous new 7-inch display, redesigned kickstand, and enhanced speakers vanish. If you’re a first-time Switch buyer this is undoubtedly the model to buy, but the improvements to the Switch OLED will only really benefit handheld and tabletop mode users – and if you’re thinking of upgrading, don’t expect a Nintendo Switch Pro.",
    mashableReview: "Nintendo's new OLED-enhanced Switch is a welcome, if minimal, upgrade that's not something you should rush to buy if you already have a working Switch.",
    cnetReview: "A bigger, better display and an excellent kickstand make this a great handheld game system, but if you keep your Switch docked all the time, you'll never notice.",
    videoReviews: "https://www.youtube.com/results?search_query=switch+oled",
    bestbuyUrl: "https://www.bestbuy.com/site/nintendo-switch-oled-model-w-white-joy-con-white/6470923.p?skuId=6470923",
    amazonUrl: "https://www.amazon.com/Nintendo-Switch-OLED-Model-White-Joy/dp/B098RKWHHZ/ref=sr_1_2?keywords=nintendo+switch+oled&qid=1638460106&sr=8-2",
  })
})
