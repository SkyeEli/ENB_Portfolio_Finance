use portfolio;
db.dropDatabase();

db.shares.insertMany([
    {
        "companyName": "Electronic Arts",
        "symbol": "EA",
        "currency": "USD",
        "high": "123.02",
        "low": "120.71",
        "latestPrice": "126.18",
        "Purchased Date": "2022-03-07",
        "Units Held": "5"

    },
    {
        "companyName": "Alphabet Inc",
        "symbol": "GOOG",
        "currency": "USD",
        "high": "2196.13",
        "low": "2142.10",
        "latestPrice": "2597.30",
        "Purchased Date": "2022-03-07",
        "Units Held": "5"

    },
    {
        "companyName": "Amazon",
        "symbol": "AMZN",
        "currency": "USD",
        "high": "109.75",
        "low": "105.85",
        "latestPrice": "141.40",
        "Purchased Date": "2022-03-07",
        "Units Held": "5"

    },
    {
        "companyName": "Ebay",
        "symbol": "EBAY",
        "currency": "USD",
        "high": "43.04",
        "low": "41.76",
        "latestPrice": "55.80",
        "Purchased Date": "2022-03-07",
        "Units Held": "5"

    },
])

db.users.insertMany([
    {
        "name": "Bobbin",
        "cash": 10000
    },
])