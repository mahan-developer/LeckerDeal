import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductImages from "./ProductImages/ProductImages";
import ProductDetails from "./ProductDetails/ProductDetails"; 
import ProductPrice from "./ProductPrice/ProductPrice"; 
import ProductActions from "./ProductActions/ProductActions";
import ProductTabs from "./ProductTabs/ProductTabs";

import "./ProductComponent.css";
import "./ProductComponentResponsive.css";
import "../../assets/styles/global.css";

import doner1 from "../../assets/images/products/restaurant_100001/doner1.jpg";
import doner2 from "../../assets/images/products/restaurant_100001/doner2.jpg";
import doner3 from "../../assets/images/products/restaurant_100001/doner3.jpg";

// داده‌های `mock` (فقط برای تست)
const mockProducts = [
  {
    "id": 101,
    "restaurantId": 100001,
    "restaurantName": "MashBagher",
    "categoryId": "1",
    "category": "Fast Food",
    "name": { "EN": "Special Doner", "DE": "Spezial Döner" },
    "description": {
      "EN": [
        "200g Lamb Meat",
        "1 Turkish Pita Bread",
        "50g Tomato, 50g Lettuce, 30g Onion, 30g Cucumber",
        "20ml Garlic Sauce, 10ml Hot Sauce"
      ],
      "DE": [
        "200g Lammfleisch",
        "1 Türkisches Pide-Brot",
        "50g Tomaten, 50g Salat, 30g Zwiebeln, 30g Gurken",
        "20ml Knoblauchsoße, 10ml Scharfe Soße"
      ]
    },
    "price": 12,
    "discountPrice": 6,
    "discount": 50,
    "rating": 3.4,
    "votes": 109,
    "images": [doner1, doner2, doner3],
    "reviews": [
      {
        "id": 1001,
        "user": "John Doe",
        "rating": 5,
        "comment": "Delicious and fresh!",
        "pros": ["Great taste", "Well cooked meat", "Fresh ingredients"],
        "cons": ["A bit expensive"],
        "isVerified": "false",
        "likes": 7,
        "dislikes": 3,
        "date": "2025-03-01"
      },
      {
        "id": 1002,
        "user": "Anna Müller",
        "rating": 4,
        "comment": "Sehr lecker, aber etwas teuer!",
        "pros": ["Sehr lecker", "Knuspriges Brot"],
        "cons": ["Teuer"],
        "isVerified": "true",
        "likes": 20,
        "dislikes": 5,
        "date": "2025-02-27"
      },
      {
        "id": 1003,
        "user": "Ali Rezaei",
        "rating": 5,
        "comment": "Das beste Döner, das ich je hatte!",
        "pros": ["Saftiges Fleisch", "Große Portion", "Perfekte Gewürze"],
        "cons": ["Lange Wartezeit"],
        "isVerified": "true",
        "likes": 9,
        "dislikes": 4,
        "date": "2025-02-26"
      },
      {
        "id": 1004,
        "user": "Emily Smith",
        "rating": 3,
        "comment": "Average taste, nothing special.",
        "pros": ["Decent portion size", "Fresh vegetables"],
        "cons": ["Dry meat", "Too much sauce"],
        "isVerified": "false",
        "likes": 2,
        "dislikes": 22,
        "date": "2025-02-26"
      },
      {
        "id": 1005,
        "user": "Mustafa Kaya",
        "rating": 4,
        "comment": "Authentic Turkish flavor!",
        "pros": ["Traditional seasoning", "Good bread"],
        "cons": ["A bit greasy"],
        "isVerified": "true",
        "likes": 14,
        "dislikes": 2,
        "date": "2025-02-25"
      },
      {
        "id": 1006,
        "user": "Lena Bauer",
        "rating": 5,
        "comment": "Super lecker und frisch!",
        "pros": ["Hausgemachte Sauce", "Perfekt gegrilltes Fleisch", "Knackiges Gemüse"],
        "cons": ["Kleine Sitzgelegenheit"],
        "isVerified": "false",
        "likes": 10,
        "dislikes": 2,
        "date": "2025-02-24"
      },
      {
        "id": 1007,
        "user": "Omar Haddad",
        "rating": 2,
        "comment": "Not worth the hype.",
        "pros": ["Nice packaging"],
        "cons": ["Cold meat", "Too expensive", "Bland taste"],
        "isVerified": "false",
        "likes": 12,
        "dislikes": 3,
        "date": "2025-02-23"
      }
    ],
    "questions": [
      {
        "id": 1,
        "question": "Is the meat halal?",
        "user": "Fatima H.",
        "date": "2025-03-01",
        "answers": [
          {
            "id": 101, 
            "user": "Owner",
            "answer": "Yes, all our meat is certified halal.",
            "date": "2025-03-01",
            "likes": 10,
            "dislikes": 2
          },
          {
            "id": 102, 
            "user": "Ali",
            "answer": "I have ordered and they confirmed it's halal.",
            "date": "2025-03-02",
            "likes": 7,
            "dislikes": 1
          },
          {
            "id": 103, 
            "user": "Moderator",
            "answer": "We ensure all ingredients meet halal standards.",
            "date": "2025-03-03",
            "likes": 5,
            "dislikes": 0
          }
        ]
      },
      {
        "id": 2,
        "question": "Do you offer a vegetarian option?",
        "user": "Lukas M.",
        "date": "2025-02-28",
        "answers": [
          {
            "id": 104, 
            "user": "Support",
            "answer": "Yes, we have a falafel doner option available.",
            "date": "2025-02-28",
            "likes": 12,
            "dislikes": 3
          },
          {
            "id": 105, 
            "user": "Customer",
            "answer": "I have tried the vegetarian option, and it's really good!",
            "date": "2025-03-01",
            "likes": 9,
            "dislikes": 1
          }
        ]
      },
      {
        "id": 3,
        "question": "How spicy is the hot sauce?",
        "user": "Jessica T.",
        "date": "2025-02-27",
        "answers": [
          {
            "id": 106, 
            "user": "Chef",
            "answer": "It's medium spicy, but you can request extra hot if you prefer.",
            "date": "2025-02-27",
            "likes": 8,
            "dislikes": 2
          },
          {
            "id": 107, 
            "user": "Customer",
            "answer": "I found it a bit mild. I prefer extra hot sauce.",
            "date": "2025-02-28",
            "likes": 6,
            "dislikes": 4
          },
          {
            "id": 108, 
            "user": "SpiceLover",
            "answer": "It's not that spicy. If you like real heat, ask for extra spicy.",
            "date": "2025-02-29",
            "likes": 11,
            "dislikes": 1
          },
          {
            "id": 109, 
            "user": "MildEater",
            "answer": "I think it's quite spicy, but not overwhelming.",
            "date": "2025-03-01",
            "likes": 5,
            "dislikes": 3
          }
        ]
      }
    ]
  }
];


