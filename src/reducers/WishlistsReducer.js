const wishlists = [
    {
        "id": 4,
        "name": "Update Test",
        "userId": 1,
        "restaurants": [
            {
                "id": 1,
                "name": "Salvatore's Pizzeria",
                "imageUrl": "https://s3-media2.fl.yelpcdn.com/bphoto/x8uYOVZ8PvrlhSDThGINCA/o.jpg",
                "url": "https://www.yelp.com/biz/salvatores-pizzeria-virginia-beach?adjust_creative=JkYa_ReWRiIjasE8wJSXhw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=JkYa_ReWRiIjasE8wJSXhw",
                "rating": 4,
                "reviewCount": 368,
                "price": "$$",
                "yelpId": "salvatores-pizzeria-virginia-beach",
                "displayAddress": [
                    "4876 Princess Anne Rd",
                    "Virginia Beach, VA 23462"
                ]
            }
        ]
    },
    {
        "id": 5,
        "name": "Update Test",
        "userId": 1,
        "restaurants": [
            {
                "id": 1,
                "name": "Salvatore's Pizzeria",
                "imageUrl": "https://s3-media2.fl.yelpcdn.com/bphoto/x8uYOVZ8PvrlhSDThGINCA/o.jpg",
                "url": "https://www.yelp.com/biz/salvatores-pizzeria-virginia-beach?adjust_creative=JkYa_ReWRiIjasE8wJSXhw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=JkYa_ReWRiIjasE8wJSXhw",
                "rating": 4,
                "reviewCount": 368,
                "price": "$$",
                "yelpId": "salvatores-pizzeria-virginia-beach",
                "displayAddress": [
                    "4876 Princess Anne Rd",
                    "Virginia Beach, VA 23462"
                ]
            }
        ]
    },
];

// export default (state = [], action) => {
export default (state = wishlists, action) => {
  switch (action.type) {
    case 'load_wishlists':
      return action.payload;
    case 'clear_wishlists':
      return [];
    default:
      return state;
  }
};
