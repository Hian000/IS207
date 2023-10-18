function CrawlDataOnePage() {
    //Query item area
    var resultsArea = document.querySelector(".shopee-search-item-result__items");
    var listResults = resultsArea.querySelectorAll(".shopee-search-item-result__item");
    var listResultsLength = listResults.length;
    for (let i = 1; i < listResultsLength; i++) {
        //Query to 1 item
        console.log(i+1)
        var aTag = listResults[0].querySelector("a");
        var divL1Tag = aTag.querySelector("div");
        var divL2Tag = divL1Tag.querySelector("div");
        var divFirstL3Tag = divL2Tag.querySelector("div");
        var divSecL3Tag = divFirstL3Tag.nextElementSibling;
        var divNameL4Tag = divSecL3Tag.querySelector("div");
        var divPriceL4Tag = divNameL4Tag.nextElementSibling;
        var divLocationL4Tag = divPriceL4Tag.nextElementSibling.nextElementSibling;

        //Get item name
        var productName = divNameL4Tag
            .querySelector("div")
            .querySelector("div").innerHTML;
        console.log("ProductName: " + productName);

        // If else get price
        var divPriceL5List = divPriceL4Tag.querySelectorAll("div");
        var divPriceL4TagTYPE = divPriceL5List.length;
        if (divPriceL4TagTYPE == 1) {
            var divPriceL5TagTYPE = divPriceL5List[0].querySelectorAll("span").length;
            if (divPriceL5TagTYPE == 3) {
                var onlyPrice = divPriceL4Tag.querySelector("div").textContent;
                console.log("Price: " + onlyPrice);
            } else {
                var maxPrice = divPriceL4Tag.querySelector("div").lastChild.innerHTML;
                var minPrice = divPriceL4Tag
                    .querySelector("div")
                    .querySelectorAll("span")[2].textContent;
                console.log("Price: " + minPrice + " - " + maxPrice);
            }
        } else {
            var oldPrice = divPriceL4Tag.querySelector("div").innerHTML;
            var newPrice = divPriceL4Tag.querySelector("div").nextSibling.textContent;
            console.log("Old price: " + oldPrice);
            console.log("New price: " + newPrice);
        }

        //Get shop location
        var productLocation = divLocationL4Tag.textContent;
        console.log("ProductLocation: " + productLocation);
    }
}

async function CrawlDataAllPage(n) {
    const sleep = ms => new Promise(res => setTimeout(res, ms));
    const scrollingElement = (document.scrollingElement || document.body);
    for (let i = 1; i <= n; i++) {
        scrollingElement.scrollTop = scrollingElement.scrollHeight;
        CrawlDataOnePage()
        console.log("---------Next page please [" + i + "]--------")
        document.querySelector('.shopee-mini-page-controller__next-btn').click()
        await sleep(3000)
    }
}