const mockUser = {
  "id": 5001,
  "name": "Ali Reza",
  "email": "ali.reza@example.com",
  "phone": "+4915123456789",
  "profileImage": "profile_ali.jpg",
  "role": "customer", // یا "restaurant_owner"
  "registeredAt": "2024-06-15",
  "addresses": [
    {
      "id": 101,
      "title": "Home",
      "street": "Musterstraße 12",
      "city": "Düsseldorf",
      "zipCode": "40210",
      "country": "Germany"
    },
    {
      "id": 102,
      "title": "Work",
      "street": "Berliner Allee 24",
      "city": "Düsseldorf",
      "zipCode": "40212",
      "country": "Germany"
    }
  ],
  "favorites": {
    "restaurants": [
      {
        "id": 1001,
        "name": "MashBagher",
        "image": "mashbagher_logo.jpg"
      },
      {
        "id": 1002,
        "name": "Burger Meister",
        "image": "burger_meister.jpg"
      }
    ],
    "products": [
      {
        "id": 2001,
        "name": { "EN": "Special Doner", "DE": "Spezial Döner" },
        "restaurantId": 1001,
        "restaurantName": "MashBagher",
        "price": 12,
        "discountPrice": 6,
        "discount": 50,
        "image": "doner1.jpg"
      },
      {
        "id": 2002,
        "name": { "EN": "Veggie Burger", "DE": "Gemüse Burger" },
        "restaurantId": 1002,
        "restaurantName": "Burger Meister",
        "price": 10,
        "discountPrice": 8,
        "discount": 20,
        "image": "veggie_burger.jpg"
      }
    ]
  },
  "likedMessages": [
    {
      "questionId": 1,
      "answerId": 101,
      "liked": true,  // اگر true باشد یعنی لایک کرده، اگر false باشد یعنی دیسلایک کرده
      "disliked": false
    },
    {
      "questionId": 3,
      "answerId": 105,
      "liked": false,
      "disliked": true
    }
  ],
  "likedReviews": [
      {
        "ReviewsId": 1003,
        "liked": true,  // اگر true باشد یعنی لایک کرده، اگر false باشد یعنی دیسلایک کرده
        "disliked": false
      },
      {
        "ReviewsId": 1004,
        "liked": false,
        "disliked": true
      }
    ],

  "orders": [
    {
      "id": 301,
      "restaurantId": 1001,
      "restaurantName": "MashBagher",
      "totalPrice": 18,
      "status": "Delivered",
      "date": "2025-02-10",
      "items": [
        {
          "id": 2001,
          "name": { "EN": "Special Doner", "DE": "Spezial Döner" },
          "quantity": 2,
          "price": 6
        }
      ]
    },
    {
      "id": 302,
      "restaurantId": 1002,
      "restaurantName": "Burger Meister",
      "totalPrice": 8,
      "status": "Pending",
      "date": "2025-02-15",
      "items": [
        {
          "id": 2002,
          "name": { "EN": "Veggie Burger", "DE": "Gemüse Burger" },
          "quantity": 1,
          "price": 8
        }
      ]
    }
  ],
  "paymentMethods": [
    {
      "id": 1,
      "type": "PayPal",
      "account": "ali.reza@paypal.com"
    },
    {
      "id": 2,
      "type": "Credit Card",
      "last4Digits": "6789"
    }
  ]
};


const ProductComponent = () => {
  const { restaurantId, productId } = useParams();
  const [language, setLanguage] = useState("EN");
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const foundProduct = mockProducts.find(
        (p) => Number(p.id) === Number(productId) && Number(p.restaurantId) === Number(restaurantId)
      );
      setProduct(foundProduct || null);
      setLoading(false);
    }, 1000); 
  }, [restaurantId, productId]);
  

  if (loading) {
    return <h2>Loading product...</h2>;
  }

  if (!product) {
    return <h2>Product not found!</h2>;
  }

  const rating = product.rating;
  const votes = product.votes;
  const restaurantName = product.restaurantName ;
  const title = product.name?.[language];

  const starSize = 20;
  const totalStars = 5;
  const maxWidth = totalStars * starSize;

  return (
    <div className="product-component">
      <div className="container">
        <div className="product-title">
          <span>
            <a href="/">LeckerDeal</a> /&nbsp;
            <a href={`/restaurant/${product.restaurantId}`}>{product.restaurantName}</a> /&nbsp;
            <strong>{product.name[language]}</strong>
          </span>
        </div>
        

        <div className="product-Information">  

          <div className="product-left">
            <div className="c-product_headline">

              <div className="c-product_title">
                <strong>{title}</strong>
              </div>


              <div className="c-product_rating">
                
                <h3 className="product-rate_h3">{rating}</h3>
                <span> from {votes} votes</span>
                <div className="c-stars">
                  {[...Array(5)].map((_, index) => (
                    <span key={index} className="c-stars_item"></span>
                  ))}

                  <div className="c-stars_selected" style={{ width: `${(rating / totalStars) * maxWidth}px` }}>
                    {[...Array(5)].map((_, index) => (
                      <span key={index} className="c-stars_item"></span>
                    ))}
                  </div>
                </div>
                
              </div>             

            </div>

            <div className="c-product_infoline">
              <div className="product-Information-description">
                <ProductDetails product={product} language={language} />

              </div> 

              <div className="product-Information-price">
                <ProductPrice product={product} language={language} />
              </div> 
            </div>
            
          </div>
          
          <div className="product-right">
            <div className="product-Information-image">
              <ProductImages images={product.images} />
            </div> 

            <div className="product-Information-actions">
              <ProductActions />
            </div> 
          </div>

          

          

        </div>

       
       
        <ProductTabs product={product} reviews={product.reviews} questions={product.questions} language={language}  mockUser={mockUser} />


      </div>
      
    </div>
  );
};

export default ProductComponent;